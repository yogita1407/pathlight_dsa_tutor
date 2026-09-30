---
slug: "linked-lists"
title: "Linked Lists"
summary: "Nodes connected by pointers: traversal, reversal, merging, and cycle detection."
estimatedHours: 7
difficulty: "Intermediate"
videoId: "RBSGKlAvoiM"
videoTitle: "Stanford CS106B: Linked Lists"
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

A linked list is a linear data structure composed of objects (nodes) where each node holds a reference (pointer) to the next node. Unlike arrays, nodes are not stored contiguously in memory.

## Examples

- Singly Linked List: Nodes point only to the next node.
- Doubly Linked List: Nodes point to both previous and next nodes.
- Circular Linked List: The tail node points back to the head.

## Sample Program with Explanation

```javascript
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
```

This program reverses a linked list iteratively. It uses three pointers (`prev`, `curr`, `nextTemp`) to safely reverse the `next` links without breaking the rest of the list. It runs in O(N) time and O(1) space.

## Techniques Used

- Fast & Slow Pointers (Tortoise & Hare) for cycle detection or midpoints.
- Dummy Nodes (Sentinels) to simplify edge cases at the head.
- In-place pointer reversal.
