import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "./db.js";
import { seedIfNeeded, buildRoadmapForUser, enforceSequentialProgress, getRoadmap, unlockNext } from "./seed.js";
import { judge } from "./judge.js";
import { socraticReply } from "./tutor.js";
import { submitToLeetCode } from "./leetcode-proxy.js";
import { CAREERS, FIELDS, LANGUAGES, PACE, DSA_LEVELS } from "./catalog.js";

const envPath = fileURLToPath(new URL("../.env", import.meta.url));
dotenv.config({ path: envPath });
dotenv.config();

seedIfNeeded();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "1mb" }));

const JWT_SECRET = process.env.JWT_SECRET || "dev-pathlight-secret";

function sign(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
}

function signAdmin(email) {
  return jwt.sign({ email, role: "admin" }, JWT_SECRET, { expiresIn: "8h" });
}

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Sign in first." });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Session expired. Sign in again." });
  }
}

function adminAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Admin sign in required." });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.role !== "admin") return res.status(403).json({ error: "Admin access required." });
    req.admin = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Admin session expired. Sign in again." });
  }
}

function publicUser(user) {
  const profile = db.prepare("SELECT * FROM profiles WHERE user_id = ?").get(user.id);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    profile: profile
      ? {
          languages: JSON.parse(profile.languages || "[]"),
          field: profile.field,
          career: profile.career,
          dsaLevel: profile.dsa_level,
          pace: profile.pace,
          onboardingComplete: Boolean(profile.onboarding_complete),
        }
      : null,
  };
}

function preferredLanguage(profile) {
  const value = profile?.languages?.[0] || "JavaScript";
  const normalized = value.toLowerCase();
  if (normalized === "c++" || normalized === "cpp") return "cpp";
  if (normalized === "javascript" || normalized === "js") return "javascript";
  return normalized;
}

function languageReferences(title, slug, language) {
  const query = encodeURIComponent(`${title} ${language}`);
  return [
    {
      label: `GeeksforGeeks: ${title} in ${language}`,
      url: `https://www.geeksforgeeks.org/search/?q=${query}`,
    },
    {
      label: `LeetCode: ${title} practice in ${language}`,
      url: `https://leetcode.com/problemset/?search=${query}`,
    },
  ];
}

function languageVideoUrl(title, language) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} ${language} programming tutorial`)}`;
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/meta", (_req, res) => {
  res.json({ careers: CAREERS, fields: FIELDS, languages: LANGUAGES, pace: PACE, dsaLevels: DSA_LEVELS });
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password, mobile } = req.body || {};
  if (!name?.trim() || !email?.trim() || !password || !mobile?.trim()) {
    return res.status(400).json({ error: "Name, email, password, and mobile are required." });
  }
  if (password.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters." });
  const hash = bcrypt.hashSync(password, 10);
  try {
    const info = db
      .prepare("INSERT INTO users (name, email, password_hash, mobile) VALUES (?, ?, ?, ?)")
      .run(name.trim(), email.trim().toLowerCase(), hash, mobile.trim());
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(info.lastInsertRowid);
    db.prepare("INSERT INTO profiles (user_id) VALUES (?)").run(user.id);
    res.json({ token: sign(user), user: publicUser(user) });
  } catch (e) {
    if (String(e).includes("UNIQUE")) return res.status(409).json({ error: "That email is already registered." });
    throw e;
  }
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body || {};
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get((email || "").trim().toLowerCase());
  if (!user || !bcrypt.compareSync(password || "", user.password_hash)) {
    return res.status(401).json({ error: "Email or password is incorrect." });
  }
  res.json({ token: sign(user), user: publicUser(user) });
});

app.post("/api/admin/login", (req, res) => {
  const adminEmail = (process.env.ADMIN_EMAIL || "admin@example.com").trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "admin1234";
  const { email, password } = req.body || {};
  if ((email || "").trim().toLowerCase() !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ error: "Admin email or password is incorrect." });
  }
  res.json({ token: signAdmin(adminEmail), admin: { email: adminEmail } });
});

