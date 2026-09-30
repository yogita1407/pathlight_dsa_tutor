---
slug: "breadth-first-search"
title: "Breadth-First Search"
summary: "Explore a graph level by level using a queue."
estimatedHours: 6
difficulty: "Intermediate"
videoId: "s-CYnVz-uh4"
videoTitle: "BFS on graphs"
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
Breadth-First Search (BFS) is a graph traversal algorithm that explores nodes level by level, visiting all neighbors of a node before moving to the next level, utilizing a queue data structure to track the order of visitation.

## Examples
* Finding the shortest path between two nodes in an unweighted graph.
* Level-order traversal of a tree data structure.
* Solving word ladder puzzles by finding the minimum number of transformations between words.

## Sample Program

```javascript
function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
        let node = queue.shift();
        for (let neighbor of graph[node]) {
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
    visited = set([start])
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

```java
import java.util.*;

class BFS {
    static void bfs(Map<Integer, List<Integer>> graph, int start) {
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

void bfs(const std::vector<std::vector<int>>& graph, int start) {
    std::unordered_set<int> visited;
    std::queue<int> q;
    
    visited.insert(start);
    q.push(start);
    
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        for (int neighbor : graph[node]) {
            if (visited.find(neighbor) == visited.end()) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
}
```

The provided code implementations demonstrate how to traverse a graph in a breadth-first manner by utilizing a queue to process nodes sequentially while maintaining a visited collection to prevent infinite loops.

## Techniques Used
* Queue-based FIFO (First-In-First-Out) traversal order
* Visited set tracking to prevent cycles and redundant processing
* Level-order processing for distance and step calculation
