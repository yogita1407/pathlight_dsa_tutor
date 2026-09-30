---
slug: "segment-tree"
title: "Segment Tree"
summary: "Range queries and updates on intervals using a tree of segments."
estimatedHours: 8
difficulty: "Advanced"
videoId: "ZBHKZKw5Q-Q"
videoTitle: "Segment tree introduction"
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
A segment tree is a tree-based data structure that stores information about intervals or segments, supporting efficient range queries and point or range updates in logarithmic time.

## Examples
* **Range Minimum/Maximum Queries:** Finding the minimum or maximum value in a continuously changing array segment, commonly used in competitive programming and stock market analysis.
* **Range Sum Queries:** Calculating cumulative totals over specific sub-arrays where elements are frequently updated.
* **Computational Geometry:** Managing intervals and detecting overlaps in graphical rendering and mapping applications.

## Sample Program

```javascript
class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n).fill(0);
        this.build(arr, 0, 0, this.n - 1);
    }
    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
            return;
        }
        let mid = Math.floor((start + end) / 2);
        this.build(arr, 2 * node + 1, start, mid);
        this.build(arr, 2 * node + 2, mid + 1, end);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }
}
const st = new SegmentTree([1, 3, 5, 7, 9, 11]);
```

```python
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)

    def _build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
            return
        mid = (start + end) // 2
        self._build(arr, 2 * node + 1, start, mid)
        self._build(arr, 2 * node + 2, mid + 1, end)
        self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

st = SegmentTree([1, 3, 5, 7, 9, 11])
```

```java
class SegmentTree {
    int[] tree;
    int n;

    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 0, 0, n - 1);
    }

    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
            return;
        }
        int mid = (start + end) / 2;
        build(arr, 2 * node + 1, start, mid);
        build(arr, 2 * node + 2, mid + 1, end);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
}
```

```cpp
#include <vector>

class SegmentTree {
    std::vector<int> tree;
    int n;

    void build(const std::vector<int>& arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
            return;
        }
        int mid = (start + end) / 2;
        build(arr, 2 * node + 1, start, mid);
        build(arr, 2 * node + 2, mid + 1, end);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

public:
    SegmentTree(const std::vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n, 0);
        build(arr, 0, 0, n - 1);
    }
};
```

These code snippets demonstrate how to initialize and recursively build a segment tree for range sum queries in $O(n)$ time. The tree array is sized to $4n$ to safely accommodate all nodes in the complete binary tree representation.

## Techniques Used
* **Divide and Conquer:** Recursively splitting the array into halves to construct the tree and evaluate queries.
* **Lazy Propagation:** Deferring updates across intervals to maintain $O(\log n)$ efficiency during range updates.
* **Binary Tree Representation:** Mapping hierarchical interval data onto a flat array structure for memory efficiency.
