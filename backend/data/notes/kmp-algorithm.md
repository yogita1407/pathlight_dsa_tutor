---
slug: "kmp-algorithm"
title: "KMP Algorithm"
summary: "Search for a pattern in text in linear time using failure links."
estimatedHours: 6
difficulty: "Advanced"
videoId: "V5-7GzOfADQ"
videoTitle: "KMP pattern matching"
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
The Knuth-Morris-Pratt (KMP) algorithm is an efficient string-matching algorithm that searches for occurrences of a "word" within a main "text" by employing observations from previous mismatches, thereby avoiding the re-examination of previously matched characters.

## Examples
* Searching for a specific keyword within a massive text document or log file.
* Finding patterns in real-time streaming data, such as network packet inspection.
* Genomic sequence analysis where a small genetic pattern is located within a large DNA strand.

## Sample Program

```javascript
function computeLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let length = 0, i = 1;
    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            lps[i++] = ++length;
        } else if (length > 0) {
            length = lps[length - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}
```

```python
def compute_lps(pattern):
    lps = [0] * len(pattern)
    length, i = 0, 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length > 0:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps
```

```java
class KMP {
    static int[] computeLPS(String pattern) {
        int[] lps = new int[pattern.length()];
        int length = 0, i = 1;
        while (i < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(length)) {
                lps[i++] = ++length;
            } else if (length > 0) {
                length = lps[length - 1];
            } else {
                lps[i++] = 0;
            }
        }
        return lps;
    }
}
```

```cpp
#include <vector>
#include <string>

std::vector<int> computeLPS(const std::string& pattern) {
    std::vector<int> lps(pattern.length(), 0);
    int length = 0, i = 1;
    while (i < pattern.length()) {
        if (pattern[i] == pattern[length]) {
            lps[i++] = ++length;
        } else if (length > 0) {
            length = lps[length - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}
```

These code snippets demonstrate how to build the Longest Prefix Suffix (LPS) failure function array, which is the core preprocessing step of the KMP algorithm. This precomputed table allows the search algorithm to skip redundant character comparisons upon encountering a mismatch.

## Techniques Used
* Preprocessing the pattern to build a failure function (Longest Prefix Suffix / LPS array).
* Skipping already matched characters to achieve optimal linear time complexity $O(n + m)$.
* Leveraging state tracking to resume searching without backtracking in the main text.
