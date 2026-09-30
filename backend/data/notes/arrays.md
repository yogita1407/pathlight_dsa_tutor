---
slug: "arrays"
title: "Arrays"
summary: "Contiguous memory blocks for ordered data. Essential for pointer manipulation and greedy scans."
estimatedHours: 6
difficulty: "Beginner"
videoId: "8wmd7RKvPX8"
videoTitle: "MIT 6.006: Data Structures and Dynamic Arrays"
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

An array is a contiguous block of memory used to store ordered elements, allowing for O(1) random access via indexing and excellent CPU cache locality.

## Examples

- Accessing the 3rd element: arr[2]
- Appending an element to the end of a dynamic array (amortized O(1)).
- Inserting an element at the beginning, which requires shifting all others (O(N)).

## Sample Program with Explanation

```javascript
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
```

This program reverses an array in-place. It utilizes two pointers, one starting at the beginning and the other at the end, swapping their values and moving towards the center. This is done in O(N) time and O(1) extra space.

## Techniques Used

- Two Pointers (converging from ends).
- Sliding Window (contiguous subsegments).
- Prefix Sums (precomputed cumulative totals).
- In-place mutation to optimize space.
