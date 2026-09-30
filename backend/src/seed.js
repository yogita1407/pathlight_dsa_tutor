import db from "./db.js";
import { ALL_TOPICS, CAREER_PRIORITY } from "./catalog.js";
import { QUESTION_BANK } from "../data/questionBank.js";

const TOPIC_ALIASES = {
  trees: "binary-trees",
  "stacks-queues": "stacks",
  heaps: "heaps-priority-queues",
  graphs: "graph-representation",
  greedy: "greedy-algorithms",
  math: "math-basics",
  sorting: "sorting-basics",
  "advanced-structures": "segment-tree",
};

const SLUG_COUNTS = QUESTION_BANK.reduce((counts, question) => {
  counts[question.slug] = (counts[question.slug] || 0) + 1;
  return counts;
}, {});

const PROBLEMS = QUESTION_BANK.map((question) => ({
  topic: TOPIC_ALIASES[question.topic] || question.topic,
  // SQLite requires unique slugs. Some canonical questions intentionally
  // share a human-readable slug across topics, so only the repeated copies
  // receive a stable ID suffix while the first occurrence keeps its slug.
  slug: SLUG_COUNTS[question.slug] > 1 ? `${question.slug}-${question.id}` : question.slug,
  title: question.title,
  difficulty: question.difficulty,
  prompt: question.prompt,
  examples: question.examples || [],
  constraints: question.constraints || [],
  functionName: question.functionName || "solve",
  starters: question.starterCode || {},
  tests: [
    ...(question.visibleTests || []),
    ...(question.hiddenTests || []),
  ],
  hints: question.hints || [],
  solutionLogic: question.solutionLogic || null,
}));

