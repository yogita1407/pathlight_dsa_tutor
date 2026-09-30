const fs = require('fs');
let content = fs.readFileSync('src/catalog.js', 'utf8');

// Strip the previous override
const overrideMarker = '// Overriding all notes to use Exam-Ready Markdown format';
if (content.includes(overrideMarker)) {
  content = content.substring(0, content.indexOf(overrideMarker));
}

const overrideMarker2 = '// Overriding notes with Exam-Ready Format';
if (content.includes(overrideMarker2)) {
  content = content.substring(0, content.indexOf(overrideMarker2));
}

const overrideMarker3 = '// Overriding all notes to be brief glimpses';
if (content.includes(overrideMarker3)) {
  content = content.substring(0, content.indexOf(overrideMarker3));
}

const newOverride = `
// Overriding all notes to use Exam-Ready Markdown format
TOPICS.forEach(topic => {
  topic.notesMarkdown = \\\`
### 🎯 Exam-Ready Summary: \${topic.title}

* **Core Purpose:** Master the fundamental operations, edge cases, and constraints of \${topic.title}.
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

\\\`\\\`\\\`javascript
// Example generic blueprint for \${topic.title}
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
\\\`\\\`\\\`
\\\`;

  // Provide official documentation references
  topic.references = [
    { label: "MDN Web Docs (JavaScript)", url: "https://developer.mozilla.org/en-US/" },
    { label: "Python Official Documentation", url: "https://docs.python.org/3/" },
    { label: "C++ Reference", url: "https://en.cppreference.com/" },
    { label: "Java Standard Ed.", url: "https://docs.oracle.com/en/java/javase/" }
  ];
});
`;

fs.writeFileSync('src/catalog.js', content + newOverride);
