---
slug: "dijkstra-algorithm"
title: "Dijkstra's Algorithm"
summary: "Find shortest paths from a source in a weighted graph with non-negative edges."
estimatedHours: 7
difficulty: "Advanced"
videoId: "pVfj6mxhdMw"
videoTitle: "Dijkstra's algorithm"
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
Dijkstra's algorithm is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge weights, producing a shortest path tree from a starting node to all other reachable nodes.

## Examples
- Finding the fastest route between locations in GPS navigation and mapping software.
- Determining the most efficient path for data packets across computer networks and the internet.
- Calculating optimal movement paths for non-player characters (NPCs) in video game pathfinding.

## Sample Program
```javascript
function dijkstra(graph, start) {
    const distances = {};
    const unvisited = new Set(Object.keys(graph));
    for (let node of unvisited) distances[node] = Infinity;
    distances[start] = 0;

    while (unvisited.size > 0) {
        let current = null;
        for (let node of unvisited) {
            if (current === null || distances[node] < distances[current]) {
                current = node;
            }
        }
        if (distances[current] === Infinity) break;
        unvisited.delete(current);

        for (let [neighbor, weight] of Object.entries(graph[current])) {
            let alt = distances[current] + weight;
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
            }
        }
    }
    return distances;
}
```
```python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]

    while pq:
        current_dist, current_node = heapq.heappop(pq)
        if current_dist > distances[current_node]:
            continue
        for neighbor, weight in graph[current_node].items():
            distance = current_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    return distances
```
```java
import java.util.*;

public class Dijkstra {
    public static Map<String, Integer> shortestPath(Map<String, Map<String, Integer>> graph, String start) {
        Map<String, Integer> distances = new HashMap<>();
        for (String node : graph.keySet()) distances.put(node, Integer.MAX_VALUE);
        distances.put(start, 0);

        PriorityQueue<NodeDistance> pq = new PriorityQueue<>(Comparator.comparingInt(nd -> nd.distance));
        pq.add(new NodeDistance(start, 0));

        while (!pq.isEmpty()) {
            NodeDistance current = pq.poll();
            if (current.distance > distances.get(current.node)) continue;

            for (Map.Entry<String, Integer> neighbor : graph.get(current.node).entrySet()) {
                int newDist = current.distance + neighbor.getValue();
                if (newDist < distances.get(neighbor.getKey())) {
                    distances.put(neighbor.getKey(), newDist);
                    pq.add(new NodeDistance(neighbor.getKey(), newDist));
                }
            }
        }
        return distances;
    }
    static class NodeDistance {
        String node; int distance;
        NodeDistance(String node, int distance) { this.node = node; this.distance = distance; }
    }
}
```
```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>

using namespace std;

unordered_map<string, int> dijkstra(unordered_map<string, unordered_map<string, int>>& graph, string start) {
    unordered_map<string, int> distances;
    for (auto& pair : graph) distances[pair.first] = 1e9;
    distances[start] = 0;

    priority_queue<pair<int, string>, vector<pair<int, string>>, greater<pair<int, string>>> pq;
    pq.push({0, start});

    while (!pq.empty()) {
        int d = pq.top().first;
        string u = pq.top().second;
        pq.pop();

        if (d > distances[u]) continue;

        for (auto& neighbor : graph[u]) {
            string v = neighbor.first;
            int weight = neighbor.second;

            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
                pq.push({distances[v], v});
            }
        }
    }
    return distances;
}
```
These implementations compute the shortest distance from a designated starting node to all other connected nodes using a priority queue for efficiency.

## Techniques Used
- Greedy selection of the closest unvisited node using a min-heap or priority queue.
- Distance initialization where the source is set to zero and all other nodes are set to infinity.
- Edge relaxation to iteratively update and store shorter path discoveries to neighboring nodes.
