---
slug: "time-complexity"
title: "Time Complexity"
summary: "Rigorous asymptotic analysis to evaluate algorithm scalability and efficiency."
estimatedHours: 5
difficulty: "Beginner"
videoId: "Mo4vesaut8g"
videoTitle: "MIT 6.006: Introduction to Algorithms - Lecture 1"
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

Time complexity provides a theoretical framework (Big-O notation) to predict how the runtime of an algorithm scales as the size of the input (N) approaches infinity.

## Examples

- O(1): Accessing an element in an array by index.
- O(N): Finding the maximum value in an unsorted array.
- O(N^2): Checking all pairs in an array using nested loops.

## Sample Program with Explanation

```javascript
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

This program checks for duplicates in an array by comparing every possible pair. The outer loop runs N times, and the inner loop runs up to N times, resulting in a Time Complexity of O(N^2).

## Techniques Used

- Dropping constant multipliers and lower-order terms.
- Identifying the dominant operation inside the tightest loop.
- Accounting for the time complexity of built-in functions.
