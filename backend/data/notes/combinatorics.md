---
slug: "combinatorics"
title: "Combinatorics"
summary: "Count arrangements, selections, and permutations using formulas and DP."
estimatedHours: 6
difficulty: "Advanced"
videoId: "XjQJ5v4h0fM"
videoTitle: "Combinatorics for programming"
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
Combinatorics is a branch of mathematics focused on counting, arranging, and selecting items, utilizing principles like permutations, combinations, and inclusion-exclusion.

## Examples
* Calculating the number of unique paths in a grid from the top-left to the bottom-right corner moving only right and down.
* Determining the probability of specific hands in card games or outcomes in discrete probability spaces.
* Generating and counting all subsets, combinations, or permutations of a dataset for search or optimization problems.

## Sample Program

```javascript
function countPaths(m, n) {
    const dp = Array(m).fill(0).map(() => Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
console.log(countPaths(3, 3));
```

```python
def count_paths(m, n):
    dp = [[1] * n for _ in range(m)]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    return dp[m - 1][n - 1]

print(count_paths(3, 3))
```

```java
public class GridPaths {
    public static int countPaths(int m, int n) {
        int[][] dp = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || j == 0) dp[i][j] = 1;
                else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }
    public static void main(String[] args) {
        System.out.println(countPaths(3, 3));
    }
}
```

```cpp
#include <iostream>
#include <vector>

int countPaths(int m, int n) {
    std::vector<std::vector<int>> dp(m, std::vector<int>(n, 1));
    for (int i = 1; i < m; ++i) {
        for (int j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}

int mian() {
    std::cout << countPaths(3, 3) << std::endl;
    return 0;
}
```

These snippets use dynamic programming to iteratively compute the total number of unique grid paths, avoiding redundant calculations and potential integer overflows found in naive recursion.

## Techniques Used
* **Factorials and Combinations:** Utilizing mathematical formulas like $nPr$ and $nCr$ for direct arrangement and selection counts.
* **Dynamic Programming:** Storing intermediate states to efficiently compute complex counting problems with constraints.
* **Modulo Arithmetic:** Applying modulo operations at each step to handle extremely large count results without integer overflow.