app.get("/api/admin/users", adminAuth, (_req, res) => {
  const users = db
    .prepare(`
      SELECT
        u.id,
        u.name,
        u.email,
        u.mobile,
        u.created_at,
        p.field,
        p.career,
        p.dsa_level,
        p.pace,
        p.onboarding_complete
      FROM users u
      LEFT JOIN profiles p ON p.user_id = u.id
      ORDER BY u.created_at DESC, u.id DESC
    `)
    .all()
    .map((user) => ({
      ...user,
      onboarding_complete: Boolean(user.onboarding_complete),
    }));
  res.json({ users });
});

app.get("/api/me", auth, (req, res) => {
  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(req.user.id);
  res.json({ user: publicUser(user) });
});

app.put("/api/profile", auth, (req, res) => {
  const { languages, field, career, dsaLevel, pace } = req.body || {};
  if (!Array.isArray(languages) || languages.length === 0) {
    return res.status(400).json({ error: "Pick at least one language you know." });
  }
  if (!field || !career || !dsaLevel || !pace) {
    return res.status(400).json({ error: "Field, career goal, DSA level, and pace are required." });
  }
  db.prepare(
    `UPDATE profiles SET languages = ?, field = ?, career = ?, dsa_level = ?, pace = ?, onboarding_complete = 1
     WHERE user_id = ?`
  ).run(JSON.stringify(languages), field, career, dsaLevel, pace, req.user.id);
  const profile = db.prepare("SELECT * FROM profiles WHERE user_id = ?").get(req.user.id);
  buildRoadmapForUser(req.user.id, profile);
  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(req.user.id);
  res.json({ user: publicUser(user), roadmap: getRoadmap(req.user.id) });
});

app.get("/api/roadmap", auth, (req, res) => {
  const roadmap = getRoadmap(req.user.id);
  if (!roadmap) return res.status(400).json({ error: "Finish onboarding to build your path." });
  res.json(roadmap);
});

app.get("/api/topics/:slug", auth, (req, res) => {
  const profile = db.prepare("SELECT career, languages FROM profiles WHERE user_id = ?").get(req.user.id);
  if (profile?.career) enforceSequentialProgress(req.user.id, profile.career);
  const topic = db.prepare("SELECT * FROM topics WHERE slug = ?").get(req.params.slug);
  if (!topic) return res.status(404).json({ error: "Topic not found." });
  const progress = db
    .prepare("SELECT status FROM progress WHERE user_id = ? AND topic_id = ?")
    .get(req.user.id, topic.id);
  if (!progress || progress.status === "locked") {
    return res.status(403).json({ error: "This topic is still locked. Finish the previous station first." });
  }
  if (progress.status === "available") {
    db.prepare("UPDATE progress SET status = 'in_progress' WHERE user_id = ? AND topic_id = ?").run(
      req.user.id,
      topic.id
    );
  }
  const problems = db
    .prepare("SELECT id, slug, title, difficulty FROM problems WHERE topic_id = ? AND slug NOT LIKE 'problem-%' AND slug NOT LIKE '%-check' ORDER BY id")
    .all(topic.id);
  const language = preferredLanguage({ languages: JSON.parse(profile?.languages || "[]") });
  const references = languageReferences(topic.title, topic.slug, language);
  const videoUrl = languageVideoUrl(topic.title, language);

  let notesMarkdown = topic.notes_markdown || null;
  const notesPath = path.join(__dirname, "..", "data", "notes", `${topic.slug}.md`);
  if (fs.existsSync(notesPath)) {
    const rawMarkdown = fs.readFileSync(notesPath, "utf-8");
    notesMarkdown = rawMarkdown.replace(/^---[\s\S]*?---\n/, "").trim();
  }

  res.json({
    ...topic,
    notes: JSON.parse(topic.notes),
    notesMarkdown,
    references,
    videoUrl,
    preferredLanguage: language,
    status: progress.status === "available" ? "in_progress" : progress.status,
    problems,
  });
});

