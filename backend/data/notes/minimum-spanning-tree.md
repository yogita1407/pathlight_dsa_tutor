---
slug: "minimum-spanning-tree"
title: "Minimum Spanning Tree"
summary: "Connect all nodes with minimum total edge weight using Kruskal or Prim."
estimatedHours: 6
difficulty: "Advanced"
videoId: "71UQH7Pr9kU"
videoTitle: "MST algorithms"
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
A Minimum Spanning Tree (MST) is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight.

## Examples
* Designing local area networks (LAN) or utility grids (like electrical or water pipelines) to minimize total wire or pipe length.
* Clustering data points in machine learning using single-linkage hierarchical clustering.
* Finding approximate solutions to the Traveling Salesperson Problem.

## Sample Program

```javascript
// Conceptual representation of finding an MST edge using Kruskal's approach
const edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]];
edges.sort((a, b) => a[2] - b[2]);
console.log("Smallest edge in MST:", edges[0]);
```

```python
# Conceptual representation of finding an MST edge using Kruskal's approach
edges = [(0, 1, 1), (1, 2, 2), (0, 2, 3)]
edges.sort(key=lambda x: x[2])
print("Smallest edge in MST:", edges[0])
```

```java
import java.util.Arrays;

public class MSTExample {
    public static void main(String[] args) {
        int[][] edges = {{0, 1, 1}, {1, 2, 2}, {0, 2, 3}};
        Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));
        System.out.println("Smallest edge weight: " + edges[0][2]);
    }
}
```

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    vector<vector<int>> edges = {{0, 1, 1}, {1, 2, 2}, {0, 2, 3}};
    sort(edges.begin(), edges.end(), [](const vector<int>& a, const vector<int>& b) {
        return a[2] < b[2];
    });
    cout << "Smallest edge weight: " << edges[0][2] << endl;
    return 0;
}
```

These programs demonstrate the initial sorting step of Kruskal's algorithm, which sorts the graph's edges by weight to evaluate the cheapest connections first.

## Techniques Used
* **Greedy Algorithm:** Making locally optimal choices (picking the smallest available edge) to find the global optimum.
* **Disjoint Set Union (Union-Find):** Efficiently tracking connected components and detecting cycles when adding new edges in Kruskal's algorithm.
* **Priority Queue (Min-Heap):** Dynamically retrieving the minimum weight edge connected to the growing tree in Prim's algorithm.
