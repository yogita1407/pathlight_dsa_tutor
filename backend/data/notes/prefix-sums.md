---
slug: "prefix-sums"
title: "Prefix Sums"
summary: "Store cumulative totals to answer range sums and subarray questions efficiently."
estimatedHours: 5
difficulty: "Beginner"
videoId: "u89i60lYx8U"
videoTitle: "Prefix sums fundamentals"
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
A prefix sum is an array or data structure where each element at a given index represents the cumulative total of all elements from the beginning of the original array up to that index, enabling constant-time range sum queries.

## Examples
* Calculating the total sales or traffic over specific date ranges in financial or web analytics dashboards.
* Processing image pixel intensities within bounding boxes efficiently in computer vision tasks.
* Solving subarray sum problems, such as finding continuous sub-arrays that add up to a specific target value.

## Sample Program

```javascript
function prefixSumRange(arr, left, right) {
    const prefix = [0];
    for (let i = 0; i < arr.length; i++) {
        prefix.push(prefix[i] + arr[i]);
    }
    return prefix[right + 1] - prefix[left];
}
console.log(prefixSumRange([1, 2, 3, 4, 5], 1, 3));
```

```python
def prefix_sum_range(arr, left, right):
    prefix = [0]
    for num in arr:
        prefix.append(prefix[-1] + num)
    return prefix[right + 1] - prefix[left]

print(prefix_sum_range([1, 2, 3, 4, 5], 1, 3))
```

```java
public class PrefixSum {
    public static int rangeSum(int[] arr, int left, int right) {
        int[] prefix = new int[arr.length + 1];
        prefix[0] = 0;
        for (int i = 0; i < arr.length; i++) {
            prefix[i + 1] = prefix[i] + arr[i];
        }
        return prefix[right + 1] - prefix[left];
    }
    public static void main(String[] args) {
        System.out.println(rangeSum(new int[]{1, 2, 3, 4, 5}, 1, 3));
    }
}
```

```cpp
#include <iostream>
#include <vector>

int rangeSum(const std::vector<int>& arr, int left, int right) {
    std::vector<int> prefix(arr.size() + 1, 0);
    for (size_t i = 0; i < arr.size(); ++i) {
        prefix[i + 1] = prefix[i] + arr[i];
    }
    return prefix[right + 1] - prefix[left];
}

int main() {
    std::cout << rangeSum({1, 2, 3, 4, 5}, 1, 3) << std::endl;
    return 0;
}
```

The code snippets build a cumulative prefix array with a leading zero to easily compute the sum of elements between indices `left` and `right` using subtraction.

## Techniques Used
* Precomputing cumulative information to avoid redundant calculations.
* Utilizing a leading zero in the prefix array to simplify boundary condition formulas.
* Combining prefix sums with hash maps to track frequencies and solve target sum subarray problems efficiently.
* Answering repeated range queries in $O(1)$ time after an initial $O(N)$ preprocessing step.
