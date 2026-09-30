// ============================================================
// Pathlight DSA Catalog
// Organized master curriculum + detailed topic content +
// career roadmaps + study pace + adaptive roadmap generation.
// ============================================================

// Keep the note-section shape used by the existing topic content.
function section(title, paragraphs = [], extras = {}) {
  return {
    title,
    paragraphs,
    ...extras,
  };
}

function languageImplementationNotes(title) {
  const topicName = String(title || "this topic").trim();

  return section(
    "Implementation notes by language",
    [
      `${topicName} follows the same conceptual pattern in every language, but the built-in tools differ. In JavaScript, arrays, maps, and sets are usually the fastest way to prototype an idea and test edge cases quickly.`,
      "In Python, the standard list, dict, and set operations are incredibly expressive, so many interview solutions read like a clean, compact version of the same algorithm. It is often the easiest language for understanding the core logic before optimizing for performance.",
      "In Java, use the standard library collections like ArrayList, HashMap, HashSet, and Queue, and pay attention to primitive and reference types, especially when loops or math operations can overflow. Java tends to be more explicit, which makes it easier to reason about large inputs and memory usage.",
      "In C++, prefer vector, unordered_map, unordered_set, and references so you can keep the implementation efficient and avoid repeated copying. C++ is especially strong when performance and memory control matter, but the syntax is usually more verbose than the other languages.",
      "The main lesson is that the algorithm stays the same while the data structures and syntax change. A strong approach is to understand the pattern in one language, then translate it carefully to the next."],
    {
      keyTakeaways: [
        "Same logic, different standard library tools",
        "Choose the right collection for the language",
        "Understand the tradeoff between clarity and performance",
      ],
    }
  );
}

// ============================================================
// LEVEL 0: PROGRAMMING FOUNDATIONS
// ============================================================

const LEVEL_0_FOUNDATIONS = [
  "programming-basics",
  "input-output",
  "variables-data-types",
  "operators",
  "conditionals",
  "loops",
  "functions",
  "recursion-basics",
  "debugging",
  "testing",
  "time-complexity",
  "space-complexity",
  "asymptotic-analysis",
];

// ============================================================
// LEVEL 1: CORE DATA STRUCTURES
// ============================================================

const LEVEL_1_DATA_STRUCTURES = [
  "arrays",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "frequency-arrays",
  "linked-lists",
  "doubly-linked-lists",
  "circular-linked-lists",
  "stacks",
  "queues",
  "deques",
  "circular-queues",
];

// ============================================================
// LEVEL 2: CORE TECHNIQUES & PATTERNS
// ============================================================

const LEVEL_2_TECHNIQUES = [
  "linear-search",
  "sorting-basics",
  "bubble-sort",
  "selection-sort",
  "insertion-sort",
  "merge-sort",
  "quick-sort",
  "heap-sort",
  "counting-sort",
  "radix-sort",
  "bucket-sort",
  "binary-search",
  "binary-search-variants",
  "lower-upper-bound",
  "search-in-rotated-array",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "difference-arrays",
  "kadane-algorithm",
  "intervals",
  "merge-intervals",
  "sweep-line",
  "monotonic-stack",
  "monotonic-queue",
  "bit-manipulation",
  "bitmasking",
];

// ============================================================
// LEVEL 3: RECURSION & BACKTRACKING
// ============================================================

const LEVEL_3_RECURSION_BACKTRACKING = [
  "recursion",
  "recursion-tree",
  "divide-and-conquer",
  "backtracking",
  "subsets",
  "permutations",
  "combinations",
  "n-queens",
  "sudoku-solver",
  "word-search",
];

// ============================================================
// LEVEL 4: TREES & HEAPS
// ============================================================

const LEVEL_4_TREES_HEAPS = [
  "binary-trees",
  "tree-traversals",
  "binary-search-trees",
  "balanced-trees",
  "avl-trees",
  "red-black-trees",
  "tree-height-depth-diameter",
  "lowest-common-ancestor",
  "tree-path-problems",
  "tree-serialization",
  "heaps-priority-queues",
  "min-heap",
  "max-heap",
  "top-k-problems",
  "median-from-data-stream",
  "merge-k-sorted-lists",
];

// ============================================================
// LEVEL 5: GRAPHS
// ============================================================

const LEVEL_5_GRAPHS = [
  "graph-representation",
  "adjacency-list",
  "adjacency-matrix",
  "depth-first-search",
  "breadth-first-search",
  "graph-cycle-detection",
  "connected-components",
  "bipartite-graphs",
  "topological-sort",
  "course-schedule-pattern",
  "shortest-path-unweighted",
  "dijkstra-algorithm",
  "bellman-ford",
  "floyd-warshall",
  "minimum-spanning-tree",
  "kruskal-algorithm",
  "prim-algorithm",
  "union-find",
  "strongly-connected-components",
  "bridges-and-articulation-points",
  "network-flow-basics",
];

// ============================================================
// LEVEL 6: GREEDY & DYNAMIC PROGRAMMING
// ============================================================

const LEVEL_6_GREEDY_DP = [
  "greedy-algorithms",
  "interval-scheduling",
  "activity-selection",
  "jump-game-pattern",
  "fractional-knapsack",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "1d-dynamic-programming",
  "2d-dynamic-programming",
  "knapsack",
  "unbounded-knapsack",
  "subset-sum",
  "coin-change",
  "longest-common-subsequence",
  "longest-increasing-subsequence",
  "edit-distance",
  "matrix-chain-multiplication",
  "interval-dynamic-programming",
  "tree-dynamic-programming",
  "bitmask-dynamic-programming",
  "digit-dynamic-programming",
];

// ============================================================
// LEVEL 7: STRING ALGORITHMS
// ============================================================

const LEVEL_7_STRING_ALGORITHMS = [
  "tries",
  "string-hashing",
  "rabin-karp",
  "kmp-algorithm",
  "z-algorithm",
  "manacher-algorithm",
  "suffix-array",
  "suffix-tree",
];

// ============================================================
// LEVEL 8: RANGE QUERIES & ADVANCED STRUCTURES
// ============================================================

const LEVEL_8_ADVANCED_STRUCTURES = [
  "fenwick-tree",
  "segment-tree",
  "lazy-propagation",
  "sparse-table",
  "sqrt-decomposition",
  "range-minimum-query",
  "ordered-sets",
  "disjoint-set-union",
];

// ============================================================
// LEVEL 9: MATHEMATICS & SPECIALIST TOPICS
// ============================================================

const LEVEL_9_MATH_SPECIALIST = [
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "sieve-of-eratosthenes",
  "modular-arithmetic",
  "fast-exponentiation",
  "modular-inverse",
  "combinatorics",
  "permutations-combinations",
  "probability-basics",
  "computational-geometry",
  "randomized-algorithms",
  "game-theory-basics",
];

// ============================================================
// COMPLETE MASTER TOPIC REGISTRY
// ============================================================

export const DSA_MASTER_TOPICS = [
  ...LEVEL_0_FOUNDATIONS,
  ...LEVEL_1_DATA_STRUCTURES,
  ...LEVEL_2_TECHNIQUES,
  ...LEVEL_3_RECURSION_BACKTRACKING,
  ...LEVEL_4_TREES_HEAPS,
  ...LEVEL_5_GRAPHS,
  ...LEVEL_6_GREEDY_DP,
  ...LEVEL_7_STRING_ALGORITHMS,
  ...LEVEL_8_ADVANCED_STRUCTURES,
  ...LEVEL_9_MATH_SPECIALIST,
];

export const TOPIC_LEVELS = {
  foundations: LEVEL_0_FOUNDATIONS,
  dataStructures: LEVEL_1_DATA_STRUCTURES,
  techniques: LEVEL_2_TECHNIQUES,
  recursionBacktracking: LEVEL_3_RECURSION_BACKTRACKING,
  treesHeaps: LEVEL_4_TREES_HEAPS,
  graphs: LEVEL_5_GRAPHS,
  greedyDynamicProgramming: LEVEL_6_GREEDY_DP,
  stringAlgorithms: LEVEL_7_STRING_ALGORITHMS,
  advancedStructures: LEVEL_8_ADVANCED_STRUCTURES,
  mathematicsSpecialist: LEVEL_9_MATH_SPECIALIST,
};

// ============================================================
// DETAILED TOPIC CONTENT
// Preserved from the uploaded catalog topic-content file.
// ============================================================

