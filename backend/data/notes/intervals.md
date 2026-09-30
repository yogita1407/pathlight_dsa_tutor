---
slug: "intervals"
title: "Intervals"
summary: "Ranges with start and end: merge, intersect, schedule, and partition."
estimatedHours: 6
difficulty: "Intermediate"
videoId: "F57QnGOl12g"
videoTitle: "Interval problems patterns"
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
Interval problems involve sets of numeric ranges defined by a start and end point, typically solved by sorting and processing them sequentially to find overlaps, merges, or optimal schedules.

## Examples
* **Meeting Room Scheduling:** Determining the minimum number of conference rooms required to host a given set of meetings without overlapping.
* **Calendar Management:** Merging multiple user-booked time slots on a calendar application into continuous busy periods.
* **Cloud Computing Resource Allocation:** Consolidating overlapping server uptime intervals to optimize billing or hardware utilization.

## Sample Program
```javascript
function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
}
```
```python
def merge_intervals(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for current in intervals[1:]:
        if current[0] <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], current[1])
        else:
            merged.append(current)
    return merged
```
```java
import java.util.Arrays;
import java.util.LinkedList;

class IntervalMerger {
    public static int[][] merge(int[][] intervals) {
        if (intervals.length == 0) return new int[0][0];
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        LinkedList<int[]> merged = new LinkedList<>();
        for (int[] interval : intervals) {
            if (merged.isEmpty() || merged.getLast()[1] < interval[0]) {
                merged.add(interval);
            } else {
                merged.getLast()[1] = Math.max(merged.getLast()[1], interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
}
```
```cpp
#include <vector>
#include <algorithm>

std::vector<std::vector<int>> mergeIntervals(std::vector<std::vector<int>>& intervals) {
    if (intervals.empty()) return {};
    std::sort(intervals.begin(), intervals.end());
    std::vector<std::vector<int>> merged;
    for (const auto& interval : intervals) {
        if (merged.empty() || merged.back()[1] < interval[0]) {
            merged.push_back(interval);
        } else {
            merged.back()[1] = std::max(merged.back()[1], interval[1]);
        }
    }
    return merged;
}
```
These snippets demonstrate how sorting intervals by their start times allows a single linear scan to efficiently merge overlapping ranges.

## Techniques Used
* **Sorting by Start/End Time:** Establishing a predictable order (usually by start time) to ensure overlapping intervals are adjacent.
* **Greedy Merging:** Making locally optimal decisions by comparing the current interval with the most recently tracked merged interval.
* **Single-Pass Scan:** Traversing the sorted collection once to achieve optimal $O(N \log N)$ time complexity.
