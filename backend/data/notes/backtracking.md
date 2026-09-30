---
slug: "backtracking"
title: "Backtracking"
summary: "Choose, explore, undo, and try all valid possibilities."
estimatedHours: 8
difficulty: "Intermediate"
videoId: "G_Ulx2rUPEE"
videoTitle: "Backtracking basics"
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
Backtracking is an algorithmic technique that systematically explores a decision tree by making choices, recurring to evaluate them, and undoing those choices (backtracking) to try alternative options.

## Examples
* Generating all possible subsets, combinations, or permutations of a set of items.
* Solving constraint-satisfaction puzzles like the N-Queens problem or Sudoku.
* Finding paths in a grid or graph, such as a word search game.

## Sample Program

```javascript
function findSubsets(index, current, nums, result) {
    if (index === nums.length) {
        result.push([...current]);
        return;
    }
    current.push(nums[index]);
    findSubsets(index + 1, current, nums, result);
    current.pop();
    findSubsets(index + 1, current, nums, result);
}
```

```python
def find_subsets(index, current, nums, result):
    if index == len(nums):
        result.append(list(current))
        return
    current.append(nums[index])
    find_subsets(index + 1, current, nums, result)
    current.pop()
    find_subsets(index + 1, current, nums, result)
```

```java
import java.util.ArrayList;
import java.util.List;

public class BacktrackingExample {
    public static void findSubsets(int index, List<Integer> current, int[] nums, List<List<Integer>> result) {
        if (index == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        current.add(nums[index]);
        findSubsets(index + 1, current, nums, result);
        current.remove(current.size() - 1);
        findSubsets(index + 1, current, nums, result);
    }
}
```

```cpp
#include <vector>

void findSubsets(int index, std::vector<int>& current, const std::vector<int>& nums, std::vector<std::vector<int>>& result) {
    if (index == nums.size()) {
        result.push_back(current);
        return;
    }
    current.push_back(nums[index]);
    findSubsets(index + 1, current, nums, result);
    current.pop_back();
    findSubsets(index + 1, current, nums, result);
}
```

These code snippets demonstrate how to generate all subsets of an array by recursively deciding whether to include or exclude each element, carefully undoing the choice (`pop`) at each step.

## Techniques Used
* **Choice-Recursion-Undo Pattern:** Make a choice, make a recursive call to explore further, and then undo the choice to restore the state.
* **Pruning:** Abandoning branches of the decision tree early when they violate constraints to save unnecessary computation.
* **State Preservation:** Saving copies or states of valid paths or combinations once a complete solution is reached.
