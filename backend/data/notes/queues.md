---
slug: "queues"
title: "Queues"
summary: "First-in-first-out structure for arrival-order processing and BFS."
estimatedHours: 5
difficulty: "Intermediate"
videoId: "s6FhG--P7z0"
videoTitle: "Stanford: Stacks & Queues"
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
A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the tail (enqueue) and removed from the head (dequeue).

## Examples
* **Task Scheduling:** Managing background jobs or print spoolers where requests must be processed in the exact order they were received.
* **Breadth-First Search (BFS):** Traversing graphs or trees level-by-level to guarantee the discovery of the shortest path in unweighted graphs.
* **Buffer Management:** Handling asynchronous data streams, such as keyboard input buffering or network packet routing.

## Sample Program

```javascript
const queue = [];
queue.push(10); // Enqueue
queue.push(20);
const item = queue.shift(); // Dequeue (Note: Array.shift() is O(N) in JS; use a dedicated structure for performance)
console.log(item);
```

```python
from collections import deque

queue = deque()
queue.append(10)  # Enqueue
queue.append(20)
item = queue.popleft()  # Dequeue (O(1) operation)
print(item)
```

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(10); // Enqueue
        queue.add(20);
        int item = queue.poll(); // Dequeue
        System.out.println(item);
    }
}
```

```cpp
#include <iostream>
#include <queue>

int main() {
    std::queue<int> q;
    q.push(10); // Enqueue
    q.push(20);
    int item = q.front(); // Peek
    q.pop();              // Dequeue
    std::cout << item << std::endl;
    return 0;
}
```

These code snippets demonstrate the fundamental operations of a Queue—inserting an element at the back and removing an element from the front—across four different programming languages.

## Techniques Used
* **First-In-First-Out (FIFO) Processing:** Ensuring elements are processed in the strict sequential order of their arrival.
* **Level-Order Traversal:** Iterating through hierarchical data structures layer by layer rather than depth-first.
* **Amortized O(1) Operations:** Utilizing underlying double-ended data structures (like deques or linked structures) to avoid costly linear-time array shifting during removals.
