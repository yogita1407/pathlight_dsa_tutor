---
slug: "hashing"
title: "Hashing"
summary: "O(1) average-case associative arrays for mapping, frequency counting, and membership testing."
estimatedHours: 7
difficulty: "Beginner"
videoId: "0M_kIqhV_3U"
videoTitle: "MIT 6.006: Hashing"
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

Hashing utilizes hash tables to map keys to values, providing expected O(1) average-case time complexity for insertion, deletion, and lookup operations.

## Examples

- Using a Set to achieve O(1) membership checks (e.g., seen items).
- Using a Map to track the frequency of elements in an array.
- Caching previously seen values to reduce an O(N^2) algorithm to O(N).

## Sample Program with Explanation

```javascript
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}
```

This solves the Two Sum problem by storing elements and their indices in a Map. For each element, it calculates the needed complement and checks the Map in O(1) time. This reduces the problem from O(N^2) to O(N) time and O(N) space.

## Techniques Used

- Complement searching.
- Frequency Maps (counting occurrences).
- Memoization and caching.
