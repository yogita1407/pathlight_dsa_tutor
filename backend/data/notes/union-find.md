---
slug: "union-find"
title: "Union-Find"
summary: "Track connected components as relationships or edges are added."
estimatedHours: 6
difficulty: "Advanced"
videoId: "wU6udHRIkcc"
videoTitle: "Disjoint set union"
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

## Groups and representatives

Union-Find stores a parent representative for each item. Find identifies the group, and union joins two groups.

Path compression and union by rank keep operations extremely fast in practice.

### Key Takeaways

* **Fast dynamic connectivity**
* **Path compression flattens parent chains**
* **Union by rank keeps trees shallow**

## When to use it

- Count connected components
- Cycle detection in undirected graphs
- Minimum spanning trees
- Grouping linked accounts or devices

### Key Takeaways

* **Use when edges merge groups**
* **Different from DFS and BFS traversal**
