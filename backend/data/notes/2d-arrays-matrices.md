---
slug: "2d-arrays-matrices"
title: "2D Arrays & Matrices"
summary: "Multi-dimensional grids for spatial algorithms, dynamic programming, and graphs."
estimatedHours: 6
difficulty: "Beginner"
videoId: "ge_P7jXZkY0"
videoTitle: "Stanford CS106B: Multi-dimensional Arrays"
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

A 2D array or matrix is a multi-dimensional grid typically used to represent game boards, images, or implicit graphs where cells are nodes.

## Examples

- A tic-tac-toe or chess board.
- A dynamic programming tabulation table.
- A grid of pixels representing an image.

## Sample Program with Explanation

```javascript
function sumMatrix(matrix) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      sum += matrix[row][col];
    }
  }
  return sum;
}
```

This program calculates the sum of all elements in a matrix. It uses a nested loop structure: the outer loop iterates over the rows, and the inner loop iterates over the columns of each row, taking O(R * C) time.

## Techniques Used

- Nested loops for full spatial traversal.
- Boundary checking to avoid out-of-bounds errors.
- Directional vectors (e.g., [0,1], [1,0]) for exploring neighboring cells.
