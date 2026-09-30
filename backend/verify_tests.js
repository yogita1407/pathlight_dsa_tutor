import fs from "fs";
import { judge } from "./src/judge.js";
import { QUESTION_BANK } from "./data/questionBank.js";

async function verifyAll() {
  let hasErrors = false;
  for (const q of QUESTION_BANK) {
    if (!q.starters) continue;
    const tests = [...(q.visibleTests || []), ...(q.hiddenTests || [])];
    
    // Test JS if starter exists
    if (q.starters.javascript && q.solutionLogic?.pseudocode) {
      // Just check if tests format is somewhat okay
      if (!tests || tests.length === 0) {
        console.log(`Problem ${q.slug} has no tests!`);
        hasErrors = true;
      }
    }
    
    // We can't easily auto-solve, but we can verify test formatting
    for (const t of tests) {
      if (!t.args || !('expected' in t)) {
        console.log(`Problem ${q.slug} has malformed test:`, t);
        hasErrors = true;
      }
    }
  }
  console.log("Verification finished. Errors found:", hasErrors);
}
verifyAll();
