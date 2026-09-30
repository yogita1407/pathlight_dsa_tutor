---
slug: "heaps-priority-queues"
title: "Heaps & Priority Queues"
summary: "Efficiently retrieve the smallest or largest priority item."
estimatedHours: 7
difficulty: "Intermediate"
videoId: "t0Cq6tVNRBA"
videoTitle: "Heaps and priority queues"
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
A heap is a specialized tree-based data structure that maintains the minimum (min-heap) or maximum (max-heap) element at the top, allowing for $O(1)$ access to the priority item while supporting insertions and deletions in $O(\log n)$ time.

## Examples
* Finding the Top-K largest or smallest elements in a dataset without sorting the entire collection.
* Task scheduling in operating systems or CPU task queues where higher-priority tasks must be executed next.
* Implementing Dijkstra's shortest path algorithm to efficiently retrieve the next closest unvisited node.

## Sample Program

```javascript
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const pq = new MaxPriorityQueue();
pq.enqueue(10);
pq.enqueue(30);
console.log(pq.dequeue().element);
```

```python
import heapq

pq = []
heapq.heappush(pq, -10)
heapq.heappush(pq, -30)
print(-heapq.heappop(pq))
```

```java
import java.util.PriorityQueue;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        pq.add(10);
        pq.add(30);
        System.out.println(pq.poll());
    }
}
```

```cpp
#include <iostream>
#include <queue>

int main() {
    std::priority_queue<int> pq;
    pq.push(10);
    pq.push(30);
    std::cout << pq.top() << std::endl;
    pq.pop();
    return 0;
}
```

These snippets demonstrate inserting elements into a max-heap and retrieving the highest-priority element. Each language utilizes its standard library or container to handle the underlying heap property automatically.

## Techniques Used
* **Heapify:** Building a heap structure from an unsorted array in linear time $O(n)$.
* **Percolate Up / Bubble Up:** Restoring the heap property after an insertion by swapping a child with its parent until the heap order is satisfied.
* **Percolate Down / Heapify Down:** Restoring the heap property after extracting the root by swapping the parent with its more extreme child recursively.
* **Two-Heap Pattern:** Maintaining a min-heap and a max-heap simultaneously to dynamically track streaming data metrics like the median.
