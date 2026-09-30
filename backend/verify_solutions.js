import { judge } from "./src/judge.js";
import { QUESTION_BANK } from "./data/questionBank.js";

async function verifyAllSolutions() {
  let hasErrors = false;
  for (const q of QUESTION_BANK) {
    const tests = [...(q.visibleTests || []), ...(q.hiddenTests || [])];
    if (!tests.length) continue;

    for (const lang of ["javascript", "python", "java", "cpp"]) {
      if (q.referenceSolution && q.referenceSolution[lang]) {
        try {
          const results = judge(lang, q.referenceSolution[lang], "solve", tests);
          const allPassed = results.every(r => r.passed);
          if (!allPassed) {
            console.log(`\n❌ Failed: ${q.slug} in ${lang}`);
            console.log(results.filter(r => !r.passed));
            hasErrors = true;
          }
        } catch (e) {
          console.log(`\n🚨 Error running ${q.slug} in ${lang}:`, e.message.slice(0, 200));
          hasErrors = true;
        }
      }
    }
  }
  if (!hasErrors) console.log("All reference solutions passed their tests!");
}

verifyAllSolutions();