app.post("/api/topics/:slug/complete", auth, (req, res) => {
  const topic = db.prepare("SELECT * FROM topics WHERE slug = ?").get(req.params.slug);
  if (!topic) return res.status(404).json({ error: "Topic not found." });
  const problems = db.prepare("SELECT id FROM problems WHERE topic_id = ? AND slug NOT LIKE 'problem-%' AND slug NOT LIKE '%-check'").all(topic.id);
  const passed = problems.filter((p) => {
    const row = db
      .prepare(
        "SELECT 1 FROM submissions WHERE user_id = ? AND problem_id = ? AND passed = 1 LIMIT 1"
      )
      .get(req.user.id, p.id);
    return Boolean(row);
  });
  if (passed.length < problems.length) {
    return res.status(400).json({
      error: `Solve every drill first (${passed.length}/${problems.length}).`,
    });
  }
  db.prepare("UPDATE progress SET status = 'completed' WHERE user_id = ? AND topic_id = ?").run(
    req.user.id,
    topic.id
  );
  unlockNext(req.user.id, topic.id);
  res.json({ ok: true, roadmap: getRoadmap(req.user.id) });
});

app.get("/api/problems/:slug", auth, (req, res) => {
  const problem = db.prepare("SELECT * FROM problems WHERE slug = ?").get(req.params.slug);
  if (!problem) return res.status(404).json({ error: "Problem not found." });
  const profile = db.prepare("SELECT languages FROM profiles WHERE user_id = ?").get(req.user.id);
  const language = preferredLanguage({ languages: JSON.parse(profile?.languages || "[]") });
  const topic = db.prepare("SELECT slug, title FROM topics WHERE id = ?").get(problem.topic_id);
  const solved = Boolean(
    db
      .prepare(
        "SELECT 1 FROM submissions WHERE user_id = ? AND problem_id = ? AND passed = 1 LIMIT 1"
      )
      .get(req.user.id, problem.id)
  );
  const chat = db
    .prepare(
      "SELECT role, content, created_at FROM tutor_messages WHERE user_id = ? AND problem_id = ? ORDER BY id"
    )
    .all(req.user.id, problem.id);
  const starters = JSON.parse(problem.starters);
  const selectedStarter = starters[language] || `// Write your ${language} solution for ${problem.title} here.`;
  let constraints = [];
  try {
    constraints = JSON.parse(problem.constraints || "[]");
  } catch {
    constraints = problem.constraints ? [problem.constraints] : [];
  }
  res.json({
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    prompt: problem.prompt,
    examples: JSON.parse(problem.examples),
    constraints,
    functionName: problem.function_name,
    starters,
    preferredLanguage: language,
    videoUrl: languageVideoUrl(problem.title, language),
    topic,
    solved,
    chat,
  });
});

