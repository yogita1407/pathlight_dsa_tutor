---
slug: "topological-sort"
title: "Topological Sort"
summary: "Order tasks with dependencies so each task comes after its prerequisites."
estimatedHours: 6
difficulty: "Advanced"
videoId: "eL-KzMXSXXI"
videoTitle: "Topological sort explained"
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
Topological sort is an ordering of the vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex $u$ to vertex $v$, $u$ comes before $v$ in the ordering.

## Examples
- Course prerequisite planning, where courses must be taken in a specific order based on prerequisites.
- Build systems and package managers (like npm or make) to compile or resolve dependencies in the correct order.
- Task scheduling in project management where certain tasks depend on the completion of others.

## Sample Program

```javascript
function topologicalSort(vertices, edges) {
    const adj = Array.from({ length: vertices }, () => []);
    const inDegree = Array(vertices).fill(0);
    
    for (const [u, v] of edges) {
        adj[u].push(v);
        inDegree[v]++;
    }
    
    const queue = [];
    for (let i = 0; i < vertices; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    const order = [];
    while (queue.length > 0) {
        const u = queue.shift();
        order.push(u);
        for (const v of adj[u]) {
            inDegree[v]--;
            if (inDegree[v] === 0) queue.push(v);
        }
    }
    return order;
}
```

```python
from collections import deque

def topological_sort(vertices, edges):
    adj = [[] for _ in range(vertices)]
    in_degree = [0] * vertices
    
    for u, v in edges:
        adj[u].append(v)
        in_degree[v] += 1
        
    queue = deque([i for i in range(vertices) if in_degree[i] == 0])
    order = []
    
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    return order
```

```java
import java.util.*;

class TopologicalSort {
    public static List<Integer> sort(int vertices, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < vertices; i++) adj.add(new ArrayList<>());
        int[] inDegree = new int[vertices];
        
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            inDegree[edge[1]]++;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < vertices; i++) {
            if (inDegree[i] == 0) queue.add(i);
        }
        
        List<Integer> order = new ArrayList<>();
        while (!queue.isEmpty()) {
            int u = queue.poll();
            order.add(u);
            for (int v : adj.get(u)) {
                inDegree[v]--;
                if (inDegree[v] == 0) queue.add(v);
            }
        }
        return order;
    }
}
```

```cpp
#include <vector>
#include <queue>

std::vector<int> topologicalSort(int vertices, const std::vector<std::pair<int, int>>& edges) {
    std::vector<std::vector<int>> adj(vertices);
    std::vector<int> inDegree(vertices, 0);
    
    for (const auto& edge : edges) {
        adj[edge.first].push_back(edge.second);
        inDegree[edge.second]++;
    }
    
    std::queue<int> q;
    for (int i = 0; i < vertices; ++i) {
        if (inDegree[i] == 0) q.push(i);
    }
    
    std::vector<int> order;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        order.push_back(u);
        
        for (int v : adj[u]) {
            if (--inDegree[v] == 0) {
                q.push(v);
            }
        }
    }
    return order;
}
```

These implementations use Kahn's algorithm, maintaining an in-degree count for each node and using a queue to process nodes with zero incoming dependencies.

## Techniques Used
- Kahn's Algorithm (BFS-based approach using in-degree tracking)
- Depth-First Search (DFS) with postorder traversal and state tracking
- Cycle detection to verify that the graph is a Directed Acyclic Graph (DAG)
