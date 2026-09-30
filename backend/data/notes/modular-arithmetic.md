---
slug: "modular-arithmetic"
title: "Modular Arithmetic"
summary: "Perform arithmetic under a modulus for large numbers and cryptography."
estimatedHours: 5
difficulty: "Advanced"
videoId: "FnQqbqz5wzI"
videoTitle: "Modular arithmetic basics"
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
Modular arithmetic is a system of arithmetic for integers where numbers "wrap around" upon reaching a certain value called the modulus, keeping computations within a fixed range.

## Examples
* **Cryptography:** Securing data transmission and digital signatures using algorithms like RSA, which rely heavily on large prime numbers and modular exponentiation.
* **Combinatorics:** Calculating large combinations and permutations modulo a prime number (like $10^9 + 7$) to prevent integer overflow.
* **Hashing and Hash Tables:** Distributing keys uniformly across a fixed-size array using the modulo operator to determine bucket indices.

## Sample Program

```javascript
function powerMod(base, exp, mod) {
    let res = 1n;
    base = base % mod;
    while (exp > 0n) {
        if (exp % 2n === 1n) res = (res * base) % mod;
        base = (base * base) % mod;
        exp /= 2n;
    }
    return res;
}
console.log(powerMod(2n, 10n, 1000n));
```

```python
def power_mod(base, exp, mod):
    res = 1
    base %= mod
    while exp > 0:
        if exp % 2 == 1:
            res = (res * base) % mod
        base = (base * base) % mod
        exp //= 2
    return res

print(power_mod(2, 10, 1000))
```

```java
public class ModuloExample {
    public static long powerMod(long base, long exp, long mod) {
        long res = 1;
        base %= mod;
        while (exp > 0) {
            if (exp % 2 == 1) res = (res * base) % mod;
            base = (base * base) % mod;
            exp /= 2;
        }
        return res;
    }
    public static void main(String[] args) {
        System.out.println(powerMod(2, 10, 1000));
    }
}
```

```cpp
#include <iostream>

long long powerMod(long long base, long long exp, long long mod) {
    long long res = 1;
    base %= mod;
    while (exp > 0) {
        if (exp % 2 == 1) res = (res * base) % mod;
        base = (base * base) % mod;
        exp /= 2;
    }
    return res;
}

int main() {
    std::cout << powerMod(2, 10, 1000) << std::endl;
    return 0;
}
```

These code snippets demonstrate fast exponentiation (binary exponentiation) to efficiently compute large powers under a given modulus without causing integer overflow.

## Techniques Used
* **Modular Addition and Multiplication Properties:** Applying distributive laws like $(a + b) \pmod m = ((a \pmod m) + (b \pmod m)) \pmod m$ at each step of a calculation.
* **Fast Exponentiation:** Computing large powers in logarithmic time $O(\log n)$ by repeatedly squaring the base and halving the exponent.
* **Modular Inverse:** Utilizing Fermat's Little Theorem or the Extended Euclidean Algorithm to find multiplicative inverses when division is required modulo a prime.