// List problems with optional filters: company, career, difficulty, topic
app.get("/api/problems", auth, (req, res) => {
  const { company, career, difficulty, topic } = req.query;
  try {
    const params = [];
    const conditions = [];
    if (difficulty) {
      const difficultyMap = {
        Easy: "Easy",
        Medium: "Medium",
        Hard: "Hard",
        Beginner: "Easy",
        Intermediate: "Medium",
        Advanced: "Hard",
      };

      conditions.push("p.difficulty = ?");
      params.push(difficultyMap[difficulty] || difficulty);
    }
    if (topic) {
      conditions.push(`t.slug IN (${topic.split(",").map(() => "?").join(",")})`);
      params.push(...topic.split(","));
    }
    if (career) {
      conditions.push("EXISTS (SELECT 1 FROM career_topics ct WHERE ct.topic_id = p.topic_id AND ct.career = ?)");
      params.push(career);
    }
    // Company data is not part of the current schema, so it is accepted as a
    // no-op filter until company-tagged drills are added.
    conditions.unshift("p.slug NOT LIKE 'problem-%' AND p.slug NOT LIKE '%-check'");
    const where = `WHERE ${conditions.join(" AND ")}`;
    const list = db
      .prepare(`SELECT p.slug, p.title, p.difficulty, t.slug AS topic FROM problems p JOIN topics t ON t.id = p.topic_id ${where} ORDER BY p.id`)
      .all(...params);
    res.json({ problems: list });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.post("/api/problems/:slug/submit", auth, async (req, res) => {
  const problem = db.prepare("SELECT * FROM problems WHERE slug = ?").get(req.params.slug);
  if (!problem) return res.status(404).json({ error: "Problem not found." });
  const { language, code } = req.body || {};
  if (!code?.trim()) return res.status(400).json({ error: "Write some code first." });
  try {
    let passed = false;
    let results = [];
    let useLocal = true;

    if (process.env.LEETCODE_SESSION && process.env.LEETCODE_CSRF) {
      try {
        // Proxy to LeetCode
        const leetcodeResult = await submitToLeetCode(req.params.slug, code, language || "javascript");
        passed = (leetcodeResult.status_msg === "Accepted");
        
        let msg = `${leetcodeResult.status_msg} (${leetcodeResult.total_correct}/${leetcodeResult.total_testcases} passed)`;
        if (leetcodeResult.compile_error) {
            msg += `\n\n${leetcodeResult.compile_error}`;
        } else if (!passed && leetcodeResult.expected_output) {
            msg += `\n\nExpected: ${leetcodeResult.expected_output}\nYour Output: ${leetcodeResult.code_output}`;
            if (leetcodeResult.last_testcase) {
                msg += `\nFailed on Input: ${leetcodeResult.last_testcase}`;
            }
        }

        results = [{
          label: "LeetCode Cloud Judge",
          passed: passed,
          msg: msg
        }];
        useLocal = false;
      } catch (err) {
        console.warn(`LeetCode submit failed for '${req.params.slug}':`, err.message);
      }
    } 
    
    if (useLocal) {
      // Fallback local judge
      const tests = JSON.parse(problem.tests);
      results = judge(language, code, problem.function_name, tests);
      passed = results.every((r) => r.passed);
    }

    db.prepare(
      "INSERT INTO submissions (user_id, problem_id, language, code, passed, results) VALUES (?, ?, ?, ?, ?, ?)"
    ).run(req.user.id, problem.id, language || "javascript", code, passed ? 1 : 0, JSON.stringify(results));
    res.json({ passed, results });
  } catch (e) {
    res.status(400).json({ error: e.message || "Could not run your code." });
  }
});

app.post("/api/problems/:slug/tutor", auth, async (req, res) => {
  const problem = db.prepare("SELECT * FROM problems WHERE slug = ?").get(req.params.slug);
  if (!problem) return res.status(404).json({ error: "Problem not found." });
  const { message, code, failedTests } = req.body || {};
  if (!message?.trim()) return res.status(400).json({ error: "Ask or describe what you are stuck on." });
  db.prepare("INSERT INTO tutor_messages (user_id, problem_id, role, content) VALUES (?, ?, 'user', ?)").run(
    req.user.id,
    problem.id,
    message.trim()
  );
  const history = db
    .prepare(
      "SELECT role, content FROM tutor_messages WHERE user_id = ? AND problem_id = ? ORDER BY id"
    )
    .all(req.user.id, problem.id);
  const reply = await socraticReply({
    problem,
    messages: history,
    userText: message.trim(),
    code: code || "",
    failedTests: failedTests || 0,
  });
  db.prepare("INSERT INTO tutor_messages (user_id, problem_id, role, content) VALUES (?, ?, 'tutor', ?)").run(
    req.user.id,
    problem.id,
    reply
  );
  res.json({ reply });
});

// Serve the built React app if it exists (production / single-service deploys).
// In local dev, Vite runs on its own port and proxies /api here instead, so
// this block is a no-op until you run `npm run build` in frontend/.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDist = path.join(__dirname, "..", "..", "frontend", "dist");
if (fs.existsSync(path.join(frontendDist, "index.html"))) {
  app.use(express.static(frontendDist));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

const port = Number(process.env.PORT || 10000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Pathlight API running on port ${port}`);
});
