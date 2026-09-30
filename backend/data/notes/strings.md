---
slug: "strings"
title: "Strings"
summary: "Text as ordered characters: scan, count, compare, and match patterns."
estimatedHours: 6
difficulty: "Beginner"
videoId: "D6xkbGLQesk"
videoTitle: "Strings, scans, and palindromes"
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

A string is an ordered sequence of characters, usually implemented as an immutable array. String algorithms involve scanning, counting, comparing, and matching patterns within text.

## Examples

- Checking if a string is a palindrome.
- Finding the longest substring without repeating characters.
- Grouping anagrams by counting character frequencies.

## Sample Program with Explanation

```javascript
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

This program checks if a string is a palindrome using the Two Pointers technique. It compares characters from both ends moving inward. If all match, it's a palindrome (O(N) time).

## Techniques Used

- Two Pointers (for comparisons from opposite ends).
- Sliding Window (for substring problems).
- Hashing/Frequency arrays (for anagrams and character counts).
