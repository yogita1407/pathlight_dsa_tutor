---
slug: "monotonic-stack"
title: "Monotonic Stack"
summary: "Maintain an increasing or decreasing stack to find next greater or smaller elements."
estimatedHours: 6
difficulty: "Advanced"
videoId: "DfljaUwZsPk"
videoTitle: "Monotonic stack pattern"
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
A monotonic stack is a stack data structure that maintains its elements in a strictly increasing or decreasing order by popping elements that violate the order invariant before pushing a new element.

## Examples
* **Next Greater Element:** Finding the next immediate greater value for every element in an array efficiently.
* **Daily Temperatures:** Calculating how many days you would have to wait until a warmer temperature appears.
* **Largest Rectangle in Histogram:** Determining the maximum possible rectangular area within a histogram by tracking boundary heights and widths.

## Sample Program
```javascript
function nextGreaterElement(nums) {
    let result = new Array(nums.fill(-1).length).fill(-1);
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return result;
}
```
```python
def next_greater_element(nums):
    result = [-1] * len(nums)
    stack = []
    for i in range(len(nums)):
        while stack and nums[stack[-1]] < nums[i]:
            result[stack.pop()] = nums[i]
        stack.append(i)
    return result
```
```java
import java.util.Stack;
import java.util.Arrays;

class Solution {
    public int[] nextGreaterElement(int[] nums) {
        int[] result = new int[nums.length];
        Arrays.fill(result, -1);
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < nums.length; i++) {
            while (!stack.isEmpty() && nums[stack.peek()] < nums[i]) {
                result[stack.pop()] = nums[i];
            }
            stack.push(i);
        }
        return result;
    }
}
```
```cpp
#include <vector>
#include <stack>

std::vector<int> nextGreaterElement(const std::vector<int>& nums) {
    std::vector<int> result(nums.size(), -1);
    std::stack<int> s;
    for (int i = 0; i < nums.size(); ++i) {
        while (!s.empty() && nums[s.top()] < nums[i]) {
            result[s.top()] = nums[i];
            s.pop();
        }
        s.push(i);
    }
    return result;
}
```
These code snippets use a monotonic decreasing stack to find the next greater element for each number in an array, storing indexes in the stack and resolving values upon violations.

## Techniques Used
* **Pop while order is violated:** Remove elements from the top of the stack until the monotonic invariant is restored.
* **Store indexes when needed:** Keep track of array indices rather than raw values to easily calculate distances and update results.
* **Maintain the invariant:** Ensure every push operation preserves the specific increasing or decreasing order property of the stack.
* **Use for range-max or range-min queries:** Efficiently compute boundaries where elements are smaller or larger than the current element in $O(N)$ time.
