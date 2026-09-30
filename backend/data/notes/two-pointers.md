---
slug: "two-pointers"
title: "Two Pointers"
summary: "Use two indexes to scan, shrink, compare, or modify a sequence."
estimatedHours: 6
difficulty: "Beginner"
videoId: "cYxP1nU2jKY"
videoTitle: "Two pointers pattern"
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
The Two Pointers pattern utilizes two independent indices that traverse a data structure—typically an array or a linked list—toward each other from opposite ends or at different speeds in the same direction to solve problems efficiently.

## Examples
* Finding a pair of numbers in a sorted array that add up to a specific target sum.
* Checking whether a given string is a valid palindrome by ignoring non-alphanumeric characters.
* Removing duplicates from a sorted array in-place without using extra memory.

## Sample Program

```javascript
function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
```

```python
def is_palindrome(s: str) -> bool:
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
```

```java
public class TwoPointers {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }
}
```

```cpp
#include <string>

bool isPalindrome(std::string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}
```

This code uses two pointers starting at opposite ends of a string and moving inward to check if characters match, achieving $O(n)$ time complexity and $O(1)$ space complexity.

## Techniques Used
* Opposite-direction pointers for pair searches, range boundaries, and palindrome verifications.
* Same-direction (slow and fast) pointers for in-place data modifications and cycle detection.
* Eliminating impossible candidates systematically with each pointer movement to reduce time complexity.