function videoUrlFor(problem, topic) {
  const query = `${problem.title} ${topic} data structures algorithm tutorial`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export function seedIfNeeded() {
  const count = db.prepare("SELECT COUNT(*) AS c FROM topics").get().c;
  if (count > 0) {
    syncCatalog();
    return;
  }

  const insertTopic = db.prepare(`
    INSERT INTO topics (slug, title, summary, estimated_hours, difficulty, video_id, video_title, notes, notes_markdown)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const insertCareer = db.prepare(
    "INSERT INTO career_topics (career, topic_id, priority) VALUES (?, ?, ?)"
  );
  const insertProblem = db.prepare(`
    INSERT INTO problems (topic_id, slug, title, difficulty, prompt, examples, constraints, function_name, starters, tests, hints, video_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const tx = db.transaction(() => {
    const topicIds = {};
    for (const t of ALL_TOPICS) {
      const info = insertTopic.run(
        t.slug,
        t.title,
        t.summary,
        t.estimatedHours,
        t.difficulty,
        t.videoId,
        t.videoTitle,
        JSON.stringify(t.notes),
        t.notesMarkdown || null
      );
      topicIds[t.slug] = Number(info.lastInsertRowid);
    }
    for (const [career, slugs] of Object.entries(CAREER_PRIORITY)) {
      slugs.forEach((slug, i) => {
        insertCareer.run(career, topicIds[slug], i + 1);
      });
    }
    for (const p of PROBLEMS) {
      insertProblem.run([
  topicIds[p.topic],
  p.slug,
  p.title,
  p.difficulty,
  p.prompt,
  JSON.stringify(p.examples),
  JSON.stringify(p.constraints),
  p.functionName,
  JSON.stringify(p.starters),
  JSON.stringify(p.tests),
  JSON.stringify(p.hints),
  videoUrlFor(p, p.topic)
]);
    }
  });
  tx();
  syncCatalog();
}

function syncCatalog() {
  const insertTopic = db.prepare(`
    INSERT INTO topics (slug, title, summary, estimated_hours, difficulty, video_id, video_title, notes, notes_markdown)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      title = excluded.title,
      summary = excluded.summary,
      estimated_hours = excluded.estimated_hours,
      difficulty = excluded.difficulty,
      video_id = excluded.video_id,
      video_title = excluded.video_title,
      notes = excluded.notes,
      notes_markdown = excluded.notes_markdown
  `);
  const insertCareer = db.prepare(
    "INSERT INTO career_topics (career, topic_id, priority) VALUES (?, ?, ?) ON CONFLICT(career, topic_id) DO UPDATE SET priority = excluded.priority"
  );
  const insertProblem = db.prepare(`
    INSERT OR IGNORE INTO problems (topic_id, slug, title, difficulty, prompt, examples, constraints, function_name, starters, tests, hints, video_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const canonicalSlugs = new Set(PROBLEMS.map((problem) => problem.slug));
  const existingProblems = db.prepare("SELECT id, slug FROM problems").all();
  const deleteProblem = db.prepare("DELETE FROM problems WHERE id = ?");
  const removeNonCanonicalProblems = () => {
    // The bundled database may contain legacy placeholder/checkpoint drills.
    // Keep exactly the 100 canonical coding problems in QUESTION_BANK.
    for (const row of existingProblems) {
      if (!canonicalSlugs.has(row.slug)) deleteProblem.run(row.id);
    }
  };

  const tx = db.transaction(() => {
    removeNonCanonicalProblems();

    for (const topic of ALL_TOPICS) {
      insertTopic.run(
        topic.slug,
        topic.title,
        topic.summary,
        topic.estimatedHours,
        topic.difficulty,
        topic.videoId,
        topic.videoTitle,
        JSON.stringify(topic.notes),
        topic.notesMarkdown || null
      );
    }

    const topicIds = Object.fromEntries(
      db.prepare("SELECT slug, id FROM topics").all().map((topic) => [topic.slug, topic.id])
    );
    for (const [career, slugs] of Object.entries(CAREER_PRIORITY)) {
      db.prepare("DELETE FROM career_topics WHERE career = ?").run(career);
      slugs.forEach((slug, priority) => insertCareer.run(career, topicIds[slug], priority + 1));
    }
    for (const problem of PROBLEMS) {
      insertProblem.run([
  topicIds[problem.topic],
  problem.slug,
  problem.title,
  problem.difficulty,
  problem.prompt,
  JSON.stringify(problem.examples),
  JSON.stringify(problem.constraints),
  problem.functionName,
  JSON.stringify(problem.starters),
  JSON.stringify(problem.tests),
  JSON.stringify(problem.hints),
  videoUrlFor(problem, problem.topic)
]);
    }
    const updateCheckpoint = db.prepare(
      `UPDATE problems
       SET title = ?, difficulty = ?, prompt = ?, examples = ?, constraints = ?, function_name = ?, starters = ?, tests = ?, hints = ?, video_url = ?
       WHERE slug = ?`
    );
    for (const problem of PROBLEMS) {
      updateCheckpoint.run(
        problem.title,
        problem.difficulty,
        problem.prompt,
        JSON.stringify(problem.examples),
        JSON.stringify(problem.constraints),
        problem.functionName,
        JSON.stringify(problem.starters),
        JSON.stringify(problem.tests),
        JSON.stringify(problem.hints),
        videoUrlFor(problem, problem.topic),
        problem.slug
      );
    }
    const updateVideo = db.prepare("UPDATE problems SET video_url = ? WHERE id = ?");
    for (const problem of db.prepare("SELECT p.id, p.title, t.slug AS topic FROM problems p JOIN topics t ON t.id = p.topic_id").all()) {
      updateVideo.run(videoUrlFor(problem, problem.topic), problem.id);
    }
  });
  tx();
  ensureFirstTopicsAvailable();
}

function ensureFirstTopicsAvailable() {
  const profiles = db
    .prepare("SELECT user_id, career FROM profiles WHERE onboarding_complete = 1")
    .all();
  const firstTopic = db.prepare(
    `SELECT t.id
     FROM career_topics ct
     JOIN topics t ON t.id = ct.topic_id
     WHERE ct.career = ?
     ORDER BY ct.priority ASC
     LIMIT 1`
  );
  const getProgress = db.prepare(
    "SELECT status FROM progress WHERE user_id = ? AND topic_id = ?"
  );
  const setAvailable = db.prepare(
    `INSERT INTO progress (user_id, topic_id, status) VALUES (?, ?, 'available')
     ON CONFLICT(user_id, topic_id) DO UPDATE SET status = 'available'
     WHERE progress.status = 'locked'`
  );
  for (const profile of profiles) {
    const topic = firstTopic.get(profile.career);
    const progress = topic && getProgress.get(profile.user_id, topic.id);
    if (topic && (!progress || progress.status === "locked")) {
      setAvailable.run(profile.user_id, topic.id);
    }
  }
}

export function buildRoadmapForUser(userId, profile) {
  const rows = db
    .prepare(
      `SELECT t.id FROM career_topics ct
       JOIN topics t ON t.id = ct.topic_id
       WHERE ct.career = ?
       ORDER BY ct.priority ASC`
    )
    .all(profile.career);

  const openCount = Math.min(rows.length, 1);

  const upsert = db.prepare(
    `INSERT INTO progress (user_id, topic_id, status) VALUES (?, ?, ?)
     ON CONFLICT(user_id, topic_id) DO UPDATE SET status = excluded.status`
  );

  const tx = db.transaction(() => {
    db.prepare("DELETE FROM progress WHERE user_id = ?").run(userId);
    rows.forEach((row, i) => {
      const status = i < openCount ? "available" : "locked";
      upsert.run(userId, row.id, status);
    });
  });
  tx();
}

export function enforceSequentialProgress(userId, career) {
  const ordered = db
    .prepare(
      `SELECT t.id
       FROM career_topics ct
       JOIN topics t ON t.id = ct.topic_id
       WHERE ct.career = ?
       ORDER BY ct.priority ASC`
    )
    .all(career);
  const getStatus = db.prepare(
    "SELECT status FROM progress WHERE user_id = ? AND topic_id = ?"
  );
  const setStatus = db.prepare(
    `INSERT INTO progress (user_id, topic_id, status) VALUES (?, ?, ?)
     ON CONFLICT(user_id, topic_id) DO UPDATE SET status = excluded.status`
  );
  let previousCompleted = true;
  const tx = db.transaction(() => {
    ordered.forEach((topic) => {
      const current = getStatus.get(userId, topic.id)?.status;
      if (!previousCompleted) {
        if (current !== "completed") setStatus.run(userId, topic.id, "locked");
        return;
      }
      if (!current || current === "locked") setStatus.run(userId, topic.id, "available");
      previousCompleted = current === "completed";
    });
  });
  tx();
}

export function getRoadmap(userId) {
  const profile = db.prepare("SELECT * FROM profiles WHERE user_id = ?").get(userId);
  if (!profile?.onboarding_complete) return null;
  enforceSequentialProgress(userId, profile.career);

  const topics = db
    .prepare(
      `SELECT t.id, t.slug, t.title, t.summary, t.estimated_hours, t.difficulty,
              ct.priority, COALESCE(p.status, 'locked') AS status
       FROM career_topics ct
       JOIN topics t ON t.id = ct.topic_id
       LEFT JOIN progress p ON p.topic_id = t.id AND p.user_id = ?
       WHERE ct.career = ?
       ORDER BY ct.priority ASC`
    )
    .all(userId, profile.career);

  const hoursPerWeek = profile.pace === "intense" ? 14 : profile.pace === "relaxed" ? 4 : 8;
  const totalHours = topics.reduce((s, t) => s + t.estimated_hours, 0);
  const completed = topics.filter((t) => t.status === "completed").length;

  return {
    career: profile.career,
    field: profile.field,
    pace: profile.pace,
    dsaLevel: profile.dsa_level,
    hoursPerWeek,
    totalHours,
    weeks: Math.max(1, Math.ceil(totalHours / hoursPerWeek)),
    completed,
    total: topics.length,
    topics,
  };
}

export function unlockNext(userId, topicId) {
  const profile = db.prepare("SELECT career FROM profiles WHERE user_id = ?").get(userId);
  const ordered = db
    .prepare(
      `SELECT t.id FROM career_topics ct
       JOIN topics t ON t.id = ct.topic_id
       WHERE ct.career = ?
       ORDER BY ct.priority ASC`
    )
    .all(profile.career);
  const idx = ordered.findIndex((r) => r.id === topicId);
  const next = ordered[idx + 1];
  if (!next) return;
  const row = db
    .prepare("SELECT status FROM progress WHERE user_id = ? AND topic_id = ?")
    .get(userId, next.id);
  if (row?.status === "locked") {
    db.prepare("UPDATE progress SET status = 'available' WHERE user_id = ? AND topic_id = ?").run(
      userId,
      next.id
    );
  }
}
