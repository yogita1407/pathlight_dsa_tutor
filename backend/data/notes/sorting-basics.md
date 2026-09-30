---
slug: "sorting-basics"
title: "Sorting Basics"
summary: "Order values to simplify searching, grouping, greedy choices, and pointer scans."
estimatedHours: 6
difficulty: "Beginner"
videoId: "kgBjXPnmqzs"
videoTitle: "Sorting algorithms overview"
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
Sorting is the process of arranging the elements of a collection in a specific order, such as ascending or descending, to optimize data retrieval and algorithmic processing.

## Examples
* **Interval Scheduling:** Organizing time intervals by their start or end times to efficiently solve greedy overlapping interval problems.
* **Binary Search:** Ordering a dataset so that search queries can be executed in logarithmic time $O(\log n)$.
* **Two-Pointer Algorithms:** Sorting an array first to enable linear scans using inward-moving pointers (e.g., finding pairs that sum to a target).

## Sample Program

```javascript
const intervals = [[7, 9], [1, 3], [4, 6]];
intervals.sort((a, b) => a[0] - b[0]);
console.log(intervals);
```

```python
intervals = [[7, 9], [1, 3], [4, 6]]
intervals.sort(key=lambda x: x[0])
print(intervals)
```

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[][] intervals = {{7, 9}, {1, 3}, {4, 6}};
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    }
}
```

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int main() {
    std::vector<std::vector<int>> intervals = {{7, 9}, {1, 3}, {4, 6}};
    std::sort(intervals.begin(), intervals.end(), [](const auto& a, const auto& b) {
        return a[0] < b[0];
    });
    return 0;
}
```

These programs demonstrate sorting a collection of 2D intervals based on their starting values, a common preprocessing step for algorithmic optimization.

## Techniques Used
* **Comparison Sorting:** Leveraging $O(n \log n)$ algorithms to order data elements using custom or default comparators.
* **Input Preprocessing:** Organizing raw data prior to executing pointer scans, searches, or greedy selections.
* **Greedy Ordering:** Sorting structures by specific attributes (like start or end times) to facilitate optimal greedy choices.
