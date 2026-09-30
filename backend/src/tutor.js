function lastUserCode(messages) {
  const last = [...messages].reverse().find((m) => m.role === "user");
  return last?.code || "";
}

function looksLikeAskingForAnswer(text) {
  return /\b(give me the (code|answer|solution)|full solution|just tell me|write the code for me|solve it for me)\b/i.test(
    text
  );
}

export async function socraticReply({ problem, messages, userText, code, failedTests }) {
  const hints = JSON.parse(problem.hints);
  const userTurns = messages.filter((m) => m.role === "user").length;
  const hintIndex = Math.min(hints.length - 1, Math.max(0, userTurns));

  if (process.env.OPENAI_API_KEY) {
    try {
      const history = messages.slice(-8).map((m) => ({
        role: m.role === "tutor" ? "assistant" : "user",
        content: m.content,
      }));
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          temperature: 0.4,
          messages: [
            {
              role: "system",
              content: `You are Pathlight, a Socratic DSA tutor. NEVER provide a complete working solution or paste the full function. You may ask questions, give a small hint, point at a pattern, or discuss complexity. If the student begs for the answer, refuse and ask a smaller question instead.

Problem: ${problem.title}
${problem.prompt}
Allowed hints in order: ${hints.join(" | ")}
If tests failed, mention that generally (not the expected outputs of hidden tests).`,
            },
            ...history,
            {
              role: "user",
              content: `Student message: ${userText}\nCurrent code:\n${code || "(empty)"}\nFailed tests: ${failedTests || 0}`,
            },
          ],
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content?.trim();
        if (text) return text;
      }
    } catch {
      // fall through to local tutor
    }
  }

  if (looksLikeAskingForAnswer(userText)) {
    return "I will not drop the full answer here — that would steal the learning. Look at your loop (or your missing loop). What is the first value you need to remember before you start walking the rest of the input?";
  }

  if (!code || !code.trim() || /pass|return 0|TODO/i.test(code) && code.length < 80) {
    return `Before typing, narrate the plan in one sentence. ${problem.title}: what would you do with a tiny example on paper? When you have that sentence, write the first line of the loop (or the base case).`;
  }

  if (failedTests > 0) {
    return `Some tests failed, which is useful. Do not stare at the whole function. Pick one failing path: empty-ish input, a single element, or negatives. Which of those did you not handle? Next, try this nudge: ${hints[Math.min(hintIndex, hints.length - 1)]}`;
  }

  const questions = [
    "What is the size of your answer in terms of n — one value, or an array of n values?",
    "Are you allowed extra memory, or should this be in-place?",
    "If you already had the answer for the first i-1 items, how would item i update it?",
    "Name the pattern: scan, two pointers, hash map, or recursion?",
  ];

  return `${hints[hintIndex]} ${questions[userTurns % questions.length]} Reply with your current idea, not a request for the finished code.`;
}
