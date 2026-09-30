import vm from "node:vm";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

function same(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runJavascript(code, functionName, tests) {
  const results = [];
  for (const test of tests) {
    const sandbox = { exports: {}, module: { exports: {} }, console };
    const context = vm.createContext(sandbox);
    const script = new vm.Script(`${code}\n;this.__fn = ${functionName};`);
    script.runInContext(context, { timeout: 1500 });
    const fn = context.__fn;
    if (typeof fn !== "function") {
      throw new Error(`Could not find function ${functionName}. Name it exactly.`);
    }
    let value;
    let err = null;
    try {
      value = fn(...test.args);
    } catch (e) {
      err = e.message;
    }
    const passed = !err && same(value, test.expected);
    results.push({
      passed,
      expected: test.expected,
      got: err ? `Error: ${err}` : value,
    });
  }
  return results;
}

function runPython(code, functionName, tests) {
  const payload = JSON.stringify({ tests, functionName });
  const wrapper = `
import json, sys
user_code = sys.stdin.read().split("\\n---PAYLOAD---\\n", 1)
code = user_code[0]
payload = json.loads(user_code[1])
ns = {}
exec(code, ns)
fn = ns.get(payload["functionName"])
if not callable(fn):
    raise SystemExit("missing function")
out = []
for t in payload["tests"]:
    try:
        got = fn(*t["args"])
        passed = got == t["expected"]
        out.append({"passed": passed, "expected": t["expected"], "got": got})
    except Exception as e:
        out.append({"passed": False, "expected": t["expected"], "got": f"Error: {e}"})
print(json.dumps(out))
`;
  const input = `${code}\n---PAYLOAD---\n${payload}`;
  const windowsPython = process.env.LOCALAPPDATA
    ? path.join(process.env.LOCALAPPDATA, "Programs", "Python", "Python312", "python.exe")
    : null;
  const commands = ["py", "python", "python3", windowsPython].filter(Boolean);
  const attempts = commands.map((command) => spawnSync(command, ["-c", wrapper], {
    input,
    encoding: "utf8",
    timeout: 4000,
    windowsHide: true,
  }));
  const executed = attempts.find((attempt) => attempt.error?.code !== "ENOENT");
  
  if (!executed) {
    throw new Error("Python runtime is not installed on the server. Install Python 3 and restart the backend.");
  }
  
  if (executed.status !== 0) {
    const errorDetails = (executed.stderr || executed.error?.message || "Your program could not run.").trim().replace(/\r?\n/g, " ").slice(0, 300);
    throw new Error(`Python compile/runtime error: ${errorDetails}`);
  }
  
  try {
    return JSON.parse(executed.stdout);
  } catch {
    throw new Error("Python ran, but its output could not be read. Check that your program prints no extra text.");
  }
}

function javaLiteral(value) {
  if (value === null) return "null";
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return Number.isInteger(value) ? `${value}` : `${value}d`;
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return `new ${javaArrayType(value)}{${value.map(javaLiteral).join(", ")}}`;
  throw new Error("Unsupported Java test value.");
}

function javaArrayType(value) {
  if (!Array.isArray(value)) return "Object[]";
  if (value.length === 0) return "int[]";

  const nonNull = value.filter((item) => item !== null);
  if (nonNull.length === 0) return "Integer[]";

  const first = nonNull[0];
  if (Array.isArray(first)) {
    const nested = javaArrayType(first);
    return `${nested}[]`;
  }

  let type;
  if (typeof first === "number") type = Number.isInteger(first) ? "int" : "double";
  else if (typeof first === "boolean") type = "boolean";
  else if (typeof first === "string") type = "String";
  else type = "Object";

  if (nonNull.some((item) => {
    if (typeof first !== typeof item) return true;
    if (typeof first === "number" && typeof item === "number") {
      return Number.isInteger(first) !== Number.isInteger(item);
    }
    return false;
  })) {
    type = "Object";
  }

  // Java primitive arrays cannot contain null. Tree/graph test fixtures use
  // null as a missing-node marker, so promote those arrays to boxed types.
  if (value.some((item) => item === null)) {
    if (type === "int") type = "Integer";
    else if (type === "double") type = "Double";
    else if (type === "boolean") type = "Boolean";
  }

  return `${type}[]`;
}

function javaReturnType(value) {
  if (Array.isArray(value)) return javaArrayType(value);
  if (value === null) return "Object";
  if (typeof value === "boolean") return "boolean";
  if (typeof value === "number") return Number.isInteger(value) ? "int" : "double";
  if (typeof value === "string") return "String";
  return "Object";
}

function extractJavaImports(code) {
  const imports = [];
  const body = code.replace(/^\s*import\s+[\w.*]+\s*;\s*/gm, (statement) => {
    imports.push(statement.trim());
    return "";
  });
  return { imports, body: body.trim() };
}

function runJava(code, functionName, tests) {
  if (!tests?.length) return [];

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "pathlight-java-"));
  const { imports, body } = extractJavaImports(code);

  // Accept both formats:
  //   1) method-only starter code: `public static int solve(...) { ... }`
  //   2) a complete `class Solution { ... }` submitted by a user.
  // This prevents the runner from creating a nested Solution class and then
  // failing to find the user's solve method.
  let solutionSource = body;
  if (!/\bclass\s+Solution\b/.test(body)) {
    solutionSource = `class Solution {\n${body}\n}`;
  } else {
    solutionSource = body.replace(/\bpublic\s+class\s+Solution\b/, "class Solution");
  }

  const calls = tests
    .map(
      (test) =>
        `runTest(method, new Object[]{${test.args.map(javaLiteral).join(", ")}}, ${javaLiteral(test.expected)}, out);`
    )
    .join("\n    ");

  const runner = `${imports.join("\n")}
import java.lang.reflect.*;
import java.util.*;
import java.util.stream.*;
import java.lang.reflect.Array;

${solutionSource}

public class Runner {
  static boolean same(Object a, Object b) {
    if (a == null || b == null) return a == b;
    if (a.getClass().isArray() && b.getClass().isArray()) {
      int n = Array.getLength(a);
      if (n != Array.getLength(b)) return false;
      for (int i = 0; i < n; i++) {
        if (!same(Array.get(a, i), Array.get(b, i))) return false;
      }
      return true;
    }
    if (a instanceof Number && b instanceof Number) {
      return Double.compare(((Number) a).doubleValue(), ((Number) b).doubleValue()) == 0;
    }
    return a.equals(b);
  }

  static Object adapt(Object value, Class<?> type) {
    if (!type.isArray() || value == null) return value;
    int n = Array.getLength(value);
    Class<?> component = type.getComponentType();
    Object result = Array.newInstance(component, n);
    for (int i = 0; i < n; i++) {
      Object item = Array.get(value, i);
      Array.set(result, i, adapt(item, component));
    }
    return result;
  }

  static String repr(Object value) {
    if (value == null) return "null";
    if (!value.getClass().isArray()) return String.valueOf(value);
    int n = Array.getLength(value);
    StringBuilder out = new StringBuilder("[");
    for (int i = 0; i < n; i++) {
      if (i > 0) out.append(", ");
      out.append(repr(Array.get(value, i)));
    }
    return out.append("]").toString();
  }

  static void runTest(Method method, Object[] args, Object expected, List<String> out) {
    try {
      Class<?>[] types = method.getParameterTypes();
      if (types.length != args.length) {
        throw new IllegalArgumentException("Expected " + types.length + " parameters but received " + args.length + ".");
      }
      for (int i = 0; i < args.length; i++) args[i] = adapt(args[i], types[i]);

      Object target = Modifier.isStatic(method.getModifiers())
        ? null
        : method.getDeclaringClass().getDeclaredConstructor().newInstance();

      Object got = method.invoke(target, args);
      out.add("{\\"passed\\":" + same(got, expected)
        + ",\\"expected\\":\\"" + repr(expected).replace("\\"", "'")
        + "\\",\\"got\\":\\"" + repr(got).replace("\\"", "'") + "\\"}");
    } catch (Exception e) {
      Throwable cause = e instanceof InvocationTargetException ? e.getCause() : e;
      String message = String.valueOf(cause == null ? e.getMessage() : cause.getMessage())
        .replace("\\"", "'").replace("\\r", " ").replace("\\n", " ");
      out.add("{\\"passed\\":false,\\"expected\\":\\"" + repr(expected).replace("\\"", "'")
        + "\\",\\"got\\":\\"Error: " + message + "\\"}");
    }
  }

  public static void main(String[] args) throws Exception {
    Class<?> solutionClass = Class.forName("Solution");
    Method method = Arrays.stream(solutionClass.getDeclaredMethods())
      .filter(m -> m.getName().equals("${functionName}") && m.getParameterCount() == ${tests[0]?.args.length || 0})
      .findFirst()
      .orElse(null);

    if (method == null) {
      Method[] candidates = Arrays.stream(solutionClass.getDeclaredMethods())
        .filter(m -> m.getParameterCount() == ${tests[0]?.args.length || 0})
        .toArray(Method[]::new);
      if (candidates.length == 1) {
        method = candidates[0];
      } else {
        throw new IllegalArgumentException(
          "Name your solution method ${functionName} and use the starter signature shown above."
        );
      }
    }

    method.setAccessible(true);
    List<String> out = new ArrayList<>();
    ${calls}
    System.out.println("[" + String.join(",", out) + "]");
  }
}
`;

  fs.writeFileSync(path.join(tempDir, "Runner.java"), runner);
  const compiled = spawnSync("javac", ["Runner.java"], {
    cwd: tempDir,
    encoding: "utf8",
    timeout: 8000,
  });

  if (compiled.error?.code === "ENOENT") {
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw new Error("Java compiler is not installed on the server.");
  }
  if (compiled.error || compiled.status !== 0) {
    const message = (compiled.stderr || compiled.error?.message || "Java compiler is not available.")
      .split(/\r?\n/)
      .filter(Boolean)
      .slice(0, 4)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw new Error(`Java compile error: ${message || "Check your method signature and syntax."}`);
  }

  const executed = spawnSync("java", ["Runner"], {
    cwd: tempDir,
    encoding: "utf8",
    timeout: 5000,
  });
  fs.rmSync(tempDir, { recursive: true, force: true });

  if (executed.error?.code === "ENOENT") {
    throw new Error("Java runtime is not installed on the server.");
  }
  if (executed.error || executed.status !== 0) {
    throw new Error(
      `Java runtime error: ${(executed.stderr || "Your program could not run.").trim().replace(/\r?\n/g, " ").slice(0, 300)}`
    );
  }

  try {
    return JSON.parse(executed.stdout);
  } catch {
    throw new Error("Java ran, but its output could not be read.");
  }
}

