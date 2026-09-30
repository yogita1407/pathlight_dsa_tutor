---
slug: "depth-first-search"
title: "Depth-First Search"
summary: "Explore a graph by going as deep as possible before backtracking."
estimatedHours: 6
difficulty: "Intermediate"
videoId: "Urx87-NMm6c"
videoTitle: "DFS on graphs"
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
Depth-First Search (DFS) is a graph traversal algorithm that explores as deep as possible along each branch before backtracking.

## Examples
- Solving mazes and finding paths between two nodes in a graph.
- Detecting cycles in directed and undirected graphs.
- Performing topological sorting for task scheduling dependencies.

## Sample Program
```javascript
function dfs(node, visited = new Set(), graph) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let neighbor of graph[node] || []) {
        dfs(neighbor, visited, graph);
    }
}
```
```python
def dfs(node, visited=None, graph=None):
    if visited is None: visited = set()
    if node in visited: return
    visited.add(node)
    for neighbor in graph.get(node, []):
        dfs(neighbor, visited, graph)
```
```java
void dfs(int node, boolean[] visited, Map<Integer, List<Integer>> graph) {
    if (visited[node]) return;
    visited[node] = true;
    for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
        dfs(neighbor, visited, graph);
    }
}
```
```cpp
void dfs(int node, vector<bool>& visited, const unordered_map<int, vector<int>>& graph) {
    if (visited[node]) return;
    visited[node] = true;
    auto it = graph.find(node);
    if (it != graph.end()) {
        for (int neighbor : it->second) {
            dfs(neighbor, visited, graph);
        }
    }
}
```
These code snippets demonstrate a recursive implementation of DFS that traverses all reachable nodes from a starting point while tracking visited states to prevent infinite loops.

## Techniques Used
- Recursion or an explicit Stack data structure.
- Visited state tracking (using sets, boolean arrays, or hash maps).
- Backtracking to explore alternative branches when a dead end is reached.
