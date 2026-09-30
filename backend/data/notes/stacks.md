---
slug: "stacks"
title: "Stacks"
summary: "Last-in-first-out structure for validation, undo, and nested processing."
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
A Stack is a linear data structure that follows Last-In-First-Out (LIFO) semantics, where elements are added and removed exclusively from the top in $O(1)$ time.

## Examples
* Function call management (the call stack) in programming language runtimes and recursion tracking.
* Bracket matching and syntax parsing in compilers to verify nested scopes and expressions.
* Tracking state sequences and implementing "undo" mechanisms in software applications.

## Sample Program

```javascript
const stack = [];
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
```

```python
stack = []
stack.append(10)
stack.append(20)
print(stack.pop())  # 20
```

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(10);
        stack.push(20);
        System.out.println(stack.pop()); // 20
    }
}
```

```cpp
#include <iostream>
#include <stack>

int main() {
    std::stack<int> s;
    s.push(10);
    s.push(20);
    std::cout << s.top() << std::endl; // 20
    s.pop();
    return 0;
}
```

These snippets demonstrate the basic push and pop operations of a LIFO stack across four different languages, showcasing standard modern idioms like `ArrayDeque` in Java and `std::stack` in C++.

## Techniques Used
* **LIFO Processing:** Leveraging the Last-In-First-Out property to process nested or reverse-order relationships efficiently.
* **Monotonic Stack Pattern:** Maintaining strictly increasing or decreasing elements within the stack to solve "next greater element" problems in $O(N)$ time.
* **State Simulation & Parsing:** Pushing structural tokens onto the stack during traversal and popping/verifying them when closing boundaries are encountered.
