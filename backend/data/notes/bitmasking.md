---
slug: "bitmasking"
title: "Bitmasking"
summary: "Represent sets and states using bits for compact DP and combinatorics."
estimatedHours: 6
difficulty: "Advanced"
videoId: "1O6Qstncpnc"
videoTitle: "Bitmask DP introduction"
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
A bitmask represents a set as an integer where each individual bit corresponds to the presence or absence of a specific element.

## Examples
* **Traveling Salesperson Problem (TSP):** Tracking the exact set of visited cities efficiently in a dynamic programming state.
* **Subset DP:** Solving combinatorial problems where states depend on combinations of items taken or left behind.
* **Job Assignment Problems:** Representing which workers have been assigned to which tasks using bits to prevent duplicate assignments.

## Sample Program

```javascript
let mask = 0;
mask |= (1 << 2); // Add element 2
mask &= ~(1 << 2); // Remove element 2
let hasElement = (mask & (1 << 2)) !== 0;
```

```python
mask = 0
mask |= (1 << 2)  # Add element 2
mask &= ~(1 << 2)  # Remove element 2
has_element = (mask & (1 << 2)) != 0
```

```java
int mask = 0;
mask |= (1 << 2); // Add element 2
mask &= ~(1 << 2); // Remove element 2
boolean hasElement = (mask & (1 << 2)) != 0;
```

```cpp
int mask = 0;
mask |= (1 << 2); // Add element 2
mask &= ~(1 << 2); // Remove element 2
bool hasElement = (mask & (1 << 2)) != 0;
```

These snippets demonstrate how to use bitwise operators (OR, AND, and bit shifts) to add, remove, and check the membership of elements in a bitmask set.

## Techniques Used
* **Bitwise Operations:** Utilizing bit shifts (`<<`), bitwise OR (`|`), bitwise AND (`&`), and bitwise NOT (`~`) to manipulate individual set elements.
* **Bitmask Dynamic Programming:** Combining bitmasks with memoization to solve problems over small sets of states ($n \le 20$).
* **Subset Iteration:** Efficiently iterating through all submasks of a given mask using bitwise subtraction and AND operations.
