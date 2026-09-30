---
slug: "binary-search"
title: "Binary Search"
summary: "Repeatedly halve a sorted or monotonic search space."
estimatedHours: 7
difficulty: "Intermediate"
videoId: "6z4ZzI6X9xk"
videoTitle: "Binary search pattern"
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
Binary search is an efficient search algorithm that finds the position of a target value within a sorted array—or determines the optimal value under a monotonic condition—by repeatedly halving the search space in $O(\log n)$ time.

## Examples
* Finding a specific record in a large sorted database by repeatedly dividing the dataset in half.
* Finding the minimum ship capacity required to ship all packages within a certain number of days (search on the answer).
* Locating the exact insertion index for a new element in a sorted list to maintain sorted order.

## Sample Program

```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

```java
public class BinarySearch {
    public static int search(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}
```

```cpp
#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

These snippets demonstrate the standard iterative binary search algorithm, utilizing left, right, and middle pointers to repeatedly divide the search space until the target is found or pointers cross.

## Techniques Used
* **Halve the search space:** Discarding half of the remaining elements during each iteration based on a comparison.
* **Monotonic condition:** Leveraging a property that transitions uniformly from false to true (or vice versa) to apply search logic.
* **Boundary updates:** Adjusting the `left` or `right` pointers relative to the middle element to prevent infinite loops.
