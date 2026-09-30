---
slug: "randomized-algorithms"
title: "Randomized Algorithms"
summary: "Use randomness for expected fast performance or simpler logic."
estimatedHours: 5
difficulty: "Advanced"
videoId: "pHo85vC5Mx0"
videoTitle: "Randomized algorithms overview"
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
An algorithm that employs a degree of randomness as part of its logic to achieve good expected performance, typically in terms of time or space complexity.

## Examples
- Randomized quicksort (choosing a random pivot to avoid worst-case $O(N^2)$ performance on sorted data).
- Hash table collision resolution and universal hashing.
- Monte Carlo and Las Vegas methods for numerical integration, primality testing, and optimization.

## Sample Program

```javascript
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
console.log(getRandomElement([10, 20, 30, 40, 50]));
```

```python
import random

def get_random_element(arr):
    return random.choice(arr)

print(get_random_element([10, 20, 30, 40, 50]))
```

```java
import java.util.Random;

public class RandomizedExample {
    public static int getRandomElement(int[] arr) {
        Random rand = new Random();
        return arr[rand.nextInt(arr.length)];
    }
    public static void main(String[] args) {
        System.out.println(getRandomElement(new int[]{10, 20, 30, 40, 50}));
    }
}
```

```cpp
#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

int getRandomElement(const std::vector<int>& arr) {
    return arr[std::rand() % arr.size()];
}

int main() {
    std::srand(std::time(nullptr));
    std::vector<int> arr = {10, 20, 30, 40, 50};
    std::cout << getRandomElement(arr) << std::endl;
    return 0;
}
```

These code snippets demonstrate a simple randomized algorithm by selecting a uniformly distributed random element from an array. By introducing randomness, algorithms can avoid pathological worst-case inputs and improve average-case behavior.

## Techniques Used
- Random pivoting
- Expected time analysis
- Probability distribution modeling
- Average-case optimization
