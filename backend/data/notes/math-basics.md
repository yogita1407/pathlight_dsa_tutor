---
slug: "math-basics"
title: "Math Basics"
summary: "GCD, LCM, primes, modular arithmetic, and fast exponentiation."
estimatedHours: 6
difficulty: "Intermediate"
videoId: "ju36kH8v2Ww"
videoTitle: "Number theory basics"
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
Number theory in computer science involves the algorithmic study of integers, encompassing properties like divisibility, prime numbers, greatest common divisors, and modular arithmetic to solve computational and cryptographic problems efficiently.

## Examples
* Cryptographic systems like RSA, which rely on the difficulty of factoring large prime numbers and performing modular exponentiation.
* Finding the Greatest Common Divisor (GCD) to simplify fractions, solve linear Diophantine equations, or optimize resource allocation cycles.
* Generating efficient prime number lists for hashing algorithms, random number generators, and specialized data structures using the Sieve of Eratosthenes.

## Sample Program

```javascript
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(48, 18));
```

```python
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print(gcd(48, 18))
```

```java
public class GCD {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    public static void main(String[] args) {
        System.out.println(gcd(48, 18));
    }
}
```

```cpp
#iostream>
#include <iostream>

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    std::cout << gcd(48, 18) << std::endl;
    return 0;
}
```

These code snippets demonstrate the Euclidean algorithm, an efficient method for computing the greatest common divisor of two integers by repeatedly applying the division algorithm. This approach reduces time complexity drastically compared to naive trial division.

## Techniques Used
* Euclidean algorithm for rapidly computing the greatest common divisor of two integers.
* Sieve of Eratosthenes for efficiently generating all prime numbers up to a given limit.
* Modular arithmetic to handle extremely large numbers safely within fixed-size integer bounds and prevent overflow.
* Fast exponentiation (binary exponentiation) to compute powers in logarithmic time.