function cppLiteral(value) {
  if (value === null) return "std::nullopt";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return `vector<${cppType(value)}>{${value.map(cppLiteral).join(", ")}}`;
  throw new Error("Unsupported C++ test value.");
}

function cppType(value) {
  if (!Array.isArray(value) || value.length === 0) return "int";
  const nonNull = value.filter((item) => item !== null);
  if (nonNull.length === 0) return "optional<int>";

  const first = nonNull[0];
  let type;
  if (Array.isArray(first)) {
    type = cppType(first);
  } else if (typeof first === "number") {
    type = Number.isInteger(first) ? "int" : "double";
  } else if (typeof first === "boolean") {
    type = "bool";
  } else if (typeof first === "string") {
    type = "string";
  } else {
    type = "auto";
  }

  if (value.some((item) => item === null)) type = `optional<${type}>`;
  return type;
}

function runCpp(code, functionName, tests) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "pathlight-cpp-"));
  const testCalls = tests.map((test, index) => {
    const args = test.args.map((arg, argIndex) => `auto arg${index}_${argIndex} = ${cppLiteral(arg)};`).join(" ");
    const names = test.args.map((_arg, argIndex) => `arg${index}_${argIndex}`).join(", ");
    return `${args} auto got${index} = ${functionName}(${names}); results.push_back({repr(got${index}), repr(${cppLiteral(test.expected)}), same(got${index}, ${cppLiteral(test.expected)})});`;
  }).join("\n    ");
  const source = `#include <algorithm>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <queue>
#include <stack>
#include <deque>
#include <unordered_map>
#include <unordered_set>
#include <map>
#include <set>
#include <optional>
#include <limits>
#include <climits>
#include <functional>
#include <numeric>
using namespace std;

${code}

template <typename T> string repr(const T& value) { return to_string(value); }
inline string repr(const string& value) { return value; }
inline string repr(const char* value) { return string(value); }
inline string repr(const bool& value) { return value ? "true" : "false"; }
template <typename T> string repr(const optional<T>& value) { return value ? repr(*value) : "null"; }
template <typename T> string repr(const vector<T>& values) {
  string out = "[";
  for (size_t i = 0; i < values.size(); i++) {
    if (i) out += ", ";
    out += repr(values[i]);
  }
  return out + "]";
}
template <typename T> bool same(const T& a, const T& b) { return a == b; }

struct Result { string got; string expected; bool passed; };
int main() {
  vector<Result> results;
  ${testCalls}
  cout << "[";
  for (size_t i = 0; i < results.size(); i++) {
    if (i) cout << ",";
    cout << "{\\"passed\\":" << (results[i].passed ? "true" : "false") << ",\\"expected\\":\\"" << results[i].expected << "\\",\\"got\\":\\"" << results[i].got << "\\"}";
  }
  cout << "]";
}
`;
  fs.writeFileSync(path.join(tempDir, "Runner.cpp"), source);
  const compilerCandidates = ["g++", "clang++"];
  let compiled;
  const compilerErrors = [];
  let enoentCount = 0;
  for (const compiler of compilerCandidates) {
    compiled = spawnSync(compiler, ["-std=c++17", "Runner.cpp", "-o", "Runner"], {
      cwd: tempDir,
      encoding: "utf8",
      timeout: 8000,
    });
    if (!compiled.error && compiled.status === 0) break;
    if (compiled.error?.code === "ENOENT") enoentCount++;
    if (compiled.stderr) compilerErrors.push(compiled.stderr);
  }
  if (!compiled || compiled.error || compiled.status !== 0) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    if (enoentCount === compilerCandidates.length) {
      throw new Error("A C++ compiler is not installed on the server.");
    }
    const detail =
      compilerErrors.flatMap((error) => error.split("\n")).find((line) => /error:|fatal error:/.test(line))
      || compilerErrors.flatMap((error) => error.split("\n")).find((line) => line.trim())
      || "Failed to compile.";
    throw new Error(`C++ compile error: ${detail.trim()}`);
  }
  const executed = spawnSync(path.join(tempDir, "Runner"), [], {
    cwd: tempDir,
    encoding: "utf8",
    timeout: 5000,
  });
  fs.rmSync(tempDir, { recursive: true, force: true });
  
  if (executed.error?.code === "ENOENT") {
    throw new Error("C++ runtime error: Executable was not found after compilation.");
  }
  if (executed.error || executed.status !== 0) {
    throw new Error(`C++ runtime error: ${(executed.stderr || "Your program could not run.").trim().replace(/\r?\n/g, " ").slice(0, 300)}`);
  }
  try {
    return JSON.parse(executed.stdout);
  } catch {
    throw new Error("C++ ran, but its output could not be read.");
  }
}

export function judge(language, code, functionName, tests) {
  const lang = (language || "javascript").toLowerCase();

  // Pathlight runs all test cases to ensure the solution is fully correct.
  const selectedTests = Array.isArray(tests) ? tests : [];

  if (lang === "javascript" || lang === "js") {
    return runJavascript(code, functionName, selectedTests);
  }

  if (lang === "python") {
    return runPython(code, functionName, selectedTests);
  }

  if (lang === "java") {
    return runJava(code, functionName, selectedTests);
  }

  if (lang === "cpp" || lang === "c++") {
    return runCpp(code, functionName, selectedTests);
  }

  return selectedTests.map((t) => ({
    passed: false,
    expected: t.expected,
    got: `The ${language || "selected"} compiler is not configured on the backend. Install the language toolchain on the server and try again.`,
  }));
}
