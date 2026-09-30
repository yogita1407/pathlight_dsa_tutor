---
slug: "kadane-algorithm"
title: "Kadane's Algorithm"
summary: "Find the maximum subarray sum in linear time."
estimatedHours: 4
difficulty: "Intermediate"
videoId: "AHZpyENo7k4"
videoTitle: "Kadane's algorithm explained"
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
The Maximum Subarray problem is the task of finding the contiguous subarray within a one-dimensional array of numbers (containing at least one positive number) which has the largest sum.

## Examples
* Finding the period of maximum profit or loss in a financial time-series stock price dataset.
* Identifying regions of interest in spatial image processing or genetic sequence analysis.

## Sample Program

```javascript
function maxSubArray(nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        globalMax = Math.max(globalMax, currentMax);
    }
    return globalMax;
}
```

```python
def max_sub_array(nums):
    current_max = global_max = nums[0]
    for num in nums[1:]:
        current_max = max(num, current_max + num)
        global_max = max(global_max, current_max)
    return global_max
```

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int currentMax = nums[0];
        int globalMax = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentMax = Math.max(nums[i], currentMax + nums[i]);
            globalMax = Math.max(globalMax, currentMax);
        }
        return globalMax;
    }
}
```

```cpp
#include <vector>
#include <algorithm>

int maxSubArray(const std::vector<int>& nums) {
    int currentMax = nums[0];
    int globalMax = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        currentMax = std::max(nums[i], currentMax + nums[i]);
        globalMax = std::max(globalMax, currentMax);
    }
    return globalMax;
}
```

These snippets implement Kadane's algorithm to compute the maximum contiguous subarray sum in a single linear pass. At each step, the algorithm decides whether to extend the previous subarray or start a fresh one.

## Techniques Used
* **Dynamic Programming:** Breaking down the problem into overlapping subproblems by maintaining a running state (current maximum sum).
* **Greedy Approach:** Making the locally optimal choice at each index (whether to include the current element in the existing subarray or start a new subarray) to find the global optimum.
* **Space Optimization:** Reducing space complexity to $O(1)$ by storing only the running metrics rather than an entire DP table.
