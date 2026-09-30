const q = `query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    metaData
    exampleTestcases
  }
}`;
fetch('https://leetcode.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: q, variables: { titleSlug: 'two-sum' } })
}).then(r => r.json()).then(console.log);
