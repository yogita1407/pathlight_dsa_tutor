---
slug: "recursion"
title: "Recursion"
summary: "Solve a smaller version of the same problem and combine results."
estimatedHours: 8
difficulty: "Intermediate"
videoId: "IJDJ0kBx4X8"
videoTitle: "Recursion for beginners"
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
Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem, relying on a base case to eventually terminate.

## Examples
* Traversing and searching hierarchical data structures like file systems, DOM trees, and organizational charts.
* Implementing divide-and-conquer algorithms like Merge Sort and Quick Sort to efficiently sort large datasets.
* Exploring graph paths and decision spaces in backtracking algorithms such as solving a Sudoku puzzle or navigating a maze.

## Sample Program
```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```
```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
```
```java
public class Recursion {
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
}
```
```cpp
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```
This code demonstrates recursion by calculating the factorial of a number using a base case to stop the execution and a recursive step that brings the input closer to that base case. Each function call utilizes the call stack until the base case is reached and the results are combined.

## Techniques Used
* Defining a clear base case to halt recursion and prevent infinite loops.
* Ensuring progress by making the input smaller with each recursive call.
* Utilizing the call stack implicitly to remember state across nested function frames.
* Combining smaller sub-problem solutions to build the final answer.
