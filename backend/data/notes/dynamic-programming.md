---
slug: "dynamic-programming"
title: "Dynamic Programming"
summary: "Reuse answers to overlapping subproblems through states and transitions."
estimatedHours: 10
difficulty: "Advanced"
videoId: "OQ5jsbhAv_M"
videoTitle: "Dynamic programming fundamentals"
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
Dynamic Programming (DP) is an algorithmic technique for solving complex problems by breaking them down into simpler overlapping subproblems and reusing the solutions to those subproblems to achieve optimal substructure.

## Examples
- Finding the minimum number of coins needed to make a specific change amount.
- Calculating the maximum value of items that can fit into a knapsack with a weight capacity.
- Determining the number of unique paths to traverse a grid from the top-left to the bottom-right corner.

## Sample Program
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```
```python
def fibonacci(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```
```java
public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) return n;
        int[] dp = new int[n + 1];
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
```
```cpp
#include <vector>

int fibonacci(int n) {
    if (n <= 1) return n;
    std::vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```
These code snippets demonstrate a bottom-up tabulation approach to calculate the $n$-th Fibonacci number efficiently by iteratively building up solutions from base cases.

## Techniques Used
- Defining clear DP states to represent subproblems.
- Establishing base cases to terminate recursion or initialize iteration.
- Using memoization (top-down) or tabulation (bottom-up) to reuse previously computed results.
- Space optimization to reduce memory usage by only keeping track of immediately preceding states.
