// The GraphQL query to get the actual LeetCode question_id for a slug
const QUESTION_ID_QUERY = `
  query questionData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
    }
  }
`;

/**
 * Submits code to LeetCode and waits for the result.
 */
export async function submitToLeetCode(slug, code, language = "javascript") {
    const session = process.env.LEETCODE_SESSION;
    const csrf = process.env.LEETCODE_CSRF;

    if (!session || !csrf) {
        throw new Error("Missing LeetCode credentials in .env");
    }

    const headers = {
        "Content-Type": "application/json",
        "cookie": `LEETCODE_SESSION=${session}; csrftoken=${csrf}`,
        "x-csrftoken": csrf,
        "origin": "https://leetcode.com",
        "referer": `https://leetcode.com/problems/${slug}/`,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    };

    // 1. Get the Question ID
    const qRes = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query: QUESTION_ID_QUERY, variables: { titleSlug: slug } })
    });
    
    const qJson = await qRes.json();
    const questionId = qJson?.data?.question?.questionId;

    if (!questionId) {
        throw new Error("Could not find Question ID on LeetCode.");
    }

    const lcLang = language === 'python' ? 'python3' : language;

    // 2. Submit the code
    const submitRes = await fetch(`https://leetcode.com/problems/${slug}/submit/`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            lang: lcLang,
            question_id: questionId,
            typed_code: code
        })
    });

    const submitJson = await submitRes.json();
    if (submitJson.error) {
        throw new Error("LeetCode Submission Error: " + submitJson.error);
    }

    const submissionId = submitJson.submission_id;
    if (!submissionId) {
        throw new Error("Failed to get submission ID.");
    }

    // 3. Poll for results (LeetCode usually takes 2-5 seconds)
    let attempts = 0;
    while (attempts < 15) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s
        
        const checkRes = await fetch(`https://leetcode.com/submissions/detail/${submissionId}/check/`, {
            method: "GET",
            headers
        });
        
        const result = await checkRes.json();
        
        // If state is SUCCESS, the execution finished. 
        if (result.state === "SUCCESS") {
            return {
                status_msg: result.status_msg, // "Accepted", "Wrong Answer", "Time Limit Exceeded", "Compile Error"
                total_testcases: result.total_testcases,
                total_correct: result.total_correct,
                runtime_percentile: result.runtime_percentile,
                memory_percentile: result.memory_percentile,
                compile_error: result.compile_error,
                run_success: result.run_success,
                status_runtime: result.status_runtime,
                status_memory: result.status_memory,
                compare_result: result.compare_result,
                expected_output: result.expected_output,
                code_output: result.code_output,
                last_testcase: result.last_testcase
            };
        }
        
        attempts++;
    }

    throw new Error("Timeout waiting for LeetCode judge.");
}
