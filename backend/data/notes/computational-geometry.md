---
slug: "computational-geometry"
title: "Computational Geometry"
summary: "Points, lines, polygons, and convex hulls for geometric algorithms."
estimatedHours: 7
difficulty: "Advanced"
videoId: "BrebF4oZ9qg"
videoTitle: "Computational geometry basics"
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
Computational geometry is a branch of computer science that studies algorithms for solving geometric problems involving points, lines, segments, and polygons.

## Examples
- Computing the boundary of a set of points to determine the outer perimeter in geographic mapping applications (Convex Hull).
- Detecting collisions between objects in 2D or 3D video game physics engines (Line Intersection).
- Finding the nearest store or delivery driver to a customer's GPS coordinate (Closest Pair of Points).

## Sample Program

```javascript
function crossProduct(o, a, b) {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}
const o = {x: 0, y: 0}, a = {x: 1, y: 0}, b = {x: 0, y: 1};
console.log(crossProduct(o, a, b) > 0);
```

```python
def cross_product(o, a, b):
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

o, a, b = (0, 0), (1, 0), (0, 1)
print(cross_product(o, a, b) > 0)
```

```java
public class Geometry {
    static class Point { long x, y; Point(long x, long y) { this.x = x; this.y = y; } }
    public static long crossProduct(Point o, Point a, Point b) {
        return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    }
    public static void main(String[] args) {
        System.out.println(crossProduct(new Point(0,0), new Point(1,0), new Point(0,1)) > 0);
    }
}
```

```cpp
#include <iostream>
struct Point { long long x, y; };
long long crossProduct(Point o, Point a, Point b) {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}
int main() {
    Point o{0, 0}, a{1, 0}, b{0, 1};
    std::cout << (crossProduct(o, a, b) > 0) << std::endl;
    return 0;
}
```

These code snippets demonstrate the cross product of 2D vectors, a fundamental primitive used to determine relative orientation and turns in computational geometry.

## Techniques Used
- Utilizing cross products to determine relative orientation and turns between points.
- Applying integer arithmetic where possible to avoid floating-point precision errors.
- Handling geometric edge cases such as collinear points, vertical lines, and overlapping segments.
