---
slug: "sliding-window"
title: "Sliding Window"
summary: "Maintain a moving contiguous range instead of recalculating every range."
estimatedHours: 7
difficulty: "Beginner"
videoId: "MK-NZ4hN7rs"
videoTitle: "Sliding window pattern"
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
The sliding window technique is an algorithmic pattern that uses two pointers (left and right) to track a contiguous range of elements, such as a subarray or substring, dynamically expanding and shrinking the window boundaries to solve problems efficiently in $O(n)$ time.

## Examples
* Finding the maximum sum of a fixed-size subarray (e.g., finding the best performing 5-day stock window).
* Finding the longest substring without repeating characters in a string.
* Finding the smallest valid substring that contains a required set of target characters.

## Sample Program

```javascript
function lengthOfLongestSubstring(s) {
    let seen = new Map();
    let left = 0, maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        if (seen.has(s[right]) && seen.get(s[right]) >= left) {
            left = seen.get(s[right]) + 1;
        }
        seen.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
```

```python
def length_of_longest_substring(s: str) -> int:
    seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len
```

```java
import java.util.HashMap;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> seen = new HashMap<>();
        int left = 0, maxLength = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (seen.containsKey(c) && seen.get(c) >= left) {
                left = seen.get(c) + 1;
            }
            seen.put(c, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
```

```cpp
#include <string>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    int lengthOfLongestSubstring(std::string s) {
        std::unordered_map<char, int> seen;
        int left = 0, maxLength = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s[right];
            if (seen.count(c) && seen[c] >= left) {
                left = seen[c] + 1;
            }
            seen[c] = right;
            maxLength = std::max(maxLength, right - left + 1);
        }
        return maxLength;
    }
};
```

These snippets demonstrate how the sliding window technique maintains a left and right boundary to find the length of the longest substring without repeating characters in linear time.

## Techniques Used
* Utilizing two pointers (left and right) to represent a contiguous range or window.
* Expanding the right boundary iteratively to process new elements.
* Shrinking the left boundary only when the current window violates problem constraints.
* Tracking element frequencies or last-seen positions using hash maps or arrays to update window state efficiently without recomputation.
