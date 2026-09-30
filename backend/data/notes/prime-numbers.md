---
slug: "prime-numbers"
title: "Prime Numbers"
summary: "Generate and test primes using sieves and factorization."
estimatedHours: 5
difficulty: "Intermediate"
videoId: "fb4oZwS4VhQ"
videoTitle: "Prime numbers and sieves"
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
An algorithm used to efficiently find all prime numbers up to a given integer $n$ by iteratively marking the multiples of each prime as composite.

## Examples
- Precomputing prime numbers for cryptographic applications, such as the RSA algorithm where large prime numbers are frequently generated and tested.
- Solving number theory problems in competitive programming that require rapid prime checking or prime factorization up to a large bound.
- Generating primes to be used as modulo bases in hashing algorithms or pseudo-random number generators.

## Sample Program
```javascript
function sieveOfEratosthenes(n) {
    const primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let p = 2; p * p <= n; p++) {
        if (primes[p]) {
            for (let i = p * p; i <= n; i += p) primes[i] = false;
        }
    }
    return primes;
}
```
```python
def sieve_of_eratosthenes(n):
    primes = [True] * (n + 1)
    primes[0] = primes[1] = False
    p = 2
    while p * p <= n:
        if primes[p]:
            for i in range(p * p, n + 1, p):
                primes[i] = False
        p += 1
    return primes
```
```java
import java.util.Arrays;

public class Sieve {
    public static boolean[] sieveOfEratosthenes(int n) {
        boolean[] primes = new boolean[n + 1];
        Arrays.fill(primes, true);
        primes[0] = primes[1] = false;
        for (int p = 2; p * p <= n; p++) {
            if (primes[p]) {
                for (int i = p * p; i <= n; i += p) primes[i] = false;
            }
        }
        return primes;
    }
}
```
```cpp
#include <vector>

std::vector<bool> sieveOfEratosthenes(int n) {
    std::vector<bool> primes(n + 1, true);
    primes[0] = primes[1] = false;
    for (int p = 2; p * p <= n; p++) {
        if (primes[p]) {
            for (int i = p * p; i <= n; i += p) primes[i] = false;
        }
    }
    return primes;
}
```
These implementations use a boolean array to mark numbers as prime or composite, starting the elimination process for each prime $p$ directly from its square ($p^2$).

## Techniques Used
- Array-based boolean marking to track prime status in $O(n \log \log n)$ time complexity.
- Space optimization by using boolean flags to filter out composite numbers iteratively.
- Loop optimization by starting inner sweeps at the square of the current prime ($p^2$) and incrementing by steps of $p$.