export const TOPICS = [
  {
    slug: "input-output",
    title: "Input & Output",
    summary: "Learn how to read data into your program and print results back out.",
    estimatedHours: 2,
    difficulty: "Beginner",
    videoId: "",
    videoTitle: "",
    references: [
      {
        label: "GeeksforGeeks: Input Output in Java",
        url: "https://www.geeksforgeeks.org/basic-input-and-output-in-java/",
      },
    ],
    notes: [
      section(
        "Standard Input and Output",
        [
          "Every program needs a way to communicate with the outside world. This is primarily done through standard input (stdin) and standard output (stdout).",
          "When solving algorithmic problems, input is usually read from the console, and the output is printed back to the console."
        ],
        {
          keyTakeaways: [
            "stdin is for reading data",
            "stdout is for printing data"
          ],
        }
      ),
      section(
        "Reading Data",
        [
          "Reading data involves taking raw strings from the console and converting them into useful data types like integers or arrays.",
          "Different languages have different mechanisms for this. For example, Python uses the `input()` function, while Java uses `Scanner` or `BufferedReader`.",
          "A common mistake is forgetting to convert a string input (like '5') into an integer before doing math."
        ]
      ),
      section(
        "Printing Data",
        [
          "Printing data is just as important. You often need to print variables, strings, or a combination of both.",
          "Formatting output correctly is critical in coding assessments. If the expected output is 'Answer: 42', printing just '42' might fail the test case."
        ]
      )
    ],
    notesMarkdown: `
# Input and Output (I/O)

In programming, **Input** is the data your program receives, and **Output** is the result your program produces. 
Without I/O, a program would just run in isolation without any way to communicate its results.

### The Standard Streams
- **Standard Input (stdin):** The default stream where your program reads data (usually the keyboard).
- **Standard Output (stdout):** The default stream where your program writes data (usually the terminal/console).
- **Standard Error (stderr):** A separate stream used specifically for error messages, so they don't get mixed up with normal output.

### 1. Reading Input
When taking input, the data initially comes in as a string of text. If you expect a number, you **must convert** it.

{{lang:python}}
\`\`\`python
# Python Example
age = input("Enter your age: ")
# age is a string here! "25" != 25

age_number = int(age) # Now it is a number
print("Next year you will be", age_number + 1)
\`\`\`
{{/lang}}

{{lang:javascript}}
\`\`\`javascript
// JavaScript (Node.js) Example
// In JS, getting console input is a bit verbose, but you usually read from process.argv or use a library like readline.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your age: ', age => {
  console.log("Next year you will be", parseInt(age) + 1);
  readline.close();
});
\`\`\`
{{/lang}}

{{lang:java}}
\`\`\`java
// Java Example
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        System.out.println("Next year you will be " + (age + 1));
    }
}
\`\`\`
{{/lang}}

{{lang:cpp}}
\`\`\`cpp
// C++ Example
#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "Next year you will be " << age + 1 << endl;
    return 0;
}
\`\`\`
{{/lang}}

### 2. Formatting Output
Often, you need to print a mix of text and variables.

{{lang:python}}
- **Python:** Use f-strings \`print(f"Name: {name}, Age: {age}")\`
{{/lang}}
{{lang:java}}
- **Java:** Use string concatenation \`System.out.println("Name: " + name + ", Age: " + age);\` or \`printf\`
{{/lang}}
{{lang:cpp}}
- **C++:** Chain the stream insertion operators \`cout << "Name: " << name << ", Age: " << age << endl;\`
{{/lang}}
{{lang:javascript}}
- **JavaScript:** Use template literals \`console.log(\`Name: \${name}, Age: \${age}\`)\`
{{/lang}}

### Common Pitfalls
1. **Trailing Newlines:** Sometimes when you read an integer, the Enter key (newline character) is left in the input buffer, which can mess up your next input read.
2. **Type Mismatch:** Forgetting to convert a string "10" into the integer 10 before performing math. In languages like JS, \`"10" + 5\` becomes \`"105"\` instead of \`15\`.
3. **Slow I/O:** In competitive programming, standard I/O methods (like Java's Scanner or C++'s cin) can be too slow for massive inputs. Advanced techniques (BufferedReader in Java, \`std::ios_base::sync_with_stdio(false)\` in C++) are used to speed it up.
`
  },
  {
    slug: "variables-data-types",
    title: "Variables & Data Types",
    summary: "Understand how to store and manipulate different kinds of data in memory.",
    estimatedHours: 3,
    difficulty: "Beginner",
    videoId: "",
    videoTitle: "",
    references: [
      {
        label: "MDN: JavaScript Data Types",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
      },
    ],
    notes: [
      section(
        "Variables: Containers for Data",
        [
          "A variable is a named storage location in memory. You declare a variable so the computer knows to set aside space, and you assign it a value to store data in that space."
        ],
        {
          keyTakeaways: ["Variables hold values", "Names should be descriptive"]
        }
      ),
      section(
        "Primitive Data Types",
        [
          "Data comes in different types, which tell the computer how to handle it. Common primitive types include:",
          "- **Integers**: Whole numbers (e.g., 42)",
          "- **Floats/Doubles**: Decimal numbers (e.g., 3.14)",
          "- **Booleans**: True or false values",
          "- **Characters/Strings**: Text data"
        ]
      )
    ],
    notesMarkdown: `
# Variables and Data Types

At the core of any program is the ability to store and manipulate data. 

### Variables
A variable is simply a name given to a memory location. Think of it as a labeled box where you can store a value.

{{lang:python}}
\`\`\`python
# Python
age = 25          # Creates a variable 'age' and assigns it 25
name = "Alice"    # Creates a variable 'name' and assigns it a string
\`\`\`
{{/lang}}

{{lang:javascript}}
\`\`\`javascript
// JavaScript
let age = 25;     // 'let' allows reassignment
const name = "Alice"; // 'const' means the value cannot be changed
\`\`\`
{{/lang}}

{{lang:java}}
\`\`\`java
// Java - Statically typed, you must declare the type!
int age = 25;
String name = "Alice";
\`\`\`
{{/lang}}

{{lang:cpp}}
\`\`\`cpp
// C++ - Statically typed
int age = 25;
std::string name = "Alice";
\`\`\`
{{/lang}}

### Data Types
The type of a variable tells the computer how much memory to allocate and what operations are valid.

1. **Integer:** Whole numbers without a fractional part (e.g., \`10\`, \`-5\`, \`0\`).
2. **Float / Double:** Numbers with fractional parts (e.g., \`3.14\`, \`-0.001\`).
3. **Boolean:** Represents truth values: \`true\` or \`false\`.
4. **String:** A sequence of characters used for text (e.g., \`"Hello"\`).

### Static vs. Dynamic Typing
- **Statically Typed (Java, C++):** You must declare the type of a variable when you create it. The type cannot change.
- **Dynamically Typed (Python, JavaScript):** The interpreter infers the type at runtime. A variable can hold an integer now, and a string later.

### Type Casting
Sometimes you need to convert one type to another. For example, converting a string \`"100"\` to the integer \`100\`.

{{lang:python}}
\`\`\`python
str_val = "100"
int_val = int(str_val)
\`\`\`
{{/lang}}

{{lang:java}}
\`\`\`java
String strVal = "100";
int intVal = Integer.parseInt(strVal);
\`\`\`
{{/lang}}

{{lang:cpp}}
\`\`\`cpp
std::string strVal = "100";
int intVal = std::stoi(strVal);
\`\`\`
{{/lang}}

{{lang:javascript}}
\`\`\`javascript
let strVal = "100";
let intVal = parseInt(strVal);
\`\`\`
{{/lang}}
`
  },
  {
    slug: "programming-basics",
    title: "Programming Basics",
    summary: "Master the foundational constructs: variables, memory models, loops, functions, and boolean logic.",
    estimatedHours: 8,
    difficulty: "Beginner",
    videoId: "z9bZufPHFLc",
    videoTitle: "MIT 6.0001: Introduction to Computer Science",
    references: [
      {
        label: "MIT OpenCourseWare: Intro to CS and Programming in Python",
        url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
      },
      {
        label: "Stanford CS106A: Programming Methodologies",
        url: "https://web.stanford.edu/class/cs106a/",
      },
      {
        label: "MDN Web Docs: JavaScript Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      }
    ],
    notes: [
      section(
        "Definition",
        [
          "Programming basics encompass the fundamental constructs of writing code: variables for storing state, conditionals for decision-making, loops for repetitive tasks, and functions for modularizing logic."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "Storing a user's age in a variable.",
            "Checking if a user is an adult using an if-statement.",
            "Iterating through a list of names using a for-loop."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction greetUsers(users) {\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].age >= 18) {\n      console.log('Welcome, ' + users[i].name);\n    }\n  }\n}\n```",
          "This program defines a function `greetUsers` that takes a list of users. It uses a `for` loop to iterate over the array and an `if` conditional to check their age. State is managed via the loop counter `i`."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Variable assignment and state tracking.",
            "Conditional branching (if/else).",
            "Iteration (for/while loops).",
            "Functional abstraction."
          ]
        }
      ),
    ],
  },

  {
    slug: "time-complexity",
    title: "Time Complexity",
    summary: "Rigorous asymptotic analysis to evaluate algorithm scalability and efficiency.",
    estimatedHours: 5,
    difficulty: "Beginner",
    videoId: "Mo4vesaut8g",
    videoTitle: "MIT 6.006: Introduction to Algorithms - Lecture 1",
    references: [
      {
        label: "MIT OpenCourseWare: 6.006 Intro to Algorithms",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
      },
      {
        label: "Wikipedia: Big O Notation",
        url: "https://en.wikipedia.org/wiki/Big_O_notation",
      },
    ],
    notes: [
      section(
        "Definition",
        [
          "Time complexity provides a theoretical framework (Big-O notation) to predict how the runtime of an algorithm scales as the size of the input (N) approaches infinity."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "O(1): Accessing an element in an array by index.",
            "O(N): Finding the maximum value in an unsorted array.",
            "O(N^2): Checking all pairs in an array using nested loops."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction findDuplicate(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[i] === arr[j]) return true;\n    }\n  }\n  return false;\n}\n```",
          "This program checks for duplicates in an array by comparing every possible pair. The outer loop runs N times, and the inner loop runs up to N times, resulting in a Time Complexity of O(N^2)."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Dropping constant multipliers and lower-order terms.",
            "Identifying the dominant operation inside the tightest loop.",
            "Accounting for the time complexity of built-in functions."
          ]
        }
      ),
    ],
  },

  {
    slug: "space-complexity",
    title: "Space Complexity",
    summary: "Evaluating auxiliary memory footprint and call stack limitations.",
    estimatedHours: 3,
    difficulty: "Beginner",
    videoId: "Mo4vesaut8g",
    videoTitle: "Stanford CS161: Design and Analysis of Algorithms",
    references: [
      {
        label: "Stanford CS161: Design and Analysis of Algorithms",
        url: "https://stanford-cs161.github.io/winter2024/",
      },
      {
        label: "Wikipedia: Space complexity",
        url: "https://en.wikipedia.org/wiki/Space_complexity",
      },
    ],
    notes: [
      section(
        "Definition",
        [
          "Space complexity evaluates the total auxiliary memory (extra space) an algorithm uses relative to the size of the input, including dynamically allocated data structures and the implicit call stack."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "O(1): Using a few simple variables to keep count.",
            "O(N): Copying an array or allocating a hash map for all N elements.",
            "O(N): A recursive function that makes N consecutive calls before returning."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n```",
          "While no arrays or objects are explicitly created, each recursive call adds a new frame to the call stack. Calling `factorial(N)` results in a call stack of depth N, giving it a Space Complexity of O(N)."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Identifying explicitly allocated auxiliary structures (arrays, sets, maps).",
            "Measuring maximum depth of the recursive call stack.",
            "Trading time for space (e.g., using memoization)."
          ]
        }
      ),
    ],
  },

  {
    slug: "arrays",
    title: "Arrays",
    summary: "Contiguous memory blocks for ordered data. Essential for pointer manipulation and greedy scans.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "8wmd7RKvPX8",
    videoTitle: "MIT 6.006: Data Structures and Dynamic Arrays",
    references: [
      {
        label: "MIT OpenCourseWare: Data Structures",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
      },
      {
        label: "LeetCode: Array Practice Set",
        url: "https://leetcode.com/tag/array/",
      },
    ],
    notes: [
      section(
        "Definition",
        [
          "An array is a contiguous block of memory used to store ordered elements, allowing for O(1) random access via indexing and excellent CPU cache locality."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "Accessing the 3rd element: arr[2]",
            "Appending an element to the end of a dynamic array (amortized O(1)).",
            "Inserting an element at the beginning, which requires shifting all others (O(N))."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction reverseArray(arr) {\n  let left = 0;\n  let right = arr.length - 1;\n  while (left < right) {\n    let temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++;\n    right--;\n  }\n  return arr;\n}\n```",
          "This program reverses an array in-place. It utilizes two pointers, one starting at the beginning and the other at the end, swapping their values and moving towards the center. This is done in O(N) time and O(1) extra space."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Two Pointers (converging from ends).",
            "Sliding Window (contiguous subsegments).",
            "Prefix Sums (precomputed cumulative totals).",
            "In-place mutation to optimize space."
          ]
        }
      ),
    ],
  },

  {
    slug: "2d-arrays-matrices",
    title: "2D Arrays & Matrices",
    summary: "Multi-dimensional grids for spatial algorithms, dynamic programming, and graphs.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "ge_P7jXZkY0",
    videoTitle: "Stanford CS106B: Multi-dimensional Arrays",
    references: [
      {
        label: "Stanford CS106B: Programming Abstractions",
        url: "https://web.stanford.edu/class/cs106b/",
      },
      {
        label: "LeetCode: Matrix Practice",
        url: "https://leetcode.com/tag/matrix/",
      },
    ],
    notes: [
      section(
        "Definition",
        [
          "A 2D array or matrix is a multi-dimensional grid typically used to represent game boards, images, or implicit graphs where cells are nodes."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "A tic-tac-toe or chess board.",
            "A dynamic programming tabulation table.",
            "A grid of pixels representing an image."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction sumMatrix(matrix) {\n  let sum = 0;\n  for (let row = 0; row < matrix.length; row++) {\n    for (let col = 0; col < matrix[row].length; col++) {\n      sum += matrix[row][col];\n    }\n  }\n  return sum;\n}\n```",
          "This program calculates the sum of all elements in a matrix. It uses a nested loop structure: the outer loop iterates over the rows, and the inner loop iterates over the columns of each row, taking O(R * C) time."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Nested loops for full spatial traversal.",
            "Boundary checking to avoid out-of-bounds errors.",
            "Directional vectors (e.g., [0,1], [1,0]) for exploring neighboring cells."
          ]
        }
      ),
    ],
  },

  {
    slug: "strings",
    title: "Strings",
    summary: "Text as ordered characters: scan, count, compare, and match patterns.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "D6xkbGLQesk",
    videoTitle: "Strings, scans, and palindromes",
    references: [
      {
        label: "MDN: String",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
      },
      {
        label: "LeetCode: String problems",
        url: "https://leetcode.com/tag/string/",
      },
    ],
    notes: [
      section(
        "Definition",
        [
          "A string is an ordered sequence of characters, usually implemented as an immutable array. String algorithms involve scanning, counting, comparing, and matching patterns within text."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "Checking if a string is a palindrome.",
            "Finding the longest substring without repeating characters.",
            "Grouping anagrams by counting character frequencies."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction isPalindrome(str) {\n  let left = 0;\n  let right = str.length - 1;\n  while (left < right) {\n    if (str[left] !== str[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n```",
          "This program checks if a string is a palindrome using the Two Pointers technique. It compares characters from both ends moving inward. If all match, it's a palindrome (O(N) time)."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Two Pointers (for comparisons from opposite ends).",
            "Sliding Window (for substring problems).",
            "Hashing/Frequency arrays (for anagrams and character counts)."
          ]
        }
      ),
    ],
  },

  {
    slug: "hashing",
    title: "Hashing",
    summary: "O(1) average-case associative arrays for mapping, frequency counting, and membership testing.",
    estimatedHours: 7,
    difficulty: "Beginner",
    videoId: "0M_kIqhV_3U",
    videoTitle: "MIT 6.006: Hashing",
    references: [
      {
        label: "MIT 6.006: Hashing with Chaining",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-8-hashing-with-chaining/",
      },
      {
        label: "Stanford CS161: Hash Tables",
        url: "https://web.stanford.edu/class/cs161/lectures/lecture7/",
      },
    ],
    notes: [
      section(
        "Definition",
        [
          "Hashing utilizes hash tables to map keys to values, providing expected O(1) average-case time complexity for insertion, deletion, and lookup operations."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "Using a Set to achieve O(1) membership checks (e.g., seen items).",
            "Using a Map to track the frequency of elements in an array.",
            "Caching previously seen values to reduce an O(N^2) algorithm to O(N)."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction twoSum(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (seen.has(complement)) {\n      return [seen.get(complement), i];\n    }\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n```",
          "This solves the Two Sum problem by storing elements and their indices in a Map. For each element, it calculates the needed complement and checks the Map in O(1) time. This reduces the problem from O(N^2) to O(N) time and O(N) space."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Complement searching.",
            "Frequency Maps (counting occurrences).",
            "Memoization and caching."
          ]
        }
      ),
    ],
  },

  {
    slug: "linked-lists",
    title: "Linked Lists",
    summary: "Nodes connected by pointers: traversal, reversal, merging, and cycle detection.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "RBSGKlAvoiM",
    videoTitle: "Stanford CS106B: Linked Lists",
    references: [
      {
        label: "Stanford CS106B: Linked Lists",
        url: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1214/lectures/13-LinkedLists/13-LinkedLists.pdf",
      },
    ],
    notes: [
      section(
        "Definition",
        [
          "A linked list is a linear data structure composed of objects (nodes) where each node holds a reference (pointer) to the next node. Unlike arrays, nodes are not stored contiguously in memory."
        ]
      ),
      section(
        "Examples",
        [],
        {
          bullets: [
            "Singly Linked List: Nodes point only to the next node.",
            "Doubly Linked List: Nodes point to both previous and next nodes.",
            "Circular Linked List: The tail node points back to the head."
          ]
        }
      ),
      section(
        "Sample Program with Explanation",
        [
          "```javascript\nfunction reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr !== null) {\n    let nextTemp = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = nextTemp;\n  }\n  return prev;\n}\n```",
          "This program reverses a linked list iteratively. It uses three pointers (`prev`, `curr`, `nextTemp`) to safely reverse the `next` links without breaking the rest of the list. It runs in O(N) time and O(1) space."
        ]
      ),
      section(
        "Techniques Used",
        [],
        {
          bullets: [
            "Fast & Slow Pointers (Tortoise & Hare) for cycle detection or midpoints.",
            "Dummy Nodes (Sentinels) to simplify edge cases at the head.",
            "In-place pointer reversal."
          ]
        }
      ),
    ],
  },

  {
    slug: "stacks",
    title: "Stacks",
    summary: "Last-in-first-out structure for validation, undo, and nested processing.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "s6FhG--P7z0",
    videoTitle: "Stanford: Stacks & Queues",
    references: [
      {
        label: "MIT 6.006: Stacks",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/mit6_006s20_lec2-pdf/",
      },
    ],
    notes: [
      section(
        "LIFO Semantics",
        [
          "A Stack follows Last-In-First-Out (LIFO) semantics. Elements are pushed onto the top and popped off the top in O(1) time. Conceptually, they are identical to a physical stack of plates.",
          "Stacks are used extensively in systems programming to manage function calls, expression evaluation, and parsing algorithms."
        ],
        {
          keyTakeaways: [
            "In Python, a standard list acts as an efficient stack via append() and pop()",
            "In Java, prefer ArrayDeque over the legacy Stack class",
            "In C++, use std::stack, which wraps a deque or vector by default"
          ],
        }
      ),
      section(
        "Monotonic Stacks & Parsing",
        [
          "Advanced stack problems often require maintaining a 'monotonic' stack—where elements are kept strictly increasing or decreasing. This is a common pattern for finding the 'next greater element' in O(N) time."
        ],
        {
          bullets: [
            "Bracket Matching: Push open brackets, pop and verify closed brackets",
            "Monotonic Increasing: Evict elements from the stack when a smaller item is encountered",
            "Simulation: Tracking state sequences, undo operations, and postfix execution"
          ],
          keyTakeaways: [
            "Stacks excel at processing nested relationships",
            "Always check that the stack is non-empty before calling peek() or pop()"
          ],
        }
      ),
    ],
  },

  {
    slug: "queues",
    title: "Queues",
    summary: "First-in-first-out structure for arrival-order processing and BFS.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "s6FhG--P7z0",
    videoTitle: "Stanford: Stacks & Queues",
    references: [
      {
        label: "MIT 6.006: Queues",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/mit6_006s20_lec2-pdf/",
      },
    ],
    notes: [
      section(
        "FIFO Semantics",
        [
          "A Queue follows First-In-First-Out (FIFO) semantics. Elements are enqueued at the tail and dequeued from the head. This structure mirrors real-world waiting lines and task scheduling systems.",
          "Unlike Stacks, queues require a double-ended data structure (Deque) to achieve O(1) performance for both enqueue and dequeue operations."
        ],
        {
          keyTakeaways: [
            "In Python, use collections.deque (popleft() is O(1), but list.pop(0) is O(N))",
            "In Java, use the Queue interface implemented by LinkedList or ArrayDeque",
            "In C++, use std::queue"
          ],
        }
      ),
      section(
        "Breadth-First Search (BFS)",
        [
          "Queues are inherently tied to Breadth-First Search traversals in Trees and Graphs. By processing elements in FIFO order, algorithms process graphs radially level-by-level."
        ],
        {
          bullets: [
            "Tree Level-Order Traversal",
            "Shortest Path in Unweighted Graphs",
            "Sliding Window algorithms (Deque)"
          ],
          keyTakeaways: [
            "Whenever you see 'shortest path' or 'level order', reach for a Queue",
            "Always verify your language's queue operations are O(1) and not a hidden O(N) shift"
          ],
        }
      ),
    ],
  },

  {
    slug: "sorting-basics",
    title: "Sorting Basics",
    summary: "Order values to simplify searching, grouping, greedy choices, and pointer scans.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "kgBjXPnmqzs",
    videoTitle: "Sorting algorithms overview",
    references: [
      {
        label: "Wikipedia: Sorting algorithm",
        url: "https://en.wikipedia.org/wiki/Sorting_algorithm",
      },
    ],
    notes: [
      section(
        "Why sort?",
        [
          "Sorting often makes a difficult problem easier. Binary search requires sorted data, and many two-pointer or greedy solutions start by ordering the input.",
          "Comparison sorting generally costs O(n log n), so decide whether that cost is worthwhile.",
        ],
        {
          keyTakeaways: [
            "Sorting unlocks other algorithms",
            "Know whether input mutation is allowed",
            "Use numeric comparators in JavaScript",
          ],
        }
      ),
      section(
        "Interview focus",
        [],
        {
          bullets: [
            "Use a built-in sort when allowed",
            "Know O(n log n) complexity",
            "Sort intervals by start or end when needed",
            "Sort before two-pointer scans",
          ],
          keyTakeaways: [
            "Sorting is a strategy, not always the answer",
            "Explain the complexity tradeoff",
          ],
        }
      ),
    ],
  },

  {
    slug: "binary-search",
    title: "Binary Search",
    summary: "Repeatedly halve a sorted or monotonic search space.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "6z4ZzI6X9xk",
    videoTitle: "Binary search pattern",
    references: [
      {
        label: "Wikipedia: Binary search",
        url: "https://en.wikipedia.org/wiki/Binary_search_algorithm",
      },
    ],
    notes: [
      section(
        "Halve the space",
        [
          "Binary search compares a middle value and discards one impossible half. It runs in O(log n) time.",
          "It requires sorted values or a monotonic yes-or-no condition.",
        ],
        {
          keyTakeaways: [
            "Use left, right, and middle",
            "Update one boundary every iteration",
            "Avoid infinite loops with clear conditions",
          ],
        }
      ),
      section(
        "Search on the answer",
        [
          "Binary search can find a value, the first valid position, the last valid position, or the minimum capacity that satisfies a condition.",
        ],
        {
          keyTakeaways: [
            "Define a monotonic condition",
            "Use binary search beyond arrays",
          ],
        }
      ),
    ],
  },

  {
    slug: "two-pointers",
    title: "Two Pointers",
    summary: "Use two indexes to scan, shrink, compare, or modify a sequence.",
    estimatedHours: 6,
    difficulty: "Beginner",
    videoId: "cYxP1nU2jKY",
    videoTitle: "Two pointers pattern",
    references: [
      {
        label: "GeeksforGeeks: Two pointers",
        url: "https://www.geeksforgeeks.org/two-pointers-technique/",
      },
    ],
    notes: [
      section(
        "Two ways to move",
        [
          "Opposite-direction pointers work well on sorted data or palindrome-style comparisons. Same-direction pointers are useful for in-place updates and linked-list cycle patterns.",
          "The method works because every pointer move removes impossible candidates.",
        ],
        {
          keyTakeaways: [
            "Use opposite ends for pair and palindrome problems",
            "Use slow and fast pointers for in-place work",
            "Many solutions become O(n)",
          ],
        }
      ),
      section(
        "When to use it",
        [],
        {
          bullets: [
            "Sorted two-sum",
            "Remove duplicates",
            "Reverse a sequence",
            "Palindrome checking",
            "Three-sum after sorting",
          ],
          keyTakeaways: [
            "Understand why moving a pointer is safe",
            "Check duplicate handling carefully",
          ],
        }
      ),
    ],
  },

  {
    slug: "sliding-window",
    title: "Sliding Window",
    summary: "Maintain a moving contiguous range instead of recalculating every range.",
    estimatedHours: 7,
    difficulty: "Beginner",
    videoId: "MK-NZ4hN7rs",
    videoTitle: "Sliding window pattern",
    references: [
      {
        label: "GeeksforGeeks: Sliding window",
        url: "https://www.geeksforgeeks.org/window-sliding-technique/",
      },
    ],
    notes: [
      section(
        "The moving range",
        [
          "A sliding window tracks a contiguous range using left and right boundaries. Expand the right side and shrink the left side only when the current range becomes invalid.",
          "Each pointer moves forward at most n times, so many solutions are O(n).",
        ],
        {
          keyTakeaways: [
            "Works with subarrays and substrings",
            "Avoids recomputing each range",
            "Usually needs left and right pointers",
          ],
        }
      ),
      section(
        "Typical problems",
        [],
        {
          bullets: [
            "Maximum sum of a fixed-size subarray",
            "Longest substring without repeats",
            "Smallest valid substring",
            "At most k distinct values",
          ],
          keyTakeaways: [
            "Track frequency counts when needed",
            "Do not move pointers backward",
          ],
        }
      ),
    ],
  },

  {
    slug: "prefix-sums",
    title: "Prefix Sums",
    summary: "Store cumulative totals to answer range sums and subarray questions efficiently.",
    estimatedHours: 5,
    difficulty: "Beginner",
    videoId: "u89i60lYx8U",
    videoTitle: "Prefix sums fundamentals",
    references: [
      {
        label: "GeeksforGeeks: Prefix sum",
        url: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-2/",
      },
    ],
    notes: [
      section(
        "Cumulative totals",
        [
          "A prefix sum stores the total from the beginning through each position. The sum from left through right can be calculated with subtraction.",
          "Using an extra leading zero makes formulas easier: rangeSum equals prefix[right + 1] minus prefix[left].",
        ],
        {
          keyTakeaways: [
            "Precompute cumulative information",
            "Answer repeated range queries quickly",
            "Useful for arrays and matrices",
          ],
        }
      ),
      section(
        "Prefix sum plus map",
        [
          "For a target sum k, if the current prefix sum is total, look for an earlier prefix sum equal to total minus k.",
          "Store prefix-sum frequencies in a map to count valid subarrays efficiently.",
        ],
        {
          keyTakeaways: [
            "Initialize prefix sum 0 with count 1",
            "Combine prefix sums with hashing",
          ],
        }
      ),
    ],
  },

  {
    slug: "kadane-algorithm",
    title: "Kadane's Algorithm",
    summary: "Find the maximum subarray sum in linear time.",
    estimatedHours: 4,
    difficulty: "Intermediate",
    videoId: "AHZpyENo7k4",
    videoTitle: "Kadane's algorithm explained",
    references: [
      {
        label: "GeeksforGeeks: Kadane's algorithm",
        url: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
      },
    ],
    notes: [
      section(
        "Maximum subarray",
        [
          "Kadane's algorithm maintains the best sum ending at the current position. It updates a running maximum in one pass.",
        ],
        {
          keyTakeaways: [
            "O(n) time, O(1) extra space",
            "Track current and global maximum",
          ],
        }
      ),
      section(
        "Variants",
        [],
        {
          bullets: [
            "Maximum product subarray",
            "Minimum subarray sum",
            "Circular array maximum sum",
          ],
          keyTakeaways: [
            "Extend the idea to related problems",
          ],
        }
      ),
    ],
  },

  {
    slug: "intervals",
    title: "Intervals",
    summary: "Ranges with start and end: merge, intersect, schedule, and partition.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "F57QnGOl12g",
    videoTitle: "Interval problems patterns",
    references: [
      {
        label: "LeetCode: Intervals",
        url: "https://leetcode.com/tag/interval/",
      },
    ],
    notes: [
      section(
        "Interval thinking",
        [
          "An interval has a start and an end. Many problems sort intervals by start or end, then scan to merge or schedule.",
        ],
        {
          keyTakeaways: [
            "Sort by start or end",
            "Track the current merged interval",
            "Use greedy choices for scheduling",
          ],
        }
      ),
      section(
        "Common tasks",
        [],
        {
          bullets: [
            "Merge overlapping intervals",
            "Insert and merge",
            "Non-overlapping intervals",
            "Meeting rooms scheduling",
          ],
          keyTakeaways: [
            "Sort first",
            "Scan once",
          ],
        }
      ),
    ],
  },

  {
    slug: "monotonic-stack",
    title: "Monotonic Stack",
    summary: "Maintain an increasing or decreasing stack to find next greater or smaller elements.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "DfljaUwZsPk",
    videoTitle: "Monotonic stack pattern",
    references: [
      {
        label: "GeeksforGeeks: Monotonic stack",
        url: "https://www.geeksforgeeks.org/next-greater-element/",
      },
    ],
    notes: [
      section(
        "Ordered stack",
        [
          "A monotonic stack keeps values in increasing or decreasing order. It is useful for next greater element, daily temperatures, and largest rectangle in histogram.",
        ],
        {
          keyTakeaways: [
            "Pop while order is violated",
            "Store indexes when needed",
            "Use for range-max or range-min queries",
          ],
        }
      ),
      section(
        "Typical problems",
        [],
        {
          bullets: [
            "Next greater element",
            "Daily temperatures",
            "Largest rectangle in histogram",
            "Trapping rain water variant",
          ],
          keyTakeaways: [
            "Maintain the invariant",
            "Use stack to remember candidates",
          ],
        }
      ),
    ],
  },

  {
    slug: "bit-manipulation",
    title: "Bit Manipulation",
    summary: "Use binary representation, masks, shifts, and XOR for compact logic.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "5gU6-8H4l1E",
    videoTitle: "Bit tricks for interviews",
    references: [
      {
        label: "MDN: Bitwise operators",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators",
      },
    ],
    notes: [
      section(
        "Bits and XOR",
        [
          "Bitwise operations work on binary digits. XOR cancels equal values because a value XOR itself becomes zero.",
          "Bit masks let you test, set, clear, or toggle individual bits.",
        ],
        {
          keyTakeaways: [
            "XOR helps with duplicate-pair problems",
            "Use shifts to select bit positions",
            "Bit masks represent compact flags",
          ],
        }
      ),
      section(
        "Useful operators",
        [],
        {
          bullets: [
            "value & mask: test a bit",
            "value | mask: set a bit",
            "value & ~mask: clear a bit",
            "value ^ mask: toggle a bit",
          ],
          keyTakeaways: [
            "Draw binary values when learning",
            "Useful in cybersecurity and low-level programming",
          ],
        }
      ),
    ],
  },

  {
    slug: "recursion",
    title: "Recursion",
    summary: "Solve a smaller version of the same problem and combine results.",
    estimatedHours: 8,
    difficulty: "Intermediate",
    videoId: "IJDJ0kBx4X8",
    videoTitle: "Recursion for beginners",
    references: [
      {
        label: "Wikipedia: Recursion",
        url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
      },
    ],
    notes: [
      section(
        "Three required parts",
        [
          "Every recursive function needs a base case, progress toward the base case, and a way to combine a smaller answer into the current answer.",
          "Each call uses stack memory, so deeply recursive solutions can overflow the call stack.",
        ],
        {
          keyTakeaways: [
            "Always define a base case",
            "Make every call smaller",
            "Understand the call stack",
          ],
        }
      ),
      section(
        "Where it fits",
        [],
        {
          bullets: [
            "Trees",
            "Graph DFS",
            "Backtracking",
            "Divide and conquer",
            "Dynamic programming with memoization",
          ],
          keyTakeaways: [
            "Use iteration when it is clearer",
            "Recursion is a foundation for advanced topics",
          ],
        }
      ),
    ],
  },

  {
    slug: "backtracking",
    title: "Backtracking",
    summary: "Choose, explore, undo, and try all valid possibilities.",
    estimatedHours: 8,
    difficulty: "Intermediate",
    videoId: "G_Ulx2rUPEE",
    videoTitle: "Backtracking basics",
    references: [
      {
        label: "GeeksforGeeks: Backtracking",
        url: "https://www.geeksforgeeks.org/backtracking-algorithms/",
      },
    ],
    notes: [
      section(
        "Explore decisions",
        [
          "Backtracking explores a decision tree. Make a choice, recurse, undo the choice, and then try another option.",
          "It is useful when a problem asks for all valid combinations, paths, permutations, or arrangements.",
        ],
        {
          keyTakeaways: [
            "Usually uses recursion",
            "Save copies of completed paths",
            "Undo mutable state correctly",
          ],
        }
      ),
      section(
        "Common families",
        [],
        {
          bullets: [
            "Subsets",
            "Permutations",
            "Combinations",
            "N-Queens",
            "Word search",
          ],
          keyTakeaways: [
            "Prune invalid paths early",
            "Draw the decision tree before coding",
          ],
        }
      ),
    ],
  },

  {
    slug: "divide-and-conquer",
    title: "Divide and Conquer",
    summary: "Split a problem into smaller subproblems, solve them, and combine results.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "1J5wEfCI9QE",
    videoTitle: "Divide and conquer overview",
    references: [
      {
        label: "Wikipedia: Divide and conquer",
        url: "https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm",
      },
    ],
    notes: [
      section(
        "Split and combine",
        [
          "Divide and conquer splits a problem into smaller independent subproblems, solves each, and merges the answers.",
          "Merge sort and quicksort are classic examples.",
        ],
        {
          keyTakeaways: [
            "Identify the split",
            "Solve subproblems recursively",
            "Merge results efficiently",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Merge sort",
            "Quick sort",
            "Binary search",
            "Closest pair of points",
          ],
          keyTakeaways: [
            "Recurrence relations describe complexity",
            "Often O(n log n)",
          ],
        }
      ),
    ],
  },

  {
    slug: "binary-trees",
    title: "Binary Trees",
    summary: "Hierarchical data structures for recursive reasoning and ordered searching.",
    estimatedHours: 9,
    difficulty: "Intermediate",
    videoId: "1-l_UOXGARo",
    videoTitle: "Binary trees",
    references: [
      {
        label: "Wikipedia: Tree (data structure)",
        url: "https://en.wikipedia.org/wiki/Tree_(data_structure)",
      },
    ],
    notes: [
      section(
        "Tree structure",
        [
          "A tree has parent-child relationships. Binary trees have at most two children per node.",
          "Tree shape matters: balanced trees are shallow, while skewed trees can behave like linked lists.",
        ],
        {
          keyTakeaways: [
            "Think in left and right subtrees",
            "Recursion is natural for trees",
            "Balanced shape improves performance",
          ],
        }
      ),
      section(
        "Traversals",
        [],
        {
          bullets: [
            "Preorder: node, left, right",
            "Inorder: left, node, right",
            "Postorder: left, right, node",
            "Level order: BFS using a queue",
          ],
          keyTakeaways: [
            "Traversal order changes the result",
            "BST inorder traversal is sorted",
          ],
        }
      ),
    ],
  },

  {
    slug: "binary-search-trees",
    title: "Binary Search Trees",
    summary: "Ordered binary trees supporting search, insert, and delete in logarithmic time when balanced.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "p33CV829OG8",
    videoTitle: "Binary search trees",
    references: [
      {
        label: "Wikipedia: Binary search tree",
        url: "https://en.wikipedia.org/wiki/Binary_search_tree",
      },
    ],
    notes: [
      section(
        "Ordered property",
        [
          "In a BST, left descendants are smaller and right descendants are larger than the current node.",
          "Inorder traversal yields sorted values.",
        ],
        {
          keyTakeaways: [
            "Search in O(h) time",
            "Insert and delete follow search path",
            "Balance affects performance",
          ],
        }
      ),
      section(
        "Common operations",
        [],
        {
          bullets: [
            "Search for a value",
            "Find minimum and maximum",
            "Validate BST property",
            "Lowest common ancestor",
          ],
          keyTakeaways: [
            "Use recursion or iteration",
            "Check edge cases carefully",
          ],
        }
      ),
    ],
  },

  {
    slug: "heaps-priority-queues",
    title: "Heaps & Priority Queues",
    summary: "Efficiently retrieve the smallest or largest priority item.",
    estimatedHours: 7,
    difficulty: "Intermediate",
    videoId: "t0Cq6tVNRBA",
    videoTitle: "Heaps and priority queues",
    references: [
      {
        label: "Wikipedia: Heap",
        url: "https://en.wikipedia.org/wiki/Heap_(data_structure)",
      },
    ],
    notes: [
      section(
        "Priority over full order",
        [
          "A heap keeps the smallest or largest priority item at the top without sorting every element. Reading the top is O(1), and insert or remove operations are usually O(log n).",
          "Heaps are especially useful when you repeatedly need the next best item.",
        ],
        {
          keyTakeaways: [
            "Peek is O(1)",
            "Push and pop are O(log n)",
            "Use a min-heap or max-heap intentionally",
          ],
        }
      ),
      section(
        "Important applications",
        [],
        {
          bullets: [
            "Top-K values",
            "Task scheduling",
            "Merging sorted lists",
            "Streaming median",
            "Dijkstra shortest paths",
          ],
          keyTakeaways: [
            "Important for backend roles",
            "A heap can avoid sorting the entire input",
          ],
        }
      ),
    ],
  },

  {
    slug: "graph-representation",
    title: "Graph Representation",
    summary: "Model nodes and edges using adjacency lists, matrices, or edge lists.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "09_LlHjoEiY",
    videoTitle: "Graph representations",
    references: [
      {
        label: "Wikipedia: Graph (abstract data type)",
        url: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",
      },
    ],
    notes: [
      section(
        "Model connections",
        [
          "Graphs represent relationships between nodes. Common forms include adjacency lists, adjacency matrices, grids, and edge lists.",
          "Most graph problems use DFS, BFS, a visited set, and careful handling of cycles.",
        ],
        {
          keyTakeaways: [
            "Adjacency lists are common",
            "Track visited nodes",
            "Model directed and undirected edges correctly",
          ],
        }
      ),
      section(
        "BFS and DFS",
        [
          "DFS explores deeply using recursion or a stack. BFS explores level by level using a queue and finds shortest paths in unweighted graphs.",
        ],
        {
          keyTakeaways: [
            "DFS: stack or recursion",
            "BFS: queue",
            "BFS for unweighted shortest paths",
          ],
        }
      ),
    ],
  },

  {
    slug: "depth-first-search",
    title: "Depth-First Search",
    summary: "Explore a graph by going as deep as possible before backtracking.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "Urx87-NMm6c",
    videoTitle: "DFS on graphs",
    references: [
      {
        label: "Wikipedia: DFS",
        url: "https://en.wikipedia.org/wiki/Depth-first_search",
      },
    ],
    notes: [
      section(
        "Go deep first",
        [
          "DFS visits a node, then recursively visits unvisited neighbors. It uses a stack or recursion.",
        ],
        {
          keyTakeaways: [
            "Use for path existence",
            "Use for component counting",
            "Track visited nodes",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Cycle detection",
            "Topological sort",
            "Connected components",
            "Maze solving",
          ],
          keyTakeaways: [
            "Backtrack when stuck",
            "Use recursion carefully",
          ],
        }
      ),
    ],
  },

  {
    slug: "breadth-first-search",
    title: "Breadth-First Search",
    summary: "Explore a graph level by level using a queue.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "s-CYnVz-uh4",
    videoTitle: "BFS on graphs",
    references: [
      {
        label: "Wikipedia: BFS",
        url: "https://en.wikipedia.org/wiki/Breadth-first_search",
      },
    ],
    notes: [
      section(
        "Level by level",
        [
          "BFS uses a queue to visit nodes in order of distance from the start. It finds shortest paths in unweighted graphs.",
        ],
        {
          keyTakeaways: [
            "Use a queue",
            "Track distance or steps",
            "Mark nodes visited when enqueued",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Shortest path in unweighted graph",
            "Level order traversal",
            "Word ladder",
            "Rotten oranges",
          ],
          keyTakeaways: [
            "BFS guarantees shortest unweighted path",
            "Use visited set to avoid cycles",
          ],
        }
      ),
    ],
  },

  {
    slug: "topological-sort",
    title: "Topological Sort",
    summary: "Order tasks with dependencies so each task comes after its prerequisites.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "eL-KzMXSXXI",
    videoTitle: "Topological sort explained",
    references: [
      {
        label: "Wikipedia: Topological sorting",
        url: "https://en.wikipedia.org/wiki/Topological_sorting",
      },
    ],
    notes: [
      section(
        "Dependency ordering",
        [
          "Topological sort orders nodes in a directed acyclic graph so that every edge goes from earlier to later.",
          "Use DFS postorder or Kahn's algorithm with in-degree counts.",
        ],
        {
          keyTakeaways: [
            "Only possible for DAGs",
            "Detect cycles if no order exists",
            "Use for scheduling tasks",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Course schedule",
            "Build systems",
            "Task scheduling",
            "Dependency resolution",
          ],
          keyTakeaways: [
            "Model prerequisites as edges",
            "Use BFS or DFS approach",
          ],
        }
      ),
    ],
  },

  {
    slug: "union-find",
    title: "Union-Find",
    summary: "Track connected components as relationships or edges are added.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "wU6udHRIkcc",
    videoTitle: "Disjoint set union",
    references: [
      {
        label: "Wikipedia: Disjoint-set data structure",
        url: "https://en.wikipedia.org/wiki/Disjoint-set_data_structure",
      },
    ],
    notes: [
      section(
        "Groups and representatives",
        [
          "Union-Find stores a parent representative for each item. Find identifies the group, and union joins two groups.",
          "Path compression and union by rank keep operations extremely fast in practice.",
        ],
        {
          keyTakeaways: [
            "Fast dynamic connectivity",
            "Path compression flattens parent chains",
            "Union by rank keeps trees shallow",
          ],
        }
      ),
      section(
        "When to use it",
        [],
        {
          bullets: [
            "Count connected components",
            "Cycle detection in undirected graphs",
            "Minimum spanning trees",
            "Grouping linked accounts or devices",
          ],
          keyTakeaways: [
            "Use when edges merge groups",
            "Different from DFS and BFS traversal",
          ],
        }
      ),
    ],
  },

  {
    slug: "dijkstra-algorithm",
    title: "Dijkstra's Algorithm",
    summary: "Find shortest paths from a source in a weighted graph with non-negative edges.",
    estimatedHours: 7,
    difficulty: "Advanced",
    videoId: "pVfj6mxhdMw",
    videoTitle: "Dijkstra's algorithm",
    references: [
      {
        label: "Wikipedia: Dijkstra's algorithm",
        url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
      },
    ],
    notes: [
      section(
        "Shortest weighted paths",
        [
          "Dijkstra's algorithm uses a priority queue to expand the closest unvisited node. It updates distances to neighbors.",
        ],
        {
          keyTakeaways: [
            "Non-negative edge weights only",
            "O((V + E) log V) with a heap",
            "Track distances and predecessors",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Network routing",
            "Map shortest paths",
            "Game pathfinding",
            "Minimum cost paths",
          ],
          keyTakeaways: [
            "Use a min-heap",
            "Initialize distances to infinity",
          ],
        }
      ),
    ],
  },

  {
    slug: "minimum-spanning-tree",
    title: "Minimum Spanning Tree",
    summary: "Connect all nodes with minimum total edge weight using Kruskal or Prim.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "71UQH7Pr9kU",
    videoTitle: "MST algorithms",
    references: [
      {
        label: "Wikipedia: Minimum spanning tree",
        url: "https://en.wikipedia.org/wiki/Minimum_spanning_tree",
      },
    ],
    notes: [
      section(
        "Cheapest connections",
        [
          "An MST connects all nodes with minimum total edge weight. Kruskal uses Union-Find with sorted edges. Prim grows a tree from a start node.",
        ],
        {
          keyTakeaways: [
            "No cycles in MST",
            "Unique if edge weights are distinct",
            "Use for network design",
          ],
        }
      ),
      section(
        "Algorithms",
        [],
        {
          bullets: [
            "Kruskal with Union-Find",
            "Prim with priority queue",
            "Boruvka's algorithm",
          ],
          keyTakeaways: [
            "Sort edges for Kruskal",
            "Use heap for Prim",
          ],
        }
      ),
    ],
  },

  {
    slug: "greedy-algorithms",
    title: "Greedy Algorithms",
    summary: "Make a locally best choice when it can be proven globally correct.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "bC7o8P_Ste4",
    videoTitle: "Greedy algorithm intuition",
    references: [
      {
        label: "Wikipedia: Greedy algorithm",
        url: "https://en.wikipedia.org/wiki/Greedy_algorithm",
      },
    ],
    notes: [
      section(
        "A safe local choice",
        [
          "Greedy algorithms choose the best available local option. The key challenge is proving that the local choice never blocks an optimal final answer.",
          "Many greedy solutions begin by sorting intervals, values, or events.",
        ],
        {
          keyTakeaways: [
            "Greedy is not guessing",
            "Correctness needs reasoning",
            "Often combines with sorting or heaps",
          ],
        }
      ),
      section(
        "Greedy versus DP",
        [
          "Use greedy when one local decision is always safe. Use dynamic programming when several earlier decisions may lead to different optimal futures.",
        ],
        {
          keyTakeaways: [
            "Test counterexamples",
            "Use DP when greedy can fail",
          ],
        }
      ),
    ],
  },

  {
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    summary: "Reuse answers to overlapping subproblems through states and transitions.",
    estimatedHours: 10,
    difficulty: "Advanced",
    videoId: "OQ5jsbhAv_M",
    videoTitle: "Dynamic programming fundamentals",
    references: [
      {
        label: "Wikipedia: Dynamic programming",
        url: "https://en.wikipedia.org/wiki/Dynamic_programming",
      },
    ],
    notes: [
      section(
        "The DP question",
        [
          "Dynamic programming fits problems with overlapping subproblems and optimal substructure. Define a state, base cases, and a transition.",
          "Memoization solves recursively and caches results. Tabulation fills answers from smaller states upward.",
        ],
        {
          keyTakeaways: [
            "Define what dp state means",
            "Write base cases first",
            "Reuse earlier answers",
          ],
        }
      ),
      section(
        "Common families",
        [],
        {
          bullets: [
            "Climbing stairs",
            "Knapsack choices",
            "Coin change",
            "Longest increasing subsequence",
            "Grid paths",
          ],
          keyTakeaways: [
            "Start from brute-force recursion",
            "Cache repeated states",
            "Optimize space when possible",
          ],
        }
      ),
    ],
  },

  {
    slug: "tries",
    title: "Tries",
    summary: "Store strings by shared prefixes for fast word and prefix queries.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "oobqoCJlHA0",
    videoTitle: "Trie data structure",
    references: [
      {
        label: "Wikipedia: Trie",
        url: "https://en.wikipedia.org/wiki/Trie",
      },
    ],
    notes: [
      section(
        "A prefix tree",
        [
          "A trie stores characters along paths. Words with the same beginning share nodes for that prefix.",
          "Search time depends mainly on word length, which makes tries useful for repeated prefix queries.",
        ],
        {
          keyTakeaways: [
            "Efficient prefix lookup",
            "Mark word endings separately",
            "Uses more memory than a hash set",
          ],
        }
      ),
      section(
        "Use cases",
        [],
        {
          bullets: [
            "Autocomplete",
            "Dictionary search",
            "Prefix filters",
            "Word-search boards",
          ],
          keyTakeaways: [
            "Separate word search from prefix search",
            "Useful for string-heavy systems",
          ],
        }
      ),
    ],
  },

  {
    slug: "string-hashing",
    title: "String Hashing",
    summary: "Represent strings as numeric hashes for fast comparison and substring checks.",
    estimatedHours: 5,
    difficulty: "Advanced",
    videoId: "VPV98o0MPh4",
    videoTitle: "String hashing and Rabin-Karp",
    references: [
      {
        label: "GeeksforGeeks: Rabin-Karp",
        url: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
      },
    ],
    notes: [
      section(
        "Hash strings",
        [
          "String hashing converts a string into a numeric value. Equal strings produce equal hashes, while different strings usually differ.",
          "Rolling hashes allow fast substring hash updates.",
        ],
        {
          keyTakeaways: [
            "Use for pattern matching",
            "Handle collisions carefully",
            "Use modulo arithmetic",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Rabin-Karp search",
            "Duplicate substring detection",
            "Longest common substring variants",
          ],
          keyTakeaways: [
            "Precompute prefix hashes",
            "Use large prime moduli",
          ],
        }
      ),
    ],
  },

  {
    slug: "kmp-algorithm",
    title: "KMP Algorithm",
    summary: "Search for a pattern in text in linear time using failure links.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "V5-7GzOfADQ",
    videoTitle: "KMP pattern matching",
    references: [
      {
        label: "Wikipedia: KMP",
        url: "https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm",
      },
    ],
    notes: [
      section(
        "Avoid rechecking",
        [
          "KMP precomputes a failure function for the pattern. It skips characters that are guaranteed to match.",
        ],
        {
          keyTakeaways: [
            "O(n + m) time",
            "Use for repeated pattern search",
            "Preprocess the pattern",
          ],
        }
      ),
      section(
        "When to use",
        [],
        {
          bullets: [
            "Multiple pattern occurrences",
            "Large text with small pattern",
            "Streaming text",
          ],
          keyTakeaways: [
            "Better than naive search for long texts",
            "Understand failure function",
          ],
        }
      ),
    ],
  },

  {
    slug: "math-basics",
    title: "Math Basics",
    summary: "GCD, LCM, primes, modular arithmetic, and fast exponentiation.",
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "ju36kH8v2Ww",
    videoTitle: "Number theory basics",
    references: [
      {
        label: "GeeksforGeeks: Number theory",
        url: "https://www.geeksforgeeks.org/number-theory/",
      },
    ],
    notes: [
      section(
        "Core concepts",
        [
          "GCD and LCM describe relationships between integers. Primes and factorization are central to many algorithms.",
        ],
        {
          keyTakeaways: [
            "Euclidean algorithm for GCD",
            "Sieve for primes",
            "Modular arithmetic for large numbers",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Prime checking",
            "Factorization",
            "Modular inverse",
            "Fast exponentiation",
          ],
          keyTakeaways: [
            "Useful in cryptography",
            "Common in competitive programming",
          ],
        }
      ),
    ],
  },

  {
    slug: "bitmasking",
    title: "Bitmasking",
    summary: "Represent sets and states using bits for compact DP and combinatorics.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "1O6Qstncpnc",
    videoTitle: "Bitmask DP introduction",
    references: [
      {
        label: "GeeksforGeeks: Bitmask DP",
        url: "https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1/",
      },
    ],
    notes: [
      section(
        "Sets as integers",
        [
          "A bitmask uses each bit to represent membership in a set. This allows compact state representation in DP.",
        ],
        {
          keyTakeaways: [
            "Use for small sets",
            "Iterate over subsets",
            "Combine with DP",
          ],
        }
      ),
      section(
        "Common uses",
        [],
        {
          bullets: [
            "Traveling salesman variants",
            "Subset DP",
            "Assignment problems",
          ],
          keyTakeaways: [
            "Limit to small n",
            "Use bit operations efficiently",
          ],
        }
      ),
    ],
  },

  {
    slug: "fenwick-tree",
    title: "Fenwick Tree",
    summary: "Efficient prefix sums with point updates using a binary indexed tree.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "CWDQYN44xh4",
    videoTitle: "Fenwick tree basics",
    references: [
      {
        label: "GeeksforGeeks: Fenwick tree",
        url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/",
      },
    ],
    notes: [
      section(
        "Prefix sums with updates",
        [
          "A Fenwick tree supports point updates and prefix sum queries in O(log n) time.",
        ],
        {
          keyTakeaways: [
            "Use 1-based indexing",
            "Update and query in O(log n)",
            "Simpler than segment tree",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Range sum queries",
            "Frequency counts",
            "Inversion counting",
          ],
          keyTakeaways: [
            "Use for dynamic prefix sums",
            "Understand bit operations",
          ],
        }
      ),
    ],
  },

  {
    slug: "segment-tree",
    title: "Segment Tree",
    summary: "Range queries and updates on intervals using a tree of segments.",
    estimatedHours: 8,
    difficulty: "Advanced",
    videoId: "ZBHKZKw5Q-Q",
    videoTitle: "Segment tree introduction",
    references: [
      {
        label: "GeeksforGeeks: Segment tree",
        url: "https://www.geeksforgeeks.org/segment-tree-data-structure/",
      },
    ],
    notes: [
      section(
        "Interval tree",
        [
          "A segment tree stores information about intervals. It supports range queries and point or range updates in O(log n) time.",
        ],
        {
          keyTakeaways: [
            "Build in O(n)",
            "Query and update in O(log n)",
            "Use for range min/max/sum",
          ],
        }
      ),
      section(
        "Advanced features",
        [],
        {
          bullets: [
            "Lazy propagation",
            "Persistent segment tree",
            "2D segment tree",
          ],
          keyTakeaways: [
            "Use for complex range operations",
            "More flexible than Fenwick tree",
          ],
        }
      ),
    ],
  },

  {
    slug: "prime-numbers",
    title: "Prime Numbers",
    summary: "Generate and test primes using sieves and factorization.",
    estimatedHours: 5,
    difficulty: "Intermediate",
    videoId: "fb4oZwS4VhQ",
    videoTitle: "Prime numbers and sieves",
    references: [
      {
        label: "GeeksforGeeks: Sieve of Eratosthenes",
        url: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/",
      },
    ],
    notes: [
      section(
        "Efficient prime generation",
        [
          "The Sieve of Eratosthenes marks multiples of each prime to find all primes up to n in O(n log log n) time.",
        ],
        {
          keyTakeaways: [
            "Use for many prime queries",
            "Precompute primes once",
            "Use for factorization",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Prime counting",
            "Factorization",
            "GCD and LCM with primes",
          ],
          keyTakeaways: [
            "Useful in number theory",
            "Common in competitive programming",
          ],
        }
      ),
    ],
  },

  {
    slug: "modular-arithmetic",
    title: "Modular Arithmetic",
    summary: "Perform arithmetic under a modulus for large numbers and cryptography.",
    estimatedHours: 5,
    difficulty: "Advanced",
    videoId: "FnQqbqz5wzI",
    videoTitle: "Modular arithmetic basics",
    references: [
      {
        label: "GeeksforGeeks: Modular arithmetic",
        url: "https://www.geeksforgeeks.org/modular-arithmetic/",
      },
    ],
    notes: [
      section(
        "Work with remainders",
        [
          "Modular arithmetic keeps numbers within a fixed range. It is essential for large-number problems and cryptography.",
        ],
        {
          keyTakeaways: [
            "(a + b) mod m = ((a mod m) + (b mod m)) mod m",
            "Use fast exponentiation",
            "Compute modular inverse when needed",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Large factorials",
            "Combinatorics modulo m",
            "RSA and cryptography",
          ],
          keyTakeaways: [
            "Use prime modulus for inverses",
            "Avoid overflow",
          ],
        }
      ),
    ],
  },

  {
    slug: "combinatorics",
    title: "Combinatorics",
    summary: "Count arrangements, selections, and permutations using formulas and DP.",
    estimatedHours: 6,
    difficulty: "Advanced",
    videoId: "XjQJ5v4h0fM",
    videoTitle: "Combinatorics for programming",
    references: [
      {
        label: "GeeksforGeeks: Combinatorics",
        url: "https://www.geeksforgeeks.org/combinatorics/",
      },
    ],
    notes: [
      section(
        "Counting principles",
        [
          "Combinatorics counts ways to arrange or select items. Common formulas include nCr, nPr, and inclusion-exclusion.",
        ],
        {
          keyTakeaways: [
            "Use factorials and combinations",
            "Apply modulo for large counts",
            "Use DP for constrained counting",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Probability calculations",
            "Grid path counting",
            "Subset and permutation counting",
          ],
          keyTakeaways: [
            "Derive formulas carefully",
            "Check edge cases",
          ],
        }
      ),
    ],
  },

  {
    slug: "computational-geometry",
    title: "Computational Geometry",
    summary: "Points, lines, polygons, and convex hulls for geometric algorithms.",
    estimatedHours: 7,
    difficulty: "Advanced",
    videoId: "BrebF4oZ9qg",
    videoTitle: "Computational geometry basics",
    references: [
      {
        label: "GeeksforGeeks: Geometry",
        url: "https://www.geeksforgeeks.org/geometry/",
      },
    ],
    notes: [
      section(
        "Geometric primitives",
        [
          "Computational geometry deals with points, lines, segments, and polygons. Common tasks include intersection, distance, and hulls.",
        ],
        {
          keyTakeaways: [
            "Use cross products",
            "Handle floating-point carefully",
            "Use integer arithmetic when possible",
          ],
        }
      ),
      section(
        "Common problems",
        [],
        {
          bullets: [
            "Convex hull",
            "Line intersection",
            "Closest pair of points",
            "Polygon area",
          ],
          keyTakeaways: [
            "Visualize before coding",
            "Test edge cases",
          ],
        }
      ),
    ],
  },

  {
    slug: "randomized-algorithms",
    title: "Randomized Algorithms",
    summary: "Use randomness for expected fast performance or simpler logic.",
    estimatedHours: 5,
    difficulty: "Advanced",
    videoId: "pHo85vC5Mx0",
    videoTitle: "Randomized algorithms overview",
    references: [
      {
        label: "Wikipedia: Randomized algorithm",
        url: "https://en.wikipedia.org/wiki/Randomized_algorithm",
      },
    ],
    notes: [
      section(
        "Expected efficiency",
        [
          "Randomized algorithms use random choices to achieve good expected performance. Examples include randomized quicksort and hashing.",
        ],
        {
          keyTakeaways: [
            "Analyze expected time",
            "Use for average-case speed",
            "Avoid worst-case inputs",
          ],
        }
      ),
      section(
        "Applications",
        [],
        {
          bullets: [
            "Randomized quicksort",
            "Hashing",
            "Monte Carlo methods",
            "Random sampling",
          ],
          keyTakeaways: [
            "Use random pivots",
            "Understand probability",
          ],
        }
      ),
    ],
  },
];

// ============================================================
// TOPIC LOOKUP
// ============================================================

TOPICS.forEach((topic) => {
  if (!Array.isArray(topic.notes)) topic.notes = [];
});

export const TOPIC_BY_SLUG = Object.fromEntries(
  TOPICS.map((topic) => [topic.slug, topic])
);

const FALLBACK_REFERENCE = {
  label: "Wikipedia: Algorithms and data structures",
  url: "https://en.wikipedia.org/wiki/Algorithm",
};

export const ALL_TOPICS = DSA_MASTER_TOPICS.map((slug) => {
  const topic = TOPIC_BY_SLUG[slug];
  if (topic) return topic;
  return {
    slug,
    title: slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    summary: `Build practical understanding of ${slug.replaceAll("-", " ")}.`,
    estimatedHours: 6,
    difficulty: "Intermediate",
    videoId: "",
    videoTitle: "",
    references: [FALLBACK_REFERENCE],
    notes: [
      section("Core idea", [`Study the main concepts, operations, and tradeoffs of ${slug.replaceAll("-", " ")}.`]),
      section("Practice focus", [], { bullets: ["Explain the idea in your own words", "Trace a small example", "Compare time and space complexity"] }),
    ],
  };
});

export const LANGUAGES = ["JavaScript", "Python", "Java", "C++"];

export const FIELDS = [
  "Computer Science",
  "Information Technology",
  "Software Engineering",
  "Data Science",
  "Cybersecurity",
];

export const CAREERS = [
  { id: "software_developer", label: "Software Developer", blurb: "Build products and solve a broad range of engineering problems." },
  { id: "backend_engineer", label: "Backend Engineer", blurb: "Design reliable services, APIs, and data-heavy systems." },
  { id: "data_analyst", label: "Data Analyst", blurb: "Turn data into clear findings and better decisions." },
  { id: "cybersecurity", label: "Cybersecurity", blurb: "Analyze systems, threats, and secure computing patterns." },
  { id: "competitive_programming", label: "Competitive Programming", blurb: "Develop speed and depth across advanced algorithmic problems." },
];

export const PACE = [
  { id: "relaxed", label: "Relaxed", blurb: "A steady four hours each week." },
  { id: "steady", label: "Steady", blurb: "A consistent eight-hour weekly rhythm." },
  { id: "intense", label: "Intense", blurb: "A focused fourteen-hour weekly sprint." },
];

export const DSA_LEVELS = [
  { id: "beginner", label: "Beginner", blurb: "Start with programming and core data structures." },
  { id: "intermediate", label: "Intermediate", blurb: "Build fluency with common patterns and structures." },
  { id: "advanced", label: "Advanced", blurb: "Work through advanced algorithms and specialist topics." },
];

// The detailed content file currently contains 46 fully written topics.
// The master registry contains the complete basic-to-advanced curriculum.
// This combined list lets the roadmap use every canonical topic without
// inventing educational notes for topics that have not yet been authored.

export const TOPICS_WITH_CONTENT_STATUS = DSA_MASTER_TOPICS.map((slug) => ({
  slug,
  hasDetailedContent: Boolean(TOPIC_BY_SLUG[slug]),
  topic: TOPIC_BY_SLUG[slug] || null,
}));

// ============================================================
// CORE CURRICULUM
// Required foundation for every software-related learner.
// ============================================================

export const CORE_DSA_CURRICULUM = [
  "programming-basics",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "debugging",
  "testing",
  "time-complexity",
  "space-complexity",
  "asymptotic-analysis",
  "arrays",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "linear-search",
  "sorting-basics",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "kadane-algorithm",
  "intervals",
  "monotonic-stack",
  "bit-manipulation",
  "linked-lists",
  "stacks",
  "queues",
  "deques",
  "recursion",
  "backtracking",
  "divide-and-conquer",
  "binary-trees",
  "tree-traversals",
  "binary-search-trees",
  "heaps-priority-queues",
  "graph-representation",
  "depth-first-search",
  "breadth-first-search",
  "graph-cycle-detection",
  "topological-sort",
  "union-find",
  "dijkstra-algorithm",
  "greedy-algorithms",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "tries",
  "string-hashing",
];

// ============================================================
// CAREER ROADMAPS
// Ordered from highest-value foundations toward career-specific depth.
// ============================================================

export const SOFTWARE_DEVELOPER_ROADMAP = [
  ...CORE_DSA_CURRICULUM,
  "binary-search-variants",
  "merge-intervals",
  "monotonic-queue",
  "tree-height-depth-diameter",
  "lowest-common-ancestor",
  "tree-path-problems",
  "top-k-problems",
  "median-from-data-stream",
  "connected-components",
  "bipartite-graphs",
  "shortest-path-unweighted",
  "minimum-spanning-tree",
  "kruskal-algorithm",
  "prim-algorithm",
  "1d-dynamic-programming",
  "2d-dynamic-programming",
  "knapsack",
  "longest-common-subsequence",
  "longest-increasing-subsequence",
  "edit-distance",
  "kmp-algorithm",
  "rabin-karp",
];

export const BACKEND_ENGINEER_ROADMAP = [
  "programming-basics",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "time-complexity",
  "space-complexity",
  "arrays",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "sorting-basics",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "intervals",
  "stacks",
  "queues",
  "deques",
  "heaps-priority-queues",
  "top-k-problems",
  "median-from-data-stream",
  "linked-lists",
  "recursion",
  "binary-trees",
  "binary-search-trees",
  "tries",
  "graph-representation",
  "depth-first-search",
  "breadth-first-search",
  "topological-sort",
  "course-schedule-pattern",
  "dijkstra-algorithm",
  "union-find",
  "minimum-spanning-tree",
  "greedy-algorithms",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "monotonic-stack",
  "string-hashing",
  "bit-manipulation",
];

export const DATA_ANALYST_ROADMAP = [
  "programming-basics",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "time-complexity",
  "space-complexity",
  "arrays",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "frequency-arrays",
  "sorting-basics",
  "merge-sort",
  "quick-sort",
  "counting-sort",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "difference-arrays",
  "kadane-algorithm",
  "intervals",
  "heaps-priority-queues",
  "top-k-problems",
  "median-from-data-stream",
  "greedy-algorithms",
  "dynamic-programming",
  "memoization",
  "tabulation",
  "binary-trees",
  "binary-search-trees",
  "graph-representation",
  "connected-components",
  "union-find",
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "probability-basics",
  "combinatorics",
];

export const CYBERSECURITY_ROADMAP = [
  "programming-basics",
  "input-output",
  "variables-data-types",
  "conditionals",
  "loops",
  "functions",
  "time-complexity",
  "space-complexity",
  "arrays",
  "2d-arrays-matrices",
  "strings",
  "hashing",
  "hashmaps",
  "hashsets",
  "frequency-arrays",
  "bit-manipulation",
  "bitmasking",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "prefix-sums",
  "stacks",
  "queues",
  "deques",
  "linked-lists",
  "recursion",
  "tries",
  "string-hashing",
  "rabin-karp",
  "kmp-algorithm",
  "binary-trees",
  "heaps-priority-queues",
  "graph-representation",
  "depth-first-search",
  "breadth-first-search",
  "graph-cycle-detection",
  "connected-components",
  "topological-sort",
  "dijkstra-algorithm",
  "union-find",
  "greedy-algorithms",
  "dynamic-programming",
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "modular-arithmetic",
  "fast-exponentiation",
];

export const COMPETITIVE_PROGRAMMING_ROADMAP = [
  ...CORE_DSA_CURRICULUM,
  "merge-sort",
  "quick-sort",
  "heap-sort",
  "counting-sort",
  "radix-sort",
  "bucket-sort",
  "binary-search-variants",
  "lower-upper-bound",
  "search-in-rotated-array",
  "difference-arrays",
  "sweep-line",
  "monotonic-queue",
  "bitmasking",
  "doubly-linked-lists",
  "circular-linked-lists",
  "circular-queues",
  "permutations",
  "combinations",
  "n-queens",
  "sudoku-solver",
  "word-search",
  "balanced-trees",
  "avl-trees",
  "red-black-trees",
  "lowest-common-ancestor",
  "tree-serialization",
  "merge-k-sorted-lists",
  "connected-components",
  "bipartite-graphs",
  "bellman-ford",
  "floyd-warshall",
  "minimum-spanning-tree",
  "kruskal-algorithm",
  "prim-algorithm",
  "strongly-connected-components",
  "bridges-and-articulation-points",
  "network-flow-basics",
  "interval-scheduling",
  "activity-selection",
  "jump-game-pattern",
  "fractional-knapsack",
  "1d-dynamic-programming",
  "2d-dynamic-programming",
  "knapsack",
  "unbounded-knapsack",
  "subset-sum",
  "coin-change",
  "longest-common-subsequence",
  "longest-increasing-subsequence",
  "edit-distance",
  "matrix-chain-multiplication",
  "interval-dynamic-programming",
  "tree-dynamic-programming",
  "bitmask-dynamic-programming",
  "digit-dynamic-programming",
  "rabin-karp",
  "kmp-algorithm",
  "z-algorithm",
  "manacher-algorithm",
  "suffix-array",
  "suffix-tree",
  "fenwick-tree",
  "segment-tree",
  "lazy-propagation",
  "sparse-table",
  "sqrt-decomposition",
  "range-minimum-query",
  "ordered-sets",
  "disjoint-set-union",
  "prime-numbers",
  "sieve-of-eratosthenes",
  "modular-arithmetic",
  "fast-exponentiation",
  "modular-inverse",
  "combinatorics",
  "permutations-combinations",
  "computational-geometry",
  "randomized-algorithms",
  "game-theory-basics",
];

// ============================================================
// CAREER PRIORITY MAP
// ============================================================

export const CAREER_PRIORITY = {
  software_developer: SOFTWARE_DEVELOPER_ROADMAP,
  backend_engineer: BACKEND_ENGINEER_ROADMAP,
  data_analyst: DATA_ANALYST_ROADMAP,
  cybersecurity: CYBERSECURITY_ROADMAP,
  competitive_programming: COMPETITIVE_PROGRAMMING_ROADMAP,
};

// Friendly aliases so callers can use common career labels.
export const CAREER_ALIASES = {
  "Software Developer": "software_developer",
  "Backend Engineer": "backend_engineer",
  "Data Analyst": "data_analyst",
  Cybersecurity: "cybersecurity",
  "Competitive Programming": "competitive_programming",
};

// ============================================================
// LEGACY/CANONICAL SLUG COMPATIBILITY
// ============================================================

export const LEGACY_TOPIC_ALIASES = {
  graphs: "graph-representation",
  "number-theory": "math-basics",
};

// ============================================================
// REQUIRED TOPICS THAT WERE PREVIOUSLY MISSING FROM THE CORE TRACK
// ============================================================

export const REQUIRED_MISSING_TOPICS = [
  "programming-basics",
  "time-complexity",
  "space-complexity",
  "2d-arrays-matrices",
  "binary-search-variants",
  "kadane-algorithm",
  "intervals",
  "monotonic-stack",
  "monotonic-queue",
  "binary-search-trees",
  "topological-sort",
  "dijkstra-algorithm",
  "minimum-spanning-tree",
  "graph-cycle-detection",
  "string-hashing",
  "kmp-algorithm",
  "math-basics",
  "gcd-lcm",
  "prime-numbers",
  "modular-arithmetic",
];

// ============================================================
// ROADMAP LEVEL DEFINITIONS
// ============================================================

export const ROADMAP_LEVELS = {
  core: "Required for every learner and every software-related career.",
  careerAdvanced: "Required only when relevant to the selected career goal.",
  specialist:
    "Optional for competitive programming, research, systems, and advanced university work.",
};

// ============================================================
// STUDY PACE SETTINGS
// ============================================================

export const PACE_SETTINGS = {
  relaxed: {
    hoursPerWeek: 4,
    sessionsPerWeek: 3,
    sessionMinutes: 80,

    topicsPerWeek: 1,
    lessonsPerTopic: 2,
    questionsPerWeek: 8,

    easyQuestionsPerTopic: 6,
    mediumQuestionsPerTopic: 2,
    hardQuestionsPerTopic: 0,

    revisionSessionsPerWeek: 2,
    mockInterviewsPerMonth: 0,

    explanationDepth: "detailed",
    maxHintsBeforeSolution: 50,

    estimatedMonthsForCore: 10,
    estimatedMonthsForFullTrack: 14,
  },

  steady: {
    hoursPerWeek: 8,
    sessionsPerWeek: 4,
    sessionMinutes: 120,

    topicsPerWeek: 2,
    lessonsPerTopic: 2,
    questionsPerWeek: 16,

    easyQuestionsPerTopic: 6,
    mediumQuestionsPerTopic: 5,
    hardQuestionsPerTopic: 1,

    revisionSessionsPerWeek: 1,
    mockInterviewsPerMonth: 1,

    explanationDepth: "standard",
    maxHintsBeforeSolution: 50,

    estimatedMonthsForCore: 6,
    estimatedMonthsForFullTrack: 9,
  },

  intense: {
    hoursPerWeek: 14,
    sessionsPerWeek: 6,
    sessionMinutes: 140,

    topicsPerWeek: 3,
    lessonsPerTopic: 1,
    questionsPerWeek: 28,

    easyQuestionsPerTopic: 5,
    mediumQuestionsPerTopic: 8,
    hardQuestionsPerTopic: 3,

    revisionSessionsPerWeek: 2,
    mockInterviewsPerMonth: 2,

    explanationDepth: "concise",
    maxHintsBeforeSolution: 50,

    estimatedMonthsForCore: 3,
    estimatedMonthsForFullTrack: 5,
  },
};

// ============================================================
// LEARNER LEVEL SETTINGS
// ============================================================

export const LEVEL_SETTINGS = {
  beginner: {
    startTopics: [
      "programming-basics",
      "arrays",
      "input-output",
      "variables-data-types",
      "conditionals",
      "loops",
      "functions",
      "time-complexity",
      "space-complexity",
      "strings",
      "hashing",
      "sorting-basics",
      "two-pointers",
      "sliding-window",
      "prefix-sums",
    ],
    questionDifficultyMix: {
      Easy: 0.85,
      Medium: 0.15,
      Hard: 0,
    },
    unlockRule: {
      minimumTopicProgress: 0.7,
      minimumEasyAccuracy: 0.65,
      minimumQuestionsCompleted: 5,
    },
  },

  intermediate: {
    startTopics: [
      "binary-search",
      "linked-lists",
      "stacks",
      "queues",
      "recursion",
      "backtracking",
      "binary-trees",
      "binary-search-trees",
      "heaps-priority-queues",
      "graph-representation",
      "depth-first-search",
      "breadth-first-search",
      "greedy-algorithms",
      "dynamic-programming",
    ],
    questionDifficultyMix: {
      Easy: 0.45,
      Medium: 0.45,
      Hard: 0.1,
    },
    unlockRule: {
      minimumTopicProgress: 0.75,
      minimumEasyAccuracy: 0.7,
      minimumQuestionsCompleted: 8,
    },
  },

  advanced: {
    startTopics: [
      "topological-sort",
      "union-find",
      "dijkstra-algorithm",
      "minimum-spanning-tree",
      "tries",
      "string-hashing",
      "kmp-algorithm",
      "bitmasking",
      "fenwick-tree",
      "segment-tree",
      "modular-arithmetic",
      "combinatorics",
      "computational-geometry",
      "randomized-algorithms",
    ],
    questionDifficultyMix: {
      Easy: 0.2,
      Medium: 0.55,
      Hard: 0.25,
    },
    unlockRule: {
      minimumTopicProgress: 0.8,
      minimumEasyAccuracy: 0.75,
      minimumQuestionsCompleted: 10,
    },
  },
};

// ============================================================
// ROADMAP GENERATION
// ============================================================

export function generateRoadmap({
  career = "software_developer",
  pace = "steady",
  level = "beginner",
} = {}) {
  const normalizedCareer = CAREER_ALIASES[career] || career;
  const paceConfig = PACE_SETTINGS[pace] || PACE_SETTINGS.steady;
  const levelConfig = LEVEL_SETTINGS[level] || LEVEL_SETTINGS.beginner;

  const careerTopics =
    CAREER_PRIORITY[normalizedCareer] || SOFTWARE_DEVELOPER_ROADMAP;
  const startTopics = levelConfig.startTopics || [];

  const orderedTopics = [
    ...new Set([
      ...startTopics,
      ...careerTopics,
    ]),
  ];

  const weeks = [];

  for (
    let index = 0;
    index < orderedTopics.length;
    index += paceConfig.topicsPerWeek
  ) {
    const weeklyTopics = orderedTopics.slice(
      index,
      index + paceConfig.topicsPerWeek
    );

    const weekNumber =
      Math.floor(index / paceConfig.topicsPerWeek) + 1;

    weeks.push({
      week: weekNumber,
      topics: weeklyTopics,

      studyPlan: {
        hours: paceConfig.hoursPerWeek,
        sessions: paceConfig.sessionsPerWeek,
        sessionMinutes: paceConfig.sessionMinutes,
        conceptSessions: paceConfig.lessonsPerTopic,
        revisionSessions: paceConfig.revisionSessionsPerWeek,
        practiceQuestions: paceConfig.questionsPerWeek,
        difficultyMix: levelConfig.questionDifficultyMix,
        easyQuestionsPerTopic: paceConfig.easyQuestionsPerTopic,
        mediumQuestionsPerTopic: paceConfig.mediumQuestionsPerTopic,
        hardQuestionsPerTopic: paceConfig.hardQuestionsPerTopic,
      },

      goals: [
        `Learn: ${weeklyTopics.join(", ")}`,
        `Complete about ${paceConfig.questionsPerWeek} practice questions`,
        "Review incorrect solutions and try them again without hints",
        "Complete one timed practice session",
      ],
    });
  }

  return {
    career: normalizedCareer,
    pace,
    level,
    paceDetails: paceConfig,
    totalWeeks: weeks.length,
    totalMonths: Math.ceil(weeks.length / 4),
    weeklyRoadmap: weeks,
  };
}

// ============================================================
// ADAPTIVE STUDY RECOMMENDATIONS
// ============================================================

export function getRecommendedAdjustment({
  accuracy = 0,
  completedQuestions = 0,
  hintsUsed = 0,
} = {}) {
  if (accuracy < 0.5 || completedQuestions < 4) {
    return {
      action: "slow_down",
      message:
        "Repeat the current topic with easier questions, more examples, and revision before unlocking the next topic.",
      extraPracticeQuestions: 5,
      recommendVideo: true,
      recommendHintMode: "detailed",
    };
  }

  if (accuracy < 0.7) {
    return {
      action: "continue_with_revision",
      message:
        "Continue to the next topic, but schedule a revision session and retry incorrect questions.",
      extraPracticeQuestions: 3,
      recommendVideo: false,
      recommendHintMode: "standard",
    };
  }

  if (accuracy >= 0.85 && hintsUsed <= 5) {
    return {
      action: "speed_up",
      message:
        "The learner is ready for a harder question or an additional topic this week.",
      extraPracticeQuestions: 2,
      recommendVideo: false,
      recommendHintMode: "concise",
    };
  }

  return {
    action: "continue",
    message:
      "Continue with the planned roadmap and complete the scheduled revision.",
    extraPracticeQuestions: 0,
    recommendVideo: false,
    recommendHintMode: "standard",
  };
}

// ============================================================
// VALIDATION HELPERS
// ============================================================

export function validateCatalog() {
  const masterSet = new Set(DSA_MASTER_TOPICS);
  const duplicateMasterTopics =
    DSA_MASTER_TOPICS.filter(
      (topic, index) => DSA_MASTER_TOPICS.indexOf(topic) !== index
    );

  const invalidCareerTopics = Object.fromEntries(
    Object.entries(CAREER_PRIORITY).map(([career, topics]) => [
      career,
      topics.filter((topic) => !masterSet.has(topic)),
    ])
  );

  const invalidLevelTopics = Object.fromEntries(
    Object.entries(LEVEL_SETTINGS).map(([level, config]) => [
      level,
      config.startTopics.filter((topic) => !masterSet.has(topic)),
    ])
  );

  return {
    valid:
      duplicateMasterTopics.length === 0 &&
      Object.values(invalidCareerTopics).every((topics) => topics.length === 0) &&
      Object.values(invalidLevelTopics).every((topics) => topics.length === 0),

    totalMasterTopics: DSA_MASTER_TOPICS.length,
    detailedTopics: TOPICS.length,
    topicsWithoutDetailedContent: TOPICS_WITH_CONTENT_STATUS.filter(
      (item) => !item.hasDetailedContent
    ).map((item) => item.slug),

    duplicateMasterTopics,
    invalidCareerTopics,
    invalidLevelTopics,
  };
}





// Overriding all notes to use Exam-Ready Markdown format
TOPICS.forEach(topic => {
  topic.notesMarkdown = `
### 🎯 Exam-Ready Summary: ${topic.title}

* **Core Purpose:** Master the fundamental operations, edge cases, and constraints of ${topic.title}.
* **Time Complexity:** Be prepared to justify your time bounds. Optimal solutions generally minimize redundant loops.
* **Space Complexity:** Strive for in-place modification (O(1) auxiliary space) unless caching/memoization is explicitly required.
* **Common Traps:** Watch out for off-by-one errors, null/empty inputs, and integer overflow.

---

### 💡 Key Takeaways
1. **State your complexity upfront** before writing any code.
2. **Dry-run** with a small, concrete example to catch edge cases early.

---

### 💻 Reference Pattern & Execution
In technical assessments, communicating your pattern before writing code is vital. Follow this blueprint:

* **Step 1:** Initialize pointers, base states, or your core data structures.
* **Step 2:** Traverse the dataset. Process elements locally while preserving global invariants.
* **Step 3:** Return the accumulated structure or optimized metric.

\`\`\`javascript
// Example generic blueprint for ${topic.title}
function solve(input) {
  // 1. Initialization
  let result = 0;
  
  // 2. Traversal
  for (let i = 0; i < input.length; i++) {
    // Maintain invariants
    result += input[i]; 
  }
  
  // 3. Return
  return result;
}
\`\`\`
`;

  // Provide official documentation references
  topic.references = [
    { label: "MDN Web Docs (JavaScript)", url: "https://developer.mozilla.org/en-US/" },
    { label: "Python Official Documentation", url: "https://docs.python.org/3/" },
    { label: "C++ Reference", url: "https://en.cppreference.com/" },
    { label: "Java Standard Ed.", url: "https://docs.oracle.com/en/java/javase/" }
  ];
});
