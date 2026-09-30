---
slug: "fenwick-tree"
title: "Fenwick Tree"
summary: "Efficient prefix sums with point updates using a binary indexed tree."
estimatedHours: 6
difficulty: "Advanced"
videoId: "CWDQYN44xh4"
videoTitle: "Fenwick tree basics"
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
A Fenwick Tree (or Binary Indexed Tree) is a data structure that efficiently updates elements and calculates prefix sums in a table of numbers, operating in $O(\log n)$ time.

## Examples
- Maintaining dynamic cumulative frequencies in data streams or statistical analysis.
- Calculating inversion counts in an array to measure how out-of-order the elements are.
- Managing range sum queries efficiently when elements are frequently updated.

## Sample Program

```javascript
class FenwickTree {
    constructor(size) {
        this.tree = new Array(size + 1).fill(0);
    }
    update(i, delta) {
        for (; i < this.tree.length; i += i & -i) this.tree[i] += delta;
    }
    query(i) {
        let sum = 0;
        for (; i > 0; i -= i & -i) sum += this.tree[i];
        return sum;
    }
}
const ft = new FenwickTree(5);
ft.update(3, 5);
console.log(ft.query(3));
```

```python
class FenwickTree:
    def __init__(self, size):
        self.tree = [0] * (size + 1)

    def update(self, i, delta):
        while i < len(self.tree):
            self.tree[i] += delta
            i += i & -i

    def query(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s

ft = FenwickTree(5)
ft.update(3, 5)
print(ft.query(3))
```

```java
public class FenwickTree {
    int[] tree;
    public FenwickTree(int size) {
        tree = new int[size + 1];
    }
    public void update(int i, int delta) {
        for (; i < tree.length; i += i & -i) tree[i] += delta;
    }
    public int query(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i) sum += tree[i];
        return sum;
    }
    public static void main(String[] args) {
        FenwickTree ft = new FenwickTree(5);
        ft.update(3, 5);
        System.out.println(ft.query(3));
    }
}
```

```cpp
#include <vector>
#include <iostream>

class FenwickTree {
    std::vector<int> tree;
public:
    FenwickTree(int size) : tree(size + 1, 0) {}
    void update(int i, int delta) {
        for (; i < tree.size(); i += i & -i) tree[i] += delta;
    }
    int query(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i) sum += tree[i];
        return sum;
    }
};

int main() {
    FenwickTree ft(5);
    ft.update(3, 5);
    std::cout << ft.query(3) << std::endl;
    return 0;
}
```

These programs demonstrate the implementation of a Fenwick Tree using 1-based indexing to perform point updates and prefix sum queries in logarithmic time. The bitwise operation `i & -i` is used to isolate the least significant bit for traversing the tree.

## Techniques Used
- 1-based indexing to simplify parent-child index calculations.
- Bitwise manipulation (`i & -i`) to navigate through tree nodes efficiently.
- Logarithmic time traversal for both updates and prefix sum queries.
