import "dotenv/config";
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
        metaData
        exampleTestcases
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

function generateStarter(metaDataJson, language) {
    if (!metaDataJson) return "";
    try {
        const meta = JSON.parse(metaDataJson);
        const funcName = meta.name;
        const params = meta.params.map(p => p.name).join(", ");
        
        if (language === 'javascript') {
            return `function ${funcName}(${params}) {\n  // Write your JavaScript solution here.\n  return undefined;\n}`;
        }
        if (language === 'python') {
            return `def ${funcName}(${params}):\n    # Write your Python solution here.\n    pass`;
        }
        return "";
    } catch(e) {
        return "";
    }
}

async function addLeetCodeQuestion(slug, topicSlug) {
  console.log(`Fetching ${slug} from LeetCode...`);
  const leetcodeData = await fetchLeetCodeData(slug);
  
  if (!leetcodeData) {
      console.log("Question not found or failed to fetch.");
      return;
  }

  const topic = db.prepare("SELECT id FROM topics WHERE slug = ?").get(topicSlug);
  if (!topic) {
      console.log(`Topic '${topicSlug}' not found in DB. Available topics can be found in catalog.js.`);
      return;
  }

  let funcName = slug.replace(/-./g, x => x[1].toUpperCase());
  let starters = {};
  if (leetcodeData.metaData) {
      try {
          const meta = JSON.parse(leetcodeData.metaData);
          funcName = meta.name;
          starters.javascript = generateStarter(leetcodeData.metaData, "javascript");
          starters.python = generateStarter(leetcodeData.metaData, "python");
      } catch(e) {}
  }

  // Create an empty test cases skeleton based on example inputs
  // (LeetCode doesn't return the expected output via GraphQL directly, so you must fill it manually)
  const tests = {
      visible: [
          // Example: { args: [[1, 2, 3]], expected: 6 }
      ],
      hidden: []
  };
  
  if (leetcodeData.exampleTestcases) {
      console.log("\\nExample inputs from LeetCode (you will need to add expected outputs in DB later):");
      console.log(leetcodeData.exampleTestcases);
  }

  const existing = db.prepare("SELECT id FROM problems WHERE slug = ?").get(slug);
  
  if (existing) {
      console.log(`Problem ${slug} already exists. Updating...`);
      db.prepare(`
        UPDATE problems 
        SET title = ?, difficulty = ?, prompt = ?
        WHERE slug = ?
      `).run(leetcodeData.title, leetcodeData.difficulty, leetcodeData.content, slug);
  } else {
    // Insert new problem
    db.prepare(`
      INSERT INTO problems (
        topic_id, slug, title, difficulty, prompt, examples, constraints,
        function_name, starters, tests, hints, video_url
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      topic.id,
      slug,
      leetcodeData.title,
      leetcodeData.difficulty,
      leetcodeData.content,
      "[]", // examples (stored in prompt anyway)
      "[]", // constraints
      funcName,
      JSON.stringify(starters),
      JSON.stringify(tests),
      "[]", // hints
      null // video_url
    );
    console.log(`\\nSuccessfully added ${leetcodeData.title} to the database!`);
    console.log(`NOTE: You will need to manually add the 'tests' via a DB browser or script to enable execution.`);
  }
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: node add-leetcode.js <leetcode-slug> <topic-slug>");
    console.log("Example: node add-leetcode.js two-sum arrays");
    process.exit(1);
}

addLeetCodeQuestion(args[0], args[1]).catch(console.error);
