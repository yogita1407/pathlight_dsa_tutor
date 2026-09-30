---
slug: "graph-representation"
title: "Graph Representation"
summary: "Model nodes and edges using adjacency lists, matrices, or edge lists."
estimatedHours: 6
difficulty: "Intermediate"
videoId: "09_LlHjoEiY"
videoTitle: "Graph representations"
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
A graph is a data structure consisting of nodes (vertices) connected by edges, used to model complex relationships and networks.

## Examples
* Social network connections where users are nodes and friendships are edges.
* Web page linking structures used by search engines to crawl the internet.
* Routing and navigation systems finding the shortest path between physical locations on a map.

## Sample Program

```javascript
function bfs(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

```python
from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    while queue:
        node = queue.popleft()
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

```java
import java.util.*;

class GraphTraversal {
    public static void bfs(Map<Integer, List<Integer>> graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        visited.add(start);
        queue.add(start);
        while (!queue.isEmpty()) {
            int node = queue.poll();
            for (int neighbor : graph.getOrDefault(node, Collections.emptyList())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.add(neighbor);
                }
            }
        }
    }
}
```

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <unordered_map>

void bfs(const std::unordered_map<int, std::vector<int>>& graph, int start) {
    std::unordered_set<int> visited;
    std::queue<int> q;
    visited.insert(start);
    q.push(start);
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        auto it = graph.find(node);
        if (it != graph.end()) {
            for (int neighbor : it->second) {
                if (visited.find(neighbor) == visited.end()) {
                    visited.insert(neighbor);
                    q.push(neighbor);
                }
            }
        }
    }
}
```

These code snippets demonstrate Breadth-First Search (BFS) to traverse a graph level by level using a queue and a visited set.

## Techniques Used
* Depth-First Search (DFS) using a stack or recursion for deep exploration.
* Breadth-First Search (BFS) using a queue for level-by-level exploration and unweighted shortest paths.
* Tracking visited nodes to prevent infinite loops caused by cycles.
* Modeling connections via adjacency lists, adjacency matrices, grids, or edge lists.
