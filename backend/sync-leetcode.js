import fs from "node:fs";
import "dotenv/config";
import { QUESTION_BANK } from "./data/questionBank.js";
import db from "./src/db.js";

async function fetchLeetCodeData(titleSlug) {
  const query = `
    query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        title
        titleSlug
        content
        difficulty
      }
    }
  `;
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    if (process.env.LEETCODE_SESSION && process.env.LEETCODE_CSRF) {
      headers["cookie"] = `LEETCODE_SESSION=${process.env.LEETCODE_SESSION}; csrftoken=${process.env.LEETCODE_CSRF}`;
      headers["x-csrftoken"] = process.env.LEETCODE_CSRF;
    }
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables: { titleSlug },
      }),
    });
    const json = await res.json();
    return json?.data?.question;
  } catch (error) {
    console.error(`Failed to fetch ${titleSlug}:`, error.message);
    return null;
  }
}

async function sync() {
  console.log("Starting LeetCode sync...");
  let synced = 0;
  
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

  for (const localQuestion of QUESTION_BANK) {
    const finalSlug = SLUG_COUNTS[localQuestion.slug] > 1 ? `${localQuestion.slug}-${localQuestion.id}` : localQuestion.slug;
    
    // The slugs in QUESTION_BANK are often the same as LeetCode slugs.
    // Let's attempt to fetch from LeetCode using the original slug.
    console.log(`Syncing ${finalSlug} (from LeetCode slug: ${localQuestion.slug})...`);
    const leetcodeData = await fetchLeetCodeData(localQuestion.slug);
    
    // Fallback to local data if LeetCode doesn't have it or we are rate limited
    const title = leetcodeData?.title || localQuestion.title;
    const difficulty = leetcodeData?.difficulty || localQuestion.difficulty;
    const prompt = leetcodeData?.content || localQuestion.prompt;
    
    // Some local questions might not exist in the DB yet if seed.js hasn't run them,
    // but assuming seed.js has run, we update them.
    // If we want to insert them, we need topic_id.
    const mappedTopic = TOPIC_ALIASES[localQuestion.topic] || localQuestion.topic;
    const topic = db.prepare("SELECT id FROM topics WHERE slug = ?").get(mappedTopic);
    if (!topic) {
        console.log(`Skipping ${finalSlug} because topic '${mappedTopic}' was not found in DB.`);
        continue;
    }

    const existing = db.prepare("SELECT id FROM problems WHERE slug = ?").get(finalSlug);
    
    if (existing) {
      db.prepare(`
        UPDATE problems 
        SET title = ?, difficulty = ?, prompt = ?
        WHERE slug = ?
      `).run(title, difficulty, prompt, finalSlug);
    } else {
      // Insert new problem
      db.prepare(`
        INSERT INTO problems (
          topic_id, slug, title, difficulty, prompt, examples, constraints,
          function_name, starters, tests, hints, video_url
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        topic.id,
        finalSlug,
        title,
        difficulty,
        prompt,
        JSON.stringify(localQuestion.examples || []),
        JSON.stringify(localQuestion.constraints || []),
        localQuestion.function_name || localQuestion.slug.replace(/-./g, x => x[1].toUpperCase()),
        JSON.stringify(localQuestion.starterCode || {}),
        JSON.stringify({ visible: localQuestion.visibleTests || [], hidden: localQuestion.hiddenTests || [] }),
        JSON.stringify(localQuestion.hints || []),
        localQuestion.video_url || null
      );
    }
    
    synced++;
    // Add a small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(`Done! Synced ${synced} questions.`);
}

sync().catch(console.error);
