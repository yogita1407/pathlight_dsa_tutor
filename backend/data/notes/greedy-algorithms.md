---
slug: "greedy-algorithms"
title: "Greedy Algorithms"
summary: "Make a locally best choice when it can be proven globally correct."
estimatedHours: 6
difficulty: "Intermediate"
videoId: "bC7o8P_Ste4"
videoTitle: "Greedy algorithm intuition"
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
An algorithmic paradigm that makes the locally optimal choice at each stage with the intent of finding a global optimum.

## Examples
* Finding the minimum number of coins to make change for a specific value using standard currency denominations.
* Selecting the maximum number of non-overlapping intervals (Activity Selection Problem).
* Building a Minimum Spanning Tree (MST) in a graph using Kruskal's or Prim's algorithm.

## Sample Program
```javascript
function greedyCoinChange(coins, amount) {
    coins.sort((a, b) => b - a);
    let count = 0;
    for (let coin of coins) {
        count += Math.floor(amount / coin);
        amount %= coin;
    }
    return count;
}
console.log(greedyCoinChange([25, 10, 5, 1], 63));
```

```python
def greedy_coin_change(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        count += amount // coin
        amount %= coin
    return count

print(greedy_coin_change([25, 10, 5, 1], 63))
```

```java
import java.util.Arrays;
import java.util.Collections;

public class GreedyChange {
    public static int coinChange(Integer[] coins, int amount) {
        Arrays.sort(coins, Collections.reverseOrder());
        int count = 0;
        for (int coin : coins) {
            count += amount / coin;
            amount %= coin;
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println(coinChange(new Integer[]{25, 10, 5, 1}, 63));
    }
}
```

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int greedyCoinChange(std::vector<int>& coins, int amount) {
    std::sort(coins.rbegin(), coins.rend());
    int count = 0;
    for (int coin : coins) {
        count += amount / coin;
        amount %= coin;
    }
    return count;
}

int main() {
    std::vector<int> coins = {25, 10, 5, 1};
    std::cout << greedyCoinChange(coins, 63) << std::endl;
    return 0;
}
```

These programs implement a greedy approach for the coin change problem by sorting the denominations in descending order and repeatedly taking the largest possible coin. This strategy efficiently minimizes the total number of coins needed for standard currency systems.

## Techniques Used
* Sorting data initially to enable reliable local choices (e.g., by weight, deadline, or value).
* Using priority queues or heaps to dynamically retrieve the current best local option.
* Establishing a proof of correctness, such as an exchange argument, to show local choices lead to a global optimum.
