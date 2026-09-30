---
slug: "space-complexity"
title: "Space Complexity"
summary: "Evaluating auxiliary memory footprint and call stack limitations."
estimatedHours: 3
difficulty: "Beginner"
videoId: "Mo4vesaut8g"
videoTitle: "Stanford CS161: Design and Analysis of Algorithms"
references:
  - label: "MDN Web Docs (JavaScript)"
    url: "https://developer.mozilla.org/en-US/"
  - label: "Python Official Documentation"
    url: "https://docs.python.org/3/"
  - label: "C++ Reference"
    url: "https://en.cppreference.com/"
  - label: "Java Standard Ed."
    url: "https://docs.oracle.com/en/java/javase/"
---

## Definition

Space complexity evaluates the total auxiliary memory (extra space) an algorithm uses relative to the size of the input, including dynamically allocated data structures and the implicit call stack.

## Examples

- O(1): Using a few simple variables to keep count.
- O(N): Copying an array or allocating a hash map for all N elements.
- O(N): A recursive function that makes N consecutive calls before returning.

## Sample Program with Explanation

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

While no arrays or objects are explicitly created, each recursive call adds a new frame to the call stack. Calling `factorial(N)` results in a call stack of depth N, giving it a Space Complexity of O(N).

## Techniques Used

- Identifying explicitly allocated auxiliary structures (arrays, sets, maps).
- Measuring maximum depth of the recursive call stack.
- Trading time for space (e.g., using memoization).
