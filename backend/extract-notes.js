import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOPICS } from './src/catalog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notesDir = path.join(__dirname, 'data', 'notes');

// Create the notes directory if it doesn't exist
if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir, { recursive: true });
}

let generatedCount = 0;

for (const topic of TOPICS) {
  // We want to generate a file even if notes are empty, to preserve metadata.
  
  // Construct YAML Frontmatter
  let markdownContent = `---\n`;
  markdownContent += `slug: "${topic.slug}"\n`;
  markdownContent += `title: "${topic.title.replace(/"/g, '\\"')}"\n`;
  markdownContent += `summary: "${topic.summary.replace(/"/g, '\\"')}"\n`;
  markdownContent += `estimatedHours: ${topic.estimatedHours}\n`;
  markdownContent += `difficulty: "${topic.difficulty}"\n`;
  if (topic.videoId) markdownContent += `videoId: "${topic.videoId}"\n`;
  if (topic.videoTitle) markdownContent += `videoTitle: "${topic.videoTitle.replace(/"/g, '\\"')}"\n`;
  
  if (topic.references && topic.references.length > 0) {
    markdownContent += `references:\n`;
    for (const ref of topic.references) {
      markdownContent += `  - label: "${ref.label.replace(/"/g, '\\"')}"\n`;
      markdownContent += `    url: "${ref.url}"\n`;
    }
  }
  markdownContent += `---\n\n`;

  // Construct Notes Body
  if (topic.notes && topic.notes.length > 0) {
    for (const section of topic.notes) {
      if (section.title) {
        markdownContent += `## ${section.title}\n\n`;
      }

      if (section.paragraphs && section.paragraphs.length > 0) {
        for (const p of section.paragraphs) {
          markdownContent += `${p}\n\n`;
        }
      }

      if (section.bullets && section.bullets.length > 0) {
        for (const bullet of section.bullets) {
          markdownContent += `- ${bullet}\n`;
        }
        markdownContent += `\n`;
      }

      if (section.keyTakeaways && section.keyTakeaways.length > 0) {
        markdownContent += `### Key Takeaways\n\n`;
        for (const takeaway of section.keyTakeaways) {
          markdownContent += `* **${takeaway}**\n`;
        }
        markdownContent += `\n`;
      }
    }
  }

  const filePath = path.join(notesDir, `${topic.slug}.md`);
  fs.writeFileSync(filePath, markdownContent.trim() + '\n');
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} markdown files in backend/data/notes/`);
