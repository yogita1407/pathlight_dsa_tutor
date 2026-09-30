---
slug: "bit-manipulation"
title: "Bit Manipulation"
summary: "Use binary representation, masks, shifts, and XOR for compact logic."
estimatedHours: 5
difficulty: "Intermediate"
videoId: "5gU6-8H4l1E"
videoTitle: "Bit tricks for interviews"
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
Bitwise operations are low-level computational tasks that directly manipulate binary digits (bits) using logical operators such as AND, OR, and XOR, alongside bit shifts.

## Examples
* Finding the single unique element in an array where every other element appears twice using the XOR cancellation property.
* Managing compact boolean state flags or permissions efficiently within a single integer using bit masks.
* Performing low-level data compression, cryptography, and network packet parsing.

## Sample Program

```javascript
function findUnique(nums) {
    let unique = 0;
    for (let num of nums) {
        unique ^= num;
    }
    return unique;
}
console.log(findUnique([4, 1, 2, 1, 2]));
```

```python
def find_unique(nums):
    unique = 0
    for num in nums:
        unique ^= num
    return unique

print(find_unique([4, 1, 2, 1, 2]))
```

```java
public class Main {
    public static int findUnique(int[] nums) {
        int unique = 0;
        for (int num : nums) {
            unique ^= num;
        }
        return unique;
    }
    public static void main(String[] args) {
        System.out.println(findUnique(new int[]{4, 1, 2, 1, 2}));
    }
}
```

```cpp
#include <iostream>
#include <vector>

int findUnique(const std::vector<int>& nums) {
    int unique = 0;
    for (int num : nums) {
        unique ^= num;
    }
    return unique;
}

int main() {
    std::cout << findUnique({4, 1, 2, 1, 2}) << std::endl;
    return 0;
}
```

These programs find the single non-duplicate number in an array by cumulatively applying the XOR operator across all elements, which cancels out identical pairs and leaves the unique value.

## Techniques Used
* **XOR Cancellation:** Utilizing the property that a number XORed with itself results in zero ($x \oplus x = 0$) and XORed with zero results in itself ($x \oplus 0 = x$).
* **Bit Masking:** Applying masks with bitwise AND, OR, and NOT to test, set, or clear specific bit positions.
* **Bit Shifting:** Moving bits left or right to isolate, align, or select target bit positions.
