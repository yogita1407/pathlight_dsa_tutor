import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDir = path.join(__dirname, 'data', 'notes');

if (!process.env.GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env file");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function formatAllNotes() {
  const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} markdown files. Beginning formatting...`);

  for (const file of files) {
    const filePath = path.join(notesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Split frontmatter and body
    const match = content.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/);
    if (!match) {
      console.log(`Skipping ${file}: Could not parse frontmatter.`);
      continue;
    }
    
    const frontmatter = match[1];
    const body = match[2];

    // Simple heuristic to skip already formatted ones if we re-run
    if (body.includes('Definition') && body.includes('Sample Program') && body.includes('```java')) {
      console.log(`Skipping ${file}: Already formatted with all languages.`);
      continue;
    }

    console.log(`Processing ${file}...`);

    const prompt = `
You are an expert computer science curriculum author.
I have unstructured notes about a data structures and algorithms topic.

Rewrite the provided notes into EXACTLY the following 4 sections using Markdown headers (##):

## Definition
A short, clear definition of the topic. No fluff.

## Examples
A bulleted list of 2-3 practical real-world examples or algorithmic use cases.

## Sample Program
Write a very small, clean, educational code snippet demonstrating the concept.
You MUST provide the code in all 4 languages: JavaScript, Python, Java, and C++.
Use markdown code blocks and label the language EXACTLY as follows: 
\`\`\`javascript
...
\`\`\`
\`\`\`python
...
\`\`\`
\`\`\`java
...
\`\`\`
\`\`\`cpp
...
\`\`\`
Add a 1-2 sentence explanation below the code blocks.

## Techniques Used
A bulleted list of the core techniques or algorithmic patterns used to solve problems in this topic.

Here are the original notes for context:
${body}

Respond ONLY with the newly formatted markdown content. Do NOT include the YAML Frontmatter, I will prepend it automatically.
`;

    let success = false;
    let attempts = 0;
    while (!success && attempts < 5) {
      try {
        attempts++;
        const response = await ai.models.generateContent({
          model: 'gemini-flash-lite-latest',
          contents: prompt,
        });

        let newBody = response.text.trim();
        
        // Sometimes models wrap the whole response in a markdown block, remove it if so
        if (newBody.startsWith('```markdown')) {
            newBody = newBody.substring(11, newBody.length - 3).trim();
        }

        const newContent = `${frontmatter}\n${newBody}\n`;
        fs.writeFileSync(filePath, newContent);
        console.log(`Successfully formatted ${file}.`);
        success = true;
        
        // Wait 5 seconds to avoid the free-tier API rate limits (15 RPM)
        await new Promise(r => setTimeout(r, 5000));
      } catch (err) {
        console.error(`Attempt ${attempts} failed to format ${file}:`, err.message);
        if (attempts >= 5) {
          console.error(`Skipping ${file} after 5 failed attempts.`);
        } else {
          // Exponential backoff: 5s, 10s, 20s...
          const waitTime = Math.pow(2, attempts) * 5000;
          console.log(`Waiting ${waitTime / 1000} seconds before retrying...`);
          await new Promise(r => setTimeout(r, waitTime));
        }
      }
    }
  }
  console.log("All done!");
}

formatAllNotes();
