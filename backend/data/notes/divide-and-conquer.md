---
slug: "divide-and-conquer"
title: "Divide and Conquer"
summary: "Split a problem into smaller subproblems, solve them, and combine results."
estimatedHours: 6
difficulty: "Intermediate"
videoId: "1J5wEfCI9QE"
videoTitle: "Divide and conquer overview"
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
Divide and conquer is an algorithmic paradigm that recursively breaks a problem down into two or more smaller or related subproblems of the same type, until these become simple enough to solve directly, and then combines their results to solve the original problem.

## Examples
* **Merge Sort & QuickSort:** Sorting large arrays by partitioning them into smaller subarrays, sorting them independently, and combining the sorted parts.
* **Binary Search:** Efficiently finding an item in a sorted array by repeatedly dividing the search interval in half.
* **Closest Pair of Points:** Finding the closest pair of points in a metric space by dividing the point set into halves and combining the minimum distances found in each half.

## Sample Program
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    return result + left[i:] + right[j:]
```
```java
import java.util.Arrays;

public class MergeSort {
    public static int[] sort(int[] arr) {
        if (arr.length <= 1) return arr;
        int mid = arr.length / 2;
        int[] left = sort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = sort(Arrays.copyOfRange(arr, mid, arr.length));
        return merge(left, right);
    }
    private static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            result[k++] = left[i] < right[j] ? left[i++] : right[j++];
        }
        while (i < left.length) result[k++] = left[i++];
        while (j < right.length) result[k++] = right[j++];
        return result;
    }
}
```
```cpp
#include <vector>

std::vector<int> merge(const std::vector<int>& left, const std::vector<int>& right) {
    std::vector<int> result;
    size_t i = 0, j = 0;
    while (i < left.size() && j < right.size()) {
        if (left[i] < right[j]) result.push_back(left[i++]);
        else result.push_back(right[j++]);
    }
    while (i < left.size()) result.push_back(left[i++]);
    while (j < right.size()) result.push_back(right[j++]);
    return result;
}

std::vector<int> mergeSort(std::vector<int> arr) {
    if (arr.size() <= 1) return arr;
    size_t mid = arr.size() / 2;
    std::vector<int> left(arr.begin(), arr.begin() + mid);
    std::vector<int> right(arr.begin() + mid, arr.end());
    return merge(mergeSort(left), mergeSort(right));
}
```
These implementations demonstrate the merge sort algorithm, which recursively divides an array into halves and then merges the sorted halves back together.

## Techniques Used
* **Identify the split:** Determine how to break the problem into independent, smaller subproblems.
* **Solve subproblems recursively:** Apply the same algorithmic logic to the smaller subsets until reaching a base case.
* **Merge results efficiently:** Combine the solutions of the subproblems to form the final answer, often using linear or logarithmic combination steps.
* **Recurrence relations:** Analyze time complexity mathematically using tools like the Master Theorem to model recursive runtime performance.
