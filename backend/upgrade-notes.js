import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const notesDir = path.join(__dirname, 'data', 'notes');

async function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Separate frontmatter from body
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    console.log(`Skipping ${filePath} - no frontmatter found.`);
    return;
  }
  
  const frontmatter = frontmatterMatch[1];
  const body = frontmatterMatch[2];
  
  const prompt = `Rewrite the following markdown notes for a Data Structures and Algorithms curriculum. Upgrade the content to an advanced level, adding deeper technical insights, edge cases, system design considerations, or advanced time/space complexity analysis where applicable. Ensure the output is well-formatted markdown. Output ONLY the new markdown content without any surrounding conversational text or markdown code blocks (e.g. do not wrap in \`\`\`markdown).

Original Notes:
${body}`;

  let attempt = 0;
  const maxRetries = 3;
  while (attempt < maxRetries) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: prompt,
        config: {
          temperature: 0.7,
        }
      });

      let newBody = response.text.trim();
      if (newBody.startsWith('```markdown')) {
        newBody = newBody.replace(/^```markdown\n/, '').replace(/\n```$/, '');
      } else if (newBody.startsWith('```')) {
        newBody = newBody.replace(/^```\n/, '').replace(/\n```$/, '');
      }

      const newContent = `---\n${frontmatter}\n---\n\n${newBody}\n`;
      fs.writeFileSync(filePath, newContent);
      console.log(`Successfully upgraded: ${path.basename(filePath)}`);
      return;
    } catch (error) {
      console.error(`Failed to upgrade ${path.basename(filePath)} on attempt ${attempt + 1}:`, error.message);
      attempt++;
      if (attempt >= maxRetries) {
        console.error(`Giving up on ${path.basename(filePath)} after ${maxRetries} attempts.`);
        return;
      }
      await new Promise(r => setTimeout(r, 5000 * attempt));
    }
  }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} files to process.`);
  
  for (let i = 0; i < files.length; i++) {
    console.log(`Processing file ${i + 1} of ${files.length}...`);
    await processFile(path.join(notesDir, files[i]));
    await delay(4500); // Wait 4.5 seconds to stay under 15 RPM limits
  }
  console.log('All notes upgraded successfully.');
}

main();
