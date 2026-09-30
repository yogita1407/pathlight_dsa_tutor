---
slug: "string-hashing"
title: "String Hashing"
summary: "Represent strings as numeric hashes for fast comparison and substring checks."
estimatedHours: 5
difficulty: "Advanced"
videoId: "VPV98o0MPh4"
videoTitle: "String hashing and Rabin-Karp"
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
String hashing is the process of converting a string into a numeric value such that equal strings yield equal hashes and different strings almost always yield different hashes, often implemented efficiently using rolling hashes for quick substring updates.

## Examples
- **Rabin-Karp Algorithm:** Efficiently searches for pattern occurrences within text by comparing rolling hash values in linear time.
- **Duplicate Substring Detection:** Identifies repeated substrings of a specific length within a larger text using precomputed hashes stored in a hash set.
- **Longest Common Substring:** Finds the longest substring shared between two or more strings by combining rolling hashes with binary search.

## Sample Program

```javascript
function computeHash(str) {
    let hash = 0;
    const p = 31, m = 1e9 + 9;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * p + str.charCodeAt(i)) % m;
    }
    return hash;
}
console.log(computeHash("abc"));
```

```python
def compute_hash(s):
    h, p, m = 0, 31, 10**9 + 9
    for char in s:
        h = (h * p + ord(char)) % m
    return h

print(compute_hash("abc"))
```

```java
public class StringHashing {
    public static long computeHash(String s) {
        long hash = 0, p = 31, m = 1000000009;
        for (int i = 0; i < s.length(); i++) {
            hash = (hash * p + s.charAt(i)) % m;
        }
        return hash;
    }
    public static void main(String[] args) {
        System.out.println(computeHash("abc"));
    }
}
```

```cpp
#include <iostream>
#include <string>

long long computeHash(std::string const& s) {
    long long hash = 0, p = 31, m = 1e9 + 9;
    long long p_pow = 1;
    for (char c : s) {
        hash = (hash * p + c) % m;
    }
    return hash;
}

int main() {
    std::cout << computeHash("abc") << std::endl;
    return 0;
}
```

These programs calculate a polynomial rolling hash value for the string "abc" using a prime base and a large modulus. This numeric representation allows for rapid comparisons and pattern matching.

## Techniques Used
- **Polynomial rolling hash:** Computes hash values incrementally by treating characters as coefficients of a polynomial.
- **Modulo arithmetic:** Keeps hash values within a manageable integer range and prevents overflow using large prime moduli.
- **Prefix hash precomputation:** Precalculates hashes of all prefixes to enable $O(1)$ substring hash retrieval.
