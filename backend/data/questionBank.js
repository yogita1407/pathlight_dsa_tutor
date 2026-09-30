// ============================================================
// Pathlight — 100-question DSA bank
// Canonical source for problem statements, tests, hints and reference solutions.
// ============================================================

function createProgressiveHints(groups = {}) {
  return Object.entries(groups).flatMap(([key, values]) =>
    Array.isArray(values) ? values : []
  );
}

const Q001 = {
  id: "arr-001",
  slug: "largest-value",
  title: "Largest Value",
  topic: "arrays",
  difficulty: "Easy",

  prompt:
    "Given a non-empty array of integers nums, return the largest value. Do not sort the array.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-10^9 <= nums[i] <= 10^9",
  ],

  examples: [
    {
      input: "nums = [3, 1, 8, 2]",
      output: "8",
      explanation: "8 is greater than all other values.",
    },
    {
      input: "nums = [-5, -1, -9]",
      output: "-1",
      explanation: "-1 is the largest among the negative values.",
    },
  ],

  visibleTests: [
    { args: [[3, 1, 8, 2]], expected: 8 },
    { args: [[-5, -1, -9]], expected: -1 },
    { args: [[7]], expected: 7 },
    { args: [[0, 0, 0]], expected: 0 },
  ],

  hiddenTests: [
    { args: [[100, 99, 98]], expected: 100 },
    { args: [[-100, -50, -70]], expected: -50 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Read the question carefully. Should you return the largest value or its index?",
      "The array is guaranteed to have at least one value, so you can safely start from the first element.",
      "Try [3, 1, 8, 2] on paper. What is the largest value you see?",
      "Start by treating the first value as the current best answer.",
      "When you move to the next value, compare it with your current best answer.",
    ],
    example: [
      "If the new value is larger, it should become the new best answer.",
      "If the new value is smaller or equal, keep the current best answer unchanged.",
      "You only need one extra variable to remember the best answer so far.",
      "You do not need to compare every pair of values with each other.",
      "You do not need to sort the array. Sorting would do more work than necessary.",
    ],
    simpleApproach: [
      "Write the steps in English: start with best = nums[0], then check each later value.",
      "For each index i from 1 to the end, if nums[i] > best, update best.",
      "After you finish the loop, best holds the largest value in the array.",
      "Test your idea with an array of all negative numbers.",
      "For [-5, -1, -9], best starts at -5 and later becomes -1, which is correct.",
    ],
    repeatedWork: [
      "The time complexity is O(n) because you look at each value once.",
      "The extra space complexity is O(1) because you only use one extra variable.",
      "Now try to implement this logic in your chosen language.",
      "Run your code on the visible examples before submitting.",
      "If it fails, check your loop boundaries and initial value of best.",
    ],
    pattern: [
      "This is a classic linear scan pattern.",
      "You maintain a running best answer while moving through the array.",
      "No nested loops are needed.",
      "No extra arrays or maps are needed.",
      "Just one variable and one loop.",
    ],
    dataStructure: [
      "Use a single variable named best or maxValue.",
      "Initialize it with nums[0].",
      "Update it only when you find a larger value.",
      "Do not change it when you find a smaller or equal value.",
      "Return it after the loop ends.",
    ],
    algorithm: [
      "Set best = nums[0].",
      "Loop i from 1 to nums.length - 1.",
      "If nums[i] > best, set best = nums[i].",
      "After the loop, return best.",
      "This ensures you inspect every value once.",
    ],
    pseudocode: [
      "best = nums[0]",
      "for i from 1 to n - 1:",
      "  if nums[i] > best:",
      "    best = nums[i]",
      "return best",
    ],
    edgeCases: [
      "Test an array with one element.",
      "Test an array with all equal values.",
      "Test an array with all negative values.",
      "Test when the maximum is at index 0.",
      "Test when the maximum is at the last index.",
    ],
    finalNudge: [
      "Ensure your loop starts at index 1, not 0.",
      "Ensure you return the value, not the index.",
      "Check that you do not accidentally sort the array.",
      "Verify your code passes the visible tests.",
    ],
    solutionLogic:
      "Solution logic: Use a running maximum. Start with the first element as the current largest value. Scan the rest of the array. Replace the current maximum whenever you find a larger value.",
  }),

  solutionLogic: {
    approach:
      "Use a running maximum. Start with the first element as the current largest value. Scan the rest of the array. Replace the current maximum whenever you find a larger value.",

    steps: [
      "Store nums[0] in a variable named best.",
      "Loop through nums from index 1 onward.",
      "Compare nums[i] with best.",
      "If nums[i] is greater, assign nums[i] to best.",
      "Return best after the loop finishes.",
    ],

    pseudocode: `best = nums[0]

for i from 1 to nums.length - 1:
    if nums[i] > best:
        best = nums[i]

return best`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Starting best at 0, which fails when all values are negative.",
      "Sorting the array even though a single scan is enough.",
      "Returning an index instead of the largest value.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > best) {
      best = nums[i];
    }
  }

  return best;
}`,

    python: `def solve(nums):
    best = nums[0]

    for value in nums[1:]:
        if value > best:
            best = value

    return best`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};

// ============================================================
// QUESTION 2 – Arrays – Easy
// ============================================================



const Q002 = {
  id: "arr-002",
  slug: "running-sum",
  title: "Running Sum",
  topic: "arrays",
  difficulty: "Easy",

  prompt:
    "Given an array of integers nums, return a new array where each element at index i is the sum of all elements from nums[0] to nums[i].",

  constraints: [
    "1 <= nums.length <= 100000",
    "-10^9 <= nums[i] <= 10^9",
  ],

  examples: [
    {
      input: "nums = [1, 2, 3, 4]",
      output: "[1, 3, 6, 10]",
      explanation:
        "1 = 1, 1+2 = 3, 1+2+3 = 6, 1+2+3+4 = 10.",
    },
    {
      input: "nums = [5, -2, 7]",
      output: "[5, 3, 10]",
      explanation: "5, 5 + (-2) = 3, 3 + 7 = 10.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [1, 3, 6, 10] },
    { args: [[5, -2, 7]], expected: [5, 3, 10] },
    { args: [[1]], expected: [1] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
  ],

  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: [1, 2, 3, 4] },
    { args: [[-1, -2, -3]], expected: [-1, -3, -6] },
    { args: [[10, -5, 3, 2]], expected: [10, 5, 8, 10] },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked to modify the original array or return a new array?",
      "Each output[i] must be the sum of nums[0] through nums[i].",
      "Try [1, 2, 3, 4] by hand and write the prefix sums.",
      "Notice how each new sum builds on the previous sum.",
      "You do not need to re-sum from the start for every index.",
    ],
    example: [
      "For [1, 2, 3, 4], output[0] = 1.",
      "output[1] = 1 + 2 = 3, which is output[0] + 2.",
      "output[2] = 3 + 3 = 6, which is output[1] + 3.",
      "output[3] = 6 + 4 = 10, which is output[2] + 4.",
      "So each new value uses the previous sum plus the current element.",
    ],
    simpleApproach: [
      "One slow method sums from index 0 to i for every i.",
      "That repeats a lot of work and is O(n^2).",
      "You can do this in one pass using a running total.",
      "Keep a variable total that stores the sum so far.",
      "At each index, add nums[i] to total and store it.",
    ],
    repeatedWork: [
      "You do not need to recompute the entire prefix each time.",
      "Use the previous prefix sum to compute the next one.",
      "This reduces the work from O(n^2) to O(n).",
      "You only need one extra variable for the running total.",
      "You also need an output array of the same length.",
    ],
    pattern: [
      "This is a prefix sum / running sum pattern.",
      "You process the array from left to right once.",
      "At each step, you extend the previous answer.",
      "No nested loops are required.",
      "This pattern appears in many array problems.",
    ],
    dataStructure: [
      "Use an output array of the same length as nums.",
      "Use a variable total to store the running sum.",
      "No map, set, or other structure is needed.",
      "You can optionally modify nums in place if allowed.",
      "Keep the logic simple: total += nums[i], then store.",
    ],
    algorithm: [
      "Create an array answer of the same length as nums.",
      "Set total = 0.",
      "Loop i from 0 to nums.length - 1.",
      "Add nums[i] to total.",
      "Set answer[i] = total.",
    ],
    pseudocode: [
      "n = nums.length",
      "answer = new array of size n",
      "total = 0",
      "for i from 0 to n - 1:",
      "  total = total + nums[i]",
      "  answer[i] = total",
      "return answer",
    ],
    edgeCases: [
      "Test an array with one element.",
      "Test an array with all zeros.",
      "Test an array with negative values.",
      "Test an array where values increase and decrease.",
      "Ensure your answer array has the correct length.",
    ],
    finalNudge: [
      "Make sure you update total before storing answer[i].",
      "Check that you return the new array, not total.",
      "Run your code on the visible examples.",
      "Verify the output for negative inputs as well.",
    ],
    solutionLogic:
      "Solution logic: Use a running total. For each index i, add nums[i] to the total sum so far and store it as answer[i]. This builds prefix sums in one pass.",
  }),

  solutionLogic: {
    approach:
      "Use a running total. For each index i, add nums[i] to the total sum so far and store it as answer[i]. This builds prefix sums in one pass.",

    steps: [
      "Create an array answer of the same length as nums.",
      "Initialize total = 0.",
      "Loop i from 0 to nums.length - 1.",
      "Update total = total + nums[i].",
      "Set answer[i] = total.",
      "Return answer.",
    ],

    pseudocode: `n = nums.length
answer = new array of size n
total = 0

for i from 0 to n - 1:
    total = total + nums[i]
    answer[i] = total

return answer`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the output array",

    commonMistakes: [
      "Forgetting to initialize total to 0.",
      "Storing total before adding nums[i].",
      "Returning total instead of the answer array.",
      "Using the wrong loop bounds.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;
  const answer = new Array(n);
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += nums[i];
    answer[i] = total;
  }

  return answer;
}`,

    python: `def solve(nums):
    n = len(nums)
    answer = [0] * n
    total = 0

    for i in range(n):
        total += nums[i]
        answer[i] = total

    return answer`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};

// ============================================================
// QUESTION 3 – Arrays – Medium
// ============================================================



const Q003 = {
  id: "arr-003",
  slug: "subarray-sum-equals-k",
  title: "Subarray Sum Equals K",
  topic: "arrays",
  difficulty: "Medium",

  prompt:
    "Given an array of integers nums and an integer k, return the number of contiguous subarrays whose sum equals k.",

  constraints: [
    "1 <= nums.length <= 20000",
    "-1000 <= nums[i] <= 1000",
    "-10^7 <= k <= 10^7",
  ],

  examples: [
    {
      input: "nums = [1, 1, 1], k = 2",
      output: "2",
      explanation: "Subarrays [1,1] (indices 0–1) and [1,1] (indices 1–2).",
    },
    {
      input: "nums = [1, 2, 3], k = 3",
      output: "2",
      explanation: "Subarrays [1,2] and [3].",
    },
  ],

  visibleTests: [
    { args: [[1, 1, 1], 2], expected: 2 },
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[1, -1, 0], 0], expected: 3 },
    { args: [[0, 0, 0], 0], expected: 6 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4], 5], expected: 2 },
    { args: [[-1, -1, 1], 0], expected: 1 },
    { args: [[1, 2, -3, 3], 3], expected: 2 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you counting subarrays or returning the subarrays themselves?",
      "A subarray must be contiguous, not just any subset.",
      "Try [1,1,1] with k=2 and list all contiguous subarrays.",
      "Check which of those subarrays sum to k.",
      "You need to count how many such subarrays exist.",
    ],
    example: [
      "For [1,1,1], subarrays are: [1], [1], [1], [1,1], [1,1], [1,1,1].",
      "Among these, [1,1] appears twice and sums to 2.",
      "So the answer is 2.",
      "For [1,2,3] and k=3, subarrays [1,2] and [3] work.",
      "So the answer is 2.",
    ],
    simpleApproach: [
      "One method checks every possible subarray.",
      "Use two loops: start and end indices.",
      "For each subarray, compute its sum and compare with k.",
      "Count how many match.",
      "This is O(n^2) or O(n^3) depending on implementation.",
    ],
    repeatedWork: [
      "When you extend a subarray by one element, you do not need to re-sum everything.",
      "You can use prefix sums to avoid repeated work.",
      "Let prefix[i] be the sum from index 0 to i.",
      "Sum of subarray [l..r] = prefix[r] - prefix[l-1].",
      "This still can be O(n^2) if you check all pairs.",
    ],
    pattern: [
      "A better pattern uses prefix sums with a hash map.",
      "You track how many times each prefix sum has occurred.",
      "For current prefix sum S, you want earlier prefix sums equal to S - k.",
      "Each such earlier prefix corresponds to a valid subarray ending here.",
      "This reduces the problem to O(n).",
    ],
    dataStructure: [
      "Use a map from prefix sum value to its frequency.",
      "Initialize the map with {0: 1} to handle subarrays starting at index 0.",
      "Maintain a running prefix sum as you scan.",
      "For each new prefix S, check how many times S - k has appeared.",
      "Add that count to your answer.",
    ],
    algorithm: [
      "Initialize count = 0, prefixSum = 0.",
      "Create a map freq and set freq[0] = 1.",
      "Loop through each value x in nums.",
      "Update prefixSum = prefixSum + x.",
      "If (prefixSum - k) exists in freq, add freq[prefixSum - k] to count.",
      "Increment freq[prefixSum] by 1.",
    ],
    pseudocode: [
      "count = 0",
      "prefixSum = 0",
      "freq = map with {0: 1}",
      "for each x in nums:",
      "  prefixSum = prefixSum + x",
      "  if (prefixSum - k) in freq:",
      "    count = count + freq[prefixSum - k]",
      "  freq[prefixSum] = freq.get(prefixSum, 0) + 1",
      "return count",
    ],
    edgeCases: [
      "Test arrays with negative numbers.",
      "Test k = 0.",
      "Test arrays with all zeros.",
      "Test arrays where no subarray sums to k.",
      "Ensure your map handles negative prefix sums correctly.",
    ],
    finalNudge: [
      "Initialize freq with {0: 1} before the loop.",
      "Update count before updating freq for the current prefix.",
      "Use a map, not just an array, because prefix sums can be negative.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use prefix sums and a hash map. Track how many times each prefix sum occurs. For each new prefix S, the number of subarrays ending here with sum k is the number of earlier prefixes equal to S - k.",
  }),

  solutionLogic: {
    approach:
      "Use prefix sums and a hash map. Track how many times each prefix sum occurs. For each new prefix S, the number of subarrays ending here with sum k is the number of earlier prefixes equal to S - k.",

    steps: [
      "Initialize count = 0, prefixSum = 0.",
      "Create a map freq and set freq[0] = 1.",
      "For each element x in nums:",
      "  Update prefixSum = prefixSum + x.",
      "  If (prefixSum - k) exists in freq, add freq[prefixSum - k] to count.",
      "  Increment freq[prefixSum] by 1.",
      "Return count.",
    ],

    pseudocode: `count = 0
prefixSum = 0
freq = {0: 1}

for each x in nums:
    prefixSum = prefixSum + x
    if (prefixSum - k) in freq:
        count = count + freq[prefixSum - k]
    freq[prefixSum] = freq.get(prefixSum, 0) + 1

return count`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the hash map",

    commonMistakes: [
      "Forgetting to initialize freq with {0: 1}.",
      "Updating freq before using it to update count.",
      "Using an array instead of a map for prefix sums.",
      "Ignoring negative numbers and negative prefix sums.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, k) {
  let count = 0;
  let prefixSum = 0;
  const freq = new Map();
  freq.set(0, 1);

  for (const x of nums) {
    prefixSum += x;
    const need = prefixSum - k;
    if (freq.has(need)) {
      count += freq.get(need);
    }
    freq.set(prefixSum, (freq.get(prefixSum) || 0) + 1);
  }

  return count;
}`,

    python: `def solve(nums, k):
    count = 0
    prefix_sum = 0
    freq = {0: 1}

    for x in nums:
        prefix_sum += x
        need = prefix_sum - k
        if need in freq:
            count += freq[need]
        freq[prefix_sum] = freq.get(prefix_sum, 0) + 1

    return count`,
  },

  starterCode: {
    javascript: `function solve(nums, k) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, k):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int k) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int k) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};

// ============================================================
// QUESTION 4 – Strings – Easy
// ============================================================



const Q004 = {
  id: "str-001",
  slug: "reverse-string",
  title: "Reverse String",
  topic: "strings",
  difficulty: "Easy",

  prompt:
    "Given a string s, return the string reversed.",

  constraints: [
    "1 <= s.length <= 100000",
    "s contains printable ASCII characters.",
  ],

  examples: [
    {
      input: 's = "hello"',
      output: '"olleh"',
      explanation: "Characters are reversed.",
    },
    {
      input: 's = "abcd"',
      output: '"dcba"',
      explanation: "Characters are reversed.",
    },
  ],

  visibleTests: [
    { args: ["hello"], expected: "olleh" },
    { args: ["abcd"], expected: "dcba" },
    { args: ["a"], expected: "a" },
    { args: [""], expected: "" },
  ],

  hiddenTests: [
    { args: ["racecar"], expected: "racecar" },
    { args: ["12345"], expected: "54321" },
    { args: ["!@#"], expected: "#@!" },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked to reverse in place or return a new string?",
      "Reversing means the first character becomes last, and last becomes first.",
      "Try 'hello' on paper and write the reversed string.",
      "Notice the pattern of indices: 0 ↔ n-1, 1 ↔ n-2, etc.",
      "You can think of this as swapping characters from both ends.",
    ],
    example: [
      "For 'hello', indices: 0:h, 1:e, 2:l, 3:l, 4:o.",
      "Swap 0 and 4 → 'oellh'.",
      "Swap 1 and 3 → 'olleh'.",
      "Index 2 stays because it is the middle.",
      "Result is 'olleh'.",
    ],
    simpleApproach: [
      "One method builds a new string by appending characters from end to start.",
      "Loop i from n-1 down to 0.",
      "Append s[i] to a result string or array.",
      "Join the array into a string at the end.",
      "This is O(n) time and O(n) space.",
    ],
    repeatedWork: [
      "You do not need any complex data structure.",
      "A simple backward scan is enough.",
      "In languages with immutable strings, use a character array or list.",
      "In mutable string languages, you can swap in place.",
      "The core idea is the same: reverse the order of characters.",
    ],
    pattern: [
      "This is a two-pointer / reverse pattern.",
      "You can use indices from both ends moving inward.",
      "Or you can build a new string from end to start.",
      "Both approaches are O(n).",
      "Choose the one that fits your language best.",
    ],
    dataStructure: [
      "Use a character array or list if strings are immutable.",
      "Use two indices left and right if swapping in place.",
      "No map, set, or other structure is needed.",
      "The main storage is the output string or array.",
      "Keep the logic simple and direct.",
    ],
    algorithm: [
      "Convert string to a character array if needed.",
      "Set left = 0, right = n - 1.",
      "While left < right:",
      "  Swap characters at left and right.",
      "  Increment left, decrement right.",
      "Convert back to string and return.",
    ],
    pseudocode: [
      "chars = array of characters from s",
      "left = 0, right = length - 1",
      "while left < right:",
      "  swap chars[left] and chars[right]",
      "  left++, right--",
      "return string built from chars",
    ],
    edgeCases: [
      "Test an empty string.",
      "Test a single-character string.",
      "Test a palindrome like 'racecar'.",
      "Test strings with spaces and symbols.",
      "Ensure your function returns a string, not an array.",
    ],
    finalNudge: [
      "Check loop condition: left < right, not left <= right.",
      "Ensure you swap correctly and move both pointers.",
      "Run your code on the visible examples.",
      "Verify behavior for empty and single-character strings.",
    ],
    solutionLogic:
      "Solution logic: Reverse the string by swapping characters from both ends moving inward, or by building a new string from end to start.",
  }),

  solutionLogic: {
    approach:
      "Reverse the string by swapping characters from both ends moving inward, or by building a new string from end to start.",

    steps: [
      "Convert the string to a character array if needed.",
      "Set left = 0, right = n - 1.",
      "While left < right, swap chars[left] and chars[right].",
      "Increment left and decrement right.",
      "Convert the array back to a string and return it.",
    ],

    pseudocode: `chars = array from s
left = 0
right = length - 1

while left < right:
    swap chars[left] and chars[right]
    left++
    right--

return string from chars`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the character array (or O(1) extra if in-place)",

    commonMistakes: [
      "Using left <= right and swapping the middle element unnecessarily.",
      "Forgetting to convert back to a string.",
      "Modifying the original string when immutability is expected.",
      "Off-by-one errors in the right index.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  const chars = s.split('');
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join('');
}`,

    python: `def solve(s):
    chars = list(s)
    left, right = 0, len(chars) - 1

    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1

    return ''.join(chars)`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(String s) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(string s) {
  // Write your C++ solution here.
  return "";
}`,
  },
};

// ============================================================
// QUESTION 5 – Hashing – Medium
// ============================================================



const Q005 = {
  id: "hash-001",
  slug: "two-sum",
  title: "Two Sum",
  topic: "hashing",
  difficulty: "Medium",

  prompt:
    "Given an array of integers nums and an integer target, return the indices of two different numbers that add up to target. Assume exactly one solution exists. Do not use the same element twice.",

  constraints: [
    "2 <= nums.length <= 100000",
    "-10^9 <= nums[i] <= 10^9",
    "Exactly one valid pair exists.",
  ],

  examples: [
    {
      input: "nums = [2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      explanation: "nums[0] + nums[1] = 2 + 7 = 9.",
    },
    {
      input: "nums = [3, 2, 4], target = 6",
      output: "[1, 2]",
      explanation: "nums[1] + nums[2] = 2 + 4 = 6.",
    },
  ],

  visibleTests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { args: [[3, 2, 4], 6], expected: [1, 2] },
    { args: [[3, 3], 6], expected: [0, 1] },
    { args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
  ],

  hiddenTests: [
    { args: [[1, 5, 3, 7, 9], 12], expected: [2, 3] },
    { args: [[10, 20, 30, 40], 50], expected: [1, 3] },
    { args: [[0, 0, 0, 0], 0], expected: [0, 1] },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked to return values or indices? Read the output requirement carefully.",
      "The two indices must be different. You cannot use the same position twice.",
      "Try the first example by hand. For each number, what other number do you need to reach the target?",
      "If the current number is x, what value must you find to get target?",
      "That needed value is target minus x.",
    ],
    example: [
      "One slow method checks every pair of indices. That uses two nested loops.",
      "Nested loops can be too slow when the array is large.",
      "When you are at index i, you only need to know whether the needed value appeared earlier.",
      "This suggests remembering values you have already seen.",
      "A hash map or dictionary can store value -> index for fast lookup.",
    ],
    simpleApproach: [
      "As you scan from left to right, store each number and its index in the map.",
      "Before storing the current number, check if its needed partner is already in the map.",
      "If the partner exists, you have found the two indices.",
      "Return the stored index of the partner and the current index.",
      "If the partner does not exist yet, store the current number and continue.",
    ],
    repeatedWork: [
      "You only need one pass through the array.",
      "The time complexity is O(n) because each element is processed once.",
      "The extra space complexity is O(n) for the map in the worst case.",
      "Test your code with duplicate values like [3, 3] and target 6.",
      "Now implement the solution using a map in your language.",
    ],
    pattern: [
      "This is a classic hash map pattern.",
      "You store seen values to avoid re-scanning.",
      "You check for a complement before inserting the current value.",
      "This ensures you never use the same index twice.",
      "The map grows at most to size n.",
    ],
    dataStructure: [
      "Use a map from number to index.",
      "In JavaScript, use new Map().",
      "In Python, use a dictionary {}.",
      "Store nums[i] as key and i as value.",
      "Check map.has(needed) before map.set.",
    ],
    algorithm: [
      "Create an empty map.",
      "Loop i from 0 to nums.length - 1.",
      "Compute needed = target - nums[i].",
      "If needed is in the map, return [map.get(needed), i].",
      "Otherwise, map.set(nums[i], i).",
    ],
    pseudocode: [
      "seen = empty map",
      "for i from 0 to n - 1:",
      "  needed = target - nums[i]",
      "  if seen contains needed:",
      "    return [seen[needed], i]",
      "  seen[nums[i]] = i",
    ],
    edgeCases: [
      "Test with duplicate values.",
      "Test with negative values.",
      "Test when the solution uses the first and last index.",
      "Test when the array length is exactly 2.",
      "Ensure you never return the same index twice.",
    ],
    finalNudge: [
      "Check complement before inserting current value.",
      "Return indices, not values.",
      "Ensure your map uses the correct key and value.",
      "Run the visible tests before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a hash map to remember values you have already seen. For each number x, compute needed = target - x. If needed is already in the map, return its stored index and the current index. Otherwise, store x and its index.",
  }),

  solutionLogic: {
    approach:
      "Use a hash map to remember values you have already seen. For each number x, compute needed = target - x. If needed is already in the map, return its stored index and the current index. Otherwise, store x and its index.",

    steps: [
      "Create an empty map from number to index.",
      "Loop through nums with index i.",
      "Compute needed = target - nums[i].",
      "If needed is in the map, return [map.get(needed), i].",
      "Otherwise, store nums[i] -> i in the map.",
    ],

    pseudocode: `seen = empty map

for i from 0 to nums.length - 1:
    needed = target - nums[i]

    if seen contains needed:
        return [seen[needed], i]

    seen[nums[i]] = i`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",

    commonMistakes: [
      "Storing the current number before checking its partner, which can incorrectly reuse the same index.",
      "Returning values instead of indices.",
      "Assuming there are multiple solutions when the problem guarantees exactly one.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (seen.has(needed)) {
      return [seen.get(needed), i];
    }

    seen.set(nums[i], i);
  }
}`,

    python: `def solve(nums, target):
    seen = {}

    for i, x in enumerate(nums):
        needed = target - x
        if needed in seen:
            return [seen[needed], i]
        seen[x] = i`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums, int target) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};

const Q006 = {
  id: "tp-001",
  slug: "valid-palindrome",
  title: "Valid Palindrome",
  topic: "two-pointers",
  difficulty: "Easy",

  prompt:
    "Given a string s, return true if it is a palindrome considering only alphanumeric characters and ignoring letter case. Otherwise return false.",

  constraints: [
    "1 <= s.length <= 100000",
    "s contains ASCII characters.",
  ],

  examples: [
    {
      input: 's = "A man, a plan, a canal: Panama"',
      output: "true",
      explanation:
        "After removing non-alphanumeric characters and ignoring case, it reads 'amanaplanacanalpanama'.",
    },
    {
      input: 's = "race a car"',
      output: "false",
      explanation:
        "After cleaning, it becomes 'raceacar', which is not a palindrome.",
    },
  ],

  visibleTests: [
    { args: ["A man, a plan, a canal: Panama"], expected: true },
    { args: ["race a car"], expected: false },
    { args: [""], expected: true },
    { args: [" "], expected: true },
  ],

  hiddenTests: [
    { args: ["Madam"], expected: true },
    { args: ["0P"], expected: false },
    { args: ["ab2a"], expected: false },
    { args: ["ab2ba"], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you checking if the whole string is a palindrome or only part of it?",
      "Which characters should be considered? Letters, digits, or also symbols and spaces?",
      "Should uppercase and lowercase letters be treated as the same?",
      "Try the first example by hand after removing non-alphanumeric characters.",
      "After cleaning, does the string read the same forwards and backwards?",
    ],
    example: [
      "For 'A man, a plan, a canal: Panama', remove everything except letters and digits.",
      "Convert all letters to the same case, for example lowercase.",
      "You get 'amanaplanacanalpanama'.",
      "Check if this cleaned string is the same when reversed.",
      "If yes, the answer is true.",
    ],
    simpleApproach: [
      "One method builds a cleaned string first.",
      "Loop through s, keep only alphanumeric characters.",
      "Convert them to lowercase.",
      "Then check if the cleaned string equals its reverse.",
      "This is simple and clear, though it uses extra space.",
    ],
    repeatedWork: [
      "You do not need to actually reverse the string.",
      "You can compare characters from both ends instead.",
      "This avoids creating a reversed copy.",
      "You still may create a cleaned version or skip characters on the fly.",
      "The main repeated work is checking matching pairs from both ends.",
    ],
    pattern: [
      "This is a two-pointer pattern on a string.",
      "One pointer starts at the beginning, one at the end.",
      "Move them towards each other, comparing characters.",
      "Skip non-alphanumeric characters as you go.",
      "If any pair differs, it is not a palindrome.",
    ],
    dataStructure: [
      "You can use two indices, left and right.",
      "No extra array or map is required.",
      "If you prefer, you can first build a cleaned character array.",
      "Then run two pointers on that array.",
      "Both approaches are acceptable.",
    ],
    algorithm: [
      "Set left = 0, right = s.length - 1.",
      "While left < right:",
      "  Move left forward until it points to an alphanumeric character.",
      "  Move right backward until it points to an alphanumeric character.",
      "  Compare s[left] and s[right] in lowercase.",
      "  If they differ, return false.",
      "  Otherwise, move left forward and right backward.",
    ],
    pseudocode: [
      "left = 0, right = n - 1",
      "while left < right:",
      "  while left < right and not alphanumeric(s[left]): left++",
      "  while left < right and not alphanumeric(s[right]): right--",
      "  if lowercase(s[left]) != lowercase(s[right]): return false",
      "  left++, right--",
      "return true",
    ],
    edgeCases: [
      "Test an empty string.",
      "Test a string with only spaces and symbols.",
      "Test a single alphanumeric character.",
      "Test a string that becomes empty after cleaning.",
      "Ensure you handle mixed case correctly.",
    ],
    finalNudge: [
      "Make sure you skip non-alphanumeric characters on both sides.",
      "Compare characters in lowercase (or uppercase, but be consistent).",
      "Return true if the loop finishes without finding a mismatch.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use two pointers to compare alphanumeric characters from both ends, skipping non-alphanumeric characters and ignoring case. If all matched pairs are equal, the string is a valid palindrome.",
  }),

  solutionLogic: {
    approach:
      "Use two pointers to compare alphanumeric characters from both ends, skipping non-alphanumeric characters and ignoring case. If all matched pairs are equal, the string is a valid palindrome.",

    steps: [
      "Set left = 0, right = s.length - 1.",
      "While left < right:",
      "  Move left forward until it points to an alphanumeric character.",
      "  Move right backward until it points to an alphanumeric character.",
      "  If lowercase(s[left]) != lowercase(s[right]), return false.",
      "  Increment left and decrement right.",
      "If the loop ends, return true.",
    ],

    pseudocode: `left = 0
right = n - 1

while left < right:
    while left < right and not alphanumeric(s[left]):
        left++
    while left < right and not alphanumeric(s[right]):
        right--
    if lowercase(s[left]) != lowercase(s[right]):
        return false
    left++
    right--

return true`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1) extra space",

    commonMistakes: [
      "Forgetting to ignore non-alphanumeric characters.",
      "Comparing characters with different cases.",
      "Stopping the loop too early or too late.",
      "Not handling empty or single-character strings correctly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;

  function isAlphaNumeric(ch) {
    const code = ch.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122)   // a-z
    );
  }
}`,

    python: `def solve(s):
    def is_alpha_numeric(ch):
        return ch.isalnum()

    left, right = 0, len(s) - 1

    while left < right:
        while left < right and not is_alpha_numeric(s[left]):
            left += 1
        while left < right and not is_alpha_numeric(s[right]):
            right -= 1

        if left < right and s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(String s) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(string s) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q007 = {
  id: "bs-001",
  slug: "binary-search-target",
  title: "Binary Search Target",
  topic: "binary-search",
  difficulty: "Easy",

  prompt:
    "Given a sorted ascending array of integers nums and an integer target, return the index of target if it exists. Otherwise return -1.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-10^9 <= nums[i] <= 10^9",
    "nums is sorted in non-decreasing order.",
  ],

  examples: [
    {
      input: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
      output: "4",
      explanation: "9 is at index 4.",
    },
    {
      input: "nums = [-1, 0, 3, 5, 9, 12], target = 2",
      output: "-1",
      explanation: "2 does not exist in the array.",
    },
  ],

  visibleTests: [
    { args: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { args: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
    { args: [[5], 5], expected: 0 },
    { args: [[5], 3], expected: -1 },
  ],

  hiddenTests: [
    { args: [[1, 3, 5, 7, 9], 1], expected: 0 },
    { args: [[1, 3, 5, 7, 9], 9], expected: 4 },
    { args: [[1, 3, 5, 7, 9], 6], expected: -1 },
    { args: [[-5, -3, -1, 0, 2], -3], expected: 1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked to return the index or the value itself?",
      "What should you return if the target is not found?",
      "Is the array sorted? In which order?",
      "Try the first example by hand and locate the target.",
      "Notice that the array is sorted, which allows a faster search.",
    ],
    example: [
      "For [-1,0,3,5,9,12] and target 9, check the middle element.",
      "If the middle is smaller than target, the target must be on the right.",
      "If the middle is larger, the target must be on the left.",
      "Repeat this halving until you find the target or the range becomes empty.",
      "This is the core idea of binary search.",
    ],
    simpleApproach: [
      "One slow method scans the array from left to right.",
      "That takes O(n) time.",
      "Because the array is sorted, you can do better.",
      "You can repeatedly cut the search range in half.",
      "This leads to O(log n) time.",
    ],
    repeatedWork: [
      "At each step, you compare the target with the middle element.",
      "You discard half of the current range.",
      "You repeat this on the remaining half.",
      "No element is examined more than once in a given path.",
      "The work decreases exponentially with each step.",
    ],
    pattern: [
      "This is a classic binary search pattern.",
      "You maintain a search range [left, right].",
      "You compute the middle index safely.",
      "You compare nums[mid] with target.",
      "You update left or right based on the comparison.",
    ],
    dataStructure: [
      "You only need the input array and two indices.",
      "No extra arrays, maps, or sets are required.",
      "Use integer variables left, right, and mid.",
      "Keep the range inclusive or consistent in your logic.",
      "The main structure is the loop over the range.",
    ],
    algorithm: [
      "Set left = 0, right = nums.length - 1.",
      "While left <= right:",
      "  Compute mid = left + floor((right - left) / 2).",
      "  If nums[mid] == target, return mid.",
      "  If nums[mid] < target, set left = mid + 1.",
      "  Otherwise, set right = mid - 1.",
    ],
    pseudocode: [
      "left = 0, right = n - 1",
      "while left <= right:",
      "  mid = left + (right - left) // 2",
      "  if nums[mid] == target: return mid",
      "  else if nums[mid] < target: left = mid + 1",
      "  else: right = mid - 1",
      "return -1",
    ],
    edgeCases: [
      "Test an array with one element.",
      "Test when target is at the first index.",
      "Test when target is at the last index.",
      "Test when target is not present.",
      "Ensure your mid calculation does not overflow in other languages.",
    ],
    finalNudge: [
      "Use left <= right as the loop condition for inclusive range.",
      "Update left and right correctly to avoid infinite loops.",
      "Return -1 only after the loop ends without finding target.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use binary search on the sorted array. Maintain a search range [left, right]. Repeatedly compare the middle element with the target and discard the half where the target cannot be.",
  }),

  solutionLogic: {
    approach:
      "Use binary search on the sorted array. Maintain a search range [left, right]. Repeatedly compare the middle element with the target and discard the half where the target cannot be.",

    steps: [
      "Set left = 0, right = nums.length - 1.",
      "While left <= right:",
      "  Compute mid = left + floor((right - left) / 2).",
      "  If nums[mid] == target, return mid.",
      "  If nums[mid] < target, search the right half (left = mid + 1).",
      "  Otherwise, search the left half (right = mid - 1).",
      "If the loop ends, return -1.",
    ],

    pseudocode: `left = 0
right = n - 1

while left <= right:
    mid = left + (right - left) // 2

    if nums[mid] == target:
        return mid
    else if nums[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

return -1`,

    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Using (left + right) / 2 directly in languages with fixed-size integers.",
      "Using the wrong loop condition (left < right vs left <= right).",
      "Updating left or right incorrectly and skipping the target.",
      "Returning the wrong value when the target is not found.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}`,

    python: `def solve(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int target) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q008 = {
  id: "ll-001",
  slug: "reverse-linked-list",
  title: "Reverse Linked List",
  topic: "linked-lists",
  difficulty: "Easy",

  prompt:
    "Given the head of a singly linked list, reverse the list and return the new head.",

  constraints: [
    "0 <= number of nodes <= 5000",
    "-5000 <= node.val <= 5000",
  ],

  examples: [
    {
      input: "head = [1, 2, 3, 4, 5]",
      output: "[5, 4, 3, 2, 1]",
      explanation: "The list is reversed.",
    },
    {
      input: "head = [1, 2]",
      output: "[2, 1]",
      explanation: "The list is reversed.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[1]], expected: [1] },
    { args: [[]], expected: [] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3]], expected: [3, 2, 1] },
    { args: [[-1, -2, -3]], expected: [-3, -2, -1] },
    { args: [[1, 1, 1]], expected: [1, 1, 1] },
    { args: [[1, 2, 3, 4]], expected: [4, 3, 2, 1] },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked to return the head of the reversed list or print it?",
      "A singly linked list node has a value and a next pointer.",
      "Reversing means changing the direction of the next pointers.",
      "Try drawing a small list like 1 -> 2 -> 3 and its reverse.",
      "The new head should be the old tail.",
    ],
    example: [
      "For 1 -> 2 -> 3, after reversal it becomes 3 -> 2 -> 1.",
      "Node 3's next becomes null (it is the new tail).",
      "Node 2's next points to 1.",
      "Node 1's next points to null (it was the old head).",
      "The new head is node 3.",
    ],
    simpleApproach: [
      "One method uses three pointers: previous, current, next.",
      "You walk through the list once.",
      "At each node, you reverse its next pointer to point backward.",
      "You move all pointers one step forward.",
      "At the end, previous is the new head.",
    ],
    repeatedWork: [
      "For each node, you perform the same pointer-update steps.",
      "You do not need to revisit nodes once processed.",
      "The pattern repeats until you reach the end of the list.",
      "No nested traversal is needed.",
      "The work per node is constant.",
    ],
    pattern: [
      "This is a standard linked list reversal pattern.",
      "You maintain previous and current pointers.",
      "You temporarily store current.next before changing it.",
      "You reverse the link and advance.",
      "This runs in one pass.",
    ],
    dataStructure: [
      "You only need the existing list nodes.",
      "Use three pointer variables: prev, curr, nextTemp.",
      "No extra list or array is required.",
      "The reversal is done in place.",
      "The main structure is the while loop over curr.",
    ],
    algorithm: [
      "Set prev = null, curr = head.",
      "While curr is not null:",
      "  Store nextTemp = curr.next.",
      "  Set curr.next = prev.",
      "  Move prev = curr, curr = nextTemp.",
      "Return prev as the new head.",
    ],
    pseudocode: [
      "prev = null",
      "curr = head",
      "while curr != null:",
      "  nextTemp = curr.next",
      "  curr.next = prev",
      "  prev = curr",
      "  curr = nextTemp",
      "return prev",
    ],
    edgeCases: [
      "Test an empty list (head is null).",
      "Test a list with one node.",
      "Test a list with two nodes.",
      "Ensure the new head's next chain is correct.",
      "Ensure there are no cycles introduced.",
    ],
    finalNudge: [
      "Make sure you store nextTemp before changing curr.next.",
      "Update prev and curr in the correct order.",
      "Return prev, not curr, after the loop.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Iterate through the list with prev and curr. For each node, save its next pointer, reverse its next to point to prev, then move prev and curr forward. At the end, prev is the new head.",
  }),

  solutionLogic: {
    approach:
      "Iterate through the list with prev and curr. For each node, save its next pointer, reverse its next to point to prev, then move prev and curr forward. At the end, prev is the new head.",

    steps: [
      "Initialize prev = null, curr = head.",
      "While curr is not null:",
      "  Save nextTemp = curr.next.",
      "  Set curr.next = prev.",
      "  Move prev = curr and curr = nextTemp.",
      "Return prev as the new head.",
    ],

    pseudocode: `prev = null
curr = head

while curr != null:
    nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp

return prev`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Forgetting to save nextTemp before changing curr.next.",
      "Updating prev and curr in the wrong order.",
      "Returning curr instead of prev at the end.",
      "Creating a cycle by incorrect pointer updates.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}`,

    python: `def solve(head):
    prev = None
    curr = head

    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp

    return prev`,
  },

  starterCode: {
    javascript: `function solve(head) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(head):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] head) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> head) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q009 = {
  id: "tree-001",
  slug: "maximum-depth-of-binary-tree",
  title: "Maximum Depth of Binary Tree",
  topic: "trees",
  difficulty: "Easy",

  prompt:
    "Given the root of a binary tree, return its maximum depth. The depth is the number of nodes along the longest path from the root down to the farthest leaf node.",

  constraints: [
    "0 <= number of nodes <= 10000",
    "-100 <= node.val <= 100",
  ],

  examples: [
    {
      input: "root = [3, 9, 20, null, null, 15, 7]",
      output: "3",
      explanation: "Longest path is 3 -> 20 -> 15 or 3 -> 20 -> 7.",
    },
    {
      input: "root = [1, null, 2]",
      output: "2",
      explanation: "Longest path is 1 -> 2.",
    },
  ],

  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
    { args: [[1, null, 2]], expected: 2 },
    { args: [[1]], expected: 1 },
    { args: [[]], expected: 0 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 3 },
    { args: [[1, 2, null, 3, null, null, null]], expected: 3 },
    { args: [[1, 2, 3, 4, null, null, 5]], expected: 3 },
    { args: [[1, 2, 3, null, 4, 5, 6, 7]], expected: 4 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked to return the number of nodes or the number of edges on the longest path?",
      "What is the depth of an empty tree?",
      "What is the depth of a tree with only the root node?",
      "Try the first example and count nodes on the longest root-to-leaf path.",
      "Notice that depth is defined recursively in terms of subtrees.",
    ],
    example: [
      "For [3,9,20,null,null,15,7], the root is 3.",
      "Left subtree has root 9 and depth 1.",
      "Right subtree has root 20 and children 15 and 7.",
      "Longest path is 3 -> 20 -> 15 (or 7), which has 3 nodes.",
      "So the maximum depth is 3.",
    ],
    simpleApproach: [
      "One method uses recursion on the tree structure.",
      "If the node is null, its depth is 0.",
      "Otherwise, depth is 1 plus the maximum of left and right subtree depths.",
      "This directly follows the definition of depth.",
      "It visits every node once.",
    ],
    repeatedWork: [
      "Each node's depth depends only on its children's depths.",
      "You do not need to recompute anything once a subtree's depth is known.",
      "The recursion naturally avoids repeated work.",
      "Each node is processed once in the call stack.",
      "The total work is proportional to the number of nodes.",
    ],
    pattern: [
      "This is a standard tree recursion pattern.",
      "You solve the problem for left and right subtrees.",
      "You combine their results to get the answer for the current node.",
      "Base case is the null node.",
      "Recursive case uses 1 + max(leftDepth, rightDepth).",
    ],
    dataStructure: [
      "You only need the tree nodes as given.",
      "No extra arrays, maps, or queues are required for the recursive solution.",
      "The call stack stores the recursion state.",
      "Each call handles one node.",
      "The main structure is the recursive function.",
    ],
    algorithm: [
      "If root is null, return 0.",
      "Recursively compute leftDepth = maxDepth(root.left).",
      "Recursively compute rightDepth = maxDepth(root.right).",
      "Return 1 + max(leftDepth, rightDepth).",
    ],
    pseudocode: [
      "function maxDepth(node):",
      "  if node == null: return 0",
      "  leftDepth = maxDepth(node.left)",
      "  rightDepth = maxDepth(node.right)",
      "  return 1 + max(leftDepth, rightDepth)",
    ],
    edgeCases: [
      "Test an empty tree (root is null).",
      "Test a tree with only the root.",
      "Test a skewed tree (all left or all right children).",
      "Test a balanced tree.",
      "Ensure you count nodes, not edges.",
    ],
    finalNudge: [
      "Make sure the base case returns 0 for null.",
      "Use 1 + max(left, right) for non-null nodes.",
      "Do not forget to handle the empty tree case.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use recursion. The depth of a node is 1 plus the maximum of the depths of its left and right children. The depth of a null node is 0.",
  }),

  solutionLogic: {
    approach:
      "Use recursion. The depth of a node is 1 plus the maximum of the depths of its left and right children. The depth of a null node is 0.",

    steps: [
      "If root is null, return 0.",
      "Recursively compute depth of left subtree.",
      "Recursively compute depth of right subtree.",
      "Return 1 + max(leftDepth, rightDepth).",
    ],

    pseudocode: `function maxDepth(node):
    if node == null:
        return 0
    leftDepth = maxDepth(node.left)
    rightDepth = maxDepth(node.right)
    return 1 + max(leftDepth, rightDepth)`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(h) for recursion stack, where h is tree height",

    commonMistakes: [
      "Returning 1 for a null node instead of 0.",
      "Using min instead of max for combining subtree depths.",
      "Counting edges instead of nodes.",
      "Forgetting to handle the empty tree case.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = solve(root.left);
  const rightDepth = solve(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}`,

    python: `def solve(root):
    if root is None:
        return 0

    left_depth = solve(root.left)
    right_depth = solve(root.right)

    return 1 + max(left_depth, right_depth)`,
  },

  starterCode: {
    javascript: `function solve(root) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(root):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(Integer[] root) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<optional<int>> root) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q010 = {
  id: "sq-001",
  slug: "valid-parentheses-stack",
  title: "Valid Parentheses (Stack)",
  topic: "stacks-queues",
  difficulty: "Easy",

  prompt:
    "Given a string s containing only the characters '(', ')', '{', '}', '[' and ']', determine if the string is valid. A string is valid if open brackets are closed in the correct order and every close bracket has a corresponding open bracket of the same type.",

  constraints: [
    "1 <= s.length <= 10000",
    "s contains only '(', ')', '{', '}', '[' and ']'.",
  ],

  examples: [
    {
      input: 's = "()[]{}"',
      output: "true",
      explanation: "All brackets are correctly matched and ordered.",
    },
    {
      input: 's = "([)]"',
      output: "false",
      explanation: "Brackets are not closed in the correct order.",
    },
  ],

  visibleTests: [
    { args: ["()"], expected: true },
    { args: ["()[]{}"], expected: true },
    { args: ["(]"], expected: false },
    { args: ["([)]"], expected: false },
  ],

  hiddenTests: [
    { args: ["{[]}"], expected: true },
    { args: ["((()))"], expected: true },
    { args: ["(()"], expected: false },
    { args: ["())"], expected: false },
  ],

  hints: createProgressiveHints({
    understand: [
      "What makes a bracket string valid?",
      "Do you need to check both type and order of brackets?",
      "Try the first example and track which bracket is opened last.",
      "When you see a closing bracket, what should the most recent unmatched opening bracket be?",
      "Think about the order in which brackets are closed.",
    ],
    example: [
      "For '()[]{}', the first '(' is closed by ')'.",
      "Then '[' is closed by ']'.",
      "Then '{' is closed by '}'.",
      "For '([)]', '(' is opened, then '[', but ')' tries to close '(' before '[' is closed.",
      "This violates the correct order.",
    ],
    simpleApproach: [
      "One method uses a stack to track open brackets.",
      "When you see an opening bracket, push it onto the stack.",
      "When you see a closing bracket, check the top of the stack.",
      "If it matches the correct type, pop the stack.",
      "If not, the string is invalid.",
    ],
    repeatedWork: [
      "For each character, you perform a constant-time stack operation.",
      "You do not need to scan the string multiple times.",
      "The stack always represents the currently open brackets.",
      "Each bracket is pushed once and popped at most once.",
      "The total work is linear in the length of the string.",
    ],
    pattern: [
      "This is a classic stack pattern for matching pairs.",
      "Last opened bracket must be first closed.",
      "Stack gives you LIFO (last-in, first-out) behavior.",
      "You compare each closing bracket with the top of the stack.",
      "At the end, the stack must be empty for a valid string.",
    ],
    dataStructure: [
      "Use a stack to store opening brackets.",
      "In JavaScript, you can use an array with push/pop.",
      "In Python, use a list with append/pop.",
      "You may also use a map to match closing to opening brackets.",
      "No other complex structure is needed.",
    ],
    algorithm: [
      "Create an empty stack.",
      "Create a map from closing bracket to its matching opening bracket.",
      "Loop through each character ch in s:",
      "  If ch is an opening bracket, push it onto the stack.",
      "  If ch is a closing bracket:",
      "    If stack is empty or top of stack is not the matching opener, return false.",
      "    Otherwise, pop the stack.",
      "After the loop, return true if the stack is empty.",
    ],
    pseudocode: [
      "stack = empty",
      "map = {')':'(', ']':'[', '}':'{'}",
      "for each ch in s:",
      "  if ch is opener: push ch",
      "  else:",
      "    if stack empty or stack.top != map[ch]: return false",
      "    pop stack",
      "return stack is empty",
    ],
    edgeCases: [
      "Test an empty string if allowed by constraints.",
      "Test a string with only opening brackets.",
      "Test a string with only closing brackets.",
      "Test mismatched types like '(]'.",
      "Ensure the stack is empty at the end for a valid string.",
    ],
    finalNudge: [
      "Check for empty stack before accessing top.",
      "Use the map to find the expected opener for each closer.",
      "Return false immediately on any mismatch.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a stack to track opening brackets. For each closing bracket, check that the most recent unmatched opening bracket is of the correct type. At the end, the stack must be empty.",
  }),

  solutionLogic: {
    approach:
      "Use a stack to track opening brackets. For each closing bracket, check that the most recent unmatched opening bracket is of the correct type. At the end, the stack must be empty.",

    steps: [
      "Create an empty stack.",
      "Create a map from closing to opening brackets.",
      "For each character in s:",
      "  If it is an opener, push it.",
      "  If it is a closer, check the top of the stack.",
      "If any check fails, return false.",
      "At the end, return true if the stack is empty.",
    ],

    pseudocode: `stack = []
map = {')':'(', ']':'[', '}':'{'}

for ch in s:
    if ch in map values (opener):
        stack.push(ch)
    else:
        if stack empty or stack.top != map[ch]:
            return false
        stack.pop()

return stack is empty`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the stack in the worst case",

    commonMistakes: [
      "Forgetting to check if the stack is empty before popping.",
      "Using the wrong mapping between closing and opening brackets.",
      "Returning true even when the stack is not empty.",
      "Mixing up the order of checks for opener vs closer.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[ch]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}`,

    python: `def solve(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}

    for ch in s:
        if ch in '([{': 
            stack.append(ch)
        else:
            if not stack or stack[-1] != mapping[ch]:
                return False
            stack.pop()

    return len(stack) == 0`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(String s) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(string s) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q011 = {
  id: "sw-001",
  slug: "longest-substring-without-repeating",
  title: "Longest Substring Without Repeating Characters",
  topic: "sliding-window",
  difficulty: "Medium",

  prompt:
    "Given a string s, find the length of the longest substring that contains no repeating characters.",

  constraints: [
    "0 <= s.length <= 50000",
    "s consists of English letters, digits, and symbols.",
  ],

  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: "The longest substring without repeating characters is 'abc'.",
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation: "The longest substring is 'b'.",
    },
    {
      input: 's = "pwwkew"',
      output: "3",
      explanation: "The longest substring is 'wke' or 'kew'.",
    },
  ],

  visibleTests: [
    { args: ["abcabcbb"], expected: 3 },
    { args: ["bbbbb"], expected: 1 },
    { args: ["pwwkew"], expected: 3 },
    { args: [""], expected: 0 },
  ],

  hiddenTests: [
    { args: ["abcdef"], expected: 6 },
    { args: ["abca"], expected: 3 },
    { args: ["dvdf"], expected: 3 },
    { args: ["tmmzuxt"], expected: 5 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked for a substring or a subsequence?",
      "Must the characters be contiguous?",
      "What does 'without repeating characters' mean?",
      "Try the first example and list some substrings without repeats.",
      "You need the maximum length among such substrings.",
    ],
    example: [
      "For 'abcabcbb', substrings like 'abc', 'bca', 'cab' have length 3.",
      "Extending beyond 'abc' repeats 'a', 'b', or 'c'.",
      "For 'bbbbb', any substring longer than 1 repeats 'b'.",
      "For 'pwwkew', 'wke' is valid and has length 3.",
      "Notice that you can slide a window over the string.",
    ],
    simpleApproach: [
      "One method checks every possible substring.",
      "For each start index, extend the end and track seen characters.",
      "Stop when a repeat is found.",
      "Keep the maximum length seen.",
      "This is O(n^2) in the worst case.",
    ],
    repeatedWork: [
      "When you move the start forward, you do not need to restart from scratch.",
      "You can maintain a window [left, right] of unique characters.",
      "When a repeat appears, shrink the window from the left.",
      "This avoids rechecking the same characters many times.",
      "The work becomes linear in the length of the string.",
    ],
    pattern: [
      "This is a sliding window pattern.",
      "Expand the right end while characters are unique.",
      "When a repeat occurs, move the left end to restore uniqueness.",
      "Track the maximum window size.",
      "Use a set or map to store characters in the current window.",
    ],
    dataStructure: [
      "Use a set or a map to store characters in the current window.",
      "A map can store the last index of each character.",
      "This helps jump the left pointer directly.",
      "No other complex structure is needed.",
      "The main state is left, right, and the character map/set.",
    ],
    algorithm: [
      "Initialize left = 0, maxLen = 0.",
      "Create a map lastSeen to store the last index of each character.",
      "Loop right from 0 to s.length - 1:",
      "  If s[right] was seen and its last index is >= left, move left to lastSeen[s[right]] + 1.",
      "  Update lastSeen[s[right]] = right.",
      "  Update maxLen = max(maxLen, right - left + 1).",
    ],
    pseudocode: [
      "left = 0, maxLen = 0",
      "lastSeen = empty map",
      "for right from 0 to n - 1:",
      "  if s[right] in lastSeen and lastSeen[s[right]] >= left:",
      "    left = lastSeen[s[right]] + 1",
      "  lastSeen[s[right]] = right",
      "  maxLen = max(maxLen, right - left + 1)",
      "return maxLen",
    ],
    edgeCases: [
      "Test an empty string.",
      "Test a string with all unique characters.",
      "Test a string with all same characters.",
      "Test a string where the longest substring is at the end.",
      "Ensure you handle repeats correctly when updating left.",
    ],
    finalNudge: [
      "Make sure left only moves forward, never backward.",
      "Use the last seen index to update left when a repeat occurs.",
      "Update maxLen after adjusting the window.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a sliding window with a map of last seen indices. Expand the right end, and when a repeat is found inside the window, move the left end just past the previous occurrence. Track the maximum window size.",
  }),

  solutionLogic: {
    approach:
      "Use a sliding window with a map of last seen indices. Expand the right end, and when a repeat is found inside the window, move the left end just past the previous occurrence. Track the maximum window size.",

    steps: [
      "Initialize left = 0, maxLen = 0.",
      "Create an empty map lastSeen.",
      "For each right from 0 to n - 1:",
      "  If s[right] is in lastSeen and lastSeen[s[right]] >= left, set left = lastSeen[s[right]] + 1.",
      "  Update lastSeen[s[right]] = right.",
      "  Update maxLen = max(maxLen, right - left + 1).",
      "Return maxLen.",
    ],

    pseudocode: `left = 0
maxLen = 0
lastSeen = empty map

for right from 0 to n - 1:
    if s[right] in lastSeen and lastSeen[s[right]] >= left:
        left = lastSeen[s[right]] + 1
    lastSeen[s[right]] = right
    maxLen = max(maxLen, right - left + 1)

return maxLen`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(min(n, alphabet size))",

    commonMistakes: [
      "Moving left backward instead of forward.",
      "Not checking if the last occurrence is inside the current window.",
      "Updating maxLen before adjusting the window.",
      "Forgetting to handle the empty string case.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  let left = 0;
  let maxLen = 0;
  const lastSeen = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }
    lastSeen.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`,

    python: `def solve(s):
    left = 0
    max_len = 0
    last_seen = {}

    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1
        last_seen[ch] = right
        max_len = max(max_len, right - left + 1)

    return max_len`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(String s) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(string s) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q012 = {
  id: "rec-001",
  slug: "factorial-recursion",
  title: "Factorial Using Recursion",
  topic: "recursion",
  difficulty: "Easy",

  prompt:
    "Given a non-negative integer n, return n! (n factorial) using recursion. By definition, 0! = 1.",

  constraints: [
    "0 <= n <= 12",
    "The result fits in a 32-bit integer.",
  ],

  examples: [
    {
      input: "n = 5",
      output: "120",
      explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120.",
    },
    {
      input: "n = 0",
      output: "1",
      explanation: "By definition, 0! = 1.",
    },
    {
      input: "n = 3",
      output: "6",
      explanation: "3! = 3 × 2 × 1 = 6.",
    },
  ],

  visibleTests: [
    { args: [5], expected: 120 },
    { args: [0], expected: 1 },
    { args: [3], expected: 6 },
    { args: [1], expected: 1 },
  ],

  hiddenTests: [
    { args: [4], expected: 24 },
    { args: [6], expected: 720 },
    { args: [10], expected: 3628800 },
    { args: [12], expected: 479001600 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the mathematical definition of n!?",
      "What is the base case for factorial?",
      "How can n! be expressed in terms of (n-1)!?",
      "Try computing 3! by hand using the definition.",
      "You are required to use recursion, not a loop.",
    ],
    example: [
      "5! = 5 × 4!",
      "4! = 4 × 3!",
      "3! = 3 × 2!",
      "2! = 2 × 1!",
      "1! = 1 × 0! and 0! = 1.",
    ],
    simpleApproach: [
      "Write a function factorial(n).",
      "If n is 0 or 1, return 1.",
      "Otherwise, return n * factorial(n - 1).",
      "This directly follows the mathematical definition.",
      "Each call reduces n by 1 until it reaches the base case.",
    ],
    repeatedWork: [
      "Each recursive call solves a smaller version of the same problem.",
      "There is no repeated work here; each n is computed once on the way down.",
      "The call stack stores the pending multiplications.",
      "When the base case is reached, the results multiply on the way back.",
      "The depth of recursion is n + 1.",
    ],
    pattern: [
      "This is a simple linear recursion pattern.",
      "Base case: n == 0 or n == 1.",
      "Recursive case: n * factorial(n - 1).",
      "Each step moves closer to the base case.",
      "No loops are needed.",
    ],
    dataStructure: [
      "No extra data structure is needed.",
      "The call stack stores the recursion state.",
      "Each frame holds the current n and the pending multiplication.",
      "The input is a single integer.",
      "The output is a single integer.",
    ],
    algorithm: [
      "If n is 0 or 1, return 1.",
      "Otherwise, return n * factorial(n - 1).",
      "Trust that factorial(n - 1) correctly computes (n-1)!.",
      "Combine with n to get n!.",
    ],
    pseudocode: [
      "function factorial(n):",
      "  if n == 0 or n == 1:",
      "    return 1",
      "  return n * factorial(n - 1)",
    ],
    edgeCases: [
      "Test n = 0.",
      "Test n = 1.",
      "Test small values like 2, 3, 4.",
      "Ensure you do not recurse infinitely.",
      "Check that the base case stops the recursion.",
    ],
    finalNudge: [
      "Make sure the base case returns 1 for n = 0 and n = 1.",
      "Ensure you multiply n by factorial(n - 1).",
      "Do not add instead of multiply.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use recursion with base case factorial(0) = 1 and factorial(1) = 1. For n > 1, return n * factorial(n - 1).",
  }),

  solutionLogic: {
    approach:
      "Use recursion with base case factorial(0) = 1 and factorial(1) = 1. For n > 1, return n * factorial(n - 1).",

    steps: [
      "If n is 0 or 1, return 1.",
      "Otherwise, return n * factorial(n - 1).",
      "Each call reduces n by 1.",
      "The recursion stops at the base case.",
      "Multiplications unwind on the way back.",
    ],

    pseudocode: `function factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for recursion stack",

    commonMistakes: [
      "Using the wrong base case (e.g., only n == 0).",
      "Adding n instead of multiplying.",
      "Calling factorial(n) again instead of factorial(n - 1).",
      "Missing the base case and causing infinite recursion.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * solve(n - 1);
}`,

    python: `def solve(n):
    if n == 0 or n == 1:
        return 1
    return n * solve(n - 1)`,
  },

  starterCode: {
    javascript: `function solve(n) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(n):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int n) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(int n) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q013 = {
  id: "bt-001",
  slug: "generate-subsets",
  title: "Generate Subsets",
  topic: "backtracking",
  difficulty: "Medium",

  prompt:
    "Given an array of distinct integers nums, return all possible subsets (the power set). You may return the answer in any order.",

  constraints: [
    "1 <= nums.length <= 10",
    "-10 <= nums[i] <= 10",
    "All values in nums are unique.",
  ],

  examples: [
    {
      input: "nums = [1, 2, 3]",
      output: "[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]",
      explanation: "All subsets of [1,2,3].",
    },
    {
      input: "nums = [0]",
      output: "[[], [0]]",
      explanation: "All subsets of [0].",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3]], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
    { args: [[0]], expected: [[], [0]] },
    { args: [[1]], expected: [[], [1]] },
    { args: [[1, 2]], expected: [[], [1], [2], [1, 2]] },
  ],

  hiddenTests: [
    { args: [[-1, 1]], expected: [[], [-1], [1], [-1, 1]] },
    { args: [[1, 2, 3, 4]], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]] },
    { args: [[5, 10]], expected: [[], [5], [10], [5, 10]] },
    { args: [[-5, -3, -1]], expected: [[], [-5], [-3], [-5, -3], [-1], [-5, -1], [-3, -1], [-5, -3, -1]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a subset of an array?",
      "Do you need to preserve order within each subset?",
      "How many subsets should there be for an array of length n?",
      "Try the first example and list all subsets by hand.",
      "Each element can either be included or excluded.",
    ],
    example: [
      "For [1,2,3], start with an empty subset [].",
      "For 1, you can include it or not.",
      "For 2, again include or not, independently.",
      "For 3, again include or not.",
      "This gives 2^3 = 8 subsets.",
    ],
    simpleApproach: [
      "One method uses recursion with backtracking.",
      "At each index, make two choices: include nums[index] or skip it.",
      "Recurse to the next index for both choices.",
      "When you reach the end, add the current subset to the result.",
      "This explores all 2^n possibilities.",
    ],
    repeatedWork: [
      "Each recursive call handles a smaller suffix of the array.",
      "You build subsets incrementally.",
      "You backtrack by removing the last added element before trying the next choice.",
      "No subset is generated twice if implemented correctly.",
      "The total number of subsets is 2^n.",
    ],
    pattern: [
      "This is a standard backtracking pattern.",
      "State includes: current index and current subset.",
      "Base case: index == nums.length, add current subset to result.",
      "Recursive case: include nums[index], recurse; then exclude, recurse.",
      "Backtrack by undoing the include step.",
    ],
    dataStructure: [
      "Use an array or list to store the current subset.",
      "Use another array to collect all subsets.",
      "Pass the current index in the recursion.",
      "No map or set is needed.",
      "The main structure is the recursive function with backtracking.",
    ],
    algorithm: [
      "Create an empty result array.",
      "Define a recursive function backtrack(index, currentSubset).",
      "If index == nums.length, push a copy of currentSubset into result.",
      "Otherwise:",
      "  Include nums[index] in currentSubset, call backtrack(index + 1, currentSubset).",
      "  Remove the last element (backtrack), call backtrack(index + 1, currentSubset) without including.",
      "Return result.",
    ],
    pseudocode: [
      "result = []",
      "function backtrack(index, current):",
      "  if index == n:",
      "    result.push(copy of current)",
      "    return",
      "  // include nums[index]",
      "  current.push(nums[index])",
      "  backtrack(index + 1, current)",
      "  current.pop()",
      "  // exclude nums[index]",
      "  backtrack(index + 1, current)",
      "backtrack(0, [])",
      "return result",
    ],
    edgeCases: [
      "Test an array with one element.",
      "Test an array with two elements.",
      "Test with negative values.",
      "Ensure the empty subset is included.",
      "Ensure no duplicate subsets appear.",
    ],
    finalNudge: [
      "Remember to push a copy of currentSubset, not the reference.",
      "Pop after the include branch to backtrack correctly.",
      "Call backtrack for both include and exclude choices.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use backtracking. At each index, branch into two choices: include the element or skip it. When you reach the end of the array, add the current subset to the result. Backtrack by removing the last added element before exploring the exclude branch.",
  }),

  solutionLogic: {
    approach:
      "Use backtracking. At each index, branch into two choices: include the element or skip it. When you reach the end of the array, add the current subset to the result. Backtrack by removing the last added element before exploring the exclude branch.",

    steps: [
      "Create an empty result array.",
      "Define backtrack(index, currentSubset).",
      "If index == nums.length, add a copy of currentSubset to result.",
      "Include nums[index], recurse with index + 1.",
      "Backtrack by removing the last element.",
      "Recurse again without including nums[index].",
      "Return result after calling backtrack(0, []).",
    ],

    pseudocode: `result = []

function backtrack(index, current):
    if index == n:
        result.push(copy of current)
        return
    // include
    current.push(nums[index])
    backtrack(index + 1, current)
    current.pop()
    // exclude
    backtrack(index + 1, current)

backtrack(0, [])
return result`,

    timeComplexity: "O(2^n * n)",
    spaceComplexity: "O(n) for recursion stack and current subset",

    commonMistakes: [
      "Pushing the same array reference instead of a copy.",
      "Forgetting to pop after the include branch.",
      "Only including or only excluding elements.",
      "Not handling the base case correctly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const result = [];

  function backtrack(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    // Include nums[index]
    current.push(nums[index]);
    backtrack(index + 1, current);
    current.pop();

    // Exclude nums[index]
    backtrack(index + 1, current);
  }

  backtrack(0, []);
  return result;
}`,

    python: `def solve(nums):
    result = []

    def backtrack(index, current):
        if index == len(nums):
            result.append(current[:])
            return

        # Include nums[index]
        current.append(nums[index])
        backtrack(index + 1, current)
        current.pop()

        # Exclude nums[index]
        backtrack(index + 1, current)

    backtrack(0, [])
    return result`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[] nums) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q014 = {
  id: "heap-001",
  slug: "kth-largest-element",
  title: "Kth Largest Element in an Array",
  topic: "heaps",
  difficulty: "Medium",

  prompt:
    "Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.",

  constraints: [
    "1 <= k <= nums.length <= 100000",
    "-10^4 <= nums[i] <= 10^4",
  ],

  examples: [
    {
      input: "nums = [3, 2, 1, 5, 6, 4], k = 2",
      output: "5",
      explanation: "The sorted array is [1,2,3,4,5,6]; the 2nd largest is 5.",
    },
    {
      input: "nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4",
      output: "4",
      explanation: "The 4th largest element is 4.",
    },
  ],

  visibleTests: [
    { args: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
    { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2], 1], expected: 2 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 5], expected: 1 },
    { args: [[5, 4, 3, 2, 1], 1], expected: 5 },
    { args: [[-1, -2, -3, -4], 2], expected: -2 },
    { args: [[2, 1], 2], expected: 1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked for the kth largest or kth smallest?",
      "Do you need to sort the entire array?",
      "Try the first example and sort the array mentally.",
      "What is the position of the kth largest in sorted order?",
      "Can you avoid fully sorting the array?",
    ],
    example: [
      "For [3,2,1,5,6,4] and k=2, sorted is [1,2,3,4,5,6].",
      "The largest is 6, the 2nd largest is 5.",
      "You only need the element at position n - k in sorted order.",
      "But sorting takes O(n log n).",
      "A heap can help you do this more efficiently for large n.",
    ],
    simpleApproach: [
      "One method sorts the array and returns nums[n - k].",
      "This is simple but O(n log n).",
      "You can do better using a min-heap of size k.",
      "Keep only the k largest elements seen so far.",
      "The top of the min-heap will be the kth largest.",
    ],
    repeatedWork: [
      "As you scan the array, you maintain a small heap of size k.",
      "Each new element may or may not enter the heap.",
      "If the heap has fewer than k elements, push the new element.",
      "If it already has k elements, compare with the smallest (heap top).",
      "This keeps only the k largest elements.",
    ],
    pattern: [
      "This is a classic heap pattern for kth largest/smallest.",
      "Use a min-heap to keep the k largest elements.",
      "The smallest among them is at the top.",
      "After processing all elements, the top is the kth largest.",
      "Time complexity is O(n log k).",
    ],
    dataStructure: [
      "Use a min-heap (priority queue).",
      "In JavaScript, you may need to implement or import a heap.",
      "In Python, use heapq as a min-heap.",
      "The heap stores at most k elements.",
      "No other complex structure is needed.",
    ],
    algorithm: [
      "Create an empty min-heap.",
      "For each number x in nums:",
      "  If heap size < k, push x.",
      "  Else if x > heap.top, pop the top and push x.",
      "After processing all numbers, the heap top is the kth largest.",
    ],
    pseudocode: [
      "heap = empty min-heap",
      "for x in nums:",
      "  if heap.size < k:",
      "    heap.push(x)",
      "  else if x > heap.top:",
      "    heap.pop()",
      "    heap.push(x)",
      "return heap.top",
    ],
    edgeCases: [
      "Test k = 1 (largest element).",
      "Test k = n (smallest element).",
      "Test arrays with duplicate values.",
      "Test arrays with negative values.",
      "Ensure the heap never exceeds size k.",
    ],
    finalNudge: [
      "Use a min-heap, not a max-heap, for this approach.",
      "Only push when the heap is not full or when x is larger than the top.",
      "After the loop, return the top element.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Maintain a min-heap of size k. For each element, if the heap has fewer than k elements, push it. Otherwise, if the element is larger than the heap top, replace the top. At the end, the heap top is the kth largest element.",
  }),

  solutionLogic: {
    approach:
      "Maintain a min-heap of size k. For each element, if the heap has fewer than k elements, push it. Otherwise, if the element is larger than the heap top, replace the top. At the end, the heap top is the kth largest element.",

    steps: [
      "Create an empty min-heap.",
      "For each x in nums:",
      "  If heap size < k, push x.",
      "  Else if x > heap.top, pop and push x.",
      "After the loop, return heap.top.",
    ],

    pseudocode: `heap = empty min-heap

for x in nums:
    if heap.size < k:
        heap.push(x)
    else if x > heap.top:
        heap.pop()
        heap.push(x)

return heap.top`,

    timeComplexity: "O(n log k)",
    spaceComplexity: "O(k) for the heap",

    commonMistakes: [
      "Using a max-heap instead of a min-heap.",
      "Allowing the heap to grow beyond size k.",
      "Returning the wrong element (e.g., last pushed instead of top).",
      "Not handling duplicates correctly.",
    ],
  },

  referenceSolution: {
    javascript: `// Assumes a MinHeap class with push(), pop(), top(), size().
function solve(nums, k) {
  const heap = new MinHeap();

  for (const x of nums) {
    if (heap.size() < k) {
      heap.push(x);
    } else if (x > heap.top()) {
      heap.pop();
      heap.push(x);
    }
  }

  return heap.top();
}`,

    python: `import heapq

def solve(nums, k):
    heap = []

    for x in nums:
        if len(heap) < k:
            heapq.heappush(heap, x)
        elif x > heap[0]:
            heapq.heapreplace(heap, x)

    return heap[0]`,
  },

  starterCode: {
    javascript: `function solve(nums, k) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, k):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int k) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int k) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q015 = {
  id: "graph-001",
  slug: "number-of-islands",
  title: "Number of Islands",
  topic: "graphs",
  difficulty: "Medium",

  prompt:
    "Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.",

  constraints: [
    "1 <= rows, cols <= 300",
    "grid[i][j] is either '0' or '1'.",
  ],

  examples: [
    {
      input: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
      output: "3",
      explanation: "There are three islands.",
    },
    {
      input: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,
      output: "1",
      explanation: "All land cells are connected into one island.",
    },
  ],

  visibleTests: [
    {
      args: [[["1", "1", "0"], ["1", "0", "0"], ["0", "0", "1"]]],
      expected: 2,
    },
    {
      args: [[["1", "1"], ["1", "1"], ["0", "0"]]],
      expected: 1,
    },
    {
      args: [[["0", "0"], ["0", "0"]]],
      expected: 0,
    },
    {
      args: [[["1"]]],
      expected: 1,
    },
  ],

  hiddenTests: [
    {
      args: [[["1", "0", "1"], ["0", "1", "0"], ["1", "0", "1"]]],
      expected: 5,
    },
    {
      args: [[["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]],
      expected: 1,
    },
    {
      args: [[["1", "0", "0"], ["0", "1", "0"], ["0", "0", "1"]]],
      expected: 3,
    },
    {
      args: [[["1", "1"], ["0", "1"], ["1", "1"]]],
      expected: 1,
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What defines an island in this grid?",
      "Which directions count as adjacent: horizontal, vertical, diagonal?",
      "Try the first example and mark connected land cells.",
      "Each group of connected '1's forms one island.",
      "You need to count how many such groups exist.",
    ],
    example: [
      "In the first example, top-left '1's are connected.",
      "The single '1' in the middle is another island.",
      "The bottom-right '1' is a third island.",
      "Diagonal connections do not count.",
      "Only up, down, left, right connections matter.",
    ],
    simpleApproach: [
      "One method scans every cell in the grid.",
      "When it finds unvisited land ('1'), it starts a search.",
      "The search marks all connected land cells as visited.",
      "Each time you start a new search, you found a new island.",
      "Count how many times you start a search.",
    ],
    repeatedWork: [
      "Without marking visited cells, you would count the same island many times.",
      "By marking cells as visited, each cell is processed once.",
      "The search can be DFS or BFS.",
      "Both explore all connected land cells from a starting point.",
      "The total work is proportional to the number of cells.",
    ],
    pattern: [
      "This is a graph traversal pattern on a grid.",
      "Each land cell is a node; edges connect adjacent lands.",
      "Use DFS or BFS to explore one island completely.",
      "Iterate over all cells and start a new traversal for each unvisited land.",
      "Count the number of traversals started.",
    ],
    dataStructure: [
      "Use the grid itself to mark visited cells (e.g., change '1' to '0').",
      "Or use a separate visited 2D array.",
      "Use a stack for DFS or a queue for BFS.",
      "No other complex structure is needed.",
      "The main state is row, column, and visited status.",
    ],
    algorithm: [
      "Initialize count = 0.",
      "For each cell (r, c) in the grid:",
      "  If grid[r][c] is '1' and not visited:",
      "    Increment count.",
      "    Start DFS/BFS from (r, c) to mark all connected land.",
      "Return count.",
    ],
    pseudocode: [
      "count = 0",
      "for r from 0 to rows-1:",
      "  for c from 0 to cols-1:",
      "    if grid[r][c] == '1' and not visited:",
      "      count++",
      "      dfs(r, c)",
      "return count",
      "",
      "function dfs(r, c):",
      "  mark (r, c) as visited",
      "  for each neighbor (nr, nc) in [up, down, left, right]:",
      "    if (nr, nc) is valid and grid[nr][nc] == '1' and not visited:",
      "      dfs(nr, nc)",
    ],
    edgeCases: [
      "Test a grid with all water ('0').",
      "Test a grid with all land ('1').",
      "Test a grid with a single land cell.",
      "Test a grid where islands are separated by water.",
      "Ensure you do not go out of bounds when checking neighbors.",
    ],
    finalNudge: [
      "Make sure to mark cells as visited to avoid re-counting.",
      "Check all four directions: up, down, left, right.",
      "Only start a new traversal on unvisited land cells.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Iterate over every cell. When you find unvisited land, increment the island count and run DFS/BFS to mark all connected land cells as visited. The number of times you start a traversal is the number of islands.",
  }),

  solutionLogic: {
    approach:
      "Iterate over every cell. When you find unvisited land, increment the island count and run DFS/BFS to mark all connected land cells as visited. The number of times you start a traversal is the number of islands.",

    steps: [
      "Initialize count = 0.",
      "For each cell (r, c):",
      "  If it is unvisited land, increment count.",
      "  Run DFS/BFS to mark all connected land as visited.",
      "Return count.",
    ],

    pseudocode: `count = 0

for r in 0..rows-1:
    for c in 0..cols-1:
        if grid[r][c] == '1' and not visited:
            count++
            dfs(r, c)

return count

function dfs(r, c):
    mark (r, c) visited
    for each (nr, nc) in [(r-1,c),(r+1,c),(r,c-1),(r,c+1)]:
        if (nr, nc) is valid and grid[nr][nc] == '1' and not visited:
            dfs(nr, nc)`,

    timeComplexity: "O(rows * cols)",
    spaceComplexity: "O(rows * cols) in worst case for recursion/queue",

    commonMistakes: [
      "Counting the same island multiple times by not marking visited.",
      "Including diagonal connections as part of an island.",
      "Going out of bounds when checking neighbors.",
      "Forgetting to check if a cell is land before starting DFS/BFS.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (grid[r][c] !== '1') return;

    grid[r][c] = '0'; // mark as visited

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}`,

    python: `def solve(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols:
            return
        if grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)

    return count`,
  },

  starterCode: {
    javascript: `function solve(grid) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(grid):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(String[][] grid) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<vector<string>> grid) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q016 = {
  id: "dp-001",
  slug: "climbing-stairs",
  title: "Climbing Stairs",
  topic: "dynamic-programming",
  difficulty: "Easy",

  prompt:
    "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Return the number of distinct ways to reach the top.",

  constraints: [
    "1 <= n <= 45",
  ],

  examples: [
    {
      input: "n = 2",
      output: "2",
      explanation: "Either 1+1 or 2.",
    },
    {
      input: "n = 3",
      output: "3",
      explanation: "1+1+1, 1+2, or 2+1.",
    },
    {
      input: "n = 5",
      output: "8",
      explanation: "There are 8 distinct ways to reach step 5.",
    },
  ],

  visibleTests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
    { args: [5], expected: 8 },
    { args: [1], expected: 1 },
  ],

  hiddenTests: [
    { args: [4], expected: 5 },
    { args: [6], expected: 13 },
    { args: [10], expected: 89 },
    { args: [45], expected: 1836311903 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you counting the number of ways or the minimum steps?",
      "What moves are allowed at each step?",
      "Try small values of n (1, 2, 3) and list all ways by hand.",
      "Notice how the ways for n depend on smaller values.",
      "This problem has overlapping subproblems.",
    ],
    example: [
      "For n = 1, there is only 1 way: [1].",
      "For n = 2, there are 2 ways: [1+1], [2].",
      "For n = 3, you can come from step 2 (then +1) or step 1 (then +2).",
      "So ways(3) = ways(2) + ways(1) = 2 + 1 = 3.",
      "This suggests a recurrence relation.",
    ],
    simpleApproach: [
      "One method uses recursion: ways(n) = ways(n-1) + ways(n-2).",
      "Base cases: ways(1) = 1, ways(2) = 2.",
      "This directly matches the Fibonacci pattern.",
      "Plain recursion repeats work and is exponential.",
      "You can optimize using DP or iteration.",
    ],
    repeatedWork: [
      "In pure recursion, ways(n-1) and ways(n-2) recompute many subproblems.",
      "You can store previously computed values to avoid recomputation.",
      "This is the core idea of dynamic programming.",
      "You only need the previous two values to compute the next.",
      "This allows an O(n) iterative solution.",
    ],
    pattern: [
      "This is a 1D DP / Fibonacci pattern.",
      "State: number of ways to reach step i.",
      "Transition: dp[i] = dp[i-1] + dp[i-2].",
      "Base cases: dp[1] = 1, dp[2] = 2.",
      "You can reduce space to O(1) by keeping only two variables.",
    ],
    dataStructure: [
      "You can use an array dp of size n+1.",
      "Or just two variables for the last two results.",
      "No map or complex structure is needed.",
      "The input is a single integer n.",
      "The output is a single integer (number of ways).",
    ],
    algorithm: [
      "If n is 1, return 1.",
      "Initialize one = 1 (ways to reach step 1).",
      "Initialize two = 2 (ways to reach step 2).",
      "For i from 3 to n:",
      "  current = one + two",
      "  one = two",
      "  two = current",
      "Return two.",
    ],
    pseudocode: [
      "if n == 1: return 1",
      "one = 1",
      "two = 2",
      "for i from 3 to n:",
      "  current = one + two",
      "  one = two",
      "  two = current",
      "return two",
    ],
    edgeCases: [
      "Test n = 1.",
      "Test n = 2.",
      "Test small values like 3, 4, 5.",
      "Ensure you do not go out of bounds for small n.",
      "Check that the result fits in a 32-bit integer for n <= 45.",
    ],
    finalNudge: [
      "Use the recurrence ways(i) = ways(i-1) + ways(i-2).",
      "Start from the base cases and build up.",
      "You only need the last two values at any time.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: The number of ways to reach step n is the sum of ways to reach steps n-1 and n-2, because the last move can be 1 step or 2 steps. This is a Fibonacci-like recurrence that can be solved iteratively in O(n) time and O(1) space.",
  }),

  solutionLogic: {
    approach:
      "The number of ways to reach step n is the sum of ways to reach steps n-1 and n-2, because the last move can be 1 step or 2 steps. This is a Fibonacci-like recurrence that can be solved iteratively in O(n) time and O(1) space.",

    steps: [
      "If n == 1, return 1.",
      "Set one = 1 (ways to reach step 1).",
      "Set two = 2 (ways to reach step 2).",
      "For i from 3 to n:",
      "  current = one + two",
      "  one = two",
      "  two = current",
      "Return two.",
    ],

    pseudocode: `if n == 1:
    return 1

one = 1
two = 2

for i from 3 to n:
    current = one + two
    one = two
    two = current

return two`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Using the wrong base cases (e.g., dp[0] instead of dp[1]).",
      "Starting the loop from the wrong index.",
      "Using addition incorrectly (e.g., multiplying instead).",
      "Not handling n = 1 and n = 2 separately.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(n) {
  if (n === 1) return 1;

  let one = 1; // ways to reach step 1
  let two = 2; // ways to reach step 2

  for (let i = 3; i <= n; i++) {
    const current = one + two;
    one = two;
    two = current;
  }

  return two;
}`,

    python: `def solve(n):
    if n == 1:
        return 1

    one = 1  # ways to reach step 1
    two = 2  # ways to reach step 2

    for i in range(3, n + 1):
        current = one + two
        one = two
        two = current

    return two`,
  },

  starterCode: {
    javascript: `function solve(n) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(n):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int n) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(int n) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q017 = {
  id: "greedy-001",
  slug: "max-non-overlapping-intervals",
  title: "Maximum Number of Non-Overlapping Intervals",
  topic: "greedy",
  difficulty: "Medium",

  prompt:
    "Given an array of intervals where intervals[i] = [start, end], return the maximum number of non-overlapping intervals you can select. Intervals [a, b] and [b, c] are considered non-overlapping.",

  constraints: [
    "1 <= intervals.length <= 100000",
    "-10^4 <= start < end <= 10^4",
  ],

  examples: [
    {
      input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
      output: "3",
      explanation: "Select [1,2], [2,3], [3,4].",
    },
    {
      input: "intervals = [[1,3],[2,4],[3,5]]",
      output: "2",
      explanation: "Select [1,3] and [3,5] (or [2,4] and one other).",
    },
  ],

  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4], [1, 3]]], expected: 3 },
    { args: [[[1, 3], [2, 4], [3, 5]]], expected: 2 },
    { args: [[[1, 2]]], expected: 1 },
    { args: [[[1, 5], [2, 3], [4, 6]]], expected: 2 },
  ],

  hiddenTests: [
    { args: [[[1, 2], [1, 3], [2, 4], [3, 5], [4, 6]]], expected: 3 },
    { args: [[[1, 10], [2, 3], [3, 4], [5, 6]]], expected: 3 },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5]]], expected: 4 },
    { args: [[[1, 5], [2, 6], [3, 7], [4, 8]]], expected: 1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you maximizing the number of intervals or minimizing something?",
      "What does 'non-overlapping' mean here?",
      "Are intervals that touch at endpoints allowed together?",
      "Try the first example and draw intervals on a line.",
      "You want to pick as many as possible without overlap.",
    ],
    example: [
      "For [[1,2],[2,3],[3,4],[1,3]], you can pick [1,2], [2,3], [3,4].",
      "These three do not overlap (they only touch at endpoints).",
      "If you pick [1,3], you cannot pick [1,2] or [2,3] fully.",
      "So picking shorter, earlier-ending intervals helps.",
      "This suggests a greedy strategy based on end times.",
    ],
    simpleApproach: [
      "One method tries all subsets of intervals and checks overlaps.",
      "That is exponential and too slow.",
      "A better approach sorts intervals by end time.",
      "Then it greedily picks intervals that end earliest.",
      "This leaves more room for later intervals.",
    ],
    repeatedWork: [
      "Once you sort by end time, you scan once from left to right.",
      "You keep track of the end of the last selected interval.",
      "For each new interval, if its start is >= lastEnd, you can pick it.",
      "Then update lastEnd to this interval's end.",
      "This is a single pass after sorting.",
    ],
    pattern: [
      "This is a classic greedy interval scheduling pattern.",
      "Sort by end time.",
      "Always pick the interval that ends earliest and does not overlap.",
      "This maximizes the number of intervals you can fit.",
      "Proof relies on exchange argument (standard in greedy).",
    ],
    dataStructure: [
      "Use the input array of intervals.",
      "Sort it by end time (and optionally by start time).",
      "Use a variable to track the end of the last chosen interval.",
      "No complex structure is needed.",
      "The main work is sorting and a linear scan.",
    ],
    algorithm: [
      "Sort intervals by end time ascending.",
      "Initialize count = 0, lastEnd = -infinity.",
      "For each interval [start, end] in sorted order:",
      "  If start >= lastEnd:",
      "    count++",
      "    lastEnd = end",
      "Return count.",
    ],
    pseudocode: [
      "sort intervals by end",
      "count = 0",
      "lastEnd = -infinity",
      "for [start, end] in intervals:",
      "  if start >= lastEnd:",
      "    count++",
      "    lastEnd = end",
      "return count",
    ],
    edgeCases: [
      "Test a single interval.",
      "Test intervals that all overlap heavily.",
      "Test intervals that are already non-overlapping.",
      "Test intervals with negative coordinates.",
      "Ensure touching at endpoints is allowed as non-overlapping.",
    ],
    finalNudge: [
      "Sort by end time, not start time.",
      "Use >= for comparison to allow touching endpoints.",
      "Update lastEnd only when you select an interval.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Sort intervals by end time. Greedily select the interval that ends earliest and does not overlap with the last selected one. This leaves maximum room for subsequent intervals and yields the optimal count.",
  }),

  solutionLogic: {
    approach:
      "Sort intervals by end time. Greedily select the interval that ends earliest and does not overlap with the last selected one. This leaves maximum room for subsequent intervals and yields the optimal count.",

    steps: [
      "Sort intervals by end ascending.",
      "Initialize count = 0, lastEnd = -infinity.",
      "For each [start, end] in sorted order:",
      "  If start >= lastEnd:",
      "    Increment count.",
      "    Set lastEnd = end.",
      "Return count.",
    ],

    pseudocode: `sort intervals by end

count = 0
lastEnd = -infinity

for [start, end] in intervals:
    if start >= lastEnd:
        count++
        lastEnd = end

return count`,

    timeComplexity: "O(n log n) due to sorting",
    spaceComplexity: "O(1) extra space (ignoring sort overhead)",

    commonMistakes: [
      "Sorting by start time instead of end time.",
      "Using > instead of >= and disallowing touching endpoints.",
      "Updating lastEnd even when not selecting an interval.",
      "Not handling negative coordinates correctly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastEnd = -Infinity;

  for (const [start, end] of intervals) {
    if (start >= lastEnd) {
      count++;
      lastEnd = end;
    }
  }

  return count;
}`,

    python: `def solve(intervals):
    if not intervals:
        return 0

    intervals.sort(key=lambda x: x[1])

    count = 0
    last_end = float('-inf')

    for start, end in intervals:
        if start >= last_end:
            count += 1
            last_end = end

    return count`,
  },

  starterCode: {
    javascript: `function solve(intervals) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(intervals):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[][] intervals) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<vector<int>> intervals) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q018 = {
  id: "bit-001",
  slug: "single-number-xor",
  title: "Single Number (XOR)",
  topic: "bit-manipulation",
  difficulty: "Easy",

  prompt:
    "Given a non-empty array of integers where every element appears twice except for one element that appears only once, return that single element. Solve it in O(n) time and O(1) extra space.",

  constraints: [
    "1 <= nums.length <= 30000",
    "-30000 <= nums[i] <= 30000",
  ],

  examples: [
    {
      input: "nums = [2, 2, 1]",
      output: "1",
      explanation: "1 appears once, 2 appears twice.",
    },
    {
      input: "nums = [4, 1, 2, 1, 2]",
      output: "4",
      explanation: "4 appears once; others appear twice.",
    },
    {
      input: "nums = [1]",
      output: "1",
      explanation: "Only one element, so it is the single number.",
    },
  ],

  visibleTests: [
    { args: [[2, 2, 1]], expected: 1 },
    { args: [[4, 1, 2, 1, 2]], expected: 4 },
    { args: [[1]], expected: 1 },
    { args: [[-1, -1, -5]], expected: -5 },
  ],

  hiddenTests: [
    { args: [[3, 3, 7, 7, 5]], expected: 5 },
    { args: [[-3, -3, -7, -7, -5]], expected: -5 },
    { args: [[10, 20, 10, 30, 20]], expected: 30 },
    { args: [[0, 0, 1, 1, 2]], expected: 2 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is special about the element you need to find?",
      "How many times do the other elements appear?",
      "Try the first example and pair up equal numbers.",
      "Is there an operation that cancels out equal pairs?",
      "You need O(n) time and O(1) extra space.",
    ],
    example: [
      "For [2,2,1], 2 appears twice, 1 appears once.",
      "If you XOR all numbers: 2 ^ 2 ^ 1 = 0 ^ 1 = 1.",
      "XOR of a number with itself is 0.",
      "XOR of a number with 0 is the number itself.",
      "This suggests using XOR over the whole array.",
    ],
    simpleApproach: [
      "One method uses a hash map to count frequencies.",
      "Then you find the element with count 1.",
      "This is O(n) time but O(n) space.",
      "The problem asks for O(1) extra space.",
      "Bitwise XOR can achieve this.",
    ],
    repeatedWork: [
      "XOR is associative and commutative.",
      "Order does not matter: a ^ b ^ c = c ^ b ^ a.",
      "Pairs cancel out: x ^ x = 0.",
      "So all duplicates cancel, leaving only the unique number.",
      "You only need one pass and one variable.",
    ],
    pattern: [
      "This is a classic XOR pattern for 'single number' problems.",
      "XOR all elements together.",
      "Duplicates cancel out.",
      "The result is the element that appears once.",
      "No extra data structure is needed.",
    ],
    dataStructure: [
      "Use a single integer variable to store the running XOR.",
      "No arrays, maps, or sets are needed.",
      "The input is an integer array.",
      "The output is a single integer.",
      "Space complexity is O(1).",
    ],
    algorithm: [
      "Initialize result = 0.",
      "For each num in nums:",
      "  result = result ^ num",
      "Return result.",
    ],
    pseudocode: [
      "result = 0",
      "for num in nums:",
      "  result = result XOR num",
      "return result",
    ],
    edgeCases: [
      "Test an array with only one element.",
      "Test arrays with negative numbers.",
      "Test arrays where the single number is at the beginning or end.",
      "Ensure you XOR all elements, including the first.",
      "Check that you initialize result correctly.",
    ],
    finalNudge: [
      "Initialize result to 0, not to the first element (though both work with XOR).",
      "XOR every element exactly once.",
      "Return the final result after the loop.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: XOR all elements together. Since x ^ x = 0 and x ^ 0 = x, all duplicate elements cancel out, leaving only the element that appears once.",
  }),

  solutionLogic: {
    approach:
      "XOR all elements together. Since x ^ x = 0 and x ^ 0 = x, all duplicate elements cancel out, leaving only the element that appears once.",

    steps: [
      "Initialize result = 0.",
      "For each num in nums:",
      "  result = result ^ num",
      "Return result.",
    ],

    pseudocode: `result = 0

for num in nums:
    result = result XOR num

return result`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Using addition or subtraction instead of XOR.",
      "Skipping the first element in the loop.",
      "Using a map or set and violating the O(1) space requirement.",
      "Misunderstanding XOR properties.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}`,

    python: `def solve(nums):
    result = 0
    for num in nums:
        result ^= num
    return result`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q019 = {
  id: "trie-001",
  slug: "implement-trie-prefix-search",
  title: "Implement Trie (Prefix Search)",
  topic: "tries",
  difficulty: "Medium",

  prompt:
    "Implement a Trie (prefix tree) with the following operations:\n- insert(word): inserts a word into the trie.\n- search(word): returns true if the word is in the trie.\n- startsWith(prefix): returns true if there is any word in the trie that starts with the given prefix.\n\nThen, given a list of words and a prefix, return all words that start with that prefix.",

  constraints: [
    "1 <= words.length <= 1000",
    "1 <= words[i].length <= 20",
    "All words consist of lowercase English letters.",
    "1 <= prefix.length <= 20",
  ],

  examples: [
    {
      input: "words = ['apple', 'app', 'apricot', 'bat'], prefix = 'app'",
      output: "['apple', 'app']",
      explanation: "Both 'apple' and 'app' start with 'app'.",
    },
    {
      input: "words = ['cat', 'car', 'card', 'dog'], prefix = 'ca'",
      output: "['cat', 'car', 'card']",
      explanation: "All these words start with 'ca'.",
    },
  ],

  visibleTests: [
    { args: [["apple", "app", "apricot", "bat"], "app"], expected: ["apple", "app"] },
    { args: [["cat", "car", "card", "dog"], "ca"], expected: ["cat", "car", "card"] },
    { args: [["test", "testing", "tester"], "test"], expected: ["test", "testing", "tester"] },
    { args: [["hello", "world"], "he"], expected: ["hello"] },
  ],

  hiddenTests: [
    { args: [["a", "ab", "abc", "abcd"], "ab"], expected: ["ab", "abc", "abcd"] },
    { args: [["tree", "trie", "trip", "trap"], "tr"], expected: ["tree", "trie", "trip", "trap"] },
    { args: [["no", "match"], "xyz"], expected: [] },
    { args: [["same", "same", "same"], "sa"], expected: ["same", "same", "same"] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a trie and what is it useful for?",
      "How does a trie store words?",
      "What does 'starts with a prefix' mean?",
      "Try inserting a few words and tracing the trie structure.",
      "You need to return all words that share the given prefix.",
    ],
    example: [
      "For ['apple','app','apricot','bat'] and prefix 'app':",
      "Insert all words into the trie character by character.",
      "Follow the path for 'a' -> 'p' -> 'p'.",
      "From that node, collect all complete words below it.",
      "These are 'app' and 'apple'.",
    ],
    simpleApproach: [
      "One method scans the list of words and checks each with startsWith.",
      "This is O(n * L) where L is word length.",
      "A trie allows faster prefix-based queries.",
      "You first build the trie from all words.",
      "Then you traverse to the prefix node and collect words.",
    ],
    repeatedWork: [
      "Many words share common prefixes.",
      "A trie stores shared prefixes only once.",
      "Each node represents a character.",
      "Paths from root to nodes represent prefixes.",
      "Mark nodes that end a complete word.",
    ],
    pattern: [
      "This is a standard trie pattern for prefix queries.",
      "Insert each word by following/creating nodes for each character.",
      "To search a prefix, follow its characters in the trie.",
      "If the prefix path exists, DFS from that node to collect words.",
      "This is efficient when there are many words and queries.",
    ],
    dataStructure: [
      "Use a trie node structure with children (map or array) and a boolean isEnd.",
      "Root is an empty node.",
      "Each edge/child corresponds to a character.",
      "Mark nodes where a word ends.",
      "From the prefix node, perform DFS to gather all words.",
    ],
    algorithm: [
      "Define a TrieNode with children map and isEnd flag.",
      "Insert each word: for each char, move/create child node.",
      "Mark the final node's isEnd = true.",
      "To find words with a prefix:",
      "  Traverse the trie following prefix characters.",
      "  If you cannot follow, return empty list.",
      "  From the prefix node, DFS to collect all complete words.",
    ],
    pseudocode: [
      "class TrieNode:",
      "  children = map<char, TrieNode>",
      "  isEnd = false",
      "",
      "insert(word):",
      "  node = root",
      "  for ch in word:",
      "    if ch not in node.children:",
      "      node.children[ch] = new TrieNode()",
      "    node = node.children[ch]",
      "  node.isEnd = true",
      "",
      "startsWithNode(prefix):",
      "  node = root",
      "  for ch in prefix:",
      "    if ch not in node.children: return null",
      "    node = node.children[ch]",
      "  return node",
      "",
      "collectWords(node, currentWord, result):",
      "  if node.isEnd: result.push(currentWord)",
      "  for (ch, child) in node.children:",
      "    collectWords(child, currentWord + ch, result)",
    ],
    edgeCases: [
      "Test when no word matches the prefix.",
      "Test when all words match the prefix.",
      "Test with a prefix longer than any word.",
      "Test with duplicate words in the list.",
      "Ensure you handle empty prefix if allowed.",
    ],
    finalNudge: [
      "First traverse to the node representing the prefix.",
      "Then run DFS from that node to collect all words.",
      "Build the word string as you traverse down.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Build a trie from all words. Traverse to the node corresponding to the prefix. From that node, perform DFS to collect all complete words in its subtree. These are exactly the words that start with the given prefix.",
  }),

  solutionLogic: {
    approach:
      "Build a trie from all words. Traverse to the node corresponding to the prefix. From that node, perform DFS to collect all complete words in its subtree. These are exactly the words that start with the given prefix.",

    steps: [
      "Define a TrieNode with children and isEnd.",
      "Insert each word into the trie.",
      "Traverse the trie using the prefix characters.",
      "If the prefix path does not exist, return empty list.",
      "From the prefix node, DFS to collect all words.",
      "Return the collected list.",
    ],

    pseudocode: `class TrieNode:
    children = {}
    isEnd = false

root = new TrieNode()

function insert(word):
    node = root
    for ch in word:
        if ch not in node.children:
            node.children[ch] = new TrieNode()
        node = node.children[ch]
    node.isEnd = true

function collectWords(node, current, result):
    if node.isEnd:
        result.push(current)
    for (ch, child) in node.children:
        collectWords(child, current + ch, result)

function wordsWithPrefix(words, prefix):
    for word in words:
        insert(word)

    node = root
    for ch in prefix:
        if ch not in node.children:
            return []
        node = node.children[ch]

    result = []
    collectWords(node, prefix, result)
    return result`,

    timeComplexity: "O(total characters in words) to build, O(L + K) to query, where L is prefix length and K is total characters in matching words",
    spaceComplexity: "O(total characters in words) for the trie",

    commonMistakes: [
      "Not marking isEnd correctly for complete words.",
      "Collecting words from the root instead of the prefix node.",
      "Forgetting to handle the case where prefix path does not exist.",
      "Building the current word incorrectly during DFS.",
    ],
  },

  referenceSolution: {
    javascript: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

function solve(words, prefix) {
  const root = new TrieNode();

  function insert(word) {
    let node = root;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  for (const word of words) {
    insert(word);
  }

  let node = root;
  for (const ch of prefix) {
    if (!node.children[ch]) {
      return [];
    }
    node = node.children[ch];
  }

  const result = [];

  function collect(currentNode, currentWord) {
    if (currentNode.isEnd) {
      result.push(currentWord);
    }
    for (const [ch, child] of Object.entries(currentNode.children)) {
      collect(child, currentWord + ch);
    }
  }

  collect(node, prefix);
  return result;
}`,

    python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

def solve(words, prefix):
    root = TrieNode()

    def insert(word):
        node = root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    for word in words:
        insert(word)

    node = root
    for ch in prefix:
        if ch not in node.children:
            return []
        node = node.children[ch]

    result = []

    def collect(current_node, current_word):
        if current_node.is_end:
            result.append(current_word)
        for ch, child in current_node.children.items():
            collect(child, current_word + ch)

    collect(node, prefix)
    return result`,
  },

  starterCode: {
    javascript: `function solve(words, prefix) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(words, prefix):
    # Write your Python solution here.
    pass`,
    java: `public static String[] solve(String[] words, String prefix) {
  // Write your Java solution here.
  return new String[]{};
}`,
    cpp: `vector<string> solve(vector<string> words, string prefix) {
  // Write your C++ solution here.
  return vector<string>{};
}`,
  },
};


const Q020 = {
  id: "math-001",
  slug: "greatest-common-divisor",
  title: "Greatest Common Divisor (GCD)",
  topic: "math",
  difficulty: "Easy",

  prompt:
    "Given two non-negative integers a and b, return their greatest common divisor (GCD).",

  constraints: [
    "0 <= a, b <= 10^9",
    "At least one of a or b is non-zero.",
  ],

  examples: [
    {
      input: "a = 12, b = 18",
      output: "6",
      explanation: "Common divisors are 1, 2, 3, 6; greatest is 6.",
    },
    {
      input: "a = 8, b = 0",
      output: "8",
      explanation: "GCD(a, 0) = a.",
    },
    {
      input: "a = 7, b = 13",
      output: "1",
      explanation: "7 and 13 are prime to each other.",
    },
  ],

  visibleTests: [
    { args: [12, 18], expected: 6 },
    { args: [8, 0], expected: 8 },
    { args: [7, 13], expected: 1 },
    { args: [0, 5], expected: 5 },
  ],

  hiddenTests: [
    { args: [54, 24], expected: 6 },
    { args: [100, 25], expected: 25 },
    { args: [17, 19], expected: 1 },
    { args: [0, 1], expected: 1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the greatest common divisor of two numbers?",
      "What are common divisors?",
      "Try small examples like (12, 18) and list divisors.",
      "Is there a faster way than checking all numbers up to min(a,b)?",
      "There is a well-known algorithm for GCD.",
    ],
    example: [
      "For (12, 18), divisors of 12: 1,2,3,4,6,12.",
      "Divisors of 18: 1,2,3,6,9,18.",
      "Common divisors: 1,2,3,6.",
      "Greatest is 6.",
      "But listing all divisors is slow for large numbers.",
    ],
    simpleApproach: [
      "One method checks all numbers from min(a,b) down to 1.",
      "The first that divides both is the GCD.",
      "This is O(min(a,b)) and too slow for 10^9.",
      "A better method uses the Euclidean algorithm.",
      "It repeatedly replaces (a, b) with (b, a % b).",
    ],
    repeatedWork: [
      "GCD(a, b) = GCD(b, a % b).",
      "This reduces the numbers quickly.",
      "When b becomes 0, a is the GCD.",
      "Each step reduces the magnitude significantly.",
      "The number of steps is logarithmic.",
    ],
    pattern: [
      "This is the Euclidean algorithm pattern.",
      "While b != 0: set (a, b) = (b, a % b).",
      "When b == 0, return a.",
      "This works for all non-negative integers.",
      "Time complexity is O(log(min(a,b))).",
    ],
    dataStructure: [
      "No data structure is needed.",
      "Just two integer variables a and b.",
      "Use a temporary variable or destructuring for swap.",
      "The input is two integers.",
      "The output is one integer.",
    ],
    algorithm: [
      "While b is not 0:",
      "  Set temp = b",
      "  b = a % b",
      "  a = temp",
      "Return a.",
    ],
    pseudocode: [
      "while b != 0:",
      "  temp = b",
      "  b = a % b",
      "  a = temp",
      "return a",
    ],
    edgeCases: [
      "Test when one number is 0.",
      "Test when both numbers are equal.",
      "Test when one number is 1.",
      "Test with large prime numbers.",
      "Ensure you handle (a, 0) and (0, b) correctly.",
    ],
    finalNudge: [
      "Use the condition while b != 0.",
      "Update a and b correctly using modulo.",
      "Return a when the loop ends.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use the Euclidean algorithm. Repeatedly replace (a, b) with (b, a % b) until b becomes 0. At that point, a is the greatest common divisor.",
  }),

  solutionLogic: {
    approach:
      "Use the Euclidean algorithm. Repeatedly replace (a, b) with (b, a % b) until b becomes 0. At that point, a is the greatest common divisor.",

    steps: [
      "While b is not 0:",
      "  Set temp = b",
      "  b = a % b",
      "  a = temp",
      "Return a.",
    ],

    pseudocode: `while b != 0:
    temp = b
    b = a % b
    a = temp

return a`,

    timeComplexity: "O(log(min(a, b)))",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Using subtraction instead of modulo.",
      "Swapping a and b incorrectly.",
      "Not handling the case when one number is 0.",
      "Using the wrong loop condition.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}`,

    python: `def solve(a, b):
    while b != 0:
        a, b = b, a % b
    return a`,
  },

  starterCode: {
    javascript: `function solve(a, b) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(a, b):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int a, int b) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(int a, int b) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q021 = {
  id: "arr-004",
  slug: "product-of-array-except-self",
  title: "Product of Array Except Self",
  topic: "arrays",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Solve it without division and in O(n) time.",

  constraints: [
    "2 <= nums.length <= 100000",
    "-30 <= nums[i] <= 30",
    "The product of any prefix or suffix fits in a 32-bit integer.",
  ],

  examples: [
    {
      input: "nums = [1, 2, 3, 4]",
      output: "[24, 12, 8, 6]",
      explanation:
        "For index 0: 2*3*4 = 24, index 1: 1*3*4 = 12, index 2: 1*2*4 = 8, index 3: 1*2*3 = 6.",
    },
    {
      input: "nums = [-1, 1, 0, -3, 3]",
      output: "[0, 0, 9, 0, 0]",
      explanation:
        "Because of the zero, most products become 0; only index 2 has non-zero product.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
    { args: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
    { args: [[2, 3]], expected: [3, 2] },
    { args: [[1, 1]], expected: [1, 1] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3]], expected: [6, 3, 2] },
    { args: [[-1, -2, -3]], expected: [6, 3, 2] },
    { args: [[0, 1, 2, 3]], expected: [6, 0, 0, 0] },
    { args: [[1, 0, 1]], expected: [0, 1, 0] },
  ],

  hints: createProgressiveHints({
    understand: [
      "For each index i, what product do you need?",
      "Are you allowed to use division?",
      "Try the first example and write the products for each index.",
      "Notice that each answer is product of elements to the left and right.",
      "You need an O(n) solution without division.",
    ],
    example: [
      "For [1,2,3,4] and index 2 (value 3):",
      "Left product = 1*2 = 2.",
      "Right product = 4.",
      "Answer = 2 * 4 = 8.",
      "Do this for every index without re-multiplying everything.",
    ],
    simpleApproach: [
      "One method computes left product and right product for each index.",
      "Left product for i is product of nums[0..i-1].",
      "Right product for i is product of nums[i+1..n-1].",
      "Multiply them to get answer[i].",
      "Do this in two passes to stay O(n).",
    ],
    repeatedWork: [
      "You do not need to recompute full products for each index.",
      "You can build prefix products from the left.",
      "And suffix products from the right.",
      "Each pass uses the result of the previous step.",
      "This avoids nested loops.",
    ],
    pattern: [
      "This is a prefix-suffix product pattern.",
      "First pass: store left products in answer array.",
      "Second pass: multiply by right products on the fly.",
      "No division is used.",
      "Time is O(n), extra space O(1) beyond output.",
    ],
    dataStructure: [
      "Use the output array to store left products.",
      "Use a single variable for the running right product.",
      "No extra arrays are strictly needed.",
      "Input is an integer array.",
      "Output is an integer array of same length.",
    ],
    algorithm: [
      "Create answer array of same length as nums.",
      "Set answer[0] = 1.",
      "For i from 1 to n-1:",
      "  answer[i] = answer[i-1] * nums[i-1]  (left product)",
      "Set rightProduct = 1.",
      "For i from n-1 down to 0:",
      "  answer[i] = answer[i] * rightProduct",
      "  rightProduct = rightProduct * nums[i]",
    ],
    pseudocode: [
      "n = nums.length",
      "answer = new array of size n",
      "answer[0] = 1",
      "for i from 1 to n-1:",
      "  answer[i] = answer[i-1] * nums[i-1]",
      "rightProduct = 1",
      "for i from n-1 down to 0:",
      "  answer[i] = answer[i] * rightProduct",
      "  rightProduct = rightProduct * nums[i]",
      "return answer",
    ],
    edgeCases: [
      "Test arrays containing zeros.",
      "Test arrays with negative numbers.",
      "Test small arrays of length 2.",
      "Ensure you do not use division.",
      "Check that products fit in 32-bit as per constraints.",
    ],
    finalNudge: [
      "First fill answer with left products.",
      "Then multiply by right products in a reverse pass.",
      "Maintain rightProduct as you go from right to left.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: For each index, the answer is the product of all elements to its left times the product of all elements to its right. Compute left products in one pass and store them in the answer array. Then compute right products on the fly in a reverse pass and multiply them into the answer.",
  }),

  solutionLogic: {
    approach:
      "For each index, the answer is the product of all elements to its left times the product of all elements to its right. Compute left products in one pass and store them in the answer array. Then compute right products on the fly in a reverse pass and multiply them into the answer.",

    steps: [
      "Create answer array of length n.",
      "Set answer[0] = 1.",
      "For i from 1 to n-1: answer[i] = answer[i-1] * nums[i-1].",
      "Initialize rightProduct = 1.",
      "For i from n-1 down to 0:",
      "  answer[i] = answer[i] * rightProduct",
      "  rightProduct = rightProduct * nums[i]",
      "Return answer.",
    ],

    pseudocode: `n = nums.length
answer = new array of size n
answer[0] = 1

for i from 1 to n-1:
    answer[i] = answer[i-1] * nums[i-1]

rightProduct = 1

for i from n-1 down to 0:
    answer[i] = answer[i] * rightProduct
    rightProduct = rightProduct * nums[i]

return answer`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1) extra space beyond output array",

    commonMistakes: [
      "Trying to use division (not allowed here).",
      "Mixing up the order of passes.",
      "Forgetting to initialize answer[0] or rightProduct.",
      "Using extra arrays unnecessarily.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Left products
  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Right products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
}`,

    python: `def solve(nums):
    n = len(nums)
    answer = [1] * n

    # Left products
    for i in range(1, n):
        answer[i] = answer[i - 1] * nums[i - 1]

    # Right products
    right_product = 1
    for i in range(n - 1, -1, -1):
        answer[i] = answer[i] * right_product
        right_product *= nums[i]

    return answer`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q022 = {
  id: "str-002",
  slug: "longest-common-prefix",
  title: "Longest Common Prefix",
  topic: "strings",
  difficulty: "Medium",

  prompt:
    "Given an array of strings strs, return the longest common prefix among all of them. If there is no common prefix, return an empty string.",

  constraints: [
    "1 <= strs.length <= 200",
    "0 <= strs[i].length <= 200",
    "strs[i] consists of lowercase English letters.",
  ],

  examples: [
    {
      input: 'strs = ["flower","flow","flight"]',
      output: '"fl"',
      explanation: "The longest common prefix is 'fl'.",
    },
    {
      input: 'strs = ["dog","racecar","car"]',
      output: '""',
      explanation: "There is no common prefix among the strings.",
    },
  ],

  visibleTests: [
    { args: [["flower", "flow", "flight"]], expected: "fl" },
    { args: [["dog", "racecar", "car"]], expected: "" },
    { args: [["abc"]], expected: "abc" },
    { args: [["ab", "abc", "abcd"]], expected: "ab" },
  ],

  hiddenTests: [
    { args: [["a", "ab", "abc", "abcd"]], expected: "a" },
    { args: [["abc", "abc", "abc"]], expected: "abc" },
    { args: [["abc", "def"]], expected: "" },
    { args: [["", "abc"]], expected: "" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a prefix of a string?",
      "What does 'common prefix' among multiple strings mean?",
      "Try the first example and compare characters column by column.",
      "Stop when you find a mismatch or reach the end of any string.",
      "You need the longest such prefix.",
    ],
    example: [
      "For ['flower','flow','flight']:",
      "Compare first characters: 'f','f','f' → match.",
      "Compare second characters: 'l','l','l' → match.",
      "Compare third: 'o','o','i' → mismatch.",
      "So longest common prefix is 'fl'.",
    ],
    simpleApproach: [
      "One method takes the first string as a reference.",
      "For each character position i, check if all strings have the same character at i.",
      "If yes, append it to the prefix.",
      "If no, stop and return the prefix built so far.",
      "This is straightforward and efficient enough.",
    ],
    repeatedWork: [
      "You compare the same position across all strings.",
      "As soon as one string ends or mismatches, you stop.",
      "You do not need to compare beyond the shortest string.",
      "Each character is checked at most once per string.",
      "Total work is proportional to total characters.",
    ],
    pattern: [
      "This is a vertical scanning pattern.",
      "Fix a column index and scan all rows.",
      "Alternatively, you can sort and compare first and last.",
      "Or you can iteratively shrink a candidate prefix.",
      "Vertical scan is simple and clear.",
    ],
    dataStructure: [
      "Use the input array of strings.",
      "No extra complex structure is needed.",
      "You may store the result in a string builder or array.",
      "Access characters by index.",
      "Check bounds carefully.",
    ],
    algorithm: [
      "If strs is empty, return ''.",
      "For i from 0 to length of first string - 1:",
      "  ch = strs[0][i]",
      "  For each other string s in strs:",
      "    If i >= s.length or s[i] != ch:",
      "      Return prefix built so far.",
      "  Append ch to prefix.",
      "Return prefix.",
    ],
    pseudocode: [
      "if strs is empty: return ''",
      "prefix = ''",
      "for i from 0 to strs[0].length - 1:",
      "  ch = strs[0][i]",
      "  for each s in strs:",
      "    if i >= s.length or s[i] != ch:",
      "      return prefix",
      "  prefix = prefix + ch",
      "return prefix",
    ],
    edgeCases: [
      "Test when there is only one string.",
      "Test when one string is empty.",
      "Test when all strings are identical.",
      "Test when there is no common prefix at all.",
      "Ensure you handle different lengths correctly.",
    ],
    finalNudge: [
      "Stop as soon as any string mismatches or ends.",
      "Build the prefix character by character.",
      "Return the prefix immediately on mismatch.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Scan vertically by character index. For each position, check if all strings have the same character. Stop at the first mismatch or when any string ends. The characters collected before stopping form the longest common prefix.",
  }),

  solutionLogic: {
    approach:
      "Scan vertically by character index. For each position, check if all strings have the same character. Stop at the first mismatch or when any string ends. The characters collected before stopping form the longest common prefix.",

    steps: [
      "If strs is empty, return ''.",
      "For each index i from 0 to strs[0].length - 1:",
      "  Let ch = strs[0][i].",
      "  For each string s in strs:",
      "    If i >= s.length or s[i] != ch, return current prefix.",
      "  Append ch to prefix.",
      "Return prefix after loop.",
    ],

    pseudocode: `if strs is empty:
    return ''

prefix = ''

for i from 0 to strs[0].length - 1:
    ch = strs[0][i]
    for each s in strs:
        if i >= s.length or s[i] != ch:
            return prefix
    prefix = prefix + ch

return prefix`,

    timeComplexity: "O(total number of characters in strs)",
    spaceComplexity: "O(1) extra space beyond output",

    commonMistakes: [
      "Not checking if i is within bounds for each string.",
      "Continuing after a mismatch instead of returning.",
      "Assuming all strings have the same length.",
      "Forgetting the empty array or empty string cases.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(strs) {
  if (!strs || strs.length === 0) return '';

  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    const ch = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return prefix;
      }
    }
    prefix += ch;
  }

  return prefix;
}`,

    python: `def solve(strs):
    if not strs:
        return ''

    prefix = []

    for i in range(len(strs[0])):
        ch = strs[0][i]
        for s in strs[1:]:
            if i >= len(s) or s[i] != ch:
                return ''.join(prefix)
        prefix.append(ch)

    return ''.join(prefix)`,
  },

  starterCode: {
    javascript: `function solve(strs) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(strs):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(String[] strs) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(vector<string> strs) {
  // Write your C++ solution here.
  return "";
}`,
  },
};


const Q023 = {
  id: "hash-002",
  slug: "group-anagrams",
  title: "Group Anagrams",
  topic: "hashing",
  difficulty: "Medium",

  prompt:
    "Given an array of strings strs, group the anagrams together. You may return the answer in any order. An anagram is a word formed by rearranging the letters of another word.",

  constraints: [
    "1 <= strs.length <= 10000",
    "0 <= strs[i].length <= 100",
    "strs[i] consists of lowercase English letters.",
  ],

  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      explanation:
        "'eat', 'tea', 'ate' are anagrams; 'tan', 'nat' are anagrams; 'bat' is alone.",
    },
    {
      input: 'strs = [""]',
      output: '[[""]]',
      explanation: "Only one empty string.",
    },
  ],

  visibleTests: [
    { args: [["eat", "tea", "tan", "ate", "nat", "bat"]], expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
    { args: [[""]], expected: [[""]] },
    { args: [["a"]], expected: [["a"]] },
    { args: [["ab", "ba", "cd"]], expected: [["ab", "ba"], ["cd"]] },
  ],

  hiddenTests: [
    { args: [["abc", "bca", "cab", "xyz"]], expected: [["abc", "bca", "cab"], ["xyz"]] },
    { args: [["aa", "aa", "aa"]], expected: [["aa", "aa", "aa"]] },
    { args: [["ab", "cd", "ef"]], expected: [["ab"], ["cd"], ["ef"]] },
    { args: [["listen", "silent", "enlist"]], expected: [["listen", "silent", "enlist"]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What makes two strings anagrams of each other?",
      "Do anagrams have the same characters with the same counts?",
      "Try the first example and group words that are anagrams.",
      "You need a way to identify words that belong to the same group.",
      "Think about a canonical representation for each group.",
    ],
    example: [
      "For 'eat', 'tea', 'ate': sorted characters are 'aet' for all.",
      "For 'tan', 'nat': sorted characters are 'ant'.",
      "For 'bat': sorted characters are 'abt'.",
      "Words with the same sorted form are anagrams.",
      "You can use this as a key in a map.",
    ],
    simpleApproach: [
      "One method sorts each string and uses the sorted string as a key.",
      "Store groups in a map: key → list of original strings.",
      "For each word, sort its characters to get the key.",
      "Append the word to the corresponding list.",
      "Finally, return all lists from the map.",
    ],
    repeatedWork: [
      "Sorting each string takes O(L log L) where L is length.",
      "You do this once per string.",
      "Grouping is done via a hash map.",
      "No need to compare every pair of strings.",
      "Total time is O(n * L log L).",
    ],
    pattern: [
      "This is a hashing-by-canonical-form pattern.",
      "Canonical form: sorted characters of the string.",
      "Alternative: character count signature.",
      "Map from canonical form to list of words.",
      "Collect all lists at the end.",
    ],
    dataStructure: [
      "Use a hash map (dictionary) from string to array of strings.",
      "Key is the sorted version of the word.",
      "Value is the list of words with that key.",
      "No other complex structure is needed.",
      "Input is an array of strings.",
    ],
    algorithm: [
      "Create an empty map groups.",
      "For each word in strs:",
      "  key = sort characters of word",
      "  If key not in groups, create empty list.",
      "  Append word to groups[key].",
      "Return all values of groups as an array.",
    ],
    pseudocode: [
      "groups = empty map",
      "for word in strs:",
      "  key = sorted(word)",
      "  if key not in groups:",
      "    groups[key] = []",
      "  groups[key].push(word)",
      "return values of groups as array",
    ],
    edgeCases: [
      "Test with an empty string.",
      "Test with all identical strings.",
      "Test with no anagrams at all.",
      "Test with single-character strings.",
      "Ensure order of groups does not matter.",
    ],
    finalNudge: [
      "Sort each string to get its key.",
      "Group words by this key in a map.",
      "Return all grouped lists.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a hash map where the key is the sorted version of each string. All anagrams share the same sorted key, so they end up in the same list. Finally, return all lists from the map.",
  }),

  solutionLogic: {
    approach:
      "Use a hash map where the key is the sorted version of each string. All anagrams share the same sorted key, so they end up in the same list. Finally, return all lists from the map.",

    steps: [
      "Create an empty map groups.",
      "For each word in strs:",
      "  Sort the characters of word to get key.",
      "  If key not in groups, initialize groups[key] = [].",
      "  Push word into groups[key].",
      "Return all values of groups as an array.",
    ],

    pseudocode: `groups = empty map

for word in strs:
    key = sorted(word)
    if key not in groups:
        groups[key] = []
    groups[key].push(word)

return list of groups.values()`,

    timeComplexity: "O(n * L log L) where n is number of strings and L is max length",
    spaceComplexity: "O(n * L) to store all strings in the map",

    commonMistakes: [
      "Not sorting the string before using as key.",
      "Using the original string as key instead of sorted form.",
      "Forgetting to initialize the list for a new key.",
      "Returning the map object instead of its values.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(strs) {
  const groups = new Map();

  for (const word of strs) {
    const key = word.split('').sort().join('');
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(word);
  }

  return Array.from(groups.values());
}`,

    python: `def solve(strs):
    groups = {}

    for word in strs:
        key = ''.join(sorted(word))
        if key not in groups:
            groups[key] = []
        groups[key].append(word)

    return list(groups.values())`,
  },

  starterCode: {
    javascript: `function solve(strs) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(strs):
    # Write your Python solution here.
    pass`,
    java: `public static String[][] solve(String[] strs) {
  // Write your Java solution here.
  return new String[][]{};
}`,
    cpp: `vector<vector<string>> solve(vector<string> strs) {
  // Write your C++ solution here.
  return vector<vector<string>>{};
}`,
  },
};


const Q024 = {
  id: "tp-002",
  slug: "3sum",
  title: "3Sum",
  topic: "two-pointers",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",

  constraints: [
    "0 <= nums.length <= 3000",
    "-10^5 <= nums[i] <= 10^5",
  ],

  examples: [
    {
      input: "nums = [-1,0,1,2,-1,-4]",
      output: "[[-1,-1,2],[-1,0,1]]",
      explanation: "These are the unique triplets that sum to 0.",
    },
    {
      input: "nums = [0,1,1]",
      output: "[]",
      explanation: "No triplet sums to 0.",
    },
  ],

  visibleTests: [
    { args: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[0, 0, 0]], expected: [[0, 0, 0]] },
    { args: [[-2, 0, 1, 1, 2]], expected: [[-2, 0, 2], [-2, 1, 1]] },
  ],

  hiddenTests: [
    { args: [[-1, 0, 1, 2, -1, -4, -1, 3]], expected: [[-1, -1, 2], [-1, 0, 1], [-1, -4, 5]] },
    { args: [[-4, -2, -1, 0, 1, 2, 3, 4]], expected: [[-4, 0, 4], [-4, 1, 3], [-2, -1, 3], [-2, 0, 2], [-1, 0, 1]] },
    { args: [[1, 2, -2, -1]], expected: [] },
    { args: [[0, 0, 0, 0]], expected: [[0, 0, 0]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What sum are you targeting for each triplet?",
      "Do you need unique triplets or all possible index combinations?",
      "Try the first example and list triplets that sum to 0.",
      "Notice that sorting can help avoid duplicates and simplify search.",
      "You need an efficient way to find triplets.",
    ],
    example: [
      "For [-1,0,1,2,-1,-4], sort to get [-4,-1,-1,0,1,2].",
      "Fix the first number, then find two others that sum to its negative.",
      "For -4, you need two numbers that sum to 4.",
      "Use two pointers to find such pairs in the remaining part.",
      "Skip duplicates to ensure unique triplets.",
    ],
    simpleApproach: [
      "One method uses three nested loops to check all triplets.",
      "That is O(n^3) and too slow for n up to 3000.",
      "A better approach sorts the array first.",
      "Then fixes one number and uses two pointers for the other two.",
      "This reduces complexity to O(n^2).",
    ],
    repeatedWork: [
      "After sorting, for each index i, you search for pairs in i+1..n-1.",
      "Use left = i+1, right = n-1.",
      "Compute sum = nums[i] + nums[left] + nums[right].",
      "Adjust left or right based on sum compared to 0.",
      "Skip duplicates for i, left, and right to avoid repeated triplets.",
    ],
    pattern: [
      "This is a sort + two-pointer pattern for 3Sum.",
      "Sort the array first.",
      "For each i, use two pointers to find pairs that sum to -nums[i].",
      "Move pointers based on whether sum is too small or too large.",
      "Carefully skip duplicates at each step.",
    ],
    dataStructure: [
      "Use the input array, sorted.",
      "Use indices i, left, right.",
      "Store results in an array of triplets.",
      "No extra complex structure is needed.",
      "Main work is sorting and two-pointer scan.",
    ],
    algorithm: [
      "Sort nums ascending.",
      "Initialize result = [].",
      "For i from 0 to n-1:",
      "  If i > 0 and nums[i] == nums[i-1], continue (skip duplicate).",
      "  Set left = i+1, right = n-1.",
      "  While left < right:",
      "    sum = nums[i] + nums[left] + nums[right]",
      "    If sum == 0:",
      "      Add [nums[i], nums[left], nums[right]] to result.",
      "      Move left and right, skipping duplicates.",
      "    Else if sum < 0: left++",
      "    Else: right--",
    ],
    pseudocode: [
      "sort nums",
      "result = []",
      "for i from 0 to n-1:",
      "  if i > 0 and nums[i] == nums[i-1]: continue",
      "  left = i+1, right = n-1",
      "  while left < right:",
      "    s = nums[i] + nums[left] + nums[right]",
      "    if s == 0:",
      "      result.push([nums[i], nums[left], nums[right]])",
      "      move left and right, skipping duplicates",
      "    else if s < 0:",
      "      left++",
      "    else:",
      "      right--",
      "return result",
    ],
    edgeCases: [
      "Test arrays with fewer than 3 elements.",
      "Test arrays with all zeros.",
      "Test arrays with no valid triplets.",
      "Test arrays with many duplicates.",
      "Ensure no duplicate triplets in the result.",
    ],
    finalNudge: [
      "Sort the array first.",
      "Skip duplicate values for i, left, and right.",
      "Use two pointers to find pairs that complete the triplet.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Sort the array. For each element nums[i], use two pointers to find pairs in the rest of the array that sum to -nums[i]. Skip duplicates at each step to ensure unique triplets. Collect all valid triplets.",
  }),

  solutionLogic: {
    approach:
      "Sort the array. For each element nums[i], use two pointers to find pairs in the rest of the array that sum to -nums[i]. Skip duplicates at each step to ensure unique triplets. Collect all valid triplets.",

    steps: [
      "Sort nums ascending.",
      "For each i from 0 to n-1:",
      "  If i > 0 and nums[i] == nums[i-1], skip.",
      "  Set left = i+1, right = n-1.",
      "  While left < right:",
      "    Compute sum = nums[i] + nums[left] + nums[right].",
      "    If sum == 0, add triplet and move both pointers skipping duplicates.",
      "    If sum < 0, move left forward.",
      "    If sum > 0, move right backward.",
      "Return result.",
    ],

    pseudocode: `sort nums
result = []

for i from 0 to n-1:
    if i > 0 and nums[i] == nums[i-1]:
        continue
    left = i + 1
    right = n - 1
    while left < right:
        s = nums[i] + nums[left] + nums[right]
        if s == 0:
            result.push([nums[i], nums[left], nums[right]])
            left++
            right--
            while left < right and nums[left] == nums[left-1]: left++
            while left < right and nums[right] == nums[right+1]: right--
        else if s < 0:
            left++
        else:
            right--

return result`,

    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1) extra space beyond output (ignoring sort)",

    commonMistakes: [
      "Not sorting the array before using two pointers.",
      "Including duplicate triplets by not skipping duplicates.",
      "Moving pointers incorrectly when sum != 0.",
      "Not handling arrays with fewer than 3 elements.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}`,

    python: `def solve(nums):
    nums.sort()
    n = len(nums)
    result = []

    for i in range(n):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, n - 1

        while left < right:
            s = nums[i] + nums[left] + nums[right]

            if s == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1

                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif s < 0:
                left += 1
            else:
                right -= 1

    return result`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[] nums) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q025 = {
  id: "ps-001",
  slug: "range-sum-query-immutable",
  title: "Range Sum Query (Immutable)",
  topic: "prefix-sums",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums, implement a function sumRange(left, right) that returns the sum of the elements between indices left and right inclusive (left <= right). The array does not change after initialization.",

  constraints: [
    "1 <= nums.length <= 10000",
    "-10^5 <= nums[i] <= 10^5",
    "0 <= left <= right < nums.length",
    "sumRange will be called at most 10000 times.",
  ],

  examples: [
    {
      input: "nums = [-2, 0, 3, -5, 2, -1], sumRange(0, 2)",
      output: "1",
      explanation: "Sum of nums[0..2] = -2 + 0 + 3 = 1.",
    },
    {
      input: "nums = [-2, 0, 3, -5, 2, -1], sumRange(2, 5)",
      output: "-1",
      explanation: "Sum of nums[2..5] = 3 + (-5) + 2 + (-1) = -1.",
    },
    {
      input: "nums = [-2, 0, 3, -5, 2, -1], sumRange(0, 5)",
      output: "-3",
      explanation: "Total sum = -2 + 0 + 3 - 5 + 2 - 1 = -3.",
    },
  ],

  visibleTests: [
    { args: [[-2, 0, 3, -5, 2, -1], 0, 2], expected: 1 },
    { args: [[-2, 0, 3, -5, 2, -1], 2, 5], expected: -1 },
    { args: [[-2, 0, 3, -5, 2, -1], 0, 5], expected: -3 },
    { args: [[1, 2, 3, 4], 1, 3], expected: 9 },
  ],

  hiddenTests: [
    { args: [[1, 1, 1, 1, 1], 0, 4], expected: 5 },
    { args: [[1, 1, 1, 1, 1], 2, 2], expected: 1 },
    { args: [[-1, -2, -3, -4], 1, 3], expected: -9 },
    { args: [[0, 0, 0, 0], 0, 3], expected: 0 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked to support updates or only range sums on a fixed array?",
      "What does sumRange(left, right) need to return?",
      "Try the first example and compute the sum by hand.",
      "If sumRange is called many times, can you afford O(n) per call?",
      "You need a faster way than summing the range each time.",
    ],
    example: [
      "For [-2,0,3,-5,2,-1], sum from 0 to 2 is -2+0+3 = 1.",
      "Sum from 2 to 5 is 3+(-5)+2+(-1) = -1.",
      "Notice these are differences of prefix sums.",
      "Prefix[i] = sum of nums[0..i].",
      "Sum[l..r] = Prefix[r] - Prefix[l-1] (with care for l=0).",
    ],
    simpleApproach: [
      "One method sums from left to right for each query.",
      "That is O(n) per query.",
      "With many queries, this becomes slow.",
      "You can precompute prefix sums once.",
      "Then answer each query in O(1).",
    ],
    repeatedWork: [
      "Many queries overlap in the ranges they sum.",
      "Prefix sums let you reuse earlier computations.",
      "Prefix[i] stores cumulative sum up to i.",
      "Sum[l..r] = Prefix[r] - Prefix[l-1].",
      "This avoids re-summing the same elements.",
    ],
    pattern: [
      "This is a classic prefix sum pattern.",
      "Precompute an array prefix where prefix[i] = sum(nums[0..i]).",
      "Optionally use prefixWithZero of length n+1 with prefixWithZero[0] = 0.",
      "Then sumRange(l, r) = prefixWithZero[r+1] - prefixWithZero[l].",
      "Each query becomes O(1).",
    ],
    dataStructure: [
      "Use an auxiliary prefix sum array.",
      "Either length n (prefix[i] = sum up to i) or n+1 with leading 0.",
      "No map or complex structure is needed.",
      "Input is an integer array.",
      "Query is two integers, output is one integer.",
    ],
    algorithm: [
      "On initialization:",
      "  Create prefix array of length n+1 with prefix[0] = 0.",
      "  For i from 0 to n-1:",
      "    prefix[i+1] = prefix[i] + nums[i].",
      "For sumRange(left, right):",
      "  Return prefix[right+1] - prefix[left].",
    ],
    pseudocode: [
      "// Initialization",
      "prefix = array of size n+1",
      "prefix[0] = 0",
      "for i from 0 to n-1:",
      "  prefix[i+1] = prefix[i] + nums[i]",
      "",
      "// Query",
      "function sumRange(left, right):",
      "  return prefix[right+1] - prefix[left]",
    ],
    edgeCases: [
      "Test when left == 0.",
      "Test when left == right (single element).",
      "Test when left == 0 and right == n-1 (full array).",
      "Test with negative numbers.",
      "Ensure indices are within bounds.",
    ],
    finalNudge: [
      "Use a prefix array with an extra leading zero.",
      "Compute prefix[i+1] = prefix[i] + nums[i].",
      "Answer queries as prefix[right+1] - prefix[left].",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Precompute a prefix sum array with an extra leading zero. prefix[i] stores the sum of the first i elements. Then any range sum [left, right] can be computed as prefix[right+1] - prefix[left] in O(1) time.",
  }),

  solutionLogic: {
    approach:
      "Precompute a prefix sum array with an extra leading zero. prefix[i] stores the sum of the first i elements. Then any range sum [left, right] can be computed as prefix[right+1] - prefix[left] in O(1) time.",

    steps: [
      "Create prefix array of length n+1, prefix[0] = 0.",
      "For i from 0 to n-1: prefix[i+1] = prefix[i] + nums[i].",
      "For sumRange(left, right):",
      "  Return prefix[right+1] - prefix[left].",
    ],

    pseudocode: `prefix = array of size n+1
prefix[0] = 0

for i from 0 to n-1:
    prefix[i+1] = prefix[i] + nums[i]

function sumRange(left, right):
    return prefix[right+1] - prefix[left]`,

    timeComplexity: "O(n) preprocessing, O(1) per query",
    spaceComplexity: "O(n) for the prefix array",

    commonMistakes: [
      "Using prefix[right] - prefix[left] instead of right+1.",
      "Forgetting the extra leading zero in prefix.",
      "Mixing up 0-based and 1-based indexing.",
      "Not handling left = 0 correctly.",
    ],
  },

  referenceSolution: {
    javascript: `class NumArray {
  constructor(nums) {
    const n = nums.length;
    this.prefix = new Array(n + 1);
    this.prefix[0] = 0;
    for (let i = 0; i < n; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }

  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

// Wrapper to match the expected function signature
function solve(nums, left, right) {
  const arr = new NumArray(nums);
  return arr.sumRange(left, right);
}`,

    python: `class NumArray:
    def __init__(self, nums):
        n = len(nums)
        self.prefix = [0] * (n + 1)
        for i in range(n):
            self.prefix[i + 1] = self.prefix[i] + nums[i]

    def sumRange(self, left, right):
        return self.prefix[right + 1] - self.prefix[left]

def solve(nums, left, right):
    arr = NumArray(nums)
    return arr.sumRange(left, right)`,
  },

  starterCode: {
    javascript: `function solve(nums, left, right) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, left, right):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int left, int right) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int left, int right) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q026 = {
  id: "sort-001",
  slug: "merge-intervals",
  title: "Merge Intervals",
  topic: "sorting",
  difficulty: "Medium",

  prompt:
    "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",

  constraints: [
    "1 <= intervals.length <= 10000",
    "0 <= start <= end <= 10000",
  ],

  examples: [
    {
      input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      output: "[[1,6],[8,10],[15,18]]",
      explanation: "[1,3] and [2,6] overlap and are merged into [1,6].",
    },
    {
      input: "intervals = [[1,4],[4,5]]",
      output: "[[1,5]]",
      explanation: "[1,4] and [4,5] are considered overlapping.",
    },
  ],

  visibleTests: [
    { args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
    { args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
    { args: [[[1, 2], [3, 4]]], expected: [[1, 2], [3, 4]] },
    { args: [[[1, 5]]], expected: [[1, 5]] },
  ],

  hiddenTests: [
    { args: [[[1, 4], [2, 3], [5, 7], [6, 8]]], expected: [[1, 4], [5, 8]] },
    { args: [[[1, 10], [2, 6], [8, 10], [15, 18]]], expected: [[1, 10], [15, 18]] },
    { args: [[[0, 1], [1, 2], [2, 3], [3, 4]]], expected: [[0, 4]] },
    { args: [[[1, 2], [2, 3], [3, 4], [5, 6]]], expected: [[1, 4], [5, 6]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for two intervals to overlap?",
      "When should two intervals be merged?",
      "Try the first example and draw intervals on a line.",
      "Notice that sorting by start time can simplify merging.",
      "You need to return non-overlapping intervals that cover all input.",
    ],
    example: [
      "For [[1,3],[2,6],[8,10],[15,18]]:",
      "Sort by start: already sorted.",
      "Start with [1,3]. Next is [2,6]; they overlap (2 <= 3).",
      "Merge into [1, max(3,6)] = [1,6].",
      "Next [8,10] does not overlap with [1,6], so start a new interval.",
    ],
    simpleApproach: [
      "One method sorts intervals by start time.",
      "Then iterates once, maintaining a current merged interval.",
      "If the next interval overlaps, merge it.",
      "Otherwise, push the current interval and start a new one.",
      "This is O(n log n) due to sorting.",
    ],
    repeatedWork: [
      "After sorting, you scan once from left to right.",
      "At each step, you compare current end with next start.",
      "If next.start <= current.end, they overlap.",
      "Update current.end = max(current.end, next.end).",
      "Otherwise, finalize current and move on.",
    ],
    pattern: [
      "This is a sort-then-merge pattern for intervals.",
      "Sort by start time.",
      "Maintain a running merged interval.",
      "Extend it while overlaps exist.",
      "Push to result when a gap appears.",
    ],
    dataStructure: [
      "Use the input array of intervals.",
      "Sort it in place or create a sorted copy.",
      "Use an output array for merged intervals.",
      "No complex structure is needed.",
      "Main work is sorting and linear scan.",
    ],
    algorithm: [
      "Sort intervals by start ascending.",
      "Initialize merged = [].",
      "For each interval [start, end] in sorted order:",
      "  If merged is empty or start > last.end:",
      "    Push [start, end] to merged.",
      "  Else:",
      "    last.end = max(last.end, end).",
      "Return merged.",
    ],
    pseudocode: [
      "sort intervals by start",
      "merged = []",
      "for [start, end] in intervals:",
      "  if merged is empty or start > merged[last].end:",
      "    merged.push([start, end])",
      "  else:",
      "    merged[last].end = max(merged[last].end, end)",
      "return merged",
    ],
    edgeCases: [
      "Test a single interval.",
      "Test intervals that all overlap into one.",
      "Test intervals that are already non-overlapping.",
      "Test intervals that touch at endpoints.",
      "Ensure sorting handles equal start times correctly.",
    ],
    finalNudge: [
      "Sort by start time first.",
      "Compare each interval's start with the last merged end.",
      "Merge when overlapping, otherwise start a new interval.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Sort intervals by start time. Iterate through them, maintaining a list of merged intervals. If the current interval overlaps with the last merged one, merge them by updating the end. Otherwise, add it as a new interval.",
  }),

  solutionLogic: {
    approach:
      "Sort intervals by start time. Iterate through them, maintaining a list of merged intervals. If the current interval overlaps with the last merged one, merge them by updating the end. Otherwise, add it as a new interval.",

    steps: [
      "Sort intervals by start ascending.",
      "Initialize merged = [].",
      "For each [start, end] in sorted intervals:",
      "  If merged is empty or start > merged[last].end:",
      "    Append [start, end] to merged.",
      "  Else:",
      "    merged[last].end = max(merged[last].end, end).",
      "Return merged.",
    ],

    pseudocode: `sort intervals by start

merged = []

for [start, end] in intervals:
    if merged is empty or start > merged[last].end:
        merged.push([start, end])
    else:
        merged[last].end = max(merged[last].end, end)

return merged`,

    timeComplexity: "O(n log n) due to sorting",
    spaceComplexity: "O(n) for the output array",

    commonMistakes: [
      "Not sorting before merging.",
      "Using < instead of > when checking overlap.",
      "Forgetting to use max when updating the end.",
      "Treating touching intervals as non-overlapping when they should merge.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = merged[merged.length - 1];

    if (start > last[1]) {
      merged.push([start, end]);
    } else {
      last[1] = Math.max(last[1], end);
    }
  }

  return merged;
}`,

    python: `def solve(intervals):
    if len(intervals) <= 1:
        return intervals

    intervals.sort(key=lambda x: x[0])

    merged = [intervals[0]]

    for start, end in intervals[1:]:
        last = merged[-1]
        if start > last[1]:
            merged.append([start, end])
        else:
            last[1] = max(last[1], end)

    return merged`,
  },

  starterCode: {
    javascript: `function solve(intervals) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(intervals):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[][] intervals) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<vector<int>> intervals) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q027 = {
  id: "bs-002",
  slug: "search-in-rotated-sorted-array",
  title: "Search in Rotated Sorted Array",
  topic: "binary-search",
  difficulty: "Medium",

  prompt:
    "Given a sorted array that was rotated at an unknown pivot, and a target value, return the index of target if it exists in the array. Otherwise return -1. The array contains distinct elements.",

  constraints: [
    "1 <= nums.length <= 10000",
    "-10^4 <= nums[i], target <= 10^4",
    "All values in nums are unique.",
  ],

  examples: [
    {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4",
      explanation: "0 is at index 4.",
    },
    {
      input: "nums = [4,5,6,7,0,1,2], target = 3",
      output: "-1",
      explanation: "3 is not in the array.",
    },
  ],

  visibleTests: [
    { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
    { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
    { args: [[1], 1], expected: 0 },
    { args: [[1], 0], expected: -1 },
  ],

  hiddenTests: [
    { args: [[5, 1, 3], 5], expected: 0 },
    { args: [[5, 1, 3], 3], expected: 2 },
    { args: [[3, 4, 5, 1, 2], 1], expected: 3 },
    { args: [[3, 4, 5, 1, 2], 6], expected: -1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "How is this array different from a normal sorted array?",
      "What does 'rotated at an unknown pivot' mean?",
      "Try the first example and identify the pivot point.",
      "Notice that at least one half of the array is still sorted.",
      "You need an O(log n) solution, so think binary search.",
    ],
    example: [
      "For [4,5,6,7,0,1,2], the original sorted array was [0,1,2,4,5,6,7].",
      "It was rotated so that 0 moved to index 4.",
      "Left half [4,5,6,7] is sorted.",
      "Right half [0,1,2] is also sorted.",
      "At any step, one side of mid is sorted.",
    ],
    simpleApproach: [
      "One method scans the array linearly to find target.",
      "That is O(n) and does not use the sorted property.",
      "A better approach uses modified binary search.",
      "At each step, determine which half is sorted.",
      "Then decide whether target can be in that half.",
    ],
    repeatedWork: [
      "You repeatedly cut the search range in half.",
      "At each step, compare nums[mid] with nums[left] and nums[right].",
      "Identify the sorted half.",
      "Check if target lies within that sorted half.",
      "Discard the other half and continue.",
    ],
    pattern: [
      "This is a modified binary search on a rotated array.",
      "Find mid and check which side is sorted.",
      "If left half is sorted and target in [nums[left], nums[mid]], search left.",
      "Otherwise search right.",
      "Symmetric logic if right half is sorted.",
    ],
    dataStructure: [
      "Use the input array and indices left, right, mid.",
      "No extra data structure is needed.",
      "Maintain standard binary search bounds.",
      "Input is a rotated sorted array.",
      "Output is an index or -1.",
    ],
    algorithm: [
      "Set left = 0, right = n - 1.",
      "While left <= right:",
      "  mid = left + floor((right - left) / 2).",
      "  If nums[mid] == target, return mid.",
      "  If nums[left] <= nums[mid] (left half sorted):",
      "    If nums[left] <= target < nums[mid], right = mid - 1.",
      "    Else left = mid + 1.",
      "  Else (right half sorted):",
      "    If nums[mid] < target <= nums[right], left = mid + 1.",
      "    Else right = mid - 1.",
    ],
    pseudocode: [
      "left = 0, right = n - 1",
      "while left <= right:",
      "  mid = left + (right - left) // 2",
      "  if nums[mid] == target: return mid",
      "  if nums[left] <= nums[mid]:",
      "    if nums[left] <= target < nums[mid]:",
      "      right = mid - 1",
      "    else:",
      "      left = mid + 1",
      "  else:",
      "    if nums[mid] < target <= nums[right]:",
      "      left = mid + 1",
      "    else:",
      "      right = mid - 1",
      "return -1",
    ],
    edgeCases: [
      "Test an array with one element.",
      "Test when target is at the pivot.",
      "Test when target is not present.",
      "Test when array is not actually rotated (fully sorted).",
      "Ensure you handle boundaries correctly.",
    ],
    finalNudge: [
      "At each step, identify the sorted half.",
      "Check if target lies within that sorted range.",
      "Adjust left or right accordingly.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use modified binary search. At each step, determine which half is sorted. If target lies within the sorted half, search there; otherwise search the other half. This maintains O(log n) time.",
  }),

  solutionLogic: {
    approach:
      "Use modified binary search. At each step, determine which half is sorted. If target lies within the sorted half, search there; otherwise search the other half. This maintains O(log n) time.",

    steps: [
      "Set left = 0, right = n - 1.",
      "While left <= right:",
      "  Compute mid.",
      "  If nums[mid] == target, return mid.",
      "  If left half is sorted:",
      "    If target in [nums[left], nums[mid]), search left.",
      "    Else search right.",
      "  Else (right half sorted):",
      "    If target in (nums[mid], nums[right]], search right.",
      "    Else search left.",
      "Return -1 if not found.",
    ],

    pseudocode: `left = 0
right = n - 1

while left <= right:
    mid = left + (right - left) // 2

    if nums[mid] == target:
        return mid

    if nums[left] <= nums[mid]:  // left half sorted
        if nums[left] <= target < nums[mid]:
            right = mid - 1
        else:
            left = mid + 1
    else:  // right half sorted
        if nums[mid] < target <= nums[right]:
            left = mid + 1
        else:
            right = mid - 1

return -1`,

    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not correctly identifying the sorted half.",
      "Using wrong inequalities for target range checks.",
      "Forgetting to handle the case where array is not rotated.",
      "Mixing up left and right updates.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) { // left half sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // right half sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}`,

    python: `def solve(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid

        if nums[left] <= nums[mid]:  # left half sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # right half sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int target) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q028 = {
  id: "ll-002",
  slug: "detect-cycle-in-linked-list",
  title: "Detect Cycle in Linked List",
  topic: "linked-lists",
  difficulty: "Medium",

  prompt:
    "Given the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle, otherwise return false.",

  constraints: [
    "0 <= number of nodes <= 10000",
    "-10^5 <= node.val <= 10^5",
  ],

  examples: [
    {
      input: "head = [3,2,0,-4] with cycle from tail to node with value 2",
      output: "true",
      explanation: "There is a cycle in the list.",
    },
    {
      input: "head = [1,2] with no cycle",
      output: "false",
      explanation: "There is no cycle in the list.",
    },
  ],

  visibleTests: [
    { args: [[3, 2, 0, -4], 1], expected: true }, // pos = 1 means tail connects to index 1
    { args: [[1, 2], -1], expected: false },
    { args: [[1], -1], expected: false },
    { args: [[1, 2, 3], 0], expected: true },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4], 2], expected: true },
    { args: [[1, 1, 1, 1], -1], expected: false },
    { args: [[-1, -2, -3], 0], expected: true },
    { args: [[5], 0], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does a cycle in a linked list mean?",
      "How can you tell if you are visiting the same node again?",
      "Try drawing a list with a cycle and trace a path.",
      "You need an efficient way to detect repetition.",
      "Think about using two pointers moving at different speeds.",
    ],
    example: [
      "For a list 3→2→0→-4→(back to 2):",
      "If you follow next pointers, you loop forever.",
      "A fast pointer (2 steps) and slow pointer (1 step) will eventually meet.",
      "If there is no cycle, fast pointer reaches the end.",
      "This is the tortoise-and-hare idea.",
    ],
    simpleApproach: [
      "One method uses a set to store visited nodes.",
      "Traverse the list; if you see a node again, there is a cycle.",
      "This is O(n) time and O(n) space.",
      "A better approach uses two pointers with O(1) space.",
      "Move one pointer twice as fast as the other.",
    ],
    repeatedWork: [
      "In the two-pointer method, both pointers traverse the list.",
      "If there is a cycle, they will eventually meet inside it.",
      "If there is no cycle, fast reaches null.",
      "Each node is visited a constant number of times.",
      "Space is O(1) because no extra storage is used.",
    ],
    pattern: [
      "This is the Floyd's cycle detection (tortoise and hare) pattern.",
      "Use slow = head, fast = head.",
      "Move slow by 1 step, fast by 2 steps.",
      "If fast meets slow, there is a cycle.",
      "If fast reaches null, there is no cycle.",
    ],
    dataStructure: [
      "Use the existing linked list nodes.",
      "Use two pointer variables: slow and fast.",
      "No extra data structure is needed.",
      "Input is the head of a linked list.",
      "Output is a boolean.",
    ],
    algorithm: [
      "If head is null or head.next is null, return false.",
      "Set slow = head, fast = head.",
      "While fast is not null and fast.next is not null:",
      "  slow = slow.next",
      "  fast = fast.next.next",
      "  If slow == fast, return true.",
      "Return false.",
    ],
    pseudocode: [
      "if head == null or head.next == null: return false",
      "slow = head",
      "fast = head",
      "while fast != null and fast.next != null:",
      "  slow = slow.next",
      "  fast = fast.next.next",
      "  if slow == fast: return true",
      "return false",
    ],
    edgeCases: [
      "Test an empty list.",
      "Test a list with one node and no cycle.",
      "Test a list with one node pointing to itself.",
      "Test a list where cycle starts at head.",
      "Ensure you check fast.next before accessing fast.next.next.",
    ],
    finalNudge: [
      "Initialize both pointers at head.",
      "Move fast by 2 steps and slow by 1 step.",
      "Check for meeting point inside the loop.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use two pointers, slow (1 step) and fast (2 steps). If there is a cycle, they will eventually meet. If fast reaches the end (null), there is no cycle.",
  }),

  solutionLogic: {
    approach:
      "Use two pointers, slow (1 step) and fast (2 steps). If there is a cycle, they will eventually meet. If fast reaches the end (null), there is no cycle.",

    steps: [
      "If head is null or head.next is null, return false.",
      "Set slow = head, fast = head.",
      "While fast and fast.next are not null:",
      "  Move slow one step.",
      "  Move fast two steps.",
      "  If slow == fast, return true.",
      "Return false.",
    ],

    pseudocode: `if head == null or head.next == null:
    return false

slow = head
fast = head

while fast != null and fast.next != null:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        return true

return false`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not checking fast.next before accessing fast.next.next.",
      "Starting fast at head.next instead of head.",
      "Returning true when fast becomes null.",
      "Not handling empty or single-node lists correctly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}`,

    python: `def solve(head):
    if not head or not head.next:
        return False

    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False`,
  },

  starterCode: {
    javascript: `function solve(head) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(head):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int[] arg0, int arg1) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<int> arg0, int arg1) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q029 = {
  id: "sq-002",
  slug: "next-greater-element",
  title: "Next Greater Element",
  topic: "stacks-queues",
  difficulty: "Medium",

  prompt:
    "Given an array of integers nums, return an array answer where answer[i] is the first greater element to the right of nums[i]. If no such element exists, answer[i] should be -1.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-10^4 <= nums[i] <= 10^4",
  ],

  examples: [
    {
      input: "nums = [4,5,2,25]",
      output: "[5,25,25,-1]",
      explanation:
        "For 4, next greater is 5; for 5, next greater is 25; for 2, next greater is 25; for 25, none.",
    },
    {
      input: "nums = [13,7,6,12]",
      output: "[-1,12,12,-1]",
      explanation:
        "For 13, no greater to the right; for 7, next greater is 12; for 6, next greater is 12; for 12, none.",
    },
  ],

  visibleTests: [
    { args: [[4, 5, 2, 25]], expected: [5, 25, 25, -1] },
    { args: [[13, 7, 6, 12]], expected: [-1, 12, 12, -1] },
    { args: [[1, 2, 3, 4]], expected: [2, 3, 4, -1] },
    { args: [[4, 3, 2, 1]], expected: [-1, -1, -1, -1] },
  ],

  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: [-1, -1, -1, -1] },
    { args: [[1, 2, 1, 2, 1]], expected: [2, -1, 2, -1, -1] },
    { args: [[5, 4, 3, 2, 6]], expected: [6, 6, 6, 6, -1] },
    { args: [[10, 1, 2, 3, 4]], expected: [-1, 2, 3, 4, -1] },
  ],

  hints: createProgressiveHints({
    understand: [
      "For each element, what are you looking for to its right?",
      "Do you need the immediate next greater or any greater?",
      "Try the first example and find next greater for each element.",
      "Notice that a naive approach checks all elements to the right.",
      "You need a more efficient method using a stack.",
    ],
    example: [
      "For [4,5,2,25]:",
      "For 4, scan right: 5 is greater → answer 5.",
      "For 5, scan right: 2 is not, 25 is greater → answer 25.",
      "For 2, next greater is 25.",
      "For 25, no greater to the right → -1.",
    ],
    simpleApproach: [
      "One method uses two nested loops.",
      "For each i, scan j from i+1 to end.",
      "First nums[j] > nums[i] is the answer.",
      "This is O(n^2) and too slow for large n.",
      "A stack can reduce this to O(n).",
    ],
    repeatedWork: [
      "When moving from right to left, you can keep candidates in a stack.",
      "The stack stores elements for which we haven't found a next greater yet.",
      "Elements in the stack are in decreasing order.",
      "For current element, pop smaller or equal elements.",
      "The top of the stack (if any) is the next greater.",
    ],
    pattern: [
      "This is a monotonic stack pattern.",
      "Traverse from right to left.",
      "Maintain a stack of potential next greater elements.",
      "Pop elements <= current from the stack.",
      "The remaining top is the next greater (or stack empty → -1).",
    ],
    dataStructure: [
      "Use a stack to store candidate elements.",
      "In JavaScript, an array with push/pop works as a stack.",
      "In Python, use a list with append/pop.",
      "No other complex structure is needed.",
      "Input and output are integer arrays.",
    ],
    algorithm: [
      "Initialize an empty stack and answer array of size n.",
      "For i from n-1 down to 0:",
      "  While stack not empty and stack.top <= nums[i]: pop.",
      "  If stack empty: answer[i] = -1.",
      "  Else: answer[i] = stack.top.",
      "  Push nums[i] onto stack.",
      "Return answer.",
    ],
    pseudocode: [
      "n = nums.length",
      "answer = new array of size n",
      "stack = empty",
      "for i from n-1 down to 0:",
      "  while stack not empty and stack.top <= nums[i]:",
      "    stack.pop()",
      "  if stack empty:",
      "    answer[i] = -1",
      "  else:",
      "    answer[i] = stack.top",
      "  stack.push(nums[i])",
      "return answer",
    ],
    edgeCases: [
      "Test an array with one element.",
      "Test an array with all decreasing elements.",
      "Test an array with all increasing elements.",
      "Test an array with duplicate values.",
      "Ensure you handle -1 correctly when no greater element exists.",
    ],
    finalNudge: [
      "Traverse from right to left.",
      "Maintain a decreasing stack.",
      "Pop elements that cannot be next greater for current or future.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Traverse the array from right to left. Maintain a stack of elements in decreasing order. For each element, pop all elements from the stack that are less than or equal to it. The top of the stack (if any) is the next greater element; otherwise, it's -1.",
  }),

  solutionLogic: {
    approach:
      "Traverse the array from right to left. Maintain a stack of elements in decreasing order. For each element, pop all elements from the stack that are less than or equal to it. The top of the stack (if any) is the next greater element; otherwise, it's -1.",

    steps: [
      "Initialize empty stack and answer array.",
      "For i from n-1 down to 0:",
      "  While stack not empty and stack.top <= nums[i], pop.",
      "  If stack empty, answer[i] = -1.",
      "  Else, answer[i] = stack.top.",
      "  Push nums[i] onto stack.",
      "Return answer.",
    ],

    pseudocode: `n = nums.length
answer = array of size n
stack = empty

for i from n-1 down to 0:
    while stack not empty and stack.top <= nums[i]:
        stack.pop()
    if stack empty:
        answer[i] = -1
    else:
        answer[i] = stack.top
    stack.push(nums[i])

return answer`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for stack and output",

    commonMistakes: [
      "Traversing left to right instead of right to left.",
      "Not popping elements <= current from the stack.",
      "Using increasing instead of decreasing stack order.",
      "Forgetting to set -1 when stack is empty.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;
  const answer = new Array(n);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      answer[i] = -1;
    } else {
      answer[i] = stack[stack.length - 1];
    }

    stack.push(nums[i]);
  }

  return answer;
}`,

    python: `def solve(nums):
    n = len(nums)
    answer = [0] * n
    stack = []

    for i in range(n - 1, -1, -1):
        while stack and stack[-1] <= nums[i]:
            stack.pop()

        if not stack:
            answer[i] = -1
        else:
            answer[i] = stack[-1]

        stack.append(nums[i])

    return answer`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q030 = {
  id: "tree-002",
  slug: "validate-binary-search-tree",
  title: "Validate Binary Search Tree",
  topic: "trees",
  difficulty: "Medium",

  prompt:
    "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: the left subtree of a node contains only nodes with keys less than the node's key, the right subtree contains only nodes with keys greater than the node's key, and both left and right subtrees must also be binary search trees.",

  constraints: [
    "The number of nodes in the tree is in the range [1, 10000].",
    "-2^31 <= node.val <= 2^31 - 1",
  ],

  examples: [
    {
      input: "root = [2,1,3]",
      output: "true",
      explanation: "This is a valid BST.",
    },
    {
      input: "root = [5,1,4,null,null,3,6]",
      output: "false",
      explanation: "Root is 5, but right child is 4 which is less than 5.",
    },
  ],

  visibleTests: [
    { args: [[2, 1, 3]], expected: true },
    { args: [[5, 1, 4, null, null, 3, 6]], expected: false },
    { args: [[1]], expected: true },
    { args: [[1, null, 2]], expected: true },
  ],

  hiddenTests: [
    { args: [[5, 3, 7, 1, 4, 6, 8]], expected: true },
    { args: [[5, 3, 7, 1, 6, 4, 8]], expected: false },
    { args: [[10, 5, 15, null, null, 6, 20]], expected: false },
    { args: [[2147483647]], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What are the rules for a valid BST?",
      "Is it enough to check only direct children?",
      "Try the second example and see why it is invalid.",
      "Notice that every node must satisfy a range constraint.",
      "You need to check the entire subtree, not just immediate children.",
    ],
    example: [
      "For [5,1,4,null,null,3,6]:",
      "Root 5, left 1 (ok), right 4 (not ok, should be > 5).",
      "Even if 4's children are ok, 4 itself violates BST property.",
      "For a node, all left subtree values must be < node.val.",
      "All right subtree values must be > node.val.",
    ],
    simpleApproach: [
      "One method does an inorder traversal and checks if it is sorted.",
      "In a valid BST, inorder traversal yields sorted values.",
      "If any value is <= previous, it is invalid.",
      "This is O(n) time and O(h) space for recursion.",
      "Alternatively, use range constraints recursively.",
    ],
    repeatedWork: [
      "For each node, you must ensure it lies within a valid range.",
      "Root can be anything: (-inf, +inf).",
      "Left child must be in (-inf, root.val).",
      "Right child must be in (root.val, +inf).",
      "Recursively apply this to all descendants.",
    ],
    pattern: [
      "This is a recursive range-check pattern for BST validation.",
      "Pass down min and max allowed values for each node.",
      "At each node, check if node.val is within (min, max).",
      "Recurse left with (min, node.val), right with (node.val, max).",
      "If any node violates, the tree is invalid.",
    ],
    dataStructure: [
      "Use the tree nodes as given.",
      "Use recursion with additional min/max parameters.",
      "No extra data structure is needed.",
      "Input is the root of a binary tree.",
      "Output is a boolean.",
    ],
    algorithm: [
      "Define helper function isValid(node, min, max).",
      "If node is null, return true.",
      "If node.val <= min or node.val >= max, return false.",
      "Return isValid(node.left, min, node.val) && isValid(node.right, node.val, max).",
      "Call isValid(root, -inf, +inf).",
    ],
    pseudocode: [
      "function isValid(node, min, max):",
      "  if node == null: return true",
      "  if node.val <= min or node.val >= max: return false",
      "  return isValid(node.left, min, node.val) and",
      "         isValid(node.right, node.val, max)",
      "",
      "return isValid(root, -infinity, +infinity)",
    ],
    edgeCases: [
      "Test a single-node tree.",
      "Test a tree where a violation is deep in a subtree.",
      "Test with minimum and maximum integer values.",
      "Test a tree that is almost valid but one node violates.",
      "Ensure you use strict inequalities (< and >).",
    ],
    finalNudge: [
      "Use a helper that carries min and max bounds.",
      "Check node.val against these bounds at each step.",
      "Recurse with updated bounds for left and right.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Recursively validate each node with a range (min, max). A node is valid if its value is strictly between min and max, and both subtrees are valid with updated ranges. Start with (-inf, +inf) for the root.",
  }),

  solutionLogic: {
    approach:
      "Recursively validate each node with a range (min, max). A node is valid if its value is strictly between min and max, and both subtrees are valid with updated ranges. Start with (-inf, +inf) for the root.",

    steps: [
      "Define isValid(node, min, max).",
      "If node is null, return true.",
      "If node.val <= min or node.val >= max, return false.",
      "Recurse: isValid(node.left, min, node.val).",
      "Recurse: isValid(node.right, node.val, max).",
      "Return true only if both subtrees are valid.",
    ],

    pseudocode: `function isValid(node, min, max):
    if node == null:
        return true
    if node.val <= min or node.val >= max:
        return false
    return isValid(node.left, min, node.val) and
           isValid(node.right, node.val, max)

return isValid(root, -infinity, +infinity)`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(h) for recursion stack, where h is tree height",

    commonMistakes: [
      "Checking only direct children instead of entire subtrees.",
      "Using <= or >= instead of strict < and >.",
      "Not updating min/max correctly in recursive calls.",
      "Ignoring overflow issues with extreme integer values.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(root) {
  function isValid(node, min, max) {
    if (node === null) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      isValid(node.left, min, node.val) &&
      isValid(node.right, node.val, max)
    );
  }

  return isValid(root, -Infinity, Infinity);
}`,

    python: `def solve(root):
    def is_valid(node, min_val, max_val):
        if not node:
            return True
        if node.val <= min_val or node.val >= max_val:
            return False
        return (
            is_valid(node.left, min_val, node.val) and
            is_valid(node.right, node.val, max_val)
        )

    return is_valid(root, float('-inf'), float('inf'))`,
  },

  starterCode: {
    javascript: `function solve(root) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(root):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int[] root) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<int> root) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q031 = {
  id: "heap-002",
  slug: "top-k-frequent-elements",
  title: "Top K Frequent Elements",
  topic: "heaps",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-10^4 <= nums[i] <= 10^4",
    "1 <= k <= number of unique elements in nums",
  ],

  examples: [
    {
      input: "nums = [1,1,1,2,2,3], k = 2",
      output: "[1, 2]",
      explanation: "1 appears 3 times, 2 appears 2 times, 3 appears 1 time.",
    },
    {
      input: "nums = [1], k = 1",
      output: "[1]",
      explanation: "Only one element.",
    },
  ],

  visibleTests: [
    { args: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
    { args: [[1], 1], expected: [1] },
    { args: [[4, 4, 4, 5, 5, 6], 2], expected: [4, 5] },
    { args: [[-1, -1, -2, -2, -3], 2], expected: [-1, -2] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 5, 5, 5], 2], expected: [5, 1] },
    { args: [[1, 1, 2, 2, 3, 3], 3], expected: [1, 2, 3] },
    { args: [[0, 0, 0, 1, 1, 2], 2], expected: [0, 1] },
    { args: [[10, 10, 10, 20, 20, 30], 2], expected: [10, 20] },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked for the most frequent elements or the most frequent counts?",
      "Do you need to return them sorted by frequency or just any order?",
      "Try the first example and count frequencies by hand.",
      "You need the top k elements by frequency.",
      "Think about how to efficiently keep track of top k.",
    ],
    example: [
      "For [1,1,1,2,2,3], frequencies: 1→3, 2→2, 3→1.",
      "Top 2 frequent elements are 1 and 2.",
      "You do not need to return them in sorted order.",
      "A heap can help maintain top k efficiently.",
      "Alternatively, you can sort by frequency.",
    ],
    simpleApproach: [
      "One method counts frequencies using a hash map.",
      "Then sorts all unique elements by frequency descending.",
      "Takes the first k elements.",
      "This is O(n log n) due to sorting.",
      "A heap can make it O(n log k).",
    ],
    repeatedWork: [
      "Counting frequencies is done once in O(n).",
      "You then need to select k largest frequencies.",
      "A min-heap of size k keeps the top k elements.",
      "When heap size exceeds k, remove the smallest frequency.",
      "At the end, heap contains k most frequent elements.",
    ],
    pattern: [
      "This is a hash map + heap pattern for top-k problems.",
      "First, build a frequency map.",
      "Then use a min-heap keyed by frequency.",
      "Keep only k elements in the heap.",
      "Extract elements from the heap at the end.",
    ],
    dataStructure: [
      "Use a hash map for frequencies.",
      "Use a min-heap (priority queue) of size k.",
      "Each heap entry can be [frequency, element].",
      "No other complex structure is needed.",
      "Input is an integer array, output is an integer array.",
    ],
    algorithm: [
      "Build a frequency map: num → count.",
      "Create an empty min-heap.",
      "For each [num, freq] in the map:",
      "  Push [freq, num] into the heap.",
      "  If heap size > k, pop the smallest.",
      "Extract all elements from the heap and return them.",
    ],
    pseudocode: [
      "freqMap = empty map",
      "for num in nums:",
      "  freqMap[num] = freqMap.get(num, 0) + 1",
      "",
      "heap = empty min-heap",
      "for (num, freq) in freqMap:",
      "  heap.push([freq, num])",
      "  if heap.size > k:",
      "    heap.pop()",
      "",
      "result = []",
      "while heap not empty:",
      "  result.push(heap.pop().num)",
      "return result",
    ],
    edgeCases: [
      "Test when k equals number of unique elements.",
      "Test when all elements have same frequency.",
      "Test with negative numbers.",
      "Test with a single element array.",
      "Ensure you return exactly k elements.",
    ],
    finalNudge: [
      "Count frequencies first.",
      "Use a min-heap to keep only top k by frequency.",
      "Pop from heap to get the result.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Count frequencies using a hash map. Use a min-heap of size k to keep the k most frequent elements. For each element, push into heap and pop if size exceeds k. Finally, extract elements from the heap.",
  }),

  solutionLogic: {
    approach:
      "Count frequencies using a hash map. Use a min-heap of size k to keep the k most frequent elements. For each element, push into heap and pop if size exceeds k. Finally, extract elements from the heap.",

    steps: [
      "Build frequency map: num → count.",
      "Create empty min-heap.",
      "For each (num, freq) in map:",
      "  Push [freq, num] into heap.",
      "  If heap size > k, pop.",
      "Extract nums from heap and return.",
    ],

    pseudocode: `freqMap = {}

for num in nums:
    freqMap[num] = freqMap.get(num, 0) + 1

heap = empty min-heap

for (num, freq) in freqMap:
    heap.push([freq, num])
    if heap.size > k:
        heap.pop()

result = []
while heap not empty:
    result.push(heap.pop().num)

return result`,

    timeComplexity: "O(n log k)",
    spaceComplexity: "O(n) for frequency map and heap",

    commonMistakes: [
      "Using a max-heap instead of min-heap.",
      "Not limiting heap size to k.",
      "Returning frequencies instead of elements.",
      "Forgetting to handle k equal to number of unique elements.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Min-heap of [freq, num]
  const heap = [];

  function pushHeap(item) {
    heap.push(item);
    heap.sort((a, b) => a[0] - b[0]); // simple sort as heap substitute
  }

  for (const [num, freq] of freqMap.entries()) {
    pushHeap([freq, num]);
    if (heap.length > k) {
      heap.shift(); // remove smallest frequency
    }
  }

  return heap.map(item => item[1]);
}`,

    python: `import heapq
from collections import Counter

def solve(nums, k):
    freq = Counter(nums)
    heap = []

    for num, f in freq.items():
        heapq.heappush(heap, (f, num))
        if len(heap) > k:
            heapq.heappop(heap)

    return [num for f, num in heap]`,
  },

  starterCode: {
    javascript: `function solve(nums, k) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, k):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums, int k) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums, int k) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q032 = {
  id: "graph-002",
  slug: "course-schedule",
  title: "Course Schedule",
  topic: "graphs",
  difficulty: "Medium",

  prompt:
    "There are numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a, b] means you must take course b before course a. Return true if you can finish all courses, otherwise return false.",

  constraints: [
    "1 <= numCourses <= 2000",
    "0 <= prerequisites.length <= 5000",
    "prerequisites[i].length == 2",
    "0 <= a, b < numCourses",
    "All pairs [a, b] are distinct.",
  ],

  examples: [
    {
      input: "numCourses = 2, prerequisites = [[1,0]]",
      output: "true",
      explanation: "To take course 1, you need course 0. This is possible.",
    },
    {
      input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
      output: "false",
      explanation: "Course 1 requires 0 and course 0 requires 1 → cycle, impossible.",
    },
  ],

  visibleTests: [
    { args: [2, [[1, 0]]], expected: true },
    { args: [2, [[1, 0], [0, 1]]], expected: false },
    { args: [3, [[1, 0], [2, 1]]], expected: true },
    { args: [3, [[1, 0], [1, 2], [0, 1]]], expected: false },
  ],

  hiddenTests: [
    { args: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]], expected: true },
    { args: [3, [[0, 1], [0, 2], [1, 2]]], expected: true },
    { args: [4, [[1, 0], [2, 1], [3, 2], [1, 3]]], expected: false },
    { args: [1, []], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each prerequisite pair [a, b] represent?",
      "Can you model this as a directed graph?",
      "Try the second example and draw the dependency graph.",
      "Notice that a cycle makes it impossible to finish all courses.",
      "You need to detect if there is any cycle in the graph.",
    ],
    example: [
      "For numCourses=2, prerequisites=[[1,0],[0,1]]:",
      "Edge 0→1 (to take 1, need 0) and 1→0 (to take 0, need 1).",
      "This forms a cycle 0→1→0.",
      "You cannot start any course in this cycle.",
      "So answer is false.",
    ],
    simpleApproach: [
      "One method tries to take courses one by one.",
      "If you get stuck because all remaining courses have unmet prerequisites, there is a cycle.",
      "This is essentially topological sorting.",
      "You can use Kahn's algorithm (BFS with in-degrees).",
      "Or you can use DFS with cycle detection.",
    ],
    repeatedWork: [
      "In Kahn's algorithm, you repeatedly remove courses with no prerequisites.",
      "Each removal may free up other courses.",
      "If you can remove all courses, no cycle exists.",
      "If some remain, there is a cycle.",
      "Each edge is processed once.",
    ],
    pattern: [
      "This is a topological sort / cycle detection pattern.",
      "Build adjacency list and in-degree array.",
      "Enqueue all courses with in-degree 0.",
      "Process queue, reducing in-degrees of neighbors.",
      "Count processed courses; if count == numCourses, no cycle.",
    ],
    dataStructure: [
      "Use adjacency list for the graph.",
      "Use an array for in-degrees.",
      "Use a queue for BFS.",
      "No other complex structure is needed.",
      "Input is number of courses and prerequisite pairs.",
    ],
    algorithm: [
      "Build graph: for each [a, b], add edge b→a.",
      "Compute in-degree for each course.",
      "Enqueue all courses with in-degree 0.",
      "Initialize processedCount = 0.",
      "While queue not empty:",
      "  Pop course, increment processedCount.",
      "  For each neighbor, decrement in-degree.",
      "  If neighbor's in-degree becomes 0, enqueue it.",
      "Return processedCount == numCourses.",
    ],
    pseudocode: [
      "graph = adjacency list",
      "inDegree = array of size numCourses",
      "for [a, b] in prerequisites:",
      "  graph[b].push(a)",
      "  inDegree[a]++",
      "",
      "queue = all courses with inDegree 0",
      "processedCount = 0",
      "",
      "while queue not empty:",
      "  course = queue.pop()",
      "  processedCount++",
      "  for neighbor in graph[course]:",
      "    inDegree[neighbor]--",
      "    if inDegree[neighbor] == 0:",
      "      queue.push(neighbor)",
      "",
      "return processedCount == numCourses",
    ],
    edgeCases: [
      "Test when there are no prerequisites.",
      "Test when numCourses is 1.",
      "Test when there is a self-loop (if allowed).",
      "Test when graph is disconnected.",
      "Ensure you handle all courses, even isolated ones.",
    ],
    finalNudge: [
      "Build graph and in-degrees correctly.",
      "Start BFS from courses with no prerequisites.",
      "Check if all courses can be processed.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Model courses as nodes and prerequisites as directed edges. Use Kahn's algorithm for topological sorting. If you can process all courses (no cycle), return true; otherwise false.",
  }),

  solutionLogic: {
    approach:
      "Model courses as nodes and prerequisites as directed edges. Use Kahn's algorithm for topological sorting. If you can process all courses (no cycle), return true; otherwise false.",

    steps: [
      "Build adjacency list and in-degree array.",
      "Enqueue all nodes with in-degree 0.",
      "Process queue, decrementing neighbors' in-degrees.",
      "Enqueue neighbors when their in-degree becomes 0.",
      "Count processed nodes.",
      "Return true if count == numCourses.",
    ],

    pseudocode: `graph = adjacency list
inDegree = array of size numCourses

for [a, b] in prerequisites:
    graph[b].push(a)
    inDegree[a]++

queue = all i where inDegree[i] == 0
processedCount = 0

while queue not empty:
    course = queue.pop()
    processedCount++
    for neighbor in graph[course]:
        inDegree[neighbor]--
        if inDegree[neighbor] == 0:
            queue.push(neighbor)

return processedCount == numCourses`,

    timeComplexity: "O(numCourses + prerequisites.length)",
    spaceComplexity: "O(numCourses + prerequisites.length)",

    commonMistakes: [
      "Reversing the edge direction (a→b instead of b→a).",
      "Not counting processed courses correctly.",
      "Forgetting to include courses with no edges.",
      "Using DFS but not correctly detecting back edges.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    inDegree[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let processedCount = 0;

  while (queue.length > 0) {
    const course = queue.shift();
    processedCount++;

    for (const neighbor of graph[course]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return processedCount === numCourses;
}`,

    python: `from collections import deque

def solve(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    in_degree = [0] * numCourses

    for a, b in prerequisites:
        graph[b].append(a)
        in_degree[a] += 1

    queue = deque(i for i in range(numCourses) if in_degree[i] == 0)
    processed = 0

    while queue:
        course = queue.popleft()
        processed += 1
        for neighbor in graph[course]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return processed == numCourses`,
  },

  starterCode: {
    javascript: `function solve(numCourses, prerequisites) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(numCourses, prerequisites):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int numCourses, int[][] prerequisites) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(int numCourses, vector<vector<int>> prerequisites) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q033 = {
  id: "dp-002",
  slug: "house-robber",
  title: "House Robber",
  topic: "dynamic-programming",
  difficulty: "Medium",

  prompt:
    "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. The only constraint is that you cannot rob two adjacent houses. Given an integer array nums representing the amount of money in each house, return the maximum amount you can rob tonight without alerting the police.",

  constraints: [
    "1 <= nums.length <= 100",
    "0 <= nums[i] <= 1000",
  ],

  examples: [
    {
      input: "nums = [1,2,3,1]",
      output: "4",
      explanation: "Rob house 0 (1) and house 2 (3) → total 4.",
    },
    {
      input: "nums = [2,7,9,3,1]",
      output: "12",
      explanation: "Rob house 0 (2), house 2 (9), house 4 (1) → total 12.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 1]], expected: 4 },
    { args: [[2, 7, 9, 3, 1]], expected: 12 },
    { args: [[2, 1, 1, 2]], expected: 4 },
    { args: [[1]], expected: 1 },
  ],

  hiddenTests: [
    { args: [[5, 3, 4, 11, 2]], expected: 16 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 12 },
    { args: [[100, 1, 1, 100, 1, 1, 100]], expected: 300 },
    { args: [[0, 0, 0, 0]], expected: 0 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the constraint on which houses you can rob?",
      "Are you maximizing total money or number of houses?",
      "Try the first example and list valid robbery plans.",
      "Notice that robbing a house affects the next one.",
      "This suggests a dynamic programming approach.",
    ],
    example: [
      "For [1,2,3,1]:",
      "If you rob house 0 (1), you cannot rob house 1.",
      "Then you can rob house 2 (3) → total 4.",
      "If you skip house 0, you can rob house 1 (2) but not house 2.",
      "Best is 1 + 3 = 4.",
    ],
    simpleApproach: [
      "One method uses recursion: for each house, choose to rob or skip.",
      "If you rob house i, you cannot rob i+1.",
      "This leads to overlapping subproblems.",
      "Pure recursion is exponential.",
      "DP can solve it in O(n).",
    ],
    repeatedWork: [
      "Let dp[i] be the max money you can rob from houses 0..i.",
      "For house i, you have two choices:",
      "  Rob it: money = nums[i] + dp[i-2].",
      "  Skip it: money = dp[i-1].",
      "Take the maximum of these two.",
    ],
    pattern: [
      "This is a 1D DP pattern with state at each index.",
      "dp[i] = max(nums[i] + dp[i-2], dp[i-1]).",
      "Base cases: dp[0] = nums[0], dp[1] = max(nums[0], nums[1]).",
      "You can optimize space to O(1).",
      "Only need previous two values.",
    ],
    dataStructure: [
      "You can use an array dp of length n.",
      "Or just two variables for dp[i-1] and dp[i-2].",
      "No map or complex structure is needed.",
      "Input is an integer array.",
      "Output is a single integer.",
    ],
    algorithm: [
      "If n == 1, return nums[0].",
      "Initialize prev2 = nums[0].",
      "Initialize prev1 = max(nums[0], nums[1]).",
      "For i from 2 to n-1:",
      "  current = max(nums[i] + prev2, prev1)",
      "  prev2 = prev1",
      "  prev1 = current",
      "Return prev1.",
    ],
    pseudocode: [
      "if n == 1: return nums[0]",
      "prev2 = nums[0]",
      "prev1 = max(nums[0], nums[1])",
      "for i from 2 to n-1:",
      "  current = max(nums[i] + prev2, prev1)",
      "  prev2 = prev1",
      "  prev1 = current",
      "return prev1",
    ],
    edgeCases: [
      "Test when there is only one house.",
      "Test when all houses have 0 money.",
      "Test when robbing every other house is optimal.",
      "Test when skipping more houses is better.",
      "Ensure you handle small arrays correctly.",
    ],
    finalNudge: [
      "Use dp[i] = max(nums[i] + dp[i-2], dp[i-1]).",
      "Start from base cases and build up.",
      "You only need the last two values at any time.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: For each house, decide to rob it (adding its value to the best from two houses before) or skip it (taking the best from the previous house). Use DP to compute the maximum money, optimizing space to O(1).",
  }),

  solutionLogic: {
    approach:
      "For each house, decide to rob it (adding its value to the best from two houses before) or skip it (taking the best from the previous house). Use DP to compute the maximum money, optimizing space to O(1).",

    steps: [
      "If n == 1, return nums[0].",
      "Set prev2 = nums[0].",
      "Set prev1 = max(nums[0], nums[1]).",
      "For i from 2 to n-1:",
      "  current = max(nums[i] + prev2, prev1)",
      "  prev2 = prev1",
      "  prev1 = current",
      "Return prev1.",
    ],

    pseudocode: `if n == 1:
    return nums[0]

prev2 = nums[0]
prev1 = max(nums[0], nums[1])

for i from 2 to n-1:
    current = max(nums[i] + prev2, prev1)
    prev2 = prev1
    prev1 = current

return prev1`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Robbing adjacent houses by mistake.",
      "Using wrong recurrence (e.g., adding dp[i-1] instead of skipping).",
      "Not handling n = 1 and n = 2 separately.",
      "Using addition instead of max.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];

  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const current = Math.max(nums[i] + prev2, prev1);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}`,

    python: `def solve(nums):
    n = len(nums)
    if n == 1:
        return nums[0]

    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])

    for i in range(2, n):
        current = max(nums[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q034 = {
  id: "bit-002",
  slug: "counting-bits",
  title: "Counting Bits",
  topic: "bit-manipulation",
  difficulty: "Medium",

  prompt:
    "Given a non-negative integer n, return an array of length n + 1 where each element at index i is the number of 1's in the binary representation of i.",

  constraints: [
    "0 <= n <= 100000",
  ],

  examples: [
    {
      input: "n = 5",
      output: "[0,1,1,2,1,2]",
      explanation:
        "0→0, 1→1, 2→1, 3→2, 4→1, 5→2 (number of 1's in binary).",
    },
    {
      input: "n = 0",
      output: "[0]",
      explanation: "Only 0, which has 0 ones.",
    },
  ],

  visibleTests: [
    { args: [5], expected: [0, 1, 1, 2, 1, 2] },
    { args: [0], expected: [0] },
    { args: [1], expected: [0, 1] },
    { args: [3], expected: [0, 1, 1, 2] },
  ],

  hiddenTests: [
    { args: [10], expected: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2] },
    { args: [7], expected: [0, 1, 1, 2, 1, 2, 2, 3] },
    { args: [8], expected: [0, 1, 1, 2, 1, 2, 2, 3, 1] },
    { args: [15], expected: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each element of the output array represent?",
      "How do you count 1's in binary representation?",
      "Try the first example and write binary forms of 0..5.",
      "Notice patterns in the number of 1's as numbers increase.",
      "You need an efficient way, not counting bits naively for each number.",
    ],
    example: [
      "For n = 5:",
      "0 → 0b000 → 0 ones",
      "1 → 0b001 → 1 one",
      "2 → 0b010 → 1 one",
      "3 → 0b011 → 2 ones",
      "4 → 0b100 → 1 one",
      "5 → 0b101 → 2 ones",
    ],
    simpleApproach: [
      "One method counts bits for each number individually.",
      "For each i, repeatedly divide by 2 or use bit operations.",
      "This is O(n log n) overall.",
      "A DP approach can do it in O(n).",
      "Use previously computed results.",
    ],
    repeatedWork: [
      "Notice that i and i >> 1 differ by one bit (the least significant).",
      "bits[i] = bits[i >> 1] + (i & 1).",
      "This reuses the count for a smaller number.",
      "You can compute all counts in one pass.",
      "No need to re-count bits from scratch.",
    ],
    pattern: [
      "This is a DP-on-bits pattern.",
      "Use the relation: bits[i] = bits[i >> 1] + (i & 1).",
      "Base case: bits[0] = 0.",
      "Build up from 1 to n.",
      "Time is O(n), space is O(n).",
    ],
    dataStructure: [
      "Use an array bits of length n+1.",
      "No other complex structure is needed.",
      "Input is a single integer n.",
      "Output is an integer array.",
      "Access bits by index.",
    ],
    algorithm: [
      "Create array bits of length n+1, initialize bits[0] = 0.",
      "For i from 1 to n:",
      "  bits[i] = bits[i >> 1] + (i & 1).",
      "Return bits.",
    ],
    pseudocode: [
      "bits = array of size n+1",
      "bits[0] = 0",
      "for i from 1 to n:",
      "  bits[i] = bits[i >> 1] + (i & 1)",
      "return bits",
    ],
    edgeCases: [
      "Test n = 0.",
      "Test n = 1.",
      "Test small values like 2, 3, 4.",
      "Ensure the array length is n+1.",
      "Check that bits[0] is 0.",
    ],
    finalNudge: [
      "Use the recurrence bits[i] = bits[i >> 1] + (i & 1).",
      "Start from bits[0] = 0.",
      "Fill the array in increasing order.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use dynamic programming. The number of 1's in i is the number of 1's in i>>1 plus the least significant bit (i&1). This allows computing all counts in O(n) time.",
  }),

  solutionLogic: {
    approach:
      "Use dynamic programming. The number of 1's in i is the number of 1's in i>>1 plus the least significant bit (i&1). This allows computing all counts in O(n) time.",

    steps: [
      "Create array bits of length n+1.",
      "Set bits[0] = 0.",
      "For i from 1 to n:",
      "  bits[i] = bits[i >> 1] + (i & 1).",
      "Return bits.",
    ],

    pseudocode: `bits = array of size n+1
bits[0] = 0

for i from 1 to n:
    bits[i] = bits[i >> 1] + (i & 1)

return bits`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the output array",

    commonMistakes: [
      "Using the wrong recurrence (e.g., i>>2 instead of i>>1).",
      "Forgetting to add (i & 1).",
      "Starting loop from 0 instead of 1.",
      "Creating array of wrong size.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(n) {
  const bits = new Array(n + 1);
  bits[0] = 0;

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }

  return bits;
}`,

    python: `def solve(n):
    bits = [0] * (n + 1)

    for i in range(1, n + 1):
        bits[i] = bits[i >> 1] + (i & 1)

    return bits`,
  },

  starterCode: {
    javascript: `function solve(n) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(n):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int n) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(int n) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q035 = {
  id: "uf-001",
  slug: "redundant-connection",
  title: "Redundant Connection",
  topic: "union-find",
  difficulty: "Medium",

  prompt:
    "In this problem, a tree is an undirected graph that is connected and has no cycles. You are given a graph that started as a tree with n nodes labeled 1 to n, with one additional edge added. Return an edge that can be removed so that the resulting graph is a tree. If there are multiple answers, return the answer that occurs last in the input.",

  constraints: [
    "n == edges.length + 1",
    "2 <= n <= 1000",
    "edges.length == n - 1",
    "edges[i].length == 2",
    "1 <= ai, bi <= n",
    "ai != bi",
  ],

  examples: [
    {
      input: "edges = [[1,2],[1,3],[2,3]]",
      output: "[2,3]",
      explanation: "Removing [2,3] makes the graph a tree.",
    },
    {
      input: "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
      output: "[1,4]",
      explanation: "Removing [1,4] removes the cycle.",
    },
  ],

  visibleTests: [
    { args: [[[1, 2], [1, 3], [2, 3]]], expected: [2, 3] },
    { args: [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]], expected: [1, 4] },
    { args: [[[1, 2], [1, 3]]], expected: [1, 3] },
    { args: [[[1, 2], [2, 3], [1, 3]]], expected: [1, 3] },
  ],

  hiddenTests: [
    { args: [[[1, 2], [2, 3], [3, 1]]], expected: [3, 1] },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 1]]], expected: [4, 1] },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5], [5, 1]]], expected: [5, 1] },
    { args: [[[1, 2], [2, 3], [1, 3], [3, 4]]], expected: [1, 3] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is special about the given graph compared to a tree?",
      "How many edges does a tree with n nodes have?",
      "Try the first example and draw the graph.",
      "Notice that adding one edge to a tree creates exactly one cycle.",
      "You need to find an edge in that cycle.",
    ],
    example: [
      "For [[1,2],[1,3],[2,3]]:",
      "Edges form a triangle 1-2-3-1.",
      "Any one of these edges can be removed.",
      "Problem asks for the one that occurs last in input.",
      "So answer is [2,3].",
    ],
    simpleApproach: [
      "One method uses DFS/BFS to detect cycle.",
      "Add edges one by one and check if a cycle forms.",
      "This can be O(n^2) in worst case.",
      "Union-Find can detect cycle in nearly O(1) per edge.",
      "Total time becomes nearly O(n).",
    ],
    repeatedWork: [
      "Process edges in order from first to last.",
      "For each edge [u, v], check if u and v are already connected.",
      "If yes, this edge creates a cycle → candidate answer.",
      "If no, union the sets containing u and v.",
      "The last such edge that creates a cycle is the answer.",
    ],
    pattern: [
      "This is a Union-Find cycle detection pattern.",
      "Maintain disjoint sets of connected components.",
      "For each edge, find roots of u and v.",
      "If roots are same, edge creates cycle.",
      "Otherwise, union the two sets.",
    ],
    dataStructure: [
      "Use a parent array for Union-Find.",
      "Optionally use rank/size for optimization.",
      "No other complex structure is needed.",
      "Input is an array of edges.",
      "Output is a single edge [u, v].",
    ],
    algorithm: [
      "Initialize parent[i] = i for all nodes.",
      "For each edge [u, v] in edges:",
      "  rootU = find(u), rootV = find(v).",
      "  If rootU == rootV, this edge creates a cycle.",
      "    Store it as candidate answer.",
      "  Else, union(rootU, rootV).",
      "Return the last candidate answer.",
    ],
    pseudocode: [
      "parent = array where parent[i] = i",
      "",
      "function find(x):",
      "  if parent[x] != x:",
      "    parent[x] = find(parent[x])",
      "  return parent[x]",
      "",
      "function union(x, y):",
      "  rootX = find(x), rootY = find(y)",
      "  if rootX != rootY:",
      "    parent[rootX] = rootY",
      "",
      "answer = null",
      "for [u, v] in edges:",
      "  if find(u) == find(v):",
      "    answer = [u, v]",
      "  else:",
      "    union(u, v)",
      "return answer",
    ],
    edgeCases: [
      "Test the smallest graph (3 nodes, 2 edges plus one).",
      "Test when the cycle involves all nodes.",
      "Test when multiple edges could be removed.",
      "Ensure you return the last such edge in input order.",
      "Check that node labels are 1-based.",
    ],
    finalNudge: [
      "Use Union-Find to track connected components.",
      "The first edge that connects two already-connected nodes creates a cycle.",
      "Since you need the last such edge, keep updating the answer.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use Union-Find to process edges in order. The edge that connects two nodes already in the same component creates a cycle. Return the last such edge found.",
  }),

  solutionLogic: {
    approach:
      "Use Union-Find to process edges in order. The edge that connects two nodes already in the same component creates a cycle. Return the last such edge found.",

    steps: [
      "Initialize parent array for Union-Find.",
      "For each edge [u, v]:",
      "  Find roots of u and v.",
      "  If roots are same, mark this edge as candidate.",
      "  Else, union the sets.",
      "Return the last candidate edge.",
    ],

    pseudocode: `parent = [0..n]

function find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]

function union(x, y):
    rootX = find(x)
    rootY = find(y)
    if rootX != rootY:
        parent[rootX] = rootY

answer = null

for [u, v] in edges:
    if find(u) == find(v):
        answer = [u, v]
    else:
        union(u, v)

return answer`,

    timeComplexity: "O(n * α(n)) where α is inverse Ackermann (nearly constant)",
    spaceComplexity: "O(n) for parent array",

    commonMistakes: [
      "Not using path compression in find.",
      "Returning the first cycle edge instead of the last.",
      "Using 0-based indexing when nodes are 1-based.",
      "Not initializing parent correctly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(edges) {
  const n = edges.length + 1;
  const parent = new Array(n + 1);
  for (let i = 1; i <= n; i++) parent[i] = i;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootX] = rootY;
    }
  }

  let answer = null;

  for (const [u, v] of edges) {
    if (find(u) === find(v)) {
      answer = [u, v];
    } else {
      union(u, v);
    }
  }

  return answer;
}`,

    python: `def solve(edges):
    n = len(edges) + 1
    parent = list(range(n + 1))

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        root_x = find(x)
        root_y = find(y)
        if root_x != root_y:
            parent[root_x] = root_y

    answer = None

    for u, v in edges:
        if find(u) == find(v):
            answer = [u, v]
        else:
            union(u, v)

    return answer`,
  },

  starterCode: {
    javascript: `function solve(edges) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(edges):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[][] edges) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<vector<int>> edges) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q036 = {
  id: "trie-002",
  slug: "word-search-ii",
  title: "Word Search II",
  topic: "tries",
  difficulty: "Hard",

  prompt:
    "Given an m x n board of characters and a list of words, return all words that can be formed by sequentially adjacent letters on the board. Each letter can be used only once per word. Adjacent cells are horizontally or vertically neighboring.",

  constraints: [
    "1 <= m, n <= 12",
    "1 <= words.length <= 3000",
    "1 <= words[i].length <= 10",
    "All words consist of lowercase English letters.",
  ],

  examples: [
    {
      input: `board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], words = ["oath","pea","eat","rain"]`,
      output: '["eat","oath"]',
      explanation: "'eat' and 'oath' can be formed on the board.",
    },
    {
      input: `board = [['a','a']], words = ["aaa"]`,
      output: '[]',
      explanation: "'aaa' cannot be formed with only 2 'a's.",
    },
  ],

  visibleTests: [
    {
      args: [
        [
          ["o", "a", "a", "n"],
          ["e", "t", "a", "e"],
          ["i", "h", "k", "r"],
          ["i", "f", "l", "v"],
        ],
        ["oath", "pea", "eat", "rain"],
      ],
      expected: ["eat", "oath"],
    },
    {
      args: [
        [
          ["a", "a"],
        ],
        ["aaa"],
      ],
      expected: [],
    },
    {
      args: [
        [
          ["a", "b"],
          ["c", "d"],
        ],
        ["ab", "cd"],
      ],
      expected: ["ab", "cd"],
    },
    {
      args: [
        [
          ["a"],
        ],
        ["a"],
      ],
      expected: ["a"],
    },
  ],

  hiddenTests: [
    {
      args: [
        [
          ["x", "y"],
          ["z", "w"],
        ],
        ["xy", "zw", "xzw"],
      ],
      expected: ["xy", "zw"],
    },
    {
      args: [
        [
          ["a", "b", "c"],
          ["d", "e", "f"],
          ["g", "h", "i"],
        ],
        ["abc", "def", "ghi", "beh"],
      ],
      expected: ["abc", "def", "ghi", "beh"],
    },
    {
      args: [
        [
          ["a", "a", "a"],
          ["a", "a", "a"],
          ["a", "a", "a"],
        ],
        ["aaa", "aaaa"],
      ],
      expected: ["aaa"],
    },
    {
      args: [
        [
          ["a", "b"],
          ["a", "b"],
        ],
        ["ab", "ba", "aba"],
      ],
      expected: ["ab", "ba", "aba"],
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for a word to be formed on the board?",
      "Can you reuse the same cell within one word?",
      "Try the first example and trace how 'eat' is formed.",
      "Notice that you need to search for multiple words efficiently.",
      "A trie can help prune the search early.",
    ],
    example: [
      "For 'oath' on the board:",
      "Start at 'o', then move to adjacent 'a', then 't', then 'h'.",
      "Each step must be to a neighboring cell.",
      "You cannot reuse the same cell in one word.",
      "If at any point the prefix is not in any word, stop.",
    ],
    simpleApproach: [
      "One method does DFS from every cell for every word.",
      "This is very slow: O(m*n * 4^L * W) where W is number of words.",
      "A better approach inserts all words into a trie.",
      "Then does DFS on the board, following trie paths.",
      "This prunes branches that cannot lead to any word.",
    ],
    repeatedWork: [
      "Many words share common prefixes.",
      "The trie stores these prefixes once.",
      "During DFS, if current path is not in trie, stop.",
      "This avoids exploring useless branches.",
      "Each cell is visited multiple times but with pruning.",
    ],
    pattern: [
      "This is a trie + backtracking pattern.",
      "Insert all words into a trie.",
      "From each cell, start DFS if its character is in trie.",
      "Mark cells as visited during current path.",
      "When you reach a trie node marked as end of word, add it to result.",
    ],
    dataStructure: [
      "Use a trie to store all words.",
      "Each trie node has children map and optional word marker.",
      "Use the board as a 2D array.",
      "Use a visited set or mark cells temporarily.",
      "No other complex structure is needed.",
    ],
    algorithm: [
      "Build a trie from all words.",
      "Initialize result set.",
      "For each cell (r, c) on board:",
      "  If board[r][c] is in trie root's children:",
      "    Start DFS from (r, c) with trie root.",
      "In DFS:",
      "  Mark current cell as visited.",
      "  Move to corresponding trie node.",
      "  If node marks end of a word, add word to result.",
      "  Explore 4 neighbors if their char is in node's children.",
      "  Backtrack: unmark current cell.",
      "Return result as array.",
    ],
    pseudocode: [
      "trie = buildTrie(words)",
      "result = empty set",
      "",
      "for r from 0 to m-1:",
      "  for c from 0 to n-1:",
      "    if board[r][c] in trie.root.children:",
      "      dfs(r, c, trie.root, '')",
      "",
      "function dfs(r, c, node, path):",
      "  ch = board[r][c]",
      "  node = node.children[ch]",
      "  path = path + ch",
      "  if node.isEnd:",
      "    result.add(path)",
      "  mark (r, c) as visited",
      "  for each neighbor (nr, nc):",
      "    if (nr, nc) valid and not visited and board[nr][nc] in node.children:",
      "      dfs(nr, nc, node, path)",
      "  unmark (r, c)",
    ],
    edgeCases: [
      "Test when no words can be formed.",
      "Test when all words can be formed.",
      "Test with very short boards (1x1, 1x2).",
      "Test with duplicate letters on board.",
      "Ensure you do not reuse cells within one word.",
    ],
    finalNudge: [
      "Build the trie first.",
      "Start DFS only if cell's character exists in trie.",
      "Prune branches that do not match any prefix.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Insert all words into a trie. From each cell, perform DFS following trie paths. Mark cells as visited during current path to avoid reuse. When a trie node marks end of a word, add it to result. Prune branches that do not match any prefix.",
  }),

  solutionLogic: {
    approach:
      "Insert all words into a trie. From each cell, perform DFS following trie paths. Mark cells as visited during current path to avoid reuse. When a trie node marks end of a word, add it to result. Prune branches that do not match any prefix.",

    steps: [
      "Build trie from all words.",
      "For each cell on board:",
      "  If cell's char is in trie root, start DFS.",
      "In DFS:",
      "  Move to corresponding trie node.",
      "  If node marks end of word, add to result.",
      "  Explore valid neighbors whose chars are in node's children.",
      "  Backtrack by unmarking current cell.",
      "Return result.",
    ],

    pseudocode: `trie = buildTrie(words)
result = set()

for r in 0..m-1:
    for c in 0..n-1:
        if board[r][c] in trie.root.children:
            dfs(r, c, trie.root, '')

function dfs(r, c, node, path):
    ch = board[r][c]
    node = node.children[ch]
    path = path + ch

    if node.isEnd:
        result.add(path)

    mark (r, c) visited

    for each neighbor (nr, nc):
        if valid(nr, nc) and not visited and board[nr][nc] in node.children:
            dfs(nr, nc, node, path)

    unmark (r, c)

return list(result)`,

    timeComplexity: "O(m * n * 4^L) in worst case, but much better with trie pruning",
    spaceComplexity: "O(total characters in words) for trie + O(L) for recursion",

    commonMistakes: [
      "Not marking cells as visited during DFS.",
      "Not backtracking (unmarking) after DFS.",
      "Not pruning when current prefix is not in trie.",
      "Adding duplicate words to result.",
    ],
  },

  referenceSolution: {
    javascript: `class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

function solve(board, words) {
  const root = new TrieNode();

  // Build trie
  for (const word of words) {
    let node = root;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.word = word;
  }

  const m = board.length;
  const n = board[0].length;
  const result = new Set();
  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  function dfs(r, c, node) {
    const ch = board[r][c];
    node = node.children[ch];

    if (!node) return;

    if (node.word) {
      result.add(node.word);
    }

    visited[r][c] = true;

    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
        const nextCh = board[nr][nc];
        if (nextCh in node.children) {
          dfs(nr, nc, node);
        }
      }
    }

    visited[r][c] = false;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] in root.children) {
        dfs(r, c, root);
      }
    }
  }

  return Array.from(result);
}`,

    python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None

def solve(board, words):
    root = TrieNode()

    # Build trie
    for word in words:
        node = root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.word = word

    m, n = len(board), len(board[0])
    result = set()
    visited = [[False] * n for _ in range(m)]

    def dfs(r, c, node):
        ch = board[r][c]
        node = node.children[ch]

        if not node:
            return

        if node.word:
            result.add(node.word)

        visited[r][c] = True

        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and not visited[nr][nc]:
                next_ch = board[nr][nc]
                if next_ch in node.children:
                    dfs(nr, nc, node)

        visited[r][c] = False

    for r in range(m):
        for c in range(n):
            if board[r][c] in root.children:
                dfs(r, c, root)

    return list(result)`,
  },

  starterCode: {
    javascript: `function solve(board, words) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(board, words):
    # Write your Python solution here.
    pass`,
    java: `public static String[] solve(String[][] board, String[] words) {
  // Write your Java solution here.
  return new String[]{};
}`,
    cpp: `vector<string> solve(vector<vector<string>> board, vector<string> words) {
  // Write your C++ solution here.
  return vector<string>{};
}`,
  },
};


const Q037 = {
  id: "adv-001",
  slug: "range-sum-query-mutable",
  title: "Range Sum Query – Mutable (Segment Tree / Fenwick)",
  topic: "advanced-structures",
  difficulty: "Hard",

  prompt:
    "Implement a data structure that supports two operations on an integer array nums:\n1. update(index, val): Update the element at index to val.\n2. sumRange(left, right): Return the sum of elements from index left to right inclusive.\n\nDesign it so that both operations are efficient (better than O(n) per operation).",

  constraints: [
    "1 <= nums.length <= 10000",
    "-1000 <= nums[i] <= 1000",
    "0 <= index < nums.length",
    "0 <= left <= right < nums.length",
    "At most 10000 calls to update and sumRange combined.",
  ],

  examples: [
    {
      input: "nums = [1, 3, 5], sumRange(0, 2), update(1, 2), sumRange(0, 2)",
      output: "9, then 8",
      explanation:
        "Initial sum [0..2] = 1+3+5 = 9. After updating index 1 to 2, array becomes [1,2,5], sum = 8.",
    },
  ],

  visibleTests: [
    {
      args: [[1, 3, 5], "sumRange", 0, 2],
      expected: 9,
      op: "sumRange",
    },
    {
      args: [[1, 3, 5], "update", 1, 2, "sumRange", 0, 2],
      expected: 8,
      op: "sumRangeAfterUpdate",
    },
    {
      args: [[0, 0, 0, 0], "sumRange", 0, 3],
      expected: 0,
      op: "sumRange",
    },
    {
      args: [[1, 2, 3, 4], "sumRange", 1, 3],
      expected: 9,
      op: "sumRange",
    },
  ],

  hiddenTests: [
    {
      args: [[1, 2, 3, 4, 5], "update", 2, 10, "sumRange", 0, 4],
      expected: 20,
      op: "sumRangeAfterUpdate",
    },
    {
      args: [[-1, -2, -3], "sumRange", 0, 2],
      expected: -6,
      op: "sumRange",
    },
    {
      args: [[10, 20, 30], "update", 0, 5, "sumRange", 0, 2],
      expected: 55,
      op: "sumRangeAfterUpdate",
    },
    {
      args: [[1, 1, 1, 1, 1], "update", 3, 5, "sumRange", 2, 4],
      expected: 7,
      op: "sumRangeAfterUpdate",
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What operations must your data structure support?",
      "Is a simple array with linear scan efficient enough?",
      "Try the example and trace what changes after update.",
      "You need both point update and range sum to be fast.",
      "Think about a structure that stores partial sums.",
    ],
    example: [
      "For [1,3,5], sumRange(0,2) = 9.",
      "After update(1,2), array becomes [1,2,5].",
      "New sumRange(0,2) = 8.",
      "A naive approach recomputes sum in O(n).",
      "You need something like O(log n) per operation.",
    ],
    simpleApproach: [
      "One method uses a plain array.",
      "update is O(1), but sumRange is O(n).",
      "With many queries, this becomes slow.",
      "A Segment Tree or Fenwick Tree can do both in O(log n).",
      "These store partial sums in a tree structure.",
    ],
    repeatedWork: [
      "Many range sums overlap in the indices they cover.",
      "A tree can store sums of segments.",
      "Each node represents a range [l, r].",
      "Update affects only O(log n) nodes.",
      "Query combines O(log n) precomputed sums.",
    ],
    pattern: [
      "This is a Segment Tree / Fenwick Tree pattern.",
      "Build a tree where each node stores a segment sum.",
      "Update changes leaf and updates path to root.",
      "Query sums relevant segments.",
      "Both operations are O(log n).",
    ],
    dataStructure: [
      "Use a Segment Tree (array-based or node-based).",
      "Or use a Fenwick Tree (Binary Indexed Tree).",
      "Both support point update and prefix/range sum.",
      "Input is an integer array.",
      "Operations are update and sumRange.",
    ],
    algorithm: [
      "Build Segment Tree from nums.",
      "For update(i, val):",
      "  Update leaf, then update ancestors.",
      "For sumRange(l, r):",
      "  Query tree for sum in [l, r].",
      "Both use recursive or iterative tree traversal.",
    ],
    pseudocode: [
      "// Segment Tree approach",
      "tree = array of size 4*n",
      "",
      "function build(node, start, end):",
      "  if start == end:",
      "    tree[node] = nums[start]",
      "  else:",
      "    mid = (start + end) // 2",
      "    build(2*node, start, mid)",
      "    build(2*node+1, mid+1, end)",
      "    tree[node] = tree[2*node] + tree[2*node+1]",
      "",
      "function update(node, start, end, idx, val):",
      "  if start == end:",
      "    tree[node] = val",
      "  else:",
      "    mid = (start + end) // 2",
      "    if idx <= mid: update(2*node, start, mid, idx, val)",
      "    else: update(2*node+1, mid+1, end, idx, val)",
      "    tree[node] = tree[2*node] + tree[2*node+1]",
      "",
      "function query(node, start, end, l, r):",
      "  if r < start or end < l: return 0",
      "  if l <= start and end <= r: return tree[node]",
      "  mid = (start + end) // 2",
      "  return query(2*node, start, mid, l, r) +",
      "         query(2*node+1, mid+1, end, l, r)",
    ],
    edgeCases: [
      "Test when left == right (single element).",
      "Test when left == 0 and right == n-1 (full array).",
      "Test multiple updates followed by queries.",
      "Test with negative numbers.",
      "Ensure indices are within bounds.",
    ],
    finalNudge: [
      "Build the tree once from initial array.",
      "For update, change leaf and update path to root.",
      "For query, combine relevant segment sums.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a Segment Tree (or Fenwick Tree) to store partial sums. Each node represents a range. Update modifies a leaf and updates ancestors. Query combines O(log n) nodes to get range sum.",
  }),

  solutionLogic: {
    approach:
      "Use a Segment Tree (or Fenwick Tree) to store partial sums. Each node represents a range. Update modifies a leaf and updates ancestors. Query combines O(log n) nodes to get range sum.",

    steps: [
      "Build Segment Tree from nums.",
      "For update(i, val): update leaf and ancestors.",
      "For sumRange(l, r): query tree for sum in [l, r].",
      "Both operations traverse O(log n) nodes.",
    ],

    pseudocode: `build(node, start, end):
    if start == end:
        tree[node] = nums[start]
    else:
        mid = (start + end) // 2
        build(2*node, start, mid)
        build(2*node+1, mid+1, end)
        tree[node] = tree[2*node] + tree[2*node+1]

update(node, start, end, idx, val):
    if start == end:
        tree[node] = val
    else:
        mid = (start + end) // 2
        if idx <= mid:
            update(2*node, start, mid, idx, val)
        else:
            update(2*node+1, mid+1, end, idx, val)
        tree[node] = tree[2*node] + tree[2*node+1]

query(node, start, end, l, r):
    if r < start or end < l:
        return 0
    if l <= start and end <= r:
        return tree[node]
    mid = (start + end) // 2
    return query(2*node, start, mid, l, r) +
           query(2*node+1, mid+1, end, l, r)`,

    timeComplexity: "O(n) build, O(log n) per update/query",
    spaceComplexity: "O(n) for the tree",

    commonMistakes: [
      "Using wrong segment boundaries in recursion.",
      "Not updating ancestors after leaf update.",
      "Mixing up 0-based and 1-based indexing.",
      "Querying incorrect ranges.",
    ],
  },

  referenceSolution: {
    javascript: `class NumArray {
  constructor(nums) {
    const n = nums.length;
    this.n = n;
    this.tree = new Array(4 * n).fill(0);
    this.build(nums, 1, 0, n - 1);
  }

  build(nums, node, start, end) {
    if (start === end) {
      this.tree[node] = nums[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this.build(nums, 2 * node, start, mid);
      this.build(nums, 2 * node + 1, mid + 1, end);
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    }
  }

  update(node, start, end, idx, val) {
    if (start === end) {
      this.tree[node] = val;
    } else {
      const mid = Math.floor((start + end) / 2);
      if (idx <= mid) {
        this.update(2 * node, start, mid, idx, val);
      } else {
        this.update(2 * node + 1, mid + 1, end, idx, val);
      }
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    }
  }

  query(node, start, end, l, r) {
    if (r < start || end < l) {
      return 0;
    }
    if (l <= start && end <= r) {
      return this.tree[node];
    }
    const mid = Math.floor((start + end) / 2);
    return (
      this.query(2 * node, start, mid, l, r) +
      this.query(2 * node + 1, mid + 1, end, l, r)
    );
  }

  updateIndex(idx, val) {
    this.update(1, 0, this.n - 1, idx, val);
  }

  sumRange(left, right) {
    return this.query(1, 0, this.n - 1, left, right);
  }
}

// Wrapper for the expected function signature
function solve(nums, op, ...args) {
  const arr = new NumArray(nums);
  if (op === "sumRange") {
    const [l, r] = args;
    return arr.sumRange(l, r);
  } else if (op === "update") {
    const [idx, val, l, r] = args;
    arr.updateIndex(idx, val);
    return arr.sumRange(l, r);
  }
}`,

    python: `class NumArray:
    def __init__(self, nums):
        self.n = len(nums)
        self.tree = [0] * (4 * self.n)
        self._build(nums, 1, 0, self.n - 1)

    def _build(self, nums, node, start, end):
        if start == end:
            self.tree[node] = nums[start]
        else:
            mid = (start + end) // 2
            self._build(nums, 2 * node, start, mid)
            self._build(nums, 2 * node + 1, mid + 1, end)
            self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def _update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if idx <= mid:
                self._update(2 * node, start, mid, idx, val)
            else:
                self._update(2 * node + 1, mid + 1, end, idx, val)
            self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def _query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        return (
            self._query(2 * node, start, mid, l, r) +
            self._query(2 * node + 1, mid + 1, end, l, r)
        )

    def update(self, idx, val):
        self._update(1, 0, self.n - 1, idx, val)

    def sumRange(self, left, right):
        return self._query(1, 0, self.n - 1, left, right)

def solve(nums, op, *args):
    arr = NumArray(nums)
    if op == "sumRange":
        l, r = args
        return arr.sumRange(l, r)
    elif op == "update":
        idx, val, l, r = args
        arr.update(idx, val)
        return arr.sumRange(l, r)`,
  },

  starterCode: {
    javascript: `function solve(nums, op, ...args) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, op, *args):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] arg0, String arg1, int arg2, int arg3) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> arg0, string arg1, int arg2, int arg3) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q038 = {
  id: "math-002",
  slug: "count-primes",
  title: "Count Primes",
  topic: "math",
  difficulty: "Medium",

  prompt:
    "Given a non-negative integer n, return the number of prime numbers less than n.",

  constraints: [
    "0 <= n <= 5 * 10^6",
  ],

  examples: [
    {
      input: "n = 10",
      output: "4",
      explanation: "Primes less than 10 are 2, 3, 5, 7.",
    },
    {
      input: "n = 0",
      output: "0",
      explanation: "No primes less than 0.",
    },
    {
      input: "n = 1",
      output: "0",
      explanation: "No primes less than 1.",
    },
  ],

  visibleTests: [
    { args: [10], expected: 4 },
    { args: [0], expected: 0 },
    { args: [1], expected: 0 },
    { args: [2], expected: 0 },
  ],

  hiddenTests: [
    { args: [3], expected: 1 },
    { args: [5], expected: 2 },
    { args: [20], expected: 8 },
    { args: [100], expected: 25 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a prime number?",
      "Are you counting primes less than n or up to n?",
      "Try the first example and list primes less than 10.",
      "A naive method checks each number for primality.",
      "You need a faster method for large n.",
    ],
    example: [
      "For n = 10, primes < 10 are 2, 3, 5, 7.",
      "Count is 4.",
      "For n = 3, primes < 3 are [2].",
      "For n = 2, primes < 2 are [] (2 is not less than 2).",
      "Notice you can mark multiples of primes.",
    ],
    simpleApproach: [
      "One method checks each number from 2 to n-1 for primality.",
      "For each number, test divisibility up to sqrt(num).",
      "This is O(n * sqrt(n)) and too slow for 5*10^6.",
      "A better method is the Sieve of Eratosthenes.",
      "It marks non-primes in O(n log log n).",
    ],
    repeatedWork: [
      "Instead of testing each number individually, mark multiples.",
      "Start from 2, mark all its multiples as non-prime.",
      "Move to next unmarked number, mark its multiples.",
      "Continue up to sqrt(n).",
      "Remaining unmarked numbers are prime.",
    ],
    pattern: [
      "This is the Sieve of Eratosthenes pattern.",
      "Create a boolean array isPrime[0..n-1].",
      "Initialize all as true except 0 and 1.",
      "For each prime p, mark multiples starting from p*p.",
      "Count unmarked numbers at the end.",
    ],
    dataStructure: [
      "Use a boolean array of size n.",
      "No other complex structure is needed.",
      "Input is a single integer n.",
      "Output is a single integer (count).",
      "Array indices represent numbers.",
    ],
    algorithm: [
      "If n <= 2, return 0.",
      "Create isPrime array of size n, initialize true.",
      "Set isPrime[0] = isPrime[1] = false.",
      "For p from 2 to sqrt(n):",
      "  If isPrime[p] is true:",
      "    For multiple from p*p to n-1 step p:",
      "      Set isPrime[multiple] = false.",
      "Count and return number of true entries.",
    ],
    pseudocode: [
      "if n <= 2: return 0",
      "isPrime = array of size n, all true",
      "isPrime[0] = isPrime[1] = false",
      "",
      "for p from 2 to floor(sqrt(n)):",
      "  if isPrime[p]:",
      "    for multiple from p*p to n-1 step p:",
      "      isPrime[multiple] = false",
      "",
      "count = 0",
      "for i from 2 to n-1:",
      "  if isPrime[i]: count++",
      "return count",
    ],
    edgeCases: [
      "Test n = 0, 1, 2.",
      "Test small n like 3, 4, 5.",
      "Test larger n like 100, 1000.",
      "Ensure you count primes less than n, not including n.",
      "Check that 0 and 1 are not counted as prime.",
    ],
    finalNudge: [
      "Use a boolean array to mark non-primes.",
      "Start marking multiples from p*p, not 2*p.",
      "Count remaining true entries.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use the Sieve of Eratosthenes. Mark all multiples of each prime starting from its square. Count numbers that remain marked as prime.",
  }),

  solutionLogic: {
    approach:
      "Use the Sieve of Eratosthenes. Mark all multiples of each prime starting from its square. Count numbers that remain marked as prime.",

    steps: [
      "If n <= 2, return 0.",
      "Create isPrime array of size n, all true.",
      "Set isPrime[0] = isPrime[1] = false.",
      "For p from 2 to sqrt(n):",
      "  If isPrime[p], mark multiples from p*p to n-1.",
      "Count and return number of true entries.",
    ],

    pseudocode: `if n <= 2:
    return 0

isPrime = [true] * n
isPrime[0] = isPrime[1] = false

for p from 2 to floor(sqrt(n)):
    if isPrime[p]:
        for multiple from p*p to n-1 step p:
            isPrime[multiple] = false

count = 0
for i from 2 to n-1:
    if isPrime[i]:
        count++

return count`,

    timeComplexity: "O(n log log n)",
    spaceComplexity: "O(n) for the boolean array",

    commonMistakes: [
      "Starting marking from 2*p instead of p*p.",
      "Including n itself in the count.",
      "Treating 0 or 1 as prime.",
      "Using wrong loop bounds for p.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(n) {
  if (n <= 2) return 0;

  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let p = 2; p * p < n; p++) {
    if (isPrime[p]) {
      for (let multiple = p * p; multiple < n; multiple += p) {
        isPrime[multiple] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }

  return count;
}`,

    python: `import math

def solve(n):
    if n <= 2:
        return 0

    is_prime = [True] * n
    is_prime[0] = is_prime[1] = False

    for p in range(2, int(math.isqrt(n)) + 1):
        if is_prime[p]:
            for multiple in range(p * p, n, p):
                is_prime[multiple] = False

    return sum(is_prime)`,
  },

  starterCode: {
    javascript: `function solve(n) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(n):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int n) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(int n) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q039 = {
  id: "bt-002",
  slug: "n-queens",
  title: "N-Queens",
  topic: "backtracking",
  difficulty: "Hard",

  prompt:
    "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution is represented as an array of strings, where 'Q' denotes a queen and '.' denotes an empty cell.",

  constraints: [
    "1 <= n <= 9",
  ],

  examples: [
    {
      input: "n = 4",
      output: `[
  [".Q..","...Q","Q...","..Q."],
  ["..Q.","Q...","...Q",".Q.."]
]`,
      explanation: "Two distinct solutions for 4-queens.",
    },
    {
      input: "n = 1",
      output: '[["Q"]]',
      explanation: "Only one queen on a 1x1 board.",
    },
  ],

  visibleTests: [
    {
      args: [4], expected: [
        [".Q..", "...Q", "Q...", "..Q."],
        ["..Q.", "Q...", "...Q", ".Q.."],
      ]
    },
    { args: [1], expected: [["Q"]] },
    { args: [2], expected: [] },
    { args: [3], expected: [] },
  ],

  hiddenTests: [
    { args: [5], expected: "10 solutions (structure varies)" },
    { args: [6], expected: "4 solutions" },
    { args: [7], expected: "40 solutions" },
    { args: [8], expected: "92 solutions" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for two queens to attack each other?",
      "Which directions must be checked: rows, columns, diagonals?",
      "Try n = 4 and place queens row by row.",
      "You need to place exactly n queens, one per row.",
      "This is a classic backtracking problem.",
    ],
    example: [
      "For n = 4, place a queen in row 0, some column.",
      "Then place a queen in row 1, avoiding attacks.",
      "Continue until row 3 or until no valid column exists.",
      "If stuck, backtrack and try a different column.",
      "Each complete placement is one solution.",
    ],
    simpleApproach: [
      "One method tries all possible placements of n queens.",
      "That is O(n^n) or worse, too slow.",
      "Backtracking places queens row by row.",
      "At each row, try each column that is safe.",
      "Prune branches where queens attack.",
    ],
    repeatedWork: [
      "For each row, you choose a column for the queen.",
      "You must ensure no column, diagonal, or anti-diagonal conflict.",
      "Use sets or boolean arrays to track occupied lines.",
      "When moving to next row, update these trackers.",
      "On backtrack, undo the updates.",
    ],
    pattern: [
      "This is a standard backtracking pattern with constraints.",
      "State: current row, current board, occupied columns/diagonals.",
      "Base case: row == n, a valid placement is found.",
      "Recursive case: try each safe column in current row.",
      "Backtrack by removing queen and updating trackers.",
    ],
    dataStructure: [
      "Use a 2D board or array of strings.",
      "Use sets or boolean arrays for columns, diagonals, anti-diagonals.",
      "Diagonal index can be (row - col), anti-diagonal (row + col).",
      "No other complex structure is needed.",
      "Input is integer n, output is array of board configurations.",
    ],
    algorithm: [
      "Initialize empty board (n x n with '.').",
      "Initialize sets for cols, diags, antiDiags.",
      "Define backtrack(row):",
      "  If row == n, add current board to solutions.",
      "  For each col from 0 to n-1:",
      "    If col, (row-col), (row+col) are free:",
      "      Place queen at (row, col).",
      "      Mark col, diag, antiDiag as occupied.",
      "      backtrack(row + 1).",
      "      Remove queen, unmark col, diag, antiDiag.",
      "Return all solutions.",
    ],
    pseudocode: [
      "solutions = []",
      "board = n x n filled with '.'",
      "cols = empty set",
      "diags = empty set  // row - col",
      "antiDiags = empty set  // row + col",
      "",
      "function backtrack(row):",
      "  if row == n:",
      "    solutions.push(copy of board)",
      "    return",
      "  for col from 0 to n-1:",
      "    d = row - col",
      "    ad = row + col",
      "    if col in cols or d in diags or ad in antiDiags:",
      "      continue",
      "    place queen at (row, col)",
      "    add col, d, ad to sets",
      "    backtrack(row + 1)",
      "    remove queen, remove col, d, ad from sets",
      "",
      "backtrack(0)",
      "return solutions",
    ],
    edgeCases: [
      "Test n = 1 (one solution).",
      "Test n = 2, 3 (no solutions).",
      "Test n = 4 (two solutions).",
      "Ensure board is represented correctly as array of strings.",
      "Check that no two queens attack each other in any solution.",
    ],
    finalNudge: [
      "Place queens row by row.",
      "Track occupied columns and diagonals.",
      "Backtrack when no safe column exists.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use backtracking to place queens row by row. Track occupied columns, diagonals, and anti-diagonals. When a full placement is found (n queens), add it to solutions. Backtrack to explore other possibilities.",
  }),

  solutionLogic: {
    approach:
      "Use backtracking to place queens row by row. Track occupied columns, diagonals, and anti-diagonals. When a full placement is found (n queens), add it to solutions. Backtrack to explore other possibilities.",

    steps: [
      "Initialize board and trackers.",
      "Define backtrack(row).",
      "If row == n, save current board.",
      "For each column, check if safe.",
      "Place queen, update trackers, recurse.",
      "Backtrack: remove queen, undo trackers.",
    ],

    pseudocode: `solutions = []
board = n x n filled with '.'
cols = set()
diags = set()      // row - col
antiDiags = set()  // row + col

function backtrack(row):
    if row == n:
        solutions.push(copy of board)
        return

    for col from 0 to n-1:
        d = row - col
        ad = row + col

        if col in cols or d in diags or ad in antiDiags:
            continue

        place queen at (row, col)
        cols.add(col); diags.add(d); antiDiags.add(ad)

        backtrack(row + 1)

        remove queen
        cols.delete(col); diags.delete(d); antiDiags.delete(ad)

backtrack(0)
return solutions`,

    timeComplexity: "O(n!) in practice, with pruning",
    spaceComplexity: "O(n^2) for board + O(n) for trackers",

    commonMistakes: [
      "Not checking all three constraints (col, diag, anti-diag).",
      "Using wrong diagonal indexing.",
      "Not copying the board when saving a solution.",
      "Forgetting to backtrack (undo changes).",
    ],
  },

  referenceSolution: {
    javascript: `function solve(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const cols = new Set();
  const diags = new Set();
  const antiDiags = new Set();

  function backtrack(row) {
    if (row === n) {
      solutions.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      const d = row - col;
      const ad = row + col;

      if (cols.has(col) || diags.has(d) || antiDiags.has(ad)) {
        continue;
      }

      board[row][col] = 'Q';
      cols.add(col);
      diags.add(d);
      antiDiags.add(ad);

      backtrack(row + 1);

      board[row][col] = '.';
      cols.delete(col);
      diags.delete(d);
      antiDiags.delete(ad);
    }
  }

  backtrack(0);
  return solutions;
}`,

    python: `def solve(n):
    solutions = []
    board = [['.'] * n for _ in range(n)]
    cols = set()
    diags = set()      # row - col
    anti_diags = set() # row + col

    def backtrack(row):
        if row == n:
            solutions.append([''.join(r) for r in board])
            return

        for col in range(n):
            d = row - col
            ad = row + col

            if col in cols or d in diags or ad in anti_diags:
                continue

            board[row][col] = 'Q'
            cols.add(col)
            diags.add(d)
            anti_diags.add(ad)

            backtrack(row + 1)

            board[row][col] = '.'
            cols.remove(col)
            diags.remove(d)
            anti_diags.remove(ad)

    backtrack(0)
    return solutions`,
  },

  starterCode: {
    javascript: `function solve(n) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(n):
    # Write your Python solution here.
    pass`,
    java: `public static String[][] solve(int n) {
  // Write your Java solution here.
  return new String[][]{};
}`,
    cpp: `vector<vector<string>> solve(int n) {
  // Write your C++ solution here.
  return vector<vector<string>>{};
}`,
  },
};


const Q040 = {
  id: "dp-003",
  slug: "longest-increasing-subsequence",
  title: "Longest Increasing Subsequence",
  topic: "dynamic-programming",
  difficulty: "Hard",

  prompt:
    "Given an integer array nums, return the length of the longest strictly increasing subsequence. A subsequence is derived by deleting some (or no) elements without changing the order of the remaining elements.",

  constraints: [
    "1 <= nums.length <= 2500",
    "-10^4 <= nums[i] <= 10^4",
  ],

  examples: [
    {
      input: "nums = [10,9,2,5,3,7,101,18]",
      output: "4",
      explanation: "One longest increasing subsequence is [2,3,7,101].",
    },
    {
      input: "nums = [0,1,0,3,2,3]",
      output: "4",
      explanation: "One longest increasing subsequence is [0,1,2,3].",
    },
  ],

  visibleTests: [
    { args: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
    { args: [[0, 1, 0, 3, 2, 3]], expected: 4 },
    { args: [[7, 7, 7, 7]], expected: 1 },
    { args: [[1]], expected: 1 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 1 },
    { args: [[1, 3, 6, 7, 9, 4, 10, 5, 6]], expected: 6 },
    { args: [[-1, -2, -3, -4]], expected: 1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "Are you asked for a subsequence or a subarray?",
      "Must the subsequence be contiguous?",
      "Try the first example and list some increasing subsequences.",
      "Notice that you can skip elements.",
      "You need the maximum length among all such subsequences.",
    ],
    example: [
      "For [10,9,2,5,3,7,101,18]:",
      "[2,5,7,101] is increasing, length 4.",
      "[2,3,7,101] is also increasing, length 4.",
      "You cannot reorder elements.",
      "You want the longest such sequence.",
    ],
    simpleApproach: [
      "One method uses DP where dp[i] is LIS ending at i.",
      "For each i, check all j < i with nums[j] < nums[i].",
      "dp[i] = 1 + max(dp[j]) over such j.",
      "This is O(n^2) time.",
      "There is also an O(n log n) method using patience sorting.",
    ],
    repeatedWork: [
      "For each position, you look back at all previous positions.",
      "If nums[j] < nums[i], you can extend the subsequence ending at j.",
      "You take the best among all such extensions.",
      "This avoids recomputing from scratch.",
      "Total work is O(n^2).",
    ],
    pattern: [
      "This is a classic 1D DP pattern.",
      "dp[i] = length of LIS ending at index i.",
      "Base: dp[i] = 1 (the element itself).",
      "Transition: dp[i] = 1 + max(dp[j]) for j < i and nums[j] < nums[i].",
      "Answer is max(dp).",
    ],
    dataStructure: [
      "Use an array dp of length n.",
      "No other complex structure is needed for O(n^2) solution.",
      "Input is an integer array.",
      "Output is a single integer.",
      "dp[i] depends on earlier dp values.",
    ],
    algorithm: [
      "Create dp array of length n, initialize all to 1.",
      "For i from 1 to n-1:",
      "  For j from 0 to i-1:",
      "    If nums[j] < nums[i]:",
      "      dp[i] = max(dp[i], dp[j] + 1).",
      "Return max(dp).",
    ],
    pseudocode: [
      "n = nums.length",
      "dp = array of size n filled with 1",
      "",
      "for i from 1 to n-1:",
      "  for j from 0 to i-1:",
      "    if nums[j] < nums[i]:",
      "      dp[i] = max(dp[i], dp[j] + 1)",
      "",
      "return max(dp)",
    ],
    edgeCases: [
      "Test when all elements are equal.",
      "Test when array is strictly decreasing.",
      "Test when array is strictly increasing.",
      "Test with negative numbers.",
      "Ensure you handle single-element arrays.",
    ],
    finalNudge: [
      "Initialize dp[i] = 1 for all i.",
      "For each i, look back at all j < i.",
      "Update dp[i] when nums[j] < nums[i].",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use DP where dp[i] is the length of the longest increasing subsequence ending at index i. For each i, extend the best subsequence from earlier indices j where nums[j] < nums[i]. The answer is the maximum value in dp.",
  }),

  solutionLogic: {
    approach:
      "Use DP where dp[i] is the length of the longest increasing subsequence ending at index i. For each i, extend the best subsequence from earlier indices j where nums[j] < nums[i]. The answer is the maximum value in dp.",

    steps: [
      "Create dp array of length n, all 1.",
      "For i from 1 to n-1:",
      "  For j from 0 to i-1:",
      "    If nums[j] < nums[i]:",
      "      dp[i] = max(dp[i], dp[j] + 1).",
      "Return max(dp).",
    ],

    pseudocode: `n = nums.length
dp = [1] * n

for i from 1 to n-1:
    for j from 0 to i-1:
        if nums[j] < nums[i]:
            dp[i] = max(dp[i], dp[j] + 1)

return max(dp)`,

    timeComplexity: "O(n^2)",
    spaceComplexity: "O(n) for dp array",

    commonMistakes: [
      "Using non-strict increasing (allowing equal values).",
      "Returning dp[n-1] instead of max(dp).",
      "Not initializing dp[i] to 1.",
      "Mixing up i and j in the condition.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;
  if (n === 0) return 0;

  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}`,

    python: `def solve(nums):
    n = len(nums)
    if n == 0:
        return 0

    dp = [1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q041 = {
  id: "arr-005",
  slug: "container-with-most-water",
  title: "Container With Most Water",
  topic: "arrays",
  difficulty: "Medium",

  prompt:
    "Given an array of non-negative integers height where each element represents a vertical line at that index with height height[i], find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water the container can hold.",

  constraints: [
    "2 <= height.length <= 100000",
    "0 <= height[i] <= 10000",
  ],

  examples: [
    {
      input: "height = [1,8,6,2,5,4,8,3,7]",
      output: "49",
      explanation:
        "The container formed by indices 1 and 8 (heights 8 and 7) holds min(8,7) * (8-1) = 49 units of water.",
    },
    {
      input: "height = [1,1]",
      output: "1",
      explanation: "Only one possible container, min(1,1)*1 = 1.",
    },
  ],

  visibleTests: [
    { args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
    { args: [[1, 1]], expected: 1 },
    { args: [[4, 3, 2, 1, 4]], expected: 16 },
    { args: [[1, 2, 1]], expected: 2 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[5, 4, 3, 2, 1]], expected: 6 },
    { args: [[1, 100, 100, 1]], expected: 100 },
    { args: [[2, 3, 10, 5, 7, 8, 9]], expected: 36 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What determines the amount of water a container can hold?",
      "How is the width of the container calculated?",
      "Try the first example and compute water for a few pairs.",
      "Notice that height is limited by the shorter line.",
      "You need the maximum over all pairs of lines.",
    ],
    example: [
      "For heights [1,8,6,2,5,4,8,3,7]:",
      "Consider lines at indices 1 (height 8) and 8 (height 7).",
      "Width = 8 - 1 = 7.",
      "Height = min(8, 7) = 7.",
      "Area = 7 * 7 = 49.",
    ],
    simpleApproach: [
      "One method checks all pairs of lines.",
      "For each pair (i, j), compute area = min(h[i], h[j]) * (j - i).",
      "Track the maximum area.",
      "This is O(n^2) and too slow for n up to 100000.",
      "A two-pointer approach can do it in O(n).",
    ],
    repeatedWork: [
      "Start with the widest possible container (first and last lines).",
      "To potentially increase area, you must move the shorter line inward.",
      "Moving the taller line cannot increase height and reduces width.",
      "So always move the pointer at the shorter line.",
      "Repeat until pointers meet.",
    ],
    pattern: [
      "This is a two-pointer pattern on an array.",
      "Initialize left = 0, right = n - 1.",
      "Compute area, update maximum.",
      "Move the pointer at the shorter line.",
      "Continue until left < right.",
    ],
    dataStructure: [
      "Use the input array of heights.",
      "Use two indices: left and right.",
      "No extra data structure is needed.",
      "Input is an integer array.",
      "Output is a single integer (max area).",
    ],
    algorithm: [
      "Set left = 0, right = n - 1, maxArea = 0.",
      "While left < right:",
      "  width = right - left",
      "  h = min(height[left], height[right])",
      "  area = h * width",
      "  maxArea = max(maxArea, area)",
      "  If height[left] < height[right]: left++",
      "  Else: right--",
      "Return maxArea.",
    ],
    pseudocode: [
      "left = 0, right = n - 1",
      "maxArea = 0",
      "while left < right:",
      "  width = right - left",
      "  h = min(height[left], height[right])",
      "  area = h * width",
      "  maxArea = max(maxArea, area)",
      "  if height[left] < height[right]:",
      "    left++",
      "  else:",
      "    right--",
      "return maxArea",
    ],
    edgeCases: [
      "Test when there are only two lines.",
      "Test when all heights are equal.",
      "Test when heights are strictly increasing or decreasing.",
      "Test with very tall lines far apart.",
      "Ensure you use 0-based indexing correctly.",
    ],
    finalNudge: [
      "Start with the widest container.",
      "Always move the shorter line inward.",
      "Track the maximum area seen.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use two pointers at both ends. Compute area, then move the pointer at the shorter line inward. This greedy strategy works because moving the taller line cannot increase height and always reduces width.",
  }),

  solutionLogic: {
    approach:
      "Use two pointers at both ends. Compute area, then move the pointer at the shorter line inward. This greedy strategy works because moving the taller line cannot increase height and always reduces width.",

    steps: [
      "Set left = 0, right = n - 1, maxArea = 0.",
      "While left < right:",
      "  Compute width = right - left.",
      "  Compute h = min(height[left], height[right]).",
      "  area = h * width.",
      "  Update maxArea.",
      "  Move the pointer at the shorter line.",
      "Return maxArea.",
    ],

    pseudocode: `left = 0
right = n - 1
maxArea = 0

while left < right:
    width = right - left
    h = min(height[left], height[right])
    area = h * width
    maxArea = max(maxArea, area)

    if height[left] < height[right]:
        left++
    else:
        right--

return maxArea`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Moving the taller line instead of the shorter one.",
      "Using max instead of min for height.",
      "Forgetting to update maxArea.",
      "Stopping when left == right instead of left < right.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = h * width;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}`,

    python: `def solve(height):
    left, right = 0, len(height) - 1
    max_area = 0

    while left < right:
        width = right - left
        h = min(height[left], height[right])
        area = h * width

        max_area = max(max_area, area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area`,
  },

  starterCode: {
    javascript: `function solve(height) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(height):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] height) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> height) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q042 = {
  id: "str-003",
  slug: "minimum-window-substring",
  title: "Minimum Window Substring",
  topic: "strings",
  difficulty: "Hard",

  prompt:
    "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return an empty string.",

  constraints: [
    "1 <= s.length, t.length <= 100000",
    "s and t consist of uppercase and lowercase English letters.",
  ],

  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"',
      explanation:
        "The minimum window containing 'A', 'B', 'C' is 'BANC'.",
    },
    {
      input: 's = "a", t = "a"',
      output: '"a"',
      explanation: "Only one possible window.",
    },
    {
      input: 's = "a", t = "aa"',
      output: '""',
      explanation: "Not enough 'a' characters in s.",
    },
  ],

  visibleTests: [
    { args: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    { args: ["a", "a"], expected: "a" },
    { args: ["a", "aa"], expected: "" },
    { args: ["abc", "b"], expected: "b" },
  ],

  hiddenTests: [
    { args: ["abc", "abc"], expected: "abc" },
    { args: ["abc", "abcd"], expected: "" },
    { args: ["abbc", "abc"], expected: "abbc" },
    { args: ["abbc", "abcc"], expected: "" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for a window to contain all characters of t?",
      "Do you need to match the exact counts of characters?",
      "Try the first example and find a window that contains A, B, C.",
      "You need the smallest such window.",
      "Think about expanding and shrinking a window.",
    ],
    example: [
      "For s='ADOBECODEBANC', t='ABC':",
      "One valid window is 'ADOBEC' (contains A,B,C).",
      "A smaller one is 'BANC'.",
      "You cannot make it smaller and still have A,B,C.",
      "So answer is 'BANC'.",
    ],
    simpleApproach: [
      "One method checks all substrings of s.",
      "For each, check if it contains all characters of t.",
      "Track the minimum length valid window.",
      "This is O(n^3) or O(n^2) and too slow.",
      "A sliding window can do it in O(n).",
    ],
    repeatedWork: [
      "Maintain a window [left, right] over s.",
      "Expand right to include more characters.",
      "When window has all required characters, try to shrink from left.",
      "Track the minimum valid window seen.",
      "Use frequency maps for t and current window.",
    ],
    pattern: [
      "This is a sliding window with frequency counts pattern.",
      "Build a frequency map for t.",
      "Expand right, updating window counts.",
      "When all required counts are met, shrink from left.",
      "Update minimum window when valid.",
    ],
    dataStructure: [
      "Use two frequency maps (or arrays) for t and current window.",
      "Alternatively, use one map with a 'need' counter.",
      "No other complex structure is needed.",
      "Input is two strings, output is a string.",
      "Track left, right, and minimum window indices.",
    ],
    algorithm: [
      "Build frequency map need for t.",
      "Initialize left = 0, formed = 0, required = number of unique chars in t.",
      "Initialize minLen = infinity, minLeft = 0.",
      "For right from 0 to s.length - 1:",
      "  Add s[right] to window counts.",
      "  If s[right] count in window equals need[s[right]], increment formed.",
      "  While formed == required:",
      "    Update minLen and minLeft if current window is smaller.",
      "    Remove s[left] from window.",
      "    If count of s[left] falls below need[s[left]], decrement formed.",
      "    left++",
      "Return substring from minLeft with length minLen (or '' if none).",
    ],
    pseudocode: [
      "need = frequency map of t",
      "required = number of unique keys in need",
      "formed = 0",
      "windowCounts = empty map",
      "left = 0, minLen = infinity, minLeft = 0",
      "",
      "for right from 0 to s.length - 1:",
      "  ch = s[right]",
      "  windowCounts[ch]++",
      "  if ch in need and windowCounts[ch] == need[ch]:",
      "    formed++",
      "",
      "  while formed == required:",
      "    if (right - left + 1) < minLen:",
      "      minLen = right - left + 1",
      "      minLeft = left",
      "",
      "    removeCh = s[left]",
      "    windowCounts[removeCh]--",
      "    if removeCh in need and windowCounts[removeCh] < need[removeCh]:",
      "      formed--",
      "    left++",
      "",
      "if minLen == infinity: return ''",
      "else: return s.substring(minLeft, minLeft + minLen)",
    ],
    edgeCases: [
      "Test when t is longer than s.",
      "Test when no valid window exists.",
      "Test when s and t are identical.",
      "Test when t has duplicate characters.",
      "Ensure you handle case sensitivity.",
    ],
    finalNudge: [
      "Use frequency maps to track required and current counts.",
      "Expand right until all requirements are met.",
      "Then shrink left to minimize window while still valid.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a sliding window with frequency counts. Expand right to include characters, and when all required characters are present, shrink from left to find the minimum valid window. Track the smallest window seen.",
  }),

  solutionLogic: {
    approach:
      "Use a sliding window with frequency counts. Expand right to include characters, and when all required characters are present, shrink from left to find the minimum valid window. Track the smallest window seen.",

    steps: [
      "Build frequency map for t.",
      "Expand right, updating window counts.",
      "When all required characters are satisfied:",
      "  Update minimum window if current is smaller.",
      "  Shrink from left until window becomes invalid.",
      "Continue until end of s.",
      "Return minimum window substring.",
    ],

    pseudocode: `need = frequency map of t
required = number of unique keys in need
formed = 0
windowCounts = empty map
left = 0
minLen = infinity
minLeft = 0

for right from 0 to s.length - 1:
    ch = s[right]
    windowCounts[ch]++

    if ch in need and windowCounts[ch] == need[ch]:
        formed++

    while formed == required:
        if (right - left + 1) < minLen:
            minLen = right - left + 1
            minLeft = left

        removeCh = s[left]
        windowCounts[removeCh]--
        if removeCh in need and windowCounts[removeCh] < need[removeCh]:
            formed--
        left++

if minLen == infinity:
    return ''
else:
    return s.substring(minLeft, minLeft + minLen)`,

    timeComplexity: "O(n) where n is length of s",
    spaceComplexity: "O(1) (at most 52 letters for upper+lower)",

    commonMistakes: [
      "Not tracking exact counts (only presence).",
      "Shrinking too aggressively and losing validity.",
      "Not updating minimum window correctly.",
      "Forgetting to handle the case where no valid window exists.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s, t) {
  if (t.length > s.length) return '';

  const need = new Map();
  for (const ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  const required = need.size;
  let formed = 0;
  const windowCounts = new Map();

  let left = 0;
  let minLen = Infinity;
  let minLeft = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    windowCounts.set(ch, (windowCounts.get(ch) || 0) + 1);

    if (need.has(ch) && windowCounts.get(ch) === need.get(ch)) {
      formed++;
    }

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }

      const removeCh = s[left];
      windowCounts.set(removeCh, windowCounts.get(removeCh) - 1);

      if (need.has(removeCh) && windowCounts.get(removeCh) < need.get(removeCh)) {
        formed--;
      }

      left++;
    }
  }

  if (minLen === Infinity) return '';
  return s.substring(minLeft, minLeft + minLen);
}`,

    python: `from collections import Counter

def solve(s, t):
    if len(t) > len(s):
        return ''

    need = Counter(t)
    required = len(need)
    formed = 0
    window_counts = Counter()

    left = 0
    min_len = float('inf')
    min_left = 0

    for right, ch in enumerate(s):
        window_counts[ch] += 1

        if ch in need and window_counts[ch] == need[ch]:
            formed += 1

        while formed == required:
            if (right - left + 1) < min_len:
                min_len = right - left + 1
                min_left = left

            remove_ch = s[left]
            window_counts[remove_ch] -= 1

            if remove_ch in need and window_counts[remove_ch] < need[remove_ch]:
                formed -= 1

            left += 1

    return '' if min_len == float('inf') else s[min_left:min_left + min_len]`,
  },

  starterCode: {
    javascript: `function solve(s, t) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s, t):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(String s, String t) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(string s, string t) {
  // Write your C++ solution here.
  return "";
}`,
  },
};


const Q043 = {
  id: "hash-003",
  slug: "first-missing-positive",
  title: "First Missing Positive",
  topic: "hashing",
  difficulty: "Hard",

  prompt:
    "Given an unsorted integer array nums, return the smallest positive integer that is not present in nums. Solve it in O(n) time and using O(1) extra space.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-2^31 <= nums[i] <= 2^31 - 1",
  ],

  examples: [
    {
      input: "nums = [1,2,0]",
      output: "3",
      explanation: "1 and 2 are present, 3 is missing.",
    },
    {
      input: "nums = [3,4,-1,1]",
      output: "2",
      explanation: "1 is present, 2 is missing.",
    },
    {
      input: "nums = [7,8,9,11,12]",
      output: "1",
      explanation: "1 is missing.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 0]], expected: 3 },
    { args: [[3, 4, -1, 1]], expected: 2 },
    { args: [[7, 8, 9, 11, 12]], expected: 1 },
    { args: [[1]], expected: 2 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[-1, -2, -3]], expected: 1 },
    { args: [[2, 1]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 2 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the smallest positive integer?",
      "Are negative numbers and zero relevant?",
      "Try the first example and list positive integers present.",
      "You need the smallest positive integer not in the array.",
      "You are constrained to O(n) time and O(1) extra space.",
    ],
    example: [
      "For [1,2,0], positive integers present: 1, 2.",
      "Smallest missing positive is 3.",
      "For [3,4,-1,1], positives present: 1, 3, 4.",
      "Smallest missing positive is 2.",
      "For [7,8,9,...], 1 is missing.",
    ],
    simpleApproach: [
      "One method uses a hash set to store all numbers.",
      "Then check 1, 2, 3, ... until you find a missing one.",
      "This is O(n) time but O(n) space.",
      "To achieve O(1) space, you must use the array itself.",
      "Think about placing each number in its 'correct' position.",
    ],
    repeatedWork: [
      "For a number x in [1..n], its correct position is index x-1.",
      "You can swap numbers to their correct positions.",
      "After rearranging, scan to find first index where nums[i] != i+1.",
      "That i+1 is the missing positive.",
      "This uses the array itself as a hash map.",
    ],
    pattern: [
      "This is an in-place indexing / cyclic sort pattern.",
      "For each element, if it is in [1..n] and not in correct position, swap.",
      "Continue until all such elements are in correct positions or cannot be placed.",
      "Then scan to find first mismatch.",
      "Time is O(n), extra space O(1).",
    ],
    dataStructure: [
      "Use the input array itself.",
      "No extra data structure is needed.",
      "Input is an integer array.",
      "Output is a single integer.",
      "Indices represent potential positive integers.",
    ],
    algorithm: [
      "For i from 0 to n-1:",
      "  While nums[i] is in [1..n] and nums[i] != nums[nums[i]-1]:",
      "    Swap nums[i] with nums[nums[i]-1].",
      "After rearrangement:",
      "  For i from 0 to n-1:",
      "    If nums[i] != i+1, return i+1.",
      "If all match, return n+1.",
    ],
    pseudocode: [
      "n = nums.length",
      "for i from 0 to n-1:",
      "  while nums[i] in [1..n] and nums[i] != nums[nums[i]-1]:",
      "    swap nums[i] and nums[nums[i]-1]",
      "",
      "for i from 0 to n-1:",
      "  if nums[i] != i+1:",
      "    return i+1",
      "",
      "return n+1",
    ],
    edgeCases: [
      "Test when all numbers from 1..n are present.",
      "Test when no positive numbers are present.",
      "Test with duplicates.",
      "Test with negative numbers and zeros.",
      "Ensure you handle 1-based vs 0-based indexing.",
    ],
    finalNudge: [
      "Place each number x in [1..n] at index x-1 if possible.",
      "Then scan for first index where nums[i] != i+1.",
      "If all match, answer is n+1.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use the array itself as a hash map. For each number in [1..n], try to place it at index x-1 by swapping. After rearrangement, the first index i where nums[i] != i+1 gives the missing positive i+1.",
  }),

  solutionLogic: {
    approach:
      "Use the array itself as a hash map. For each number in [1..n], try to place it at index x-1 by swapping. After rearrangement, the first index i where nums[i] != i+1 gives the missing positive i+1.",

    steps: [
      "For each i, while nums[i] in [1..n] and not in correct position:",
      "  Swap nums[i] with nums[nums[i]-1].",
      "After rearrangement, scan array:",
      "  If nums[i] != i+1, return i+1.",
      "If all match, return n+1.",
    ],

    pseudocode: `n = nums.length

for i from 0 to n-1:
    while nums[i] in [1..n] and nums[i] != nums[nums[i]-1]:
        swap nums[i] and nums[nums[i]-1]

for i from 0 to n-1:
    if nums[i] != i+1:
        return i+1

return n+1`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1) extra space",

    commonMistakes: [
      "Not checking bounds before accessing nums[nums[i]-1].",
      "Creating infinite loops in the swap step.",
      "Forgetting to handle the case where all 1..n are present.",
      "Using extra space instead of in-place rearrangement.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= n &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      const targetIdx = nums[i] - 1;
      [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}`,

    python: `def solve(nums):
    n = len(nums)

    for i in range(n):
        while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
            target_idx = nums[i] - 1
            nums[i], nums[target_idx] = nums[target_idx], nums[i]

    for i in range(n):
        if nums[i] != i + 1:
            return i + 1

    return n + 1`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q044 = {
  id: "tp-003",
  slug: "trapping-rain-water",
  title: "Trapping Rain Water",
  topic: "two-pointers",
  difficulty: "Hard",

  prompt:
    "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",

  constraints: [
    "n == height.length",
    "0 <= n <= 100000",
    "0 <= height[i] <= 10000",
  ],

  examples: [
    {
      input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      output: "6",
      explanation: "The elevation map traps 6 units of water.",
    },
    {
      input: "height = [4,2,0,3,2,5]",
      output: "9",
      explanation: "The map traps 9 units of water.",
    },
  ],

  visibleTests: [
    { args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
    { args: [[4, 2, 0, 3, 2, 5]], expected: 9 },
    { args: [[1, 0, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 0 },
  ],

  hiddenTests: [
    { args: [[3, 0, 3]], expected: 3 },
    { args: [[0, 0, 0, 0]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What determines how much water a position can trap?",
      "How do the heights to the left and right matter?",
      "Try the first example and visualize water above each bar.",
      "Water at index i is limited by min(maxLeft, maxRight) - height[i].",
      "You need an efficient way to compute this for all i.",
    ],
    example: [
      "For [0,1,0,2,1,0,1,3,2,1,2,1]:",
      "At index 2 (height 0), left max is 1, right max is 3.",
      "Water = min(1,3) - 0 = 1.",
      "At index 5 (height 0), left max is 2, right max is 3.",
      "Water = min(2,3) - 0 = 2.",
    ],
    simpleApproach: [
      "One method precomputes maxLeft and maxRight arrays.",
      "For each i, water += min(maxLeft[i], maxRight[i]) - height[i].",
      "This is O(n) time and O(n) space.",
      "A two-pointer approach can do it in O(1) extra space.",
      "Maintain max from left and right as you move pointers.",
    ],
    repeatedWork: [
      "Use two pointers: left at start, right at end.",
      "Track maxLeft and maxRight seen so far.",
      "If height[left] < height[right], process left side.",
      "Otherwise, process right side.",
      "Accumulate water based on current max.",
    ],
    pattern: [
      "This is a two-pointer pattern with running maximums.",
      "Initialize left = 0, right = n-1.",
      "Maintain maxLeft and maxRight.",
      "Move the pointer at the shorter height.",
      "Add water when current height is less than max.",
    ],
    dataStructure: [
      "Use the input array of heights.",
      "Use two indices: left and right.",
      "Use two variables: maxLeft and maxRight.",
      "No extra arrays are needed.",
      "Input is an integer array, output is an integer.",
    ],
    algorithm: [
      "Set left = 0, right = n - 1.",
      "Set maxLeft = 0, maxRight = 0.",
      "Set water = 0.",
      "While left < right:",
      "  If height[left] < height[right]:",
      "    If height[left] >= maxLeft: maxLeft = height[left]",
      "    Else: water += maxLeft - height[left]",
      "    left++",
      "  Else:",
      "    If height[right] >= maxRight: maxRight = height[right]",
      "    Else: water += maxRight - height[right]",
      "    right--",
      "Return water.",
    ],
    pseudocode: [
      "left = 0, right = n - 1",
      "maxLeft = 0, maxRight = 0",
      "water = 0",
      "",
      "while left < right:",
      "  if height[left] < height[right]:",
      "    if height[left] >= maxLeft:",
      "      maxLeft = height[left]",
      "    else:",
      "      water += maxLeft - height[left]",
      "    left++",
      "  else:",
      "    if height[right] >= maxRight:",
      "      maxRight = height[right]",
      "    else:",
      "      water += maxRight - height[right]",
      "    right--",
      "",
      "return water",
    ],
    edgeCases: [
      "Test when n = 0 or n = 1.",
      "Test when all heights are equal.",
      "Test when heights are strictly increasing or decreasing.",
      "Test with zeros and peaks.",
      "Ensure you do not add negative water.",
    ],
    finalNudge: [
      "Use two pointers from both ends.",
      "Process the side with smaller height.",
      "Track running maximums and accumulate water.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use two pointers from both ends. Maintain maxLeft and maxRight. Process the side with smaller height, updating its max and adding water when current height is less than max. This ensures O(n) time and O(1) space.",
  }),

  solutionLogic: {
    approach:
      "Use two pointers from both ends. Maintain maxLeft and maxRight. Process the side with smaller height, updating its max and adding water when current height is less than max. This ensures O(n) time and O(1) space.",

    steps: [
      "Set left = 0, right = n - 1.",
      "Set maxLeft = 0, maxRight = 0, water = 0.",
      "While left < right:",
      "  If height[left] < height[right]:",
      "    Update maxLeft or add water.",
      "    left++",
      "  Else:",
      "    Update maxRight or add water.",
      "    right--",
      "Return water.",
    ],

    pseudocode: `left = 0
right = n - 1
maxLeft = 0
maxRight = 0
water = 0

while left < right:
    if height[left] < height[right]:
        if height[left] >= maxLeft:
            maxLeft = height[left]
        else:
            water += maxLeft - height[left]
        left++
    else:
        if height[right] >= maxRight:
            maxRight = height[right]
        else:
            water += maxRight - height[right]
        right--

return water`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Processing the taller side instead of the shorter side.",
      "Not updating maxLeft/maxRight correctly.",
      "Adding negative water when height >= max.",
      "Forgetting to handle n = 0 or n = 1.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        water += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        water += maxRight - height[right];
      }
      right--;
    }
  }

  return water;
}`,

    python: `def solve(height):
    left, right = 0, len(height) - 1
    max_left = max_right = water = 0

    while left < right:
        if height[left] < height[right]:
            if height[left] >= max_left:
                max_left = height[left]
            else:
                water += max_left - height[left]
            left += 1
        else:
            if height[right] >= max_right:
                max_right = height[right]
            else:
                water += max_right - height[right]
            right -= 1

    return water`,
  },

  starterCode: {
    javascript: `function solve(height) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(height):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] height) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> height) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q045 = {
  id: "bs-003",
  slug: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  topic: "binary-search",
  difficulty: "Hard",

  prompt:
    "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",

  constraints: [
    "0 <= m, n <= 1000",
    "-10^6 <= nums1[i], nums2[i] <= 10^6",
  ],

  examples: [
    {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.0",
      explanation: "Merged array is [1,2,3], median is 2.",
    },
    {
      input: "nums1 = [1,2], nums2 = [3,4]",
      output: "2.5",
      explanation: "Merged array is [1,2,3,4], median is (2+3)/2 = 2.5.",
    },
  ],

  visibleTests: [
    { args: [[1, 3], [2]], expected: 2.0 },
    { args: [[1, 2], [3, 4]], expected: 2.5 },
    { args: [[], [1]], expected: 1.0 },
    { args: [[2], []], expected: 2.0 },
  ],

  hiddenTests: [
    { args: [[1, 2], [3]], expected: 2.0 },
    { args: [[3], [1, 2]], expected: 2.0 },
    { args: [[1, 3, 5], [2, 4, 6]], expected: 3.5 },
    { args: [[-5, -3, 0], [-4, -2, 1]], expected: -2.5 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the median of a sorted array?",
      "Do you need to actually merge the arrays?",
      "Try the first example and find the median manually.",
      "Notice that you need O(log(m+n)) time, not O(m+n).",
      "This suggests a binary search approach.",
    ],
    example: [
      "For [1,3] and [2], merged is [1,2,3].",
      "Median is the middle element: 2.",
      "For [1,2] and [3,4], merged is [1,2,3,4].",
      "Median is average of two middle elements: (2+3)/2 = 2.5.",
      "You need to find these without full merge.",
    ],
    simpleApproach: [
      "One method merges both arrays and finds median.",
      "That is O(m+n) time and O(m+n) space.",
      "To achieve O(log(m+n)), use binary search on partition.",
      "Partition both arrays such that left halves have equal size.",
      "Ensure max of left <= min of right.",
    ],
    repeatedWork: [
      "Binary search on the smaller array to find partition.",
      "For a partition in nums1, compute corresponding partition in nums2.",
      "Check if maxLeft1 <= minRight2 and maxLeft2 <= minRight1.",
      "Adjust binary search bounds based on comparison.",
      "Once correct partition is found, compute median.",
    ],
    pattern: [
      "This is a binary search on partition pattern.",
      "Ensure left halves have (m+n+1)/2 elements.",
      "Use binary search to find correct partition in smaller array.",
      "Check boundary conditions carefully.",
      "Compute median from max of left and min of right.",
    ],
    dataStructure: [
      "Use the two input arrays.",
      "No extra data structure is needed.",
      "Input is two sorted integer arrays.",
      "Output is a float (median).",
      "Indices represent partition points.",
    ],
    algorithm: [
      "Ensure nums1 is the smaller array; if not, swap.",
      "Set low = 0, high = m.",
      "While low <= high:",
      "  partition1 = (low + high) / 2",
      "  partition2 = (m + n + 1) / 2 - partition1",
      "  maxLeft1 = (partition1 == 0) ? -inf : nums1[partition1-1]",
      "  minRight1 = (partition1 == m) ? +inf : nums1[partition1]",
      "  maxLeft2 = (partition2 == 0) ? -inf : nums2[partition2-1]",
      "  minRight2 = (partition2 == n) ? +inf : nums2[partition2]",
      "  If maxLeft1 <= minRight2 and maxLeft2 <= minRight1:",
      "    If (m+n) is even: median = (max(maxLeft1,maxLeft2) + min(minRight1,minRight2)) / 2",
      "    Else: median = max(maxLeft1, maxLeft2)",
      "    Return median.",
      "  Else if maxLeft1 > minRight2: high = partition1 - 1",
      "  Else: low = partition1 + 1",
    ],
    pseudocode: [
      "if m > n: swap nums1 and nums2, m and n",
      "low = 0, high = m",
      "while low <= high:",
      "  partition1 = (low + high) // 2",
      "  partition2 = (m + n + 1) // 2 - partition1",
      "",
      "  maxLeft1 = (partition1 == 0) ? -inf : nums1[partition1-1]",
      "  minRight1 = (partition1 == m) ? +inf : nums1[partition1]",
      "  maxLeft2 = (partition2 == 0) ? -inf : nums2[partition2-1]",
      "  minRight2 = (partition2 == n) ? +inf : nums2[partition2]",
      "",
      "  if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:",
      "    if (m + n) % 2 == 0:",
      "      return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2",
      "    else:",
      "      return max(maxLeft1, maxLeft2)",
      "  else if maxLeft1 > minRight2:",
      "    high = partition1 - 1",
      "  else:",
      "    low = partition1 + 1",
    ],
    edgeCases: [
      "Test when one array is empty.",
      "Test when both arrays have one element.",
      "Test when total length is odd or even.",
      "Test with negative numbers.",
      "Ensure you handle partition at boundaries (0 or m).",
    ],
    finalNudge: [
      "Binary search on the smaller array.",
      "Ensure left halves have correct total size.",
      "Check boundary conditions for partitions.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use binary search to find a partition in the smaller array such that the combined left halves have the correct size and max(left) <= min(right). Then compute median from boundary elements.",
  }),

  solutionLogic: {
    approach:
      "Use binary search to find a partition in the smaller array such that the combined left halves have the correct size and max(left) <= min(right). Then compute median from boundary elements.",

    steps: [
      "Ensure nums1 is smaller; swap if needed.",
      "Binary search partition1 in nums1.",
      "Compute partition2 for nums2.",
      "Check if partitions are valid.",
      "If valid, compute median from boundary values.",
      "Adjust binary search bounds if not valid.",
    ],

    pseudocode: `if m > n:
    swap nums1, nums2, m, n

low = 0, high = m

while low <= high:
    partition1 = (low + high) // 2
    partition2 = (m + n + 1) // 2 - partition1

    maxLeft1 = -inf if partition1 == 0 else nums1[partition1-1]
    minRight1 = +inf if partition1 == m else nums1[partition1]
    maxLeft2 = -inf if partition2 == 0 else nums2[partition2-1]
    minRight2 = +inf if partition2 == n else nums2[partition2]

    if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
        if (m + n) % 2 == 0:
            return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2
        else:
            return max(maxLeft1, maxLeft2)
    else if maxLeft1 > minRight2:
        high = partition1 - 1
    else:
        low = partition1 + 1`,

    timeComplexity: "O(log(min(m, n)))",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not ensuring nums1 is the smaller array.",
      "Incorrect partition size calculation.",
      "Not handling boundary cases (partition at 0 or m).",
      "Using integer division when float is needed for median.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
    [m, n] = [n, m];
  }

  let low = 0, high = m;

  while (low <= high) {
    const partition1 = Math.floor((low + high) / 2);
    const partition2 = Math.floor((m + n + 1) / 2) - partition1;

    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      high = partition1 - 1;
    } else {
      low = partition1 + 1;
    }
  }

  return 0; // Should never reach here
}`,

    python: `def solve(nums1, nums2):
    m, n = len(nums1), len(nums2)

    if m > n:
        nums1, nums2, m, n = nums2, nums1, n, m

    low, high = 0, m

    while low <= high:
        partition1 = (low + high) // 2
        partition2 = (m + n + 1) // 2 - partition1

        maxLeft1 = float('-inf') if partition1 == 0 else nums1[partition1 - 1]
        minRight1 = float('inf') if partition1 == m else nums1[partition1]
        maxLeft2 = float('-inf') if partition2 == 0 else nums2[partition2 - 1]
        minRight2 = float('inf') if partition2 == n else nums2[partition2]

        if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
            if (m + n) % 2 == 0:
                return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2
            else:
                return max(maxLeft1, maxLeft2)
        elif maxLeft1 > minRight2:
            high = partition1 - 1
        else:
            low = partition1 + 1

    return 0.0`,
  },

  starterCode: {
    javascript: `function solve(nums1, nums2) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums1, nums2):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums1, int[] nums2) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums1, vector<int> nums2) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q046 = {
  id: "ll-003",
  slug: "merge-k-sorted-lists",
  title: "Merge k Sorted Lists",
  topic: "linked-lists",
  difficulty: "Hard",

  prompt:
    "You are given an array of k linked-lists, each sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",

  constraints: [
    "0 <= k <= 10000",
    "0 <= total number of nodes <= 100000",
    "-10^4 <= node.val <= 10^4",
  ],

  examples: [
    {
      input: "lists = [[1,4,5],[1,3,4],[2,6]]",
      output: "[1,1,2,3,4,4,5,6]",
      explanation: "Merging all lists gives this sorted list.",
    },
    {
      input: "lists = []",
      output: "[]",
      explanation: "No lists to merge.",
    },
  ],

  visibleTests: [
    { args: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
    { args: [[]], expected: [] },
    { args: [[[]]], expected: [] },
    { args: [[[1], [2], [3]]], expected: [1, 2, 3] },
  ],

  hiddenTests: [
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[[1, 3, 5], [2, 4, 6], [0, 7, 8]]], expected: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    { args: [[[10, 20], [5, 15], [1, 2, 3]]], expected: [1, 2, 3, 5, 10, 15, 20] },
    { args: [[[-5, -3, 0], [-4, -2, 1]]], expected: [-5, -4, -3, -2, 0, 1] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean to merge k sorted lists?",
      "Do you need to maintain sorted order in the result?",
      "Try the first example and merge two lists at a time.",
      "Notice that a naive approach can be slow.",
      "Think about using a heap or divide-and-conquer.",
    ],
    example: [
      "For [[1,4,5],[1,3,4],[2,6]]:",
      "Compare heads: 1, 1, 2 → pick 1.",
      "Next heads: 4, 1, 2 → pick 1.",
      "Continue picking smallest head.",
      "Result is [1,1,2,3,4,4,5,6].",
    ],
    simpleApproach: [
      "One method merges lists one by one sequentially.",
      "Merge list 0 and 1, then result with 2, etc.",
      "Each merge is O(n), total O(k*n).",
      "A better approach uses a min-heap or divide-and-conquer.",
      "This reduces time to O(n log k).",
    ],
    repeatedWork: [
      "At any point, you need the smallest among k current heads.",
      "A min-heap can give you the smallest in O(log k).",
      "Extract min, add its next node to heap.",
      "Repeat until heap is empty.",
      "Total time is O(n log k).",
    ],
    pattern: [
      "This is a min-heap (priority queue) pattern.",
      "Initialize heap with heads of all non-empty lists.",
      "Extract min, append to result, add its next node.",
      "Continue until heap is empty.",
      "Alternatively, use divide-and-conquer merging.",
    ],
    dataStructure: [
      "Use a min-heap of list nodes.",
      "Each heap entry is (node.val, node).",
      "No other complex structure is needed.",
      "Input is an array of linked list heads.",
      "Output is a single linked list head.",
    ],
    algorithm: [
      "Create empty min-heap.",
      "For each list head, if not null, push (head.val, head) into heap.",
      "Create dummy head for result list.",
      "While heap not empty:",
      "  Pop node with smallest value.",
      "  Append it to result list.",
      "  If node.next exists, push (node.next.val, node.next) into heap.",
      "Return dummy.next.",
    ],
    pseudocode: [
      "heap = empty min-heap",
      "for each list in lists:",
      "  if list not null:",
      "    heap.push((list.val, list))",
      "",
      "dummy = new ListNode(0)",
      "tail = dummy",
      "",
      "while heap not empty:",
      "  (val, node) = heap.pop()",
      "  tail.next = node",
      "  tail = node",
      "  if node.next:",
      "    heap.push((node.next.val, node.next))",
      "",
      "return dummy.next",
    ],
    edgeCases: [
      "Test when k = 0 (no lists).",
      "Test when some lists are empty.",
      "Test when all lists have one node.",
      "Test with negative values.",
      "Ensure you handle null heads correctly.",
    ],
    finalNudge: [
      "Use a min-heap to always get the smallest current node.",
      "Add the next node of the extracted node to the heap.",
      "Build the result list by appending extracted nodes.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a min-heap to store the current heads of all lists. Repeatedly extract the smallest node, append it to the result, and add its next node to the heap. This ensures O(n log k) time.",
  }),

  solutionLogic: {
    approach:
      "Use a min-heap to store the current heads of all lists. Repeatedly extract the smallest node, append it to the result, and add its next node to the heap. This ensures O(n log k) time.",

    steps: [
      "Initialize min-heap with heads of non-empty lists.",
      "Create dummy head for result.",
      "While heap not empty:",
      "  Extract node with smallest value.",
      "  Append to result.",
      "  If node has next, push next into heap.",
      "Return dummy.next.",
    ],

    pseudocode: `heap = empty min-heap

for each list in lists:
    if list not null:
        heap.push((list.val, list))

dummy = new ListNode(0)
tail = dummy

while heap not empty:
    (val, node) = heap.pop()
    tail.next = node
    tail = node
    if node.next:
        heap.push((node.next.val, node.next))

return dummy.next`,

    timeComplexity: "O(n log k) where n is total nodes",
    spaceComplexity: "O(k) for the heap",

    commonMistakes: [
      "Pushing null heads into the heap.",
      "Not adding the next node after extraction.",
      "Forgetting to use a dummy head.",
      "Not handling empty input array.",
    ],
  },

  referenceSolution: {
    javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function solve(lists) {
  if (!lists || lists.length === 0) return null;

  const heap = [];

  // Simple heap using array and sort (for clarity; use real heap in production)
  function pushHeap(node) {
    heap.push(node);
    heap.sort((a, b) => a.val - b.val);
  }

  for (const list of lists) {
    if (list) pushHeap(list);
  }

  const dummy = new ListNode(0);
  let tail = dummy;

  while (heap.length > 0) {
    const node = heap.shift();
    tail.next = node;
    tail = node;
    if (node.next) {
      pushHeap(node.next);
    }
  }

  return dummy.next;
}`,

    python: `import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(lists):
    if not lists:
        return None

    heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))

    dummy = ListNode(0)
    tail = dummy
    idx = len(lists)

    while heap:
        val, i, node = heapq.heappop(heap)
        tail.next = node
        tail = node
        if node.next:
            heapq.heappush(heap, (node.next.val, idx, node.next))
            idx += 1

    return dummy.next`,
  },

  starterCode: {
    javascript: `function solve(lists) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(lists):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[][] lists) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<vector<int>> lists) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q047 = {
  id: "sq-003",
  slug: "largest-rectangle-in-histogram",
  title: "Largest Rectangle in Histogram",
  topic: "stacks-queues",
  difficulty: "Hard",

  prompt:
    "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",

  constraints: [
    "1 <= heights.length <= 100000",
    "0 <= heights[i] <= 10000",
  ],

  examples: [
    {
      input: "heights = [2,1,5,6,2,3]",
      output: "10",
      explanation:
        "The largest rectangle is formed by bars with heights 5 and 6, width 2, area = 5*2 = 10.",
    },
    {
      input: "heights = [2,4]",
      output: "4",
      explanation: "Largest rectangle is 2*2 = 4.",
    },
  ],

  visibleTests: [
    { args: [[2, 1, 5, 6, 2, 3]], expected: 10 },
    { args: [[2, 4]], expected: 4 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
  ],

  hiddenTests: [
    { args: [[5, 4, 3, 2, 1]], expected: 9 },
    { args: [[2, 2, 2, 2]], expected: 8 },
    { args: [[1, 3, 2, 4, 5]], expected: 8 },
    { args: [[0, 0, 0, 0]], expected: 0 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What defines a rectangle in the histogram?",
      "How is the area of a rectangle calculated?",
      "Try the first example and identify possible rectangles.",
      "Notice that height is limited by the shortest bar in the range.",
      "You need an efficient way to find the largest area.",
    ],
    example: [
      "For [2,1,5,6,2,3]:",
      "Consider bars 5 and 6: min height 5, width 2 → area 10.",
      "Consider bar 6 alone: height 6, width 1 → area 6.",
      "Consider all bars from index 2 to 5: min height 2, width 4 → area 8.",
      "Largest is 10.",
    ],
    simpleApproach: [
      "One method checks all possible ranges [i, j].",
      "For each, find min height and compute area.",
      "This is O(n^2) and too slow.",
      "A stack-based approach can do it in O(n).",
      "Use a monotonic increasing stack.",
    ],
    repeatedWork: [
      "Maintain a stack of indices with increasing heights.",
      "When current height is less than stack top, pop.",
      "For each popped bar, calculate area with it as the smallest.",
      "Width is determined by current index and new stack top.",
      "This processes each bar once.",
    ],
    pattern: [
      "This is a monotonic stack pattern.",
      "Stack stores indices of increasing heights.",
      "When a smaller height appears, pop and calculate areas.",
      "Append a 0-height bar at the end to flush the stack.",
      "Track maximum area seen.",
    ],
    dataStructure: [
      "Use a stack to store indices.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is a single integer (max area).",
      "Indices represent bar positions.",
    ],
    algorithm: [
      "Append 0 to heights to flush stack at the end.",
      "Initialize empty stack and maxArea = 0.",
      "For i from 0 to heights.length - 1:",
      "  While stack not empty and heights[i] < heights[stack.top]:",
      "    h = heights[stack.pop()]",
      "    w = stack empty ? i : i - stack.top - 1",
      "    area = h * w",
      "    maxArea = max(maxArea, area)",
      "  Push i onto stack.",
      "Return maxArea.",
    ],
    pseudocode: [
      "heights.push(0)",
      "stack = empty",
      "maxArea = 0",
      "",
      "for i from 0 to heights.length - 1:",
      "  while stack not empty and heights[i] < heights[stack.top]:",
      "    h = heights[stack.pop()]",
      "    w = stack empty ? i : i - stack.top - 1",
      "    area = h * w",
      "    maxArea = max(maxArea, area)",
      "  stack.push(i)",
      "",
      "return maxArea",
    ],
    edgeCases: [
      "Test when all heights are equal.",
      "Test when heights are strictly increasing or decreasing.",
      "Test with zeros.",
      "Test with a single bar.",
      "Ensure you handle the appended 0 correctly.",
    ],
    finalNudge: [
      "Use a stack to track increasing heights.",
      "When a smaller height appears, calculate areas for popped bars.",
      "Width depends on current index and new stack top.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a monotonic increasing stack. When a bar shorter than stack top appears, pop and calculate the area with the popped bar as the smallest. Width is determined by current index and new stack top. Track maximum area.",
  }),

  solutionLogic: {
    approach:
      "Use a monotonic increasing stack. When a bar shorter than stack top appears, pop and calculate the area with the popped bar as the smallest. Width is determined by current index and new stack top. Track maximum area.",

    steps: [
      "Append 0 to heights.",
      "Initialize empty stack and maxArea.",
      "For each index i:",
      "  While current height < height[stack.top]:",
      "    Pop, calculate area.",
      "    Update maxArea.",
      "  Push i.",
      "Return maxArea.",
    ],

    pseudocode: `heights.push(0)
stack = empty
maxArea = 0

for i from 0 to heights.length - 1:
    while stack not empty and heights[i] < heights[stack.top]:
        h = heights[stack.pop()]
        w = stack empty ? i : i - stack.top - 1
        area = h * w
        maxArea = max(maxArea, area)
    stack.push(i)

return maxArea`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the stack",

    commonMistakes: [
      "Not appending 0 to flush the stack.",
      "Calculating width incorrectly.",
      "Using non-increasing stack instead of increasing.",
      "Forgetting to update maxArea.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(heights) {
  heights.push(0);
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = h * w;
      maxArea = Math.max(maxArea, area);
    }
    stack.push(i);
  }

  return maxArea;
}`,

    python: `def solve(heights):
    heights.append(0)
    stack = []
    max_area = 0

    for i, h in enumerate(heights):
        while stack and h < heights[stack[-1]]:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            area = height * width
            max_area = max(max_area, area)
        stack.append(i)

    return max_area`,
  },

  starterCode: {
    javascript: `function solve(heights) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(heights):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] heights) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> heights) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q048 = {
  id: "rec-002",
  slug: "letter-combinations-of-phone-number",
  title: "Letter Combinations of a Phone Number",
  topic: "recursion",
  difficulty: "Medium",

  prompt:
    "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent, based on the traditional phone keypad mapping. Return the answer in any order.",

  constraints: [
    "0 <= digits.length <= 4",
    "digits[i] is a digit in the range ['2', '9'].",
  ],

  examples: [
    {
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      explanation: "Based on phone keypad mapping.",
    },
    {
      input: 'digits = ""',
      output: '[]',
      explanation: "No digits, no combinations.",
    },
    {
      input: 'digits = "2"',
      output: '["a","b","c"]',
      explanation: "Only one digit.",
    },
  ],

  visibleTests: [
    { args: ["23"], expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
    { args: [""], expected: [] },
    { args: ["2"], expected: ["a", "b", "c"] },
    { args: ["22"], expected: ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"] },
  ],

  hiddenTests: [
    { args: ["234"], expected: "27 combinations" },
    { args: ["99"], expected: ["ww", "wx", "wy", "wz", "xw", "xx", "xy", "xz", "yw", "yx", "yy", "yz", "zw", "zx", "zy", "zz"] },
    { args: ["7"], expected: ["p", "q", "r", "s"] },
    { args: ["89"], expected: ["tv", "tw", "tx", "ty", "tz", "uv", "uw", "ux", "uy", "uz", "vv", "vw", "vx", "vy", "vz", "wv", "ww", "wx", "wy", "wz"] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the mapping from digits to letters?",
      "Do you need all possible combinations or just one?",
      "Try the first example and list combinations manually.",
      "Notice that each digit contributes multiple choices.",
      "This suggests a recursive or backtracking approach.",
    ],
    example: [
      "For '23':",
      "Digit '2' maps to ['a','b','c'].",
      "Digit '3' maps to ['d','e','f'].",
      "Combinations: 'ad','ae','af','bd','be','bf','cd','ce','cf'.",
      "Each combination picks one letter from each digit.",
    ],
    simpleApproach: [
      "One method uses nested loops for each digit.",
      "This is not flexible for variable-length input.",
      "A recursive approach handles any length.",
      "At each step, choose a letter for current digit.",
      "Recurse for the next digit.",
    ],
    repeatedWork: [
      "For each digit, you have multiple letter choices.",
      "You build combinations by appending one letter at a time.",
      "When you reach the end of digits, you have one combination.",
      "Backtrack to try other letters.",
      "This explores all possibilities.",
    ],
    pattern: [
      "This is a backtracking / recursion pattern.",
      "State: current index in digits, current combination.",
      "Base case: index == digits.length, add combination to result.",
      "Recursive case: for each letter of current digit, recurse.",
      "Collect all combinations.",
    ],
    dataStructure: [
      "Use a map or array for digit-to-letters mapping.",
      "Use an array to store results.",
      "Use recursion with current index and current string.",
      "No other complex structure is needed.",
      "Input is a string of digits, output is array of strings.",
    ],
    algorithm: [
      "Define mapping: 2→abc, 3→def, 4→ghi, 5→jkl, 6→mno, 7→pqrs, 8→tuv, 9→wxyz.",
      "Initialize result = [].",
      "Define backtrack(index, current):",
      "  If index == digits.length:",
      "    If current is not empty, push to result.",
      "    Return.",
      "  For each letter in mapping[digits[index]]:",
      "    backtrack(index + 1, current + letter).",
      "Call backtrack(0, '').",
      "Return result.",
    ],
    pseudocode: [
      "mapping = {",
      "  '2':'abc', '3':'def', '4':'ghi', '5':'jkl',",
      "  '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'",
      "}",
      "result = []",
      "",
      "function backtrack(index, current):",
      "  if index == digits.length:",
      "    if current not empty:",
      "      result.push(current)",
      "    return",
      "  letters = mapping[digits[index]]",
      "  for each letter in letters:",
      "    backtrack(index + 1, current + letter)",
      "",
      "backtrack(0, '')",
      "return result",
    ],
    edgeCases: [
      "Test when digits string is empty.",
      "Test when digits string has one character.",
      "Test with digits '7' and '9' (4 letters each).",
      "Ensure you handle digits 2-9 only.",
      "Check that order of combinations does not matter.",
    ],
    finalNudge: [
      "Use recursion to build combinations digit by digit.",
      "Base case: when you've processed all digits.",
      "For each digit, try all its letters.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use backtracking. For each digit, iterate through its mapped letters and recurse for the next digit. When all digits are processed, add the current combination to the result.",
  }),

  solutionLogic: {
    approach:
      "Use backtracking. For each digit, iterate through its mapped letters and recurse for the next digit. When all digits are processed, add the current combination to the result.",

    steps: [
      "Define digit-to-letters mapping.",
      "Initialize result array.",
      "Define backtrack(index, current).",
      "If index == digits.length, add current to result.",
      "Otherwise, for each letter of current digit:",
      "  Recurse with index+1 and current+letter.",
      "Return result.",
    ],

    pseudocode: `mapping = {
    '2':'abc', '3':'def', '4':'ghi', '5':'jkl',
    '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'
}
result = []

function backtrack(index, current):
    if index == digits.length:
        if current not empty:
            result.push(current)
        return
    letters = mapping[digits[index]]
    for each letter in letters:
        backtrack(index + 1, current + letter)

backtrack(0, '')
return result`,

    timeComplexity: "O(4^n) in worst case (digits 7 or 9)",
    spaceComplexity: "O(n) for recursion stack",

    commonMistakes: [
      "Not handling empty input correctly.",
      "Using wrong digit-to-letters mapping.",
      "Forgetting to add combination only when non-empty.",
      "Not recursing for all letters of a digit.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(digits) {
  if (digits.length === 0) return [];

  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      if (current) result.push(current);
      return;
    }

    const letters = mapping[digits[index]];
    for (const letter of letters) {
      backtrack(index + 1, current + letter);
    }
  }

  backtrack(0, '');
  return result;
}`,

    python: `def solve(digits):
    if not digits:
        return []

    mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }

    result = []

    def backtrack(index, current):
        if index == len(digits):
            if current:
                result.append(current)
            return

        for letter in mapping[digits[index]]:
            backtrack(index + 1, current + letter)

    backtrack(0, '')
    return result`,
  },

  starterCode: {
    javascript: `function solve(digits) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(digits):
    # Write your Python solution here.
    pass`,
    java: `public static String[] solve(String digits) {
  // Write your Java solution here.
  return new String[]{};
}`,
    cpp: `vector<string> solve(string digits) {
  // Write your C++ solution here.
  return vector<string>{};
}`,
  },
};


const Q049 = {
  id: "tree-003",
  slug: "serialize-and-deserialize-binary-tree",
  title: "Serialize and Deserialize Binary Tree",
  topic: "trees",
  difficulty: "Hard",

  prompt:
    "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",

  constraints: [
    "The number of nodes in the tree is in the range [0, 10000].",
    "-1000 <= node.val <= 1000",
  ],

  examples: [
    {
      input: "root = [1,2,3,null,null,4,5]",
      output: "Serialized form (e.g., '1,2,#,#,3,4,#,#,5,#,#') and back to same tree",
      explanation:
        "One possible serialization using preorder with '#' for null.",
    },
  ],

  visibleTests: [
    {
      args: [[1, 2, 3, null, null, 4, 5]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
    {
      args: [[1, null, 2]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
    {
      args: [[]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
    {
      args: [[1, 2]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
  ],

  hiddenTests: [
    {
      args: [[1, 2, 3, 4, 5]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
    {
      args: [[5, 4, 6, null, null, 3, 7]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
    {
      args: [[-1, -2, -3]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
    {
      args: [[1, 2, null, 3, null, 4]],
      expected: "same tree after deserialize",
      op: "serializeDeserialize",
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean to serialize a tree?",
      "How can you represent null nodes?",
      "Try the example and think of a traversal order.",
      "You need a format that can be parsed back uniquely.",
      "Common approaches use preorder with markers for null.",
    ],
    example: [
      "For tree [1,2,3,null,null,4,5]:",
      "Preorder: 1, 2, null, null, 3, 4, null, null, 5, null, null.",
      "Represent null as '#' or some marker.",
      "String: '1,2,#,#,3,4,#,#,5,#,#'.",
      "This can be parsed back to the same tree.",
    ],
    simpleApproach: [
      "One method uses preorder traversal.",
      "For each node, append value, then serialize left, then right.",
      "Use a special marker for null nodes.",
      "Deserialization reads values in same order.",
      "Reconstructs tree recursively.",
    ],
    repeatedWork: [
      "Serialization visits each node once.",
      "Deserialization also visits each node once.",
      "Both use the same traversal order.",
      "Null markers ensure structure is preserved.",
      "No ambiguity in reconstruction.",
    ],
    pattern: [
      "This is a tree traversal with encoding pattern.",
      "Use preorder (or level-order) with null markers.",
      "Serialize: node value, left, right.",
      "Deserialize: read value, create node, recurse left, right.",
      "Use a global index or iterator for deserialization.",
    ],
    dataStructure: [
      "Use a string for serialization.",
      "Use a list or stream of tokens for deserialization.",
      "No other complex structure is needed.",
      "Input is a tree root, output is a string and back.",
      "Recursion handles tree structure.",
    ],
    algorithm: [
      "Serialize:",
      "  If node is null, return '#'.",
      "  Else return node.val + ',' + serialize(left) + ',' + serialize(right).",
      "Deserialize:",
      "  Split string by ',' into tokens.",
      "  Maintain an index.",
      "  Define helper():",
      "    Read token at index, increment index.",
      "    If token is '#', return null.",
      "    Else create node, node.left = helper(), node.right = helper().",
      "    Return node.",
    ],
    pseudocode: [
      "function serialize(root):",
      "  if root == null:",
      "    return '#'",
      "  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right)",
      "",
      "function deserialize(data):",
      "  tokens = data.split(',')",
      "  index = 0",
      "",
      "  function helper():",
      "    token = tokens[index]",
      "    index++",
      "    if token == '#':",
      "      return null",
      "    node = new TreeNode(token)",
      "    node.left = helper()",
      "    node.right = helper()",
      "    return node",
      "",
      "  return helper()",
    ],
    edgeCases: [
      "Test an empty tree (null root).",
      "Test a tree with only root.",
      "Test a skewed tree (all left or all right).",
      "Test a complete binary tree.",
      "Ensure null markers are correctly placed.",
    ],
    finalNudge: [
      "Use preorder traversal with null markers.",
      "Ensure serialization and deserialization use the same order.",
      "Handle null nodes explicitly.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use preorder traversal to serialize. For each node, output its value, then serialize left, then right. Use a special marker for null. Deserialize by reading tokens in the same order and reconstructing recursively.",
  }),

  solutionLogic: {
    approach:
      "Use preorder traversal to serialize. For each node, output its value, then serialize left, then right. Use a special marker for null. Deserialize by reading tokens in the same order and reconstructing recursively.",

    steps: [
      "Serialize: if null, return '#'.",
      "Else return val + ',' + serialize(left) + ',' + serialize(right).",
      "Deserialize: split string into tokens.",
      "Use a helper that reads one token at a time.",
      "If token is '#', return null.",
      "Else create node, set left and right recursively.",
    ],

    pseudocode: `function serialize(root):
    if root == null:
        return '#'
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right)

function deserialize(data):
    tokens = data.split(',')
    index = 0

    function helper():
        token = tokens[index]
        index++
        if token == '#':
            return null
        node = new TreeNode(token)
        node.left = helper()
        node.right = helper()
        return node

    return helper()`,

    timeComplexity: "O(n) for both serialize and deserialize",
    spaceComplexity: "O(n) for recursion stack and string/tokens",

    commonMistakes: [
      "Not handling null nodes correctly.",
      "Using different traversal orders for serialize/deserialize.",
      "Forgetting to increment index during deserialization.",
      "Not splitting the string correctly.",
    ],
  },

  referenceSolution: {
    javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  if (root === null) return '#';
  return (
    root.val +
    ',' +
    serialize(root.left) +
    ',' +
    serialize(root.right)
  );
}

function deserialize(data) {
  const tokens = data.split(',');
  let index = 0;

  function helper() {
    const token = tokens[index];
    index++;

    if (token === '#') {
      return null;
    }

    const node = new TreeNode(parseInt(token));
    node.left = helper();
    node.right = helper();

    return node;
  }

  return helper();
}

function solve(treeRoot) {
  // For testing: serialize and deserialize, then compare
  const serialized = serialize(treeRoot);
  const deserialized = deserialize(serialized);
  return { serialized, deserialized };
}`,

    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(root):
    if not root:
        return '#'
    return f"{root.val},{serialize(root.left)},{serialize(root.right)}"

def deserialize(data):
    tokens = data.split(',')
    index = [0]

    def helper():
        token = tokens[index[0]]
        index[0] += 1

        if token == '#':
            return None

        node = TreeNode(int(token))
        node.left = helper()
        node.right = helper()
        return node

    return helper()

def solve(tree_root):
    serialized = serialize(tree_root)
    deserialized = deserialize(serialized)
    return serialized, deserialized`,
  },

  starterCode: {
    javascript: `function solve(treeRoot) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(tree_root):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(Integer[] treeRoot) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(vector<optional<int>> treeRoot) {
  // Write your C++ solution here.
  return "";
}`,
  },
};


const Q050 = {
  id: "graph-003",
  slug: "word-ladder",
  title: "Word Ladder",
  topic: "graphs",
  difficulty: "Hard",

  prompt:
    "Given a beginWord, an endWord, and a wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that only one letter can be changed at a time and each transformed word must exist in the wordList. If there is no such sequence, return 0.",

  constraints: [
    "1 <= beginWord.length <= 10",
    "endWord.length == beginWord.length",
    "1 <= wordList.length <= 5000",
    "wordList[i].length == beginWord.length",
    "beginWord, endWord, and wordList[i] consist of lowercase English letters.",
    "beginWord != endWord",
    "All the words in wordList are unique.",
  ],

  examples: [
    {
      input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
      output: "5",
      explanation:
        "One shortest sequence is 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog' (length 5).",
    },
    {
      input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
      output: "0",
      explanation: "'cog' is not in wordList, so no sequence exists.",
    },
  ],

  visibleTests: [
    {
      args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]],
      expected: 5,
    },
    {
      args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]],
      expected: 0,
    },
    {
      args: ["a", "c", ["a", "b", "c"]],
      expected: 2,
    },
    {
      args: ["hot", "dog", ["hot", "hog", "dog"]],
      expected: 3,
    },
  ],

  hiddenTests: [
    {
      args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog", "hog"]],
      expected: 4,
    },
    {
      args: ["red", "tax", ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"]],
      expected: 4,
    },
    {
      args: ["nape", "mild", ["nape", "napd", "napl", "mald", "mild"]],
      expected: 4,
    },
    {
      args: ["abc", "def", ["abc", "dbc", "dec", "def"]],
      expected: 4,
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean to transform one word to another?",
      "How many letters can change at each step?",
      "Try the first example and trace a possible sequence.",
      "Notice that this can be modeled as a graph problem.",
      "You need the shortest transformation sequence.",
    ],
    example: [
      "For begin='hit', end='cog', list=['hot','dot','dog','lot','log','cog']:",
      "'hit' -> 'hot' (change 'i' to 'o').",
      "'hot' -> 'dot' (change 'h' to 'd').",
      "'dot' -> 'dog' (change 't' to 'g').",
      "'dog' -> 'cog' (change 'd' to 'c').",
      "Sequence length is 5 (number of words).",
    ],
    simpleApproach: [
      "One method tries all possible one-letter changes.",
      "For each word, generate all words that differ by one letter.",
      "Check if they are in wordList.",
      "Use BFS to find shortest path.",
      "This is efficient enough for given constraints.",
    ],
    repeatedWork: [
      "Each word can transform to many others by changing one letter.",
      "Instead of building full graph, generate neighbors on the fly.",
      "Use BFS from beginWord.",
      "Track visited words to avoid cycles.",
      "Stop when endWord is reached.",
    ],
    pattern: [
      "This is a BFS on implicit graph pattern.",
      "Nodes are words, edges connect words differing by one letter.",
      "Use a set for wordList for O(1) lookup.",
      "BFS guarantees shortest path in unweighted graph.",
      "Return the level (distance) when endWord is found.",
    ],
    dataStructure: [
      "Use a set for wordList.",
      "Use a queue for BFS.",
      "Use a set or map to track visited words and distances.",
      "No other complex structure is needed.",
      "Input is strings and a list, output is an integer.",
    ],
    algorithm: [
      "Convert wordList to a set.",
      "If endWord not in set, return 0.",
      "Initialize queue with (beginWord, 1).",
      "While queue not empty:",
      "  Pop (word, dist).",
      "  If word == endWord, return dist.",
      "  For each position i in word:",
      "    For each letter c from 'a' to 'z':",
      "      If c == word[i], skip.",
      "      newWord = word with character i replaced by c.",
      "      If newWord in wordList and not visited:",
      "        Mark visited, push (newWord, dist+1).",
      "Return 0 if endWord not reached.",
    ],
    pseudocode: [
      "wordSet = set(wordList)",
      "if endWord not in wordSet: return 0",
      "",
      "queue = [(beginWord, 1)]",
      "visited = {beginWord}",
      "",
      "while queue not empty:",
      "  (word, dist) = queue.pop()",
      "  if word == endWord:",
      "    return dist",
      "  for i from 0 to word.length - 1:",
      "    for c in 'a'..'z':",
      "      if c == word[i]: continue",
      "      newWord = word[0:i] + c + word[i+1:]",
      "      if newWord in wordSet and newWord not in visited:",
      "        visited.add(newWord)",
      "        queue.push((newWord, dist + 1))",
      "",
      "return 0",
    ],
    edgeCases: [
      "Test when endWord is not in wordList.",
      "Test when beginWord equals endWord (though constraints say no).",
      "Test when no transformation sequence exists.",
      "Test with short words (length 1).",
      "Ensure you count sequence length correctly (number of words).",
    ],
    finalNudge: [
      "Use BFS to explore transformations level by level.",
      "Generate neighbors by changing one letter at a time.",
      "Return distance when endWord is first reached.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Model words as nodes in a graph where edges connect words differing by one letter. Use BFS from beginWord to find the shortest path to endWord. Generate neighbors on the fly by changing each letter to all other letters.",
  }),

  solutionLogic: {
    approach:
      "Model words as nodes in a graph where edges connect words differing by one letter. Use BFS from beginWord to find the shortest path to endWord. Generate neighbors on the fly by changing each letter to all other letters.",

    steps: [
      "Convert wordList to a set.",
      "If endWord not in set, return 0.",
      "Initialize BFS queue with (beginWord, 1).",
      "While queue not empty:",
      "  Pop (word, dist).",
      "  If word == endWord, return dist.",
      "  Generate all one-letter transformations.",
      "  For each valid unvisited neighbor, enqueue with dist+1.",
      "Return 0 if not found.",
    ],

    pseudocode: `wordSet = set(wordList)
if endWord not in wordSet:
    return 0

queue = [(beginWord, 1)]
visited = {beginWord}

while queue not empty:
    (word, dist) = queue.pop()
    if word == endWord:
        return dist

    for i from 0 to word.length - 1:
        for c in 'a'..'z':
            if c == word[i]:
                continue
            newWord = word with character i replaced by c
            if newWord in wordSet and newWord not in visited:
                visited.add(newWord)
                queue.push((newWord, dist + 1))

return 0`,

    timeComplexity: "O(m^2 * n) where m is word length, n is number of words",
    spaceComplexity: "O(n) for wordSet, visited, and queue",

    commonMistakes: [
      "Not checking if endWord is in wordList.",
      "Counting edges instead of nodes in sequence length.",
      "Not marking words as visited.",
      "Generating invalid transformations.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);

  while (queue.length > 0) {
    const [word, dist] = queue.shift();
    if (word === endWord) return dist;

    for (let i = 0; i < word.length; i++) {
      const original = word[i];
      for (let c = 97; c <= 122; c++) {
        const ch = String.fromCharCode(c);
        if (ch === original) continue;

        const newWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, dist + 1]);
        }
      }
    }
  }

  return 0;
}`,

    python: `from collections import deque

def solve(beginWord, endWord, wordList):
    word_set = set(wordList)
    if endWord not in word_set:
        return 0

    queue = deque([(beginWord, 1)])
    visited = {beginWord}

    while queue:
        word, dist = queue.popleft()
        if word == endWord:
            return dist

        for i in range(len(word)):
            original = word[i]
            for c in 'abcdefghijklmnopqrstuvwxyz':
                if c == original:
                    continue
                new_word = word[:i] + c + word[i+1:]
                if new_word in word_set and new_word not in visited:
                    visited.add(new_word)
                    queue.append((new_word, dist + 1))

    return 0`,
  },

  starterCode: {
    javascript: `function solve(beginWord, endWord, wordList) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(beginWord, endWord, wordList):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(String beginWord, String endWord, String[] wordList) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(string beginWord, string endWord, vector<string> wordList) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q051 = {
  id: "arr-006",
  slug: "product-of-array-except-self",
  title: "Product of Array Except Self",
  topic: "arrays",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums, return an array answer where answer[i] is equal to the product of all the elements of nums except nums[i]. Solve it in O(n) time and without using division.",

  constraints: [
    "2 <= nums.length <= 100000",
    "-30 <= nums[i] <= 30",
    "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
  ],

  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]",
      explanation:
        "For index 0: 2*3*4 = 24; index 1: 1*3*4 = 12; index 2: 1*2*4 = 8; index 3: 1*2*3 = 6.",
    },
    {
      input: "nums = [-1,1,0,-3,3]",
      output: "[0,0,9,0,0]",
      explanation: "Due to the zero at index 2, most products become 0.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
    { args: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
    { args: [[2, 3, 4, 5]], expected: [60, 40, 30, 24] },
    { args: [[1, -1, 1, -1]], expected: [-1, 1, -1, 1] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [120, 60, 40, 30, 24] },
    { args: [[0, 1, 2, 3]], expected: [6, 0, 0, 0] },
    { args: [[1, 0, 0, 1]], expected: [0, 0, 0, 0] },
    { args: [[-2, -3, -4]], expected: [12, 8, 6] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each element of the output represent?",
      "Can you use division to solve this?",
      "Try the first example and compute products manually.",
      "Notice that each output is product of left and right parts.",
      "You need an O(n) approach without division.",
    ],
    example: [
      "For [1,2,3,4]:",
      "answer[0] = 2*3*4 = 24",
      "answer[1] = 1*3*4 = 12",
      "answer[2] = 1*2*4 = 8",
      "answer[3] = 1*2*3 = 6",
      "Each is product of all except self.",
    ],
    simpleApproach: [
      "One method computes prefix and suffix products.",
      "For each i, answer[i] = product of elements before i * product of elements after i.",
      "This can be done in two passes.",
      "First pass computes prefix products.",
      "Second pass computes suffix products and combines.",
    ],
    repeatedWork: [
      "Prefix product at i is product of nums[0..i-1].",
      "Suffix product at i is product of nums[i+1..n-1].",
      "You can compute prefix on the fly.",
      "Then compute suffix in a second pass.",
      "Multiply prefix and suffix for each index.",
    ],
    pattern: [
      "This is a prefix-suffix product pattern.",
      "First pass: compute prefix products into answer.",
      "Second pass: compute suffix products and multiply into answer.",
      "No extra arrays needed beyond answer.",
      "Time is O(n), space is O(1) extra.",
    ],
    dataStructure: [
      "Use the output array to store prefix products.",
      "Use a variable for suffix product.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is an integer array.",
    ],
    algorithm: [
      "Create answer array of length n.",
      "Set answer[0] = 1.",
      "For i from 1 to n-1:",
      "  answer[i] = answer[i-1] * nums[i-1]  // prefix product",
      "Set suffix = 1.",
      "For i from n-1 down to 0:",
      "  answer[i] = answer[i] * suffix",
      "  suffix = suffix * nums[i]",
      "Return answer.",
    ],
    pseudocode: [
      "n = nums.length",
      "answer = array of size n",
      "answer[0] = 1",
      "for i from 1 to n-1:",
      "  answer[i] = answer[i-1] * nums[i-1]",
      "",
      "suffix = 1",
      "for i from n-1 down to 0:",
      "  answer[i] = answer[i] * suffix",
      "  suffix = suffix * nums[i]",
      "",
      "return answer",
    ],
    edgeCases: [
      "Test when array contains zeros.",
      "Test with negative numbers.",
      "Test with small arrays (length 2).",
      "Ensure you do not use division.",
      "Check that answer[i] excludes nums[i].",
    ],
    finalNudge: [
      "First pass: store prefix products in answer.",
      "Second pass: multiply by suffix products.",
      "Maintain suffix as a running product.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Compute prefix products in the first pass and store in answer. In the second pass, compute suffix products on the fly and multiply into answer. This achieves O(n) time and O(1) extra space.",
  }),

  solutionLogic: {
    approach:
      "Compute prefix products in the first pass and store in answer. In the second pass, compute suffix products on the fly and multiply into answer. This achieves O(n) time and O(1) extra space.",

    steps: [
      "Initialize answer[0] = 1.",
      "For i from 1 to n-1: answer[i] = answer[i-1] * nums[i-1].",
      "Initialize suffix = 1.",
      "For i from n-1 down to 0:",
      "  answer[i] *= suffix",
      "  suffix *= nums[i]",
      "Return answer.",
    ],

    pseudocode: `n = nums.length
answer = array of size n
answer[0] = 1

for i from 1 to n-1:
    answer[i] = answer[i-1] * nums[i-1]

suffix = 1
for i from n-1 down to 0:
    answer[i] = answer[i] * suffix
    suffix = suffix * nums[i]

return answer`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1) extra space (excluding output array)",

    commonMistakes: [
      "Using division to compute products.",
      "Incorrectly computing prefix or suffix.",
      "Not handling zeros correctly.",
      "Using O(n) extra space unnecessarily.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;
  const answer = new Array(n);

  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}`,

    python: `def solve(nums):
    n = len(nums)
    answer = [1] * n

    for i in range(1, n):
        answer[i] = answer[i - 1] * nums[i - 1]

    suffix = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= suffix
        suffix *= nums[i]

    return answer`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q052 = {
  id: "str-004",
  slug: "group-anagrams",
  title: "Group Anagrams",
  topic: "strings",
  difficulty: "Medium",

  prompt:
    "Given an array of strings, group the anagrams together. You may return the answer in any order. An anagram is a word formed by rearranging the letters of another word.",

  constraints: [
    "1 <= strs.length <= 10000",
    "0 <= strs[i].length <= 100",
    "strs[i] consists of lowercase English letters.",
  ],

  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      explanation:
        "'eat', 'tea', 'ate' are anagrams; 'tan' and 'nat' are anagrams; 'bat' is alone.",
    },
    {
      input: 'strs = [""]',
      output: '[[""]]',
      explanation: "Only one empty string.",
    },
    {
      input: 'strs = ["a"]',
      output: '[["a"]]',
      explanation: "Only one string.",
    },
  ],

  visibleTests: [
    { args: [["eat", "tea", "tan", "ate", "nat", "bat"]], expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
    { args: [[""]], expected: [[""]] },
    { args: [["a"]], expected: [["a"]] },
    { args: [["ab", "ba", "cd"]], expected: [["ab", "ba"], ["cd"]] },
  ],

  hiddenTests: [
    { args: [["abc", "bca", "cab", "xyz"]], expected: [["abc", "bca", "cab"], ["xyz"]] },
    { args: [["aa", "aa", "bb"]], expected: [["aa", "aa"], ["bb"]] },
    { args: [["listen", "silent", "enlist"]], expected: [["listen", "silent", "enlist"]] },
    { args: [["cat", "dog", "tac", "god"]], expected: [["cat", "tac"], ["dog", "god"]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What defines two strings as anagrams?",
      "Do anagrams have the same characters in different orders?",
      "Try the first example and group anagrams manually.",
      "Notice that sorted characters of anagrams are identical.",
      "You need a way to group strings by their character composition.",
    ],
    example: [
      "For ['eat','tea','tan','ate','nat','bat']:",
      "Sorted: 'eat'→'aet', 'tea'→'aet', 'tan'→'ant', 'ate'→'aet', 'nat'→'ant', 'bat'→'abt'.",
      "Group by sorted form: 'aet'→['eat','tea','ate'], 'ant'→['tan','nat'], 'abt'→['bat'].",
      "Result is these groups.",
    ],
    simpleApproach: [
      "One method sorts each string and uses the sorted version as a key.",
      "Strings with the same sorted form are anagrams.",
      "Use a hash map to group them.",
      "This is O(n * k log k) where k is max string length.",
      "Alternatively, use character counts as key.",
    ],
    repeatedWork: [
      "For each string, compute its canonical form (sorted or count-based).",
      "Use this as a key in a hash map.",
      "Append the original string to the list for that key.",
      "At the end, return all lists from the map.",
      "Each string is processed once.",
    ],
    pattern: [
      "This is a hashing by canonical form pattern.",
      "Canonical form can be sorted string or character count tuple.",
      "Use a map: key → list of anagrams.",
      "Iterate over input, populate map.",
      "Return values of map as result.",
    ],
    dataStructure: [
      "Use a hash map (object or Map).",
      "Key is canonical form (sorted string or count string).",
      "Value is array of strings.",
      "No other complex structure is needed.",
      "Input is array of strings, output is array of arrays.",
    ],
    algorithm: [
      "Create empty map.",
      "For each string s in strs:",
      "  key = sorted characters of s (or count-based key).",
      "  If key not in map, map[key] = [].",
      "  map[key].push(s).",
      "Return all values in map as array.",
    ],
    pseudocode: [
      "map = empty hash map",
      "for each s in strs:",
      "  key = sort(s)",
      "  if key not in map:",
      "    map[key] = []",
      "  map[key].push(s)",
      "return values of map as array",
    ],
    edgeCases: [
      "Test with empty strings.",
      "Test with single-character strings.",
      "Test with all anagrams or no anagrams.",
      "Ensure you handle duplicate strings.",
      "Check that order of groups does not matter.",
    ],
    finalNudge: [
      "Use sorted string as key for each word.",
      "Group words with the same key.",
      "Return all groups.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: For each string, compute a canonical form (sorted characters). Use this as a key in a hash map to group anagrams. Return all groups as the result.",
  }),

  solutionLogic: {
    approach:
      "For each string, compute a canonical form (sorted characters). Use this as a key in a hash map to group anagrams. Return all groups as the result.",

    steps: [
      "Create empty map.",
      "For each string s:",
      "  key = sorted characters of s.",
      "  Append s to map[key].",
      "Return all values in map.",
    ],

    pseudocode: `map = {}

for each s in strs:
    key = sort(s)
    if key not in map:
        map[key] = []
    map[key].push(s)

return list(map.values())`,

    timeComplexity: "O(n * k log k) where n is number of strings, k is max length",
    spaceComplexity: "O(n * k) for storing groups",

    commonMistakes: [
      "Using the original string as key instead of canonical form.",
      "Not handling empty strings correctly.",
      "Forgetting to convert map values to array.",
      "Using a non-hashable key in some languages.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(strs) {
  const map = new Map();

  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(s);
  }

  return Array.from(map.values());
}`,

    python: `from collections import defaultdict

def solve(strs):
    groups = defaultdict(list)

    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)

    return list(groups.values())`,
  },

  starterCode: {
    javascript: `function solve(strs) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(strs):
    # Write your Python solution here.
    pass`,
    java: `public static String[][] solve(String[] strs) {
  // Write your Java solution here.
  return new String[][]{};
}`,
    cpp: `vector<vector<string>> solve(vector<string> strs) {
  // Write your C++ solution here.
  return vector<vector<string>>{};
}`,
  },
};


const Q053 = {
  id: "hash-004",
  slug: "valid-sudoku",
  title: "Valid Sudoku",
  topic: "hashing",
  difficulty: "Medium",

  prompt:
    "Determine if a 9 x 9 Sudoku board is valid according to the following rules:\n1. Each row must contain digits 1-9 without repetition.\n2. Each column must contain digits 1-9 without repetition.\n3. Each of the nine 3x3 sub-boxes must contain digits 1-9 without repetition.\n\nNote: A Sudoku board could be valid but not necessarily solvable. Only the filled cells need to be validated.",

  constraints: [
    "board.length == 9",
    "board[i].length == 9",
    "board[i][j] is a digit '1'-'9' or '.'.",
  ],

  examples: [
    {
      input: `board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]`,
      output: "true",
      explanation: "All rows, columns, and 3x3 boxes are valid.",
    },
    {
      input: "Same as above but change top-left '5' to '8'",
      output: "false",
      explanation: "Top-left 3x3 box now has two '8's.",
    },
  ],

  visibleTests: [
    {
      args: [
        [
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
      ],
      expected: true,
    },
    {
      args: [
        [
          ["8", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
      ],
      expected: false,
    },
    { args: [Array(9).fill(Array(9).fill("."))], expected: true },
    {
      args: [
        [
          ["1", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", "2", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", "3", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", "4", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", "5", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", "6", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", "7", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "8", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "9"],
        ],
      ],
      expected: true,
    },
  ],

  hiddenTests: [
    {
      args: [
        [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
          ["2", ".", ".", ".", ".", ".", ".", ".", "."],
          ["3", ".", ".", ".", ".", ".", ".", ".", "."],
          ["4", ".", ".", ".", ".", ".", ".", ".", "."],
          ["5", ".", ".", ".", ".", ".", ".", ".", "."],
          ["6", ".", ".", ".", ".", ".", ".", ".", "."],
          ["7", ".", ".", ".", ".", ".", ".", ".", "."],
          ["8", ".", ".", ".", ".", ".", ".", ".", "."],
          ["9", ".", ".", ".", ".", ".", ".", ".", "."],
        ],
      ],
      expected: false,
    },
    {
      args: [
        [
          ["1", ".", ".", "1", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ],
      ],
      expected: false,
    },
    {
      args: [
        [
          ["1", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", "2", ".", ".", ".", ".", ".", ".", "."],
          [".", ".", "3", ".", ".", ".", ".", ".", "."],
          [".", ".", ".", "1", ".", ".", ".", ".", "."],
          [".", ".", ".", ".", "5", ".", ".", ".", "."],
          [".", ".", ".", ".", ".", "6", ".", ".", "."],
          [".", ".", ".", ".", ".", ".", "7", ".", "."],
          [".", ".", ".", ".", ".", ".", ".", "8", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "9"],
        ],
      ],
      expected: false,
    },
    {
      args: [
        [
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
      ],
      expected: true,
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What are the three conditions for a valid Sudoku board?",
      "Do you need to solve the Sudoku or just validate it?",
      "Try the first example and check one row, one column, and one box.",
      "Notice that you only need to check filled cells.",
      "You need to ensure no duplicates in each row, column, and box.",
    ],
    example: [
      "For the given board:",
      "Check row 0: '5','3','7' – no duplicates.",
      "Check column 0: '5','6','8','4','7' – no duplicates.",
      "Check top-left 3x3 box: '5','3','6','9','8' – no duplicates.",
      "Repeat for all rows, columns, and boxes.",
    ],
    simpleApproach: [
      "One method checks each row for duplicates.",
      "Then checks each column for duplicates.",
      "Then checks each 3x3 box for duplicates.",
      "Use sets or boolean arrays to track seen digits.",
      "If any duplicate found, return false.",
    ],
    repeatedWork: [
      "For each row, iterate over 9 cells and track seen digits.",
      "Similarly for each column.",
      "For boxes, iterate over 3x3 blocks.",
      "Box (i,j) covers rows i*3 to i*3+2 and cols j*3 to j*3+2.",
      "If any digit repeats, board is invalid.",
    ],
    pattern: [
      "This is a constraint validation with hashing pattern.",
      "Use sets or boolean arrays to track digits per row/col/box.",
      "Iterate over board once, updating all three trackers.",
      "If any digit already seen in its row/col/box, return false.",
      "If no conflicts, return true.",
    ],
    dataStructure: [
      "Use sets or boolean arrays for rows, columns, and boxes.",
      "You can use 9 sets for rows, 9 for columns, 9 for boxes.",
      "Box index can be computed as (row/3)*3 + (col/3).",
      "No other complex structure is needed.",
      "Input is a 9x9 char board, output is boolean.",
    ],
    algorithm: [
      "Create 9 sets for rows, 9 for columns, 9 for boxes.",
      "For each cell (r, c):",
      "  val = board[r][c]",
      "  If val == '.', skip.",
      "  boxIndex = (r/3)*3 + (c/3).",
      "  If val in rowSet[r] or colSet[c] or boxSet[boxIndex]: return false.",
      "  Add val to rowSet[r], colSet[c], boxSet[boxIndex].",
      "If no conflicts found, return true.",
    ],
    pseudocode: [
      "rowSets = array of 9 empty sets",
      "colSets = array of 9 empty sets",
      "boxSets = array of 9 empty sets",
      "",
      "for r from 0 to 8:",
      "  for c from 0 to 8:",
      "    val = board[r][c]",
      "    if val == '.': continue",
      "    boxIndex = (r/3)*3 + (c/3)",
      "    if val in rowSets[r] or val in colSets[c] or val in boxSets[boxIndex]:",
      "      return false",
      "    add val to rowSets[r], colSets[c], boxSets[boxIndex]",
      "",
      "return true",
    ],
    edgeCases: [
      "Test with all empty cells (all '.').",
      "Test with a single duplicate in a row.",
      "Test with a single duplicate in a column.",
      "Test with a single duplicate in a box.",
      "Ensure you skip '.' cells.",
    ],
    finalNudge: [
      "Use sets to track digits for each row, column, and box.",
      "Check for duplicates as you iterate.",
      "Return false on first conflict.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Iterate over the board once. For each filled cell, check if the digit is already seen in its row, column, or 3x3 box. Use sets to track seen digits. If any conflict, return false; otherwise true.",
  }),

  solutionLogic: {
    approach:
      "Iterate over the board once. For each filled cell, check if the digit is already seen in its row, column, or 3x3 box. Use sets to track seen digits. If any conflict, return false; otherwise true.",

    steps: [
      "Create 9 sets each for rows, columns, boxes.",
      "For each cell (r, c):",
      "  Skip if '.'.",
      "  Compute boxIndex = (r/3)*3 + (c/3).",
      "  If digit in rowSet[r], colSet[c], or boxSet[boxIndex], return false.",
      "  Else add digit to all three sets.",
      "If no conflicts, return true.",
    ],

    pseudocode: `rowSets = [9 empty sets]
colSets = [9 empty sets]
boxSets = [9 empty sets]

for r from 0 to 8:
    for c from 0 to 8:
        val = board[r][c]
        if val == '.':
            continue
        boxIndex = (r/3)*3 + (c/3)
        if val in rowSets[r] or val in colSets[c] or val in boxSets[boxIndex]:
            return false
        add val to rowSets[r], colSets[c], boxSets[boxIndex]

return true`,

    timeComplexity: "O(1) (fixed 9x9 board)",
    spaceComplexity: "O(1) (fixed number of sets)",

    commonMistakes: [
      "Incorrect box index calculation.",
      "Not skipping '.' cells.",
      "Checking only rows or only columns.",
      "Using wrong data structure for tracking.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(board) {
  const rowSets = Array.from({ length: 9 }, () => new Set());
  const colSets = Array.from({ length: 9 }, () => new Set());
  const boxSets = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        rowSets[r].has(val) ||
        colSets[c].has(val) ||
        boxSets[boxIndex].has(val)
      ) {
        return false;
      }

      rowSets[r].add(val);
      colSets[c].add(val);
      boxSets[boxIndex].add(val);
    }
  }

  return true;
}`,

    python: `def solve(board):
    row_sets = [set() for _ in range(9)]
    col_sets = [set() for _ in range(9)]
    box_sets = [set() for _ in range(9)]

    for r in range(9):
        for c in range(9):
            val = board[r][c]
            if val == '.':
                continue

            box_index = (r // 3) * 3 + (c // 3)

            if val in row_sets[r] or val in col_sets[c] or val in box_sets[box_index]:
                return False

            row_sets[r].add(val)
            col_sets[c].add(val)
            box_sets[box_index].add(val)

    return True`,
  },

  starterCode: {
    javascript: `function solve(board) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(board):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(String[][] board) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<vector<string>> board) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q054 = {
  id: "tp-004",
  slug: "3sum",
  title: "3Sum",
  topic: "two-pointers",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",

  constraints: [
    "0 <= nums.length <= 3000",
    "-10^5 <= nums[i] <= 10^5",
  ],

  examples: [
    {
      input: "nums = [-1,0,1,2,-1,-4]",
      output: "[[-1,-1,2],[-1,0,1]]",
      explanation: "These are the unique triplets that sum to 0.",
    },
    {
      input: "nums = [0,1,1]",
      output: "[]",
      explanation: "No triplet sums to 0.",
    },
    {
      input: "nums = [0,0,0]",
      output: "[[0,0,0]]",
      explanation: "Only one triplet, all zeros.",
    },
  ],

  visibleTests: [
    { args: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[0, 0, 0]], expected: [[0, 0, 0]] },
    { args: [[-2, 0, 1, 1, 2]], expected: [[-2, 0, 2], [-2, 1, 1]] },
  ],

  hiddenTests: [
    { args: [[-1, 0, 1, 2, -1, -4, -1, 3]], expected: [[-4, 1, 3], [-1, -1, 2], [-1, 0, 1]] },
    { args: [[-4, -2, -1, 0, 1, 2, 3]], expected: [[-4, 1, 3], [-2, 0, 2], [-2, -1, 3], [-1, 0, 1]] },
    { args: [[1, 2, -2, -1]], expected: [] },
    { args: [[-1, 0, 1, 2, -1, -4, -1, 0, 1]], expected: [[-4, 1, 3], [-1, -1, 2], [-1, 0, 1]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What sum are you looking for among three numbers?",
      "Do you need unique triplets or all possible ones?",
      "Try the first example and find triplets that sum to 0.",
      "Notice that sorting can help avoid duplicates.",
      "Think about fixing one number and solving 2Sum for the rest.",
    ],
    example: [
      "For [-1,0,1,2,-1,-4]:",
      "Sorted: [-4,-1,-1,0,1,2].",
      "Fix -4: need two numbers summing to 4 → none.",
      "Fix -1: need two numbers summing to 1 → (-1,2) and (0,1).",
      "Triplets: [-1,-1,2], [-1,0,1].",
    ],
    simpleApproach: [
      "One method checks all triplets (i, j, k).",
      "This is O(n^3) and too slow.",
      "Sort the array and fix one number.",
      "Use two pointers to find pairs that sum to target.",
      "This reduces to O(n^2).",
    ],
    repeatedWork: [
      "Sort the array first.",
      "For each index i, fix nums[i] as the first element.",
      "Use two pointers (left, right) to find pairs summing to -nums[i].",
      "Skip duplicates for i, left, and right to avoid duplicate triplets.",
      "Collect valid triplets.",
    ],
    pattern: [
      "This is a sorting + two-pointer pattern for k-sum problems.",
      "Fix one element, then solve 2Sum with two pointers.",
      "Skip duplicates by checking adjacent elements.",
      "Ensure i < left < right always.",
      "Time is O(n^2), space O(1) extra.",
    ],
    dataStructure: [
      "Use the input array, sorted.",
      "Use two indices: left and right.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is an array of triplets.",
    ],
    algorithm: [
      "Sort nums.",
      "Initialize result = [].",
      "For i from 0 to n-3:",
      "  If i > 0 and nums[i] == nums[i-1], continue (skip duplicates).",
      "  left = i+1, right = n-1, target = -nums[i].",
      "  While left < right:",
      "    sum = nums[left] + nums[right].",
      "    If sum == target:",
      "      Add [nums[i], nums[left], nums[right]] to result.",
      "      Skip duplicates for left and right.",
      "      left++, right--.",
      "    Else if sum < target: left++.",
      "    Else: right--.",
      "Return result.",
    ],
    pseudocode: [
      "sort(nums)",
      "result = []",
      "for i from 0 to n-3:",
      "  if i > 0 and nums[i] == nums[i-1]: continue",
      "  left = i+1, right = n-1",
      "  target = -nums[i]",
      "  while left < right:",
      "    s = nums[left] + nums[right]",
      "    if s == target:",
      "      result.push([nums[i], nums[left], nums[right]])",
      "      while left < right and nums[left] == nums[left+1]: left++",
      "      while left < right and nums[right] == nums[right-1]: right--",
      "      left++, right--",
      "    else if s < target:",
      "      left++",
      "    else:",
      "      right--",
      "return result",
    ],
    edgeCases: [
      "Test when array has fewer than 3 elements.",
      "Test when all elements are the same.",
      "Test when no triplet sums to 0.",
      "Test with multiple duplicate triplets possible.",
      "Ensure you skip duplicates correctly.",
    ],
    finalNudge: [
      "Sort the array first.",
      "Fix one element, use two pointers for the other two.",
      "Skip duplicates to avoid repeated triplets.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Sort the array. For each element, fix it and use two pointers to find pairs that sum to its negative. Skip duplicates at each step to ensure unique triplets.",
  }),

  solutionLogic: {
    approach:
      "Sort the array. For each element, fix it and use two pointers to find pairs that sum to its negative. Skip duplicates at each step to ensure unique triplets.",

    steps: [
      "Sort nums.",
      "For each i from 0 to n-3:",
      "  Skip if nums[i] == nums[i-1].",
      "  Set left = i+1, right = n-1, target = -nums[i].",
      "  While left < right:",
      "    If nums[left] + nums[right] == target: add triplet, skip duplicates, move both.",
      "    If sum < target: left++.",
      "    Else: right--.",
      "Return result.",
    ],

    pseudocode: `sort(nums)
result = []

for i from 0 to n-3:
    if i > 0 and nums[i] == nums[i-1]:
        continue
    left = i + 1
    right = n - 1
    target = -nums[i]

    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            result.push([nums[i], nums[left], nums[right]])
            while left < right and nums[left] == nums[left+1]: left++
            while left < right and nums[right] == nums[right-1]: right--
            left++
            right--
        else if s < target:
            left++
        else:
            right--

return result`,

    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1) extra (excluding output)",

    commonMistakes: [
      "Not sorting the array.",
      "Not skipping duplicates.",
      "Using three nested loops (O(n^3)).",
      "Incorrectly moving pointers.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;
    const target = -nums[i];

    while (left < right) {
      const s = nums[left] + nums[right];
      if (s === target) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (s < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}`,

    python: `def solve(nums):
    nums.sort()
    n = len(nums)
    result = []

    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, n - 1
        target = -nums[i]

        while left < right:
            s = nums[left] + nums[right]
            if s == target:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif s < target:
                left += 1
            else:
                right -= 1

    return result`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[] nums) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q055 = {
  id: "bs-004",
  slug: "search-in-rotated-sorted-array",
  title: "Search in Rotated Sorted Array",
  topic: "binary-search",
  difficulty: "Medium",

  prompt:
    "Given a sorted array that has been rotated at some pivot unknown to you, and a target value, return the index of the target if it is in the array, otherwise return -1. The array does not contain duplicates.",

  constraints: [
    "1 <= nums.length <= 5000",
    "-10^4 <= nums[i], target <= 10^4",
    "All values of nums are unique.",
    "nums is guaranteed to be rotated at some pivot.",
  ],

  examples: [
    {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4",
      explanation: "0 is at index 4.",
    },
    {
      input: "nums = [4,5,6,7,0,1,2], target = 3",
      output: "-1",
      explanation: "3 is not in the array.",
    },
    {
      input: "nums = [1], target = 0",
      output: "-1",
      explanation: "0 is not in the array.",
    },
  ],

  visibleTests: [
    { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
    { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
    { args: [[1], 0], expected: -1 },
    { args: [[3, 1], 1], expected: 1 },
  ],

  hiddenTests: [
    { args: [[5, 1, 3], 5], expected: 0 },
    { args: [[5, 1, 3], 3], expected: 2 },
    { args: [[3, 5, 1], 3], expected: 0 },
    { args: [[3, 5, 1], 1], expected: 2 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for an array to be rotated?",
      "Is the array still partially sorted?",
      "Try the first example and identify the pivot point.",
      "Notice that one half of the array is always sorted.",
      "You need a modified binary search.",
    ],
    example: [
      "For [4,5,6,7,0,1,2], target = 0:",
      "Array is rotated at index 4 (value 0).",
      "Left half [4,5,6,7] is sorted.",
      "Right half [0,1,2] is sorted.",
      "Target 0 is in the right half.",
    ],
    simpleApproach: [
      "One method does linear scan to find target.",
      "This is O(n) and ignores the sorted structure.",
      "A modified binary search can do it in O(log n).",
      "At each step, determine which half is sorted.",
      "Check if target lies in the sorted half.",
    ],
    repeatedWork: [
      "Compute mid = (low + high) / 2.",
      "If nums[mid] == target, return mid.",
      "If left half [low..mid] is sorted:",
      "  If target in [nums[low], nums[mid]], search left.",
      "  Else search right.",
      "Else right half [mid..high] is sorted:",
      "  If target in [nums[mid], nums[high]], search right.",
      "  Else search left.",
    ],
    pattern: [
      "This is a modified binary search pattern.",
      "Determine which half is sorted.",
      "Decide which half to search based on target range.",
      "Adjust low and high accordingly.",
      "Time is O(log n).",
    ],
    dataStructure: [
      "Use the input array.",
      "Use two indices: low and high.",
      "No other complex structure is needed.",
      "Input is a rotated sorted array.",
      "Output is an index or -1.",
    ],
    algorithm: [
      "Set low = 0, high = n - 1.",
      "While low <= high:",
      "  mid = (low + high) / 2.",
      "  If nums[mid] == target, return mid.",
      "  If nums[low] <= nums[mid] (left half sorted):",
      "    If nums[low] <= target < nums[mid]: high = mid - 1.",
      "    Else: low = mid + 1.",
      "  Else (right half sorted):",
      "    If nums[mid] < target <= nums[high]: low = mid + 1.",
      "    Else: high = mid - 1.",
      "Return -1.",
    ],
    pseudocode: [
      "low = 0, high = n - 1",
      "while low <= high:",
      "  mid = (low + high) // 2",
      "  if nums[mid] == target:",
      "    return mid",
      "  if nums[low] <= nums[mid]:",
      "    if nums[low] <= target < nums[mid]:",
      "      high = mid - 1",
      "    else:",
      "      low = mid + 1",
      "  else:",
      "    if nums[mid] < target <= nums[high]:",
      "      low = mid + 1",
      "    else:",
      "      high = mid - 1",
      "return -1",
    ],
    edgeCases: [
      "Test when array has one element.",
      "Test when target is at boundaries.",
      "Test when array is not rotated (fully sorted).",
      "Test when target is not present.",
      "Ensure you handle all comparison cases.",
    ],
    finalNudge: [
      "Use binary search with a check for sorted half.",
      "Decide which half to search based on target.",
      "Return index if found, else -1.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use binary search. At each step, determine which half is sorted. If target lies within the sorted half, search there; otherwise search the other half.",
  }),

  solutionLogic: {
    approach:
      "Use binary search. At each step, determine which half is sorted. If target lies within the sorted half, search there; otherwise search the other half.",

    steps: [
      "Set low = 0, high = n - 1.",
      "While low <= high:",
      "  mid = (low + high) / 2.",
      "  If nums[mid] == target, return mid.",
      "  If left half sorted and target in range, search left.",
      "  Else search right (or vice versa).",
      "Return -1 if not found.",
    ],

    pseudocode: `low = 0
high = n - 1

while low <= high:
    mid = (low + high) // 2

    if nums[mid] == target:
        return mid

    if nums[low] <= nums[mid]:
        if nums[low] <= target < nums[mid]:
            high = mid - 1
        else:
            low = mid + 1
    else:
        if nums[mid] < target <= nums[high]:
            low = mid + 1
        else:
            high = mid - 1

return -1`,

    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not checking which half is sorted.",
      "Using wrong inequalities for target range.",
      "Forgetting to handle single-element arrays.",
      "Using standard binary search without modification.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}`,

    python: `def solve(nums, target):
    low, high = 0, len(nums) - 1

    while low <= high:
        mid = (low + high) // 2

        if nums[mid] == target:
            return mid

        if nums[low] <= nums[mid]:
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1

    return -1`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int target) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q056 = {
  id: "ll-004",
  slug: "copy-list-with-random-pointer",
  title: "Copy List with Random Pointer",
  topic: "linked-lists",
  difficulty: "Medium",

  prompt:
    "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list. A deep copy consists of n new nodes where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that no pointers in the new list reference nodes in the original list. Return the head of the copied list.",

  constraints: [
    "0 <= n <= 1000",
    "-10000 <= node.val <= 10000",
  ],

  examples: [
    {
      input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
      output: "Deep copy with same structure and random pointers",
      explanation:
        "Each node is copied, and random pointers point to corresponding new nodes.",
    },
  ],

  visibleTests: [
    {
      args: [[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]],
      expected: "deep copy",
      op: "copyRandomList",
    },
    {
      args: [[[1, 1], [2, 1]]],
      expected: "deep copy",
      op: "copyRandomList",
    },
    {
      args: [[[3, null], [3, 0], [3, null]]],
      expected: "deep copy",
      op: "copyRandomList",
    },
    {
      args: [[]],
      expected: null,
      op: "copyRandomList",
    },
  ],

  hiddenTests: [
    {
      args: [[[1, 2], [2, 2], [3, 2]]],
      expected: "deep copy",
      op: "copyRandomList",
    },
    {
      args: [[[1, null], [2, 1], [3, 2]]],
      expected: "deep copy",
      op: "copyRandomList",
    },
    {
      args: [[[1, 1], [1, 1], [1, 1]]],
      expected: "deep copy",
      op: "copyRandomList",
    },
    {
      args: [[[5, null]]],
      expected: "deep copy",
      op: "copyRandomList",
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does a deep copy of a linked list mean?",
      "How is the random pointer different from next?",
      "Try the example and trace how random pointers work.",
      "You cannot simply copy next pointers; random must also be copied.",
      "Think about mapping original nodes to copied nodes.",
    ],
    example: [
      "For [[7,null],[13,0],[11,4],[10,2],[1,0]]:",
      "Node 0: val=7, next=1, random=null.",
      "Node 1: val=13, next=2, random points to node 0.",
      "In the copy, random must point to the copied node 0, not original.",
      "All pointers must reference new nodes only.",
    ],
    simpleApproach: [
      "One method uses a hash map to map original nodes to copies.",
      "First pass: create copies of all nodes, store in map.",
      "Second pass: set next and random using the map.",
      "This is O(n) time and O(n) space.",
      "There is also an O(1) space interleaving method.",
    ],
    repeatedWork: [
      "For each original node, create a copy and store in map.",
      "Then for each original node, set copy.next = map[original.next].",
      "Similarly, set copy.random = map[original.random].",
      "Finally, return copy of head.",
      "Each node is visited twice.",
    ],
    pattern: [
      "This is a hash map mapping pattern for deep copy.",
      "Map original node → copied node.",
      "First pass: create nodes and populate map.",
      "Second pass: wire up next and random via map.",
      "Alternatively, interleave copies and then separate.",
    ],
    dataStructure: [
      "Use a hash map (Map or object).",
      "Key: original node, value: copied node.",
      "No other complex structure is needed.",
      "Input is a linked list with random pointers.",
      "Output is the head of the copied list.",
    ],
    algorithm: [
      "If head is null, return null.",
      "Create empty map.",
      "First pass: for each node, map[node] = new Node(node.val).",
      "Second pass: for each node:",
      "  map[node].next = map[node.next] (if exists).",
      "  map[node].random = map[node.random] (if exists).",
      "Return map[head].",
    ],
    pseudocode: [
      "if head == null: return null",
      "map = empty hash map",
      "curr = head",
      "while curr != null:",
      "  map[curr] = new Node(curr.val)",
      "  curr = curr.next",
      "",
      "curr = head",
      "while curr != null:",
      "  map[curr].next = map[curr.next] (if curr.next exists)",
      "  map[curr].random = map[curr.random] (if curr.random exists)",
      "  curr = curr.next",
      "",
      "return map[head]",
    ],
    edgeCases: [
      "Test when list is empty (null head).",
      "Test when all random pointers are null.",
      "Test when random pointers form cycles.",
      "Test with single-node list.",
      "Ensure no pointers reference original nodes.",
    ],
    finalNudge: [
      "Use a map to store original → copy mappings.",
      "First create all copies, then wire next and random.",
      "Return the copy of head.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a hash map to map each original node to its copy. First pass creates all nodes; second pass sets next and random pointers using the map. This ensures a correct deep copy.",
  }),

  solutionLogic: {
    approach:
      "Use a hash map to map each original node to its copy. First pass creates all nodes; second pass sets next and random pointers using the map. This ensures a correct deep copy.",

    steps: [
      "If head is null, return null.",
      "Create map: original → copy.",
      "First pass: create copies for all nodes.",
      "Second pass: set next and random via map.",
      "Return map[head].",
    ],

    pseudocode: `if head == null:
    return null

map = {}

curr = head
while curr != null:
    map[curr] = new Node(curr.val)
    curr = curr.next

curr = head
while curr != null:
    if curr.next:
        map[curr].next = map[curr.next]
    if curr.random:
        map[curr].random = map[curr.random]
    curr = curr.next

return map[head]`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the map",

    commonMistakes: [
      "Not handling null head.",
      "Forgetting to copy random pointers.",
      "Pointing to original nodes instead of copies.",
      "Not checking for null next/random before mapping.",
    ],
  },

  referenceSolution: {
    javascript: `class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function solve(head) {
  if (!head) return null;

  const map = new Map();
  let curr = head;

  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    if (curr.next) {
      map.get(curr).next = map.get(curr.next);
    }
    if (curr.random) {
      map.get(curr).random = map.get(curr.random);
    }
    curr = curr.next;
  }

  return map.get(head);
}`,

    python: `class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def solve(head):
    if not head:
        return None

    node_map = {}
    curr = head

    while curr:
        node_map[curr] = Node(curr.val)
        curr = curr.next

    curr = head
    while curr:
        if curr.next:
            node_map[curr].next = node_map[curr.next]
        if curr.random:
            node_map[curr].random = node_map[curr.random]
        curr = curr.next

    return node_map[head]`,
  },

  starterCode: {
    javascript: `function solve(head) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(head):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(Integer[][] head) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(vector<vector<optional<int>>> head) {
  // Write your C++ solution here.
  return "";
}`,
  },
};


const Q057 = {
  id: "sq-004",
  slug: "daily-temperatures",
  title: "Daily Temperatures",
  topic: "stacks-queues",
  difficulty: "Medium",

  prompt:
    "Given an array of integers temperatures representing the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, answer[i] == 0 instead.",

  constraints: [
    "1 <= temperatures.length <= 100000",
    "30 <= temperatures[i] <= 100",
  ],

  examples: [
    {
      input: "temperatures = [73,74,75,71,69,72,76,73]",
      output: "[1,1,4,2,1,1,0,0]",
      explanation:
        "For day 0 (73), next warmer is day 1 (74) → wait 1 day. For day 2 (75), next warmer is day 6 (76) → wait 4 days.",
    },
    {
      input: "temperatures = [30,40,50,60]",
      output: "[1,1,1,0]",
      explanation: "Each day has a warmer next day except the last.",
    },
    {
      input: "temperatures = [30,60,90]",
      output: "[1,1,0]",
      explanation: "Similar pattern.",
    },
  ],

  visibleTests: [
    { args: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
    { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
    { args: [[30, 60, 90]], expected: [1, 1, 0] },
    { args: [[73, 73, 73]], expected: [0, 0, 0] },
  ],

  hiddenTests: [
    { args: [[73, 72, 71, 70, 76]], expected: [4, 3, 2, 1, 0] },
    { args: [[30, 30, 30, 40]], expected: [3, 2, 1, 0] },
    { args: [[30, 31, 32, 33, 34]], expected: [1, 1, 1, 1, 0] },
    { args: [[100, 90, 80, 70]], expected: [0, 0, 0, 0] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each element of the output represent?",
      "Are you looking for the next warmer temperature or any warmer?",
      "Try the first example and find next warmer day for each.",
      "Notice that you need the distance in days, not the temperature.",
      "Think about how to efficiently find the next greater element.",
    ],
    example: [
      "For [73,74,75,71,69,72,76,73]:",
      "Day 0 (73): next warmer is day 1 (74) → 1 day.",
      "Day 2 (75): next warmer is day 6 (76) → 4 days.",
      "Day 6 (76): no warmer day → 0.",
      "Result: [1,1,4,2,1,1,0,0].",
    ],
    simpleApproach: [
      "One method checks each day against all future days.",
      "For day i, scan j from i+1 to end to find first warmer.",
      "This is O(n^2) and too slow.",
      "A stack-based approach can do it in O(n).",
      "Use a monotonic decreasing stack.",
    ],
    repeatedWork: [
      "Maintain a stack of indices with decreasing temperatures.",
      "For each day, while current temp > temp[stack.top]:",
      "  Pop index, set answer[index] = currentDay - index.",
      "Push current day onto stack.",
      "This processes each day once.",
    ],
    pattern: [
      "This is a monotonic stack pattern for next greater element.",
      "Stack stores indices of days waiting for warmer temperature.",
      "When a warmer day appears, resolve waiting days.",
      "Remaining days in stack have no warmer future day.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a stack to store indices.",
      "Use an answer array initialized to 0.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is an integer array.",
    ],
    algorithm: [
      "Create answer array of length n, initialized to 0.",
      "Create empty stack.",
      "For each day i from 0 to n-1:",
      "  While stack not empty and temperatures[i] > temperatures[stack.top]:",
      "    prevDay = stack.pop()",
      "    answer[prevDay] = i - prevDay",
      "  stack.push(i)",
      "Return answer.",
    ],
    pseudocode: [
      "n = temperatures.length",
      "answer = array of zeros of size n",
      "stack = empty",
      "",
      "for i from 0 to n-1:",
      "  while stack not empty and temperatures[i] > temperatures[stack.top]:",
      "    prevDay = stack.pop()",
      "    answer[prevDay] = i - prevDay",
      "  stack.push(i)",
      "",
      "return answer",
    ],
    edgeCases: [
      "Test when temperatures are strictly decreasing.",
      "Test when all temperatures are equal.",
      "Test when temperatures are strictly increasing.",
      "Test with single day.",
      "Ensure answer is 0 for days with no warmer future.",
    ],
    finalNudge: [
      "Use a stack to track days waiting for warmer temperature.",
      "When a warmer day appears, compute wait days for popped indices.",
      "Days remaining in stack have answer 0.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a monotonic decreasing stack of indices. For each day, while it is warmer than the day at stack top, pop and set answer. Push current day onto stack. This finds next warmer day for each.",
  }),

  solutionLogic: {
    approach:
      "Use a monotonic decreasing stack of indices. For each day, while it is warmer than the day at stack top, pop and set answer. Push current day onto stack. This finds next warmer day for each.",

    steps: [
      "Initialize answer array to 0.",
      "Initialize empty stack.",
      "For each day i:",
      "  While stack not empty and temp[i] > temp[stack.top]:",
      "    prev = stack.pop()",
      "    answer[prev] = i - prev",
      "  Push i onto stack.",
      "Return answer.",
    ],

    pseudocode: `n = temperatures.length
answer = [0] * n
stack = empty

for i from 0 to n-1:
    while stack not empty and temperatures[i] > temperatures[stack.top]:
        prev = stack.pop()
        answer[prev] = i - prev
    stack.push(i)

return answer`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the stack",

    commonMistakes: [
      "Using increasing instead of decreasing stack.",
      "Not initializing answer to 0.",
      "Computing wrong day difference.",
      "Forgetting to push current day onto stack.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevDay = stack.pop();
      answer[prevDay] = i - prevDay;
    }
    stack.push(i);
  }

  return answer;
}`,

    python: `def solve(temperatures):
    n = len(temperatures)
    answer = [0] * n
    stack = []

    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            prev_day = stack.pop()
            answer[prev_day] = i - prev_day
        stack.append(i)

    return answer`,
  },

  starterCode: {
    javascript: `function solve(temperatures) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(temperatures):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] temperatures) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> temperatures) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q058 = {
  id: "rec-003",
  slug: "palindrome-partitioning",
  title: "Palindrome Partitioning",
  topic: "recursion",
  difficulty: "Hard",

  prompt:
    "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitionings of s.",

  constraints: [
    "1 <= s.length <= 16",
    "s contains only lowercase English letters.",
  ],

  examples: [
    {
      input: 's = "aab"',
      output: '[["a","a","b"],["aa","b"]]',
      explanation: "'a','a','b' and 'aa','b' are valid palindrome partitions.",
    },
    {
      input: 's = "a"',
      output: '[["a"]]',
      explanation: "Only one partition.",
    },
  ],

  visibleTests: [
    { args: ["aab"], expected: [["a", "a", "b"], ["aa", "b"]] },
    { args: ["a"], expected: [["a"]] },
    { args: ["ab"], expected: [["a", "b"]] },
    { args: ["aaa"], expected: [["a", "a", "a"], ["a", "aa"], ["aa", "a"], ["aaa"]] },
  ],

  hiddenTests: [
    { args: ["abc"], expected: [["a", "b", "c"]] },
    { args: ["aba"], expected: [["a", "b", "a"], ["aba"]] },
    { args: ["aaaa"], expected: [["a", "a", "a", "a"], ["a", "a", "aa"], ["a", "aa", "a"], ["a", "aaa"], ["aa", "a", "a"], ["aa", "aa"], ["aaa", "a"], ["aaaa"]] },
    { args: ["abba"], expected: [["a", "b", "b", "a"], ["a", "bb", "a"], ["abba"]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a palindrome?",
      "What does it mean to partition a string into palindromes?",
      "Try the first example and list all valid partitions.",
      "Notice that you need all possible ways, not just one.",
      "This suggests a backtracking approach.",
    ],
    example: [
      "For 'aab':",
      "Partition as ['a','a','b']: each is a palindrome.",
      "Partition as ['aa','b']: 'aa' and 'b' are palindromes.",
      "Other partitions like ['a','ab'] are invalid ('ab' not palindrome).",
      "Result is all valid partitions.",
    ],
    simpleApproach: [
      "One method tries all possible cuts in the string.",
      "For each prefix, if it is a palindrome, recurse on the suffix.",
      "Collect all valid partitions.",
      "This is exponential but acceptable for small n (<=16).",
      "Use backtracking to explore all possibilities.",
    ],
    repeatedWork: [
      "At each step, consider all prefixes s[start..i].",
      "If prefix is palindrome, add to current partition.",
      "Recurse for the remaining suffix s[i+1..].",
      "When start reaches end, add current partition to result.",
      "Backtrack to try other cuts.",
    ],
    pattern: [
      "This is a backtracking with palindrome check pattern.",
      "State: current index, current partition list.",
      "Base case: index == s.length, add partition to result.",
      "Recursive case: for each end >= start, if s[start..end] is palindrome, recurse.",
      "Collect all valid partitions.",
    ],
    dataStructure: [
      "Use an array to store current partition.",
      "Use a result array to store all partitions.",
      "No other complex structure is needed.",
      "Input is a string, output is array of arrays of strings.",
      "Recursion handles exploration.",
    ],
    algorithm: [
      "Create result = [].",
      "Define backtrack(start, current):",
      "  If start == s.length:",
      "    result.push(copy of current).",
      "    Return.",
      "  For end from start to s.length - 1:",
      "    If s[start..end] is palindrome:",
      "      current.push(s[start..end]).",
      "      backtrack(end + 1, current).",
      "      current.pop().",
      "Return result.",
    ],
    pseudocode: [
      "result = []",
      "",
      "function backtrack(start, current):",
      "  if start == s.length:",
      "    result.push(copy of current)",
      "    return",
      "  for end from start to s.length - 1:",
      "    if isPalindrome(s, start, end):",
      "      current.push(s[start..end])",
      "      backtrack(end + 1, current)",
      "      current.pop()",
      "",
      "function isPalindrome(s, l, r):",
      "  while l < r:",
      "    if s[l] != s[r]: return false",
      "    l++, r--",
      "  return true",
      "",
      "backtrack(0, [])",
      "return result",
    ],
    edgeCases: [
      "Test with single-character string.",
      "Test with all same characters.",
      "Test with no multi-character palindromes.",
      "Test with entire string as palindrome.",
      "Ensure you copy the current partition when adding to result.",
    ],
    finalNudge: [
      "Use backtracking to try all palindrome prefixes.",
      "Recurse on the remaining suffix.",
      "Collect all valid partitions.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use backtracking. At each index, try all palindrome prefixes and recurse on the suffix. When the end of the string is reached, add the current partition to the result.",
  }),

  solutionLogic: {
    approach:
      "Use backtracking. At each index, try all palindrome prefixes and recurse on the suffix. When the end of the string is reached, add the current partition to the result.",

    steps: [
      "Create result array.",
      "Define backtrack(start, current).",
      "If start == s.length, add copy of current to result.",
      "For end from start to n-1:",
      "  If s[start..end] is palindrome:",
      "    Add to current, recurse, backtrack.",
      "Return result.",
    ],

    pseudocode: `result = []

function backtrack(start, current):
    if start == s.length:
        result.push(copy of current)
        return
    for end from start to s.length - 1:
        if isPalindrome(s, start, end):
            current.push(s[start..end])
            backtrack(end + 1, current)
            current.pop()

function isPalindrome(s, l, r):
    while l < r:
        if s[l] != s[r]:
            return false
        l++, r--
    return true

backtrack(0, [])
return result`,

    timeComplexity: "O(n * 2^n) in worst case",
    spaceComplexity: "O(n) for recursion stack and current partition",

    commonMistakes: [
      "Not checking palindrome correctly.",
      "Forgetting to backtrack (pop) after recursion.",
      "Not copying current partition before adding to result.",
      "Using wrong indices for substring.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  const result = [];

  function isPalindrome(str, l, r) {
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  function backtrack(start, current) {
    if (start === s.length) {
      result.push([...current]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        current.push(s.slice(start, end + 1));
        backtrack(end + 1, current);
        current.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}`,

    python: `def solve(s):
    result = []

    def is_palindrome(l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True

    def backtrack(start, current):
        if start == len(s):
            result.append(current[:])
            return

        for end in range(start, len(s)):
            if is_palindrome(start, end):
                current.append(s[start:end+1])
                backtrack(end + 1, current)
                current.pop()

    backtrack(0, [])
    return result`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static String[][] solve(String s) {
  // Write your Java solution here.
  return new String[][]{};
}`,
    cpp: `vector<vector<string>> solve(string s) {
  // Write your C++ solution here.
  return vector<vector<string>>{};
}`,
  },
};


const Q059 = {
  id: "tree-004",
  slug: "binary-tree-level-order-traversal",
  title: "Binary Tree Level Order Traversal",
  topic: "trees",
  difficulty: "Medium",

  prompt:
    "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",

  constraints: [
    "The number of nodes in the tree is in the range [0, 2000].",
    "-1000 <= node.val <= 1000",
  ],

  examples: [
    {
      input: "root = [3,9,20,null,null,15,7]",
      output: "[[3],[9,20],[15,7]]",
      explanation: "Level 0: [3], Level 1: [9,20], Level 2: [15,7].",
    },
    {
      input: "root = [1]",
      output: "[[1]]",
      explanation: "Only one level.",
    },
    {
      input: "root = []",
      output: "[]",
      explanation: "Empty tree.",
    },
  ],

  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [9, 20], [15, 7]] },
    { args: [[1]], expected: [[1]] },
    { args: [[]], expected: [] },
    { args: [[1, 2, 3, 4, 5]], expected: [[1], [2, 3], [4, 5]] },
  ],

  hiddenTests: [
    { args: [[1, 2, null, 3, null, 4]], expected: [[1], [2], [3], [4]] },
    { args: [[1, 2, 3, null, 4, 5, 6]], expected: [[1], [2, 3], [4, 5, 6]] },
    { args: [[5, 4, 6, 3, null, null, 7]], expected: [[5], [4, 6], [3, 7]] },
    { args: [[-1, -2, -3]], expected: [[-1], [-2, -3]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does level order traversal mean?",
      "Do you visit nodes level by level or depth-first?",
      "Try the first example and list nodes by level.",
      "Notice that you need to group nodes by their depth.",
      "Think about using a queue to process level by level.",
    ],
    example: [
      "For [3,9,20,null,null,15,7]:",
      "Level 0: 3",
      "Level 1: 9, 20",
      "Level 2: 15, 7",
      "Result: [[3],[9,20],[15,7]].",
    ],
    simpleApproach: [
      "One method uses BFS with a queue.",
      "At each step, process all nodes at current level.",
      "Collect their values and enqueue children.",
      "Repeat until queue is empty.",
      "This naturally groups by level.",
    ],
    repeatedWork: [
      "Initialize queue with root.",
      "While queue not empty:",
      "  Determine size of current level.",
      "  Pop that many nodes, collect values.",
      "  Enqueue their children.",
      "  Add level list to result.",
    ],
    pattern: [
      "This is a BFS level-by-level pattern.",
      "Use a queue to store nodes.",
      "Process one level at a time using queue size.",
      "Collect values for each level.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a queue for BFS.",
      "Use an array to store result (array of arrays).",
      "No other complex structure is needed.",
      "Input is a tree root, output is array of arrays.",
      "Queue stores tree nodes.",
    ],
    algorithm: [
      "If root is null, return [].",
      "Initialize queue with root, result = [].",
      "While queue not empty:",
      "  levelSize = queue.length.",
      "  level = [].",
      "  For i from 0 to levelSize-1:",
      "    node = queue.shift().",
      "    level.push(node.val).",
      "    If node.left, queue.push(node.left).",
      "    If node.right, queue.push(node.right).",
      "  result.push(level).",
      "Return result.",
    ],
    pseudocode: [
      "if root == null: return []",
      "queue = [root]",
      "result = []",
      "",
      "while queue not empty:",
      "  levelSize = queue.length",
      "  level = []",
      "  for i from 0 to levelSize-1:",
      "    node = queue.shift()",
      "    level.push(node.val)",
      "    if node.left: queue.push(node.left)",
      "    if node.right: queue.push(node.right)",
      "  result.push(level)",
      "",
      "return result",
    ],
    edgeCases: [
      "Test with empty tree.",
      "Test with single-node tree.",
      "Test with skewed tree (all left or all right).",
      "Test with complete binary tree.",
      "Ensure you group by level correctly.",
    ],
    finalNudge: [
      "Use BFS with a queue.",
      "Process one level at a time using queue size.",
      "Collect values for each level.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use BFS. Initialize queue with root. For each level, process all nodes currently in queue, collect their values, and enqueue children. Repeat until queue is empty.",
  }),

  solutionLogic: {
    approach:
      "Use BFS. Initialize queue with root. For each level, process all nodes currently in queue, collect their values, and enqueue children. Repeat until queue is empty.",

    steps: [
      "If root is null, return [].",
      "Queue = [root], result = [].",
      "While queue not empty:",
      "  levelSize = queue.length.",
      "  Collect values of levelSize nodes.",
      "  Enqueue their children.",
      "  Add level to result.",
      "Return result.",
    ],

    pseudocode: `if root == null:
    return []

queue = [root]
result = []

while queue not empty:
    levelSize = queue.length
    level = []
    for i from 0 to levelSize-1:
        node = queue.shift()
        level.push(node.val)
        if node.left: queue.push(node.left)
        if node.right: queue.push(node.right)
    result.push(level)

return result`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for queue and result",

    commonMistakes: [
      "Not handling empty tree.",
      "Not processing level by level (mixing levels).",
      "Forgetting to enqueue children.",
      "Using DFS instead of BFS.",
    ],
  },

  referenceSolution: {
    javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solve(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}`,

    python: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(root):
    if not root:
        return []

    queue = deque([root])
    result = []

    while queue:
        level_size = len(queue)
        level = []

        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        result.append(level)

    return result`,
  },

  starterCode: {
    javascript: `function solve(root) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(root):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(Integer[] root) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<optional<int>> root) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q060 = {
  id: "graph-004",
  slug: "number-of-islands",
  title: "Number of Islands",
  topic: "graphs",
  difficulty: "Medium",

  prompt:
    "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",

  constraints: [
    "m == grid.length",
    "n == grid[i].length",
    "1 <= m, n <= 300",
    "grid[i][j] is '0' or '1'.",
  ],

  examples: [
    {
      input: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,
      output: "1",
      explanation: "All '1's are connected, forming one island.",
    },
    {
      input: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
      output: "3",
      explanation: "Three separate groups of '1's.",
    },
  ],

  visibleTests: [
    {
      args: [
        [
          ["1", "1", "1", "1", "0"],
          ["1", "1", "0", "1", "0"],
          ["1", "1", "0", "0", "0"],
          ["0", "0", "0", "0", "0"],
        ],
      ],
      expected: 1,
    },
    {
      args: [
        [
          ["1", "1", "0", "0", "0"],
          ["1", "1", "0", "0", "0"],
          ["0", "0", "1", "0", "0"],
          ["0", "0", "0", "1", "1"],
        ],
      ],
      expected: 3,
    },
    { args: [[["0"]]], expected: 0 },
    { args: [[["1"]]], expected: 1 },
  ],

  hiddenTests: [
    {
      args: [
        [
          ["1", "0", "1"],
          ["0", "1", "0"],
          ["1", "0", "1"],
        ],
      ],
      expected: 5,
    },
    {
      args: [
        [
          ["1", "1", "1"],
          ["0", "1", "0"],
          ["1", "1", "1"],
        ],
      ],
      expected: 1,
    },
    {
      args: [
        [
          ["1", "1", "0", "0"],
          ["0", "1", "0", "0"],
          ["0", "0", "1", "1"],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        [
          ["1", "0", "0"],
          ["0", "0", "0"],
          ["0", "0", "1"],
        ],
      ],
      expected: 2,
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What defines an island in the grid?",
      "Are diagonal connections considered?",
      "Try the first example and trace connected '1's.",
      "Notice that you need to count connected components of '1's.",
      "Think about using DFS or BFS to explore islands.",
    ],
    example: [
      "For the first grid:",
      "All '1's are connected horizontally/vertically.",
      "They form one continuous island.",
      "For the second grid:",
      "There are three separate groups of '1's.",
      "So answer is 3.",
    ],
    simpleApproach: [
      "One method iterates over all cells.",
      "When a '1' is found, start DFS/BFS to mark entire island.",
      "Increment island count.",
      "Mark visited cells to avoid recounting.",
      "Continue until all cells processed.",
    ],
    repeatedWork: [
      "For each unvisited '1', start a traversal.",
      "DFS/BFS visits all connected '1's.",
      "Mark them as visited (e.g., change to '0').",
      "Each island is counted once.",
      "Total work is proportional to number of cells.",
    ],
    pattern: [
      "This is a connected components in grid pattern.",
      "Iterate over all cells.",
      "When '1' found, increment count and run DFS/BFS.",
      "Mark visited cells to avoid reprocessing.",
      "Time is O(m*n).",
    ],
    dataStructure: [
      "Use the input grid, optionally modify it.",
      "Use recursion stack for DFS or queue for BFS.",
      "No other complex structure is needed.",
      "Input is a 2D char grid.",
      "Output is an integer (number of islands).",
    ],
    algorithm: [
      "Initialize count = 0.",
      "For each cell (r, c):",
      "  If grid[r][c] == '1':",
      "    count++.",
      "    Start DFS/BFS from (r, c) to mark island.",
      "In DFS:",
      "  Mark current cell as visited (e.g., set to '0').",
      "  For each neighbor (up, down, left, right):",
      "    If neighbor is '1', recurse.",
      "Return count.",
    ],
    pseudocode: [
      "count = 0",
      "for r from 0 to m-1:",
      "  for c from 0 to n-1:",
      "    if grid[r][c] == '1':",
      "      count++",
      "      dfs(r, c)",
      "",
      "function dfs(r, c):",
      "  if r,c out of bounds or grid[r][c] == '0': return",
      "  grid[r][c] = '0'",
      "  dfs(r-1, c)",
      "  dfs(r+1, c)",
      "  dfs(r, c-1)",
      "  dfs(r, c+1)",
      "",
      "return count",
    ],
    edgeCases: [
      "Test with all '0's.",
      "Test with all '1's.",
      "Test with single cell grid.",
      "Test with checkerboard pattern.",
      "Ensure you handle boundaries correctly.",
    ],
    finalNudge: [
      "Iterate over grid, start DFS on each unvisited '1'.",
      "Mark visited cells to avoid recounting.",
      "Count number of DFS starts.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Iterate over all cells. When a '1' is found, increment count and run DFS/BFS to mark the entire island as visited. The number of times you start a traversal is the number of islands.",
  }),

  solutionLogic: {
    approach:
      "Iterate over all cells. When a '1' is found, increment count and run DFS/BFS to mark the entire island as visited. The number of times you start a traversal is the number of islands.",

    steps: [
      "Initialize count = 0.",
      "For each cell (r, c):",
      "  If grid[r][c] == '1':",
      "    count++.",
      "    Run DFS/BFS to mark island.",
      "Return count.",
    ],

    pseudocode: `count = 0

for r from 0 to m-1:
    for c from 0 to n-1:
        if grid[r][c] == '1':
            count++
            dfs(r, c)

function dfs(r, c):
    if r,c out of bounds or grid[r][c] == '0':
        return
    grid[r][c] = '0'
    dfs(r-1, c)
    dfs(r+1, c)
    dfs(r, c-1)
    dfs(r, c+1)

return count`,

    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n) in worst case for recursion stack",

    commonMistakes: [
      "Counting the same island multiple times.",
      "Not marking visited cells.",
      "Including diagonal connections.",
      "Not handling grid boundaries.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === '0') {
      return;
    }
    grid[r][c] = '0';
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}`,

    python: `def solve(grid):
    m, n = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == '0':
            return
        grid[r][c] = '0'
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)

    for r in range(m):
        for c in range(n):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)

    return count`,
  },

  starterCode: {
    javascript: `function solve(grid) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(grid):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(String[][] grid) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<vector<string>> grid) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q061 = {
  id: "arr-007",
  slug: "first-missing-positive-ii",
  title: "First Missing Positive II",
  topic: "arrays",
  difficulty: "Hard",

  prompt:
    "Given an unsorted integer array nums, return the smallest positive integer that is not present in nums. Solve it in O(n) time and using O(1) extra space. This is a variant with additional edge cases and larger constraints.",

  constraints: [
    "1 <= nums.length <= 1000000",
    "-2^31 <= nums[i] <= 2^31 - 1",
  ],

  examples: [
    {
      input: "nums = [1,2,0]",
      output: "3",
      explanation: "1 and 2 are present, 3 is missing.",
    },
    {
      input: "nums = [3,4,-1,1]",
      output: "2",
      explanation: "1 is present, 2 is missing.",
    },
    {
      input: "nums = [7,8,9,11,12]",
      output: "1",
      explanation: "1 is missing.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 0]], expected: 3 },
    { args: [[3, 4, -1, 1]], expected: 2 },
    { args: [[7, 8, 9, 11, 12]], expected: 1 },
    { args: [[1]], expected: 2 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[-1, -2, -3]], expected: 1 },
    { args: [[2, 1]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 2 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the smallest positive integer?",
      "Are negative numbers and zero relevant?",
      "Try the first example and list positive integers present.",
      "You need the smallest positive integer not in the array.",
      "You are constrained to O(n) time and O(1) extra space.",
    ],
    example: [
      "For [1,2,0], positive integers present: 1, 2.",
      "Smallest missing positive is 3.",
      "For [3,4,-1,1], positives present: 1, 3, 4.",
      "Smallest missing positive is 2.",
      "For [7,8,9,...], 1 is missing.",
    ],
    simpleApproach: [
      "One method uses a hash set to store all numbers.",
      "Then check 1, 2, 3, ... until you find a missing one.",
      "This is O(n) time but O(n) space.",
      "To achieve O(1) space, you must use the array itself.",
      "Think about placing each number in its 'correct' position.",
    ],
    repeatedWork: [
      "For a number x in [1..n], its correct position is index x-1.",
      "You can swap numbers to their correct positions.",
      "After rearranging, scan to find first index where nums[i] != i+1.",
      "That i+1 is the missing positive.",
      "This uses the array itself as a hash map.",
    ],
    pattern: [
      "This is an in-place indexing / cyclic sort pattern.",
      "For each element, if it is in [1..n] and not in correct position, swap.",
      "Continue until all such elements are in correct positions or cannot be placed.",
      "Then scan to find first mismatch.",
      "Time is O(n), extra space O(1).",
    ],
    dataStructure: [
      "Use the input array itself.",
      "No extra data structure is needed.",
      "Input is an integer array.",
      "Output is a single integer.",
      "Indices represent potential positive integers.",
    ],
    algorithm: [
      "For i from 0 to n-1:",
      "  While nums[i] is in [1..n] and nums[i] != nums[nums[i]-1]:",
      "    Swap nums[i] with nums[nums[i]-1].",
      "After rearrangement:",
      "  For i from 0 to n-1:",
      "    If nums[i] != i+1, return i+1.",
      "If all match, return n+1.",
    ],
    pseudocode: [
      "n = nums.length",
      "for i from 0 to n-1:",
      "  while nums[i] in [1..n] and nums[i] != nums[nums[i]-1]:",
      "    swap nums[i] and nums[nums[i]-1]",
      "",
      "for i from 0 to n-1:",
      "  if nums[i] != i+1:",
      "    return i+1",
      "",
      "return n+1",
    ],
    edgeCases: [
      "Test when all numbers from 1..n are present.",
      "Test when no positive numbers are present.",
      "Test with duplicates.",
      "Test with negative numbers and zeros.",
      "Ensure you handle 1-based vs 0-based indexing.",
    ],
    finalNudge: [
      "Place each number x in [1..n] at index x-1 if possible.",
      "Then scan for first index where nums[i] != i+1.",
      "If all match, answer is n+1.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use the array itself as a hash map. For each number in [1..n], try to place it at index x-1 by swapping. After rearrangement, the first index i where nums[i] != i+1 gives the missing positive i+1.",
  }),

  solutionLogic: {
    approach:
      "Use the array itself as a hash map. For each number in [1..n], try to place it at index x-1 by swapping. After rearrangement, the first index i where nums[i] != i+1 gives the missing positive i+1.",

    steps: [
      "For each i, while nums[i] in [1..n] and not in correct position:",
      "  Swap nums[i] with nums[nums[i]-1].",
      "After rearrangement, scan array:",
      "  If nums[i] != i+1, return i+1.",
      "If all match, return n+1.",
    ],

    pseudocode: `n = nums.length

for i from 0 to n-1:
    while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
        target_idx = nums[i] - 1
        nums[i], nums[target_idx] = nums[target_idx], nums[i]

for i from 0 to n-1:
    if nums[i] != i + 1:
        return i + 1

return n + 1`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1) extra space",

    commonMistakes: [
      "Not checking bounds before accessing nums[nums[i]-1].",
      "Creating infinite loops in the swap step.",
      "Forgetting to handle the case where all 1..n are present.",
      "Using extra space instead of in-place rearrangement.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= n &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      const targetIdx = nums[i] - 1;
      [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}`,

    python: `def solve(nums):
    n = len(nums)

    for i in range(n):
        while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
            target_idx = nums[i] - 1
            nums[i], nums[target_idx] = nums[target_idx], nums[i]

    for i in range(n):
        if nums[i] != i + 1:
            return i + 1

    return n + 1`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q062 = {
  id: "str-005",
  slug: "longest-valid-parentheses",
  title: "Longest Valid Parentheses",
  topic: "strings",
  difficulty: "Hard",

  prompt:
    "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",

  constraints: [
    "0 <= s.length <= 30000",
    "s[i] is '(' or ')'.",
  ],

  examples: [
    {
      input: 's = "(()"',
      output: "2",
      explanation: "The longest valid parentheses substring is '()'.",
    },
    {
      input: 's = ")()())"',
      output: "4",
      explanation: "The longest valid parentheses substring is '()()'.",
    },
    {
      input: 's = ""',
      output: "0",
      explanation: "Empty string has length 0.",
    },
  ],

  visibleTests: [
    { args: ["(()"], expected: 2 },
    { args: [")()())"], expected: 4 },
    { args: [""], expected: 0 },
    { args: ["()"], expected: 2 },
  ],

  hiddenTests: [
    { args: ["()(()"], expected: 2 },
    { args: ["(()())"], expected: 6 },
    { args: [")))((("], expected: 0 },
    { args: ["()((()))"], expected: 6 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What makes a parentheses substring valid?",
      "Are you looking for a subsequence or a contiguous substring?",
      "Try the first example and identify valid substrings.",
      "Notice that validity depends on matching '(' and ')'.",
      "Think about using a stack or DP.",
    ],
    example: [
      "For '(()':",
      "Substring '()' (indices 1-2) is valid, length 2.",
      "For ')()())':",
      "Substring '()()' (indices 1-4) is valid, length 4.",
      "You need the maximum length.",
    ],
    simpleApproach: [
      "One method checks all substrings for validity.",
      "This is O(n^3) or O(n^2) and too slow.",
      "A stack-based approach can do it in O(n).",
      "Alternatively, use two passes with counters.",
      "Both are efficient.",
    ],
    repeatedWork: [
      "Use a stack to store indices of '('.",
      "When you see ')', pop if stack not empty.",
      "Track the last invalid index.",
      "Length is current index minus last invalid index.",
      "This finds longest valid substring.",
    ],
    pattern: [
      "This is a stack with indices pattern.",
      "Initialize stack with -1 (base for length calculation).",
      "For each char:",
      "  If '(', push index.",
      "  If ')', pop; if stack empty, push index; else update max length.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a stack to store indices.",
      "No other complex structure is needed.",
      "Input is a string of '(' and ')'.",
      "Output is an integer.",
      "Indices represent positions in string.",
    ],
    algorithm: [
      "Initialize stack with -1, maxLen = 0.",
      "For i from 0 to s.length - 1:",
      "  If s[i] == '(', push i.",
      "  Else:",
      "    Pop from stack.",
      "    If stack empty, push i.",
      "    Else: maxLen = max(maxLen, i - stack.top).",
      "Return maxLen.",
    ],
    pseudocode: [
      "stack = [-1]",
      "maxLen = 0",
      "",
      "for i from 0 to s.length - 1:",
      "  if s[i] == '(':",
      "    stack.push(i)",
      "  else:",
      "    stack.pop()",
      "    if stack empty:",
      "      stack.push(i)",
      "    else:",
      "      maxLen = max(maxLen, i - stack.top)",
      "",
      "return maxLen",
    ],
    edgeCases: [
      "Test with empty string.",
      "Test with all '(' or all ')'.",
      "Test with already valid string.",
      "Test with no valid substring.",
      "Ensure you handle stack base correctly.",
    ],
    finalNudge: [
      "Use a stack with base index -1.",
      "Push indices of '(', pop for ')'.",
      "Update max length when stack not empty after pop.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a stack initialized with -1. Push indices of '(', pop for ')'. If stack becomes empty, push current index as new base. Otherwise, update max length as current index minus stack top.",
  }),

  solutionLogic: {
    approach:
      "Use a stack initialized with -1. Push indices of '(', pop for ')'. If stack becomes empty, push current index as new base. Otherwise, update max length as current index minus stack top.",

    steps: [
      "Initialize stack with [-1], maxLen = 0.",
      "For each index i:",
      "  If s[i] == '(', push i.",
      "  Else: pop; if stack empty, push i; else update maxLen.",
      "Return maxLen.",
    ],

    pseudocode: `stack = [-1]
maxLen = 0

for i from 0 to s.length - 1:
    if s[i] == '(':
        stack.push(i)
    else:
        stack.pop()
        if stack empty:
            stack.push(i)
        else:
            maxLen = max(maxLen, i - stack.top)

return maxLen`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the stack",

    commonMistakes: [
      "Not initializing stack with -1.",
      "Forgetting to push current index when stack becomes empty.",
      "Using wrong formula for length.",
      "Not handling empty string.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  const stack = [-1];
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLen;
}`,

    python: `def solve(s):
    stack = [-1]
    max_len = 0

    for i, ch in enumerate(s):
        if ch == '(':
            stack.append(i)
        else:
            stack.pop()
            if not stack:
                stack.append(i)
            else:
                max_len = max(max_len, i - stack[-1])

    return max_len`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(String s) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(string s) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q063 = {
  id: "hash-005",
  slug: "subarray-sum-equals-k",
  title: "Subarray Sum Equals K",
  topic: "hashing",
  difficulty: "Hard",

  prompt:
    "Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-1000 <= nums[i] <= 1000",
    "-10^7 <= k <= 10^7",
  ],

  examples: [
    {
      input: "nums = [1,1,1], k = 2",
      output: "2",
      explanation: "Subarrays [1,1] at indices [0,1] and [1,2].",
    },
    {
      input: "nums = [1,2,3], k = 3",
      output: "2",
      explanation: "Subarrays [1,2] and [3].",
    },
  ],

  visibleTests: [
    { args: [[1, 1, 1], 2], expected: 2 },
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[1, -1, 0], 0], expected: 3 },
    { args: [[0, 0, 0], 0], expected: 6 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4], 5], expected: 2 },
    { args: [[-1, -1, 1], -1], expected: 2 },
    { args: [[1, 2, -1, 2, 1], 3], expected: 3 },
    { args: [[1, 1, 1, 1], 2], expected: 3 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a subarray?",
      "Are you counting subarrays or just checking existence?",
      "Try the first example and list all subarrays with sum k.",
      "Notice that subarrays are contiguous.",
      "Think about prefix sums and their differences.",
    ],
    example: [
      "For [1,1,1], k=2:",
      "Subarray [0..1]: sum = 2.",
      "Subarray [1..2]: sum = 2.",
      "Total count = 2.",
      "For [1,2,3], k=3:",
      "Subarray [0..1]: sum = 3.",
      "Subarray [2..2]: sum = 3.",
      "Total count = 2.",
    ],
    simpleApproach: [
      "One method checks all subarrays and their sums.",
      "This is O(n^2) and may be too slow.",
      "A prefix sum with hash map can do it in O(n).",
      "Use the fact that sum[i..j] = prefix[j] - prefix[i-1].",
      "Track frequency of prefix sums.",
    ],
    repeatedWork: [
      "Maintain a running prefix sum.",
      "For each index, check if (prefixSum - k) has been seen.",
      "If yes, add its frequency to count.",
      "Update frequency of current prefixSum.",
      "This counts all valid subarrays ending at current index.",
    ],
    pattern: [
      "This is a prefix sum with hash map pattern.",
      "Map stores frequency of each prefix sum.",
      "Initialize map with {0: 1} for subarrays starting at index 0.",
      "For each element, update prefixSum and check (prefixSum - k).",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a hash map for prefix sum frequencies.",
      "No other complex structure is needed.",
      "Input is an integer array and integer k.",
      "Output is an integer count.",
      "Map keys are prefix sums, values are frequencies.",
    ],
    algorithm: [
      "Create map with {0: 1}, prefixSum = 0, count = 0.",
      "For each num in nums:",
      "  prefixSum += num.",
      "  If (prefixSum - k) in map: count += map[prefixSum - k].",
      "  map[prefixSum] = map.get(prefixSum, 0) + 1.",
      "Return count.",
    ],
    pseudocode: [
      "map = {0: 1}",
      "prefixSum = 0",
      "count = 0",
      "",
      "for num in nums:",
      "  prefixSum += num",
      "  if (prefixSum - k) in map:",
      "    count += map[prefixSum - k]",
      "  map[prefixSum] = map.get(prefixSum, 0) + 1",
      "",
      "return count",
    ],
    edgeCases: [
      "Test with negative numbers.",
      "Test with zeros.",
      "Test when k is 0.",
      "Test when no subarray sums to k.",
      "Ensure you handle multiple subarrays correctly.",
    ],
    finalNudge: [
      "Use a map to store prefix sum frequencies.",
      "For each prefixSum, check how many times (prefixSum - k) occurred.",
      "Add that to count.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use prefix sums and a hash map. For each prefixSum, the number of subarrays ending here with sum k is the frequency of (prefixSum - k). Accumulate these counts.",
  }),

  solutionLogic: {
    approach:
      "Use prefix sums and a hash map. For each prefixSum, the number of subarrays ending here with sum k is the frequency of (prefixSum - k). Accumulate these counts.",

    steps: [
      "Initialize map {0: 1}, prefixSum = 0, count = 0.",
      "For each num:",
      "  prefixSum += num.",
      "  count += map.get(prefixSum - k, 0).",
      "  Increment map[prefixSum].",
      "Return count.",
    ],

    pseudocode: `map = {0: 1}
prefixSum = 0
count = 0

for num in nums:
    prefixSum += num
    count += map.get(prefixSum - k, 0)
    map[prefixSum] = map.get(prefixSum, 0) + 1

return count`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the map",

    commonMistakes: [
      "Not initializing map with {0: 1}.",
      "Using wrong formula (prefixSum + k instead of prefixSum - k).",
      "Not updating map correctly.",
      "Counting subarrays incorrectly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, k) {
  const map = new Map([[0, 1]]);
  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, map.get(prefixSum) + 1 || 1);
  }

  return count;
}`,

    python: `from collections import defaultdict

def solve(nums, k):
    prefix_counts = defaultdict(int)
    prefix_counts[0] = 1
    prefix_sum = 0
    count = 0

    for num in nums:
        prefix_sum += num
        count += prefix_counts[prefix_sum - k]
        prefix_counts[prefix_sum] += 1

    return count`,
  },

  starterCode: {
    javascript: `function solve(nums, k) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, k):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int k) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int k) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q064 = {
  id: "tp-005",
  slug: "minimum-window-substring-ii",
  title: "Minimum Window Substring II",
  topic: "two-pointers",
  difficulty: "Hard",

  prompt:
    "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return an empty string. This is a variant with additional constraints and edge cases.",

  constraints: [
    "1 <= s.length, t.length <= 100000",
    "s and t consist of uppercase and lowercase English letters.",
  ],

  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"',
      explanation:
        "The minimum window containing 'A', 'B', 'C' is 'BANC'.",
    },
    {
      input: 's = "a", t = "a"',
      output: '"a"',
      explanation: "Only one possible window.",
    },
    {
      input: 's = "a", t = "aa"',
      output: '""',
      explanation: "Not enough 'a' characters in s.",
    },
  ],

  visibleTests: [
    { args: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    { args: ["a", "a"], expected: "a" },
    { args: ["a", "aa"], expected: "" },
    { args: ["abc", "b"], expected: "b" },
  ],

  hiddenTests: [
    { args: ["abc", "abc"], expected: "abc" },
    { args: ["abc", "abcd"], expected: "" },
    { args: ["abbc", "abc"], expected: "abbc" },
    { args: ["abbc", "abcc"], expected: "" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for a window to contain all characters of t?",
      "Do you need to match the exact counts of characters?",
      "Try the first example and find a window that contains A, B, C.",
      "You need the smallest such window.",
      "Think about expanding and shrinking a window.",
    ],
    example: [
      "For s='ADOBECODEBANC', t='ABC':",
      "One valid window is 'ADOBEC' (contains A,B,C).",
      "A smaller one is 'BANC'.",
      "You cannot make it smaller and still have A,B,C.",
      "So answer is 'BANC'.",
    ],
    simpleApproach: [
      "One method checks all substrings of s.",
      "For each, check if it contains all characters of t.",
      "Track the minimum length valid window.",
      "This is O(n^3) or O(n^2) and too slow.",
      "A sliding window can do it in O(n).",
    ],
    repeatedWork: [
      "Maintain a window [left, right] over s.",
      "Expand right to include more characters.",
      "When window has all required characters, try to shrink from left.",
      "Track the minimum valid window seen.",
      "Use frequency maps for t and current window.",
    ],
    pattern: [
      "This is a sliding window with frequency counts pattern.",
      "Build a frequency map for t.",
      "Expand right, updating window counts.",
      "When all required counts are met, shrink from left.",
      "Update minimum window when valid.",
    ],
    dataStructure: [
      "Use two frequency maps (or arrays) for t and current window.",
      "Alternatively, use one map with a 'need' counter.",
      "No other complex structure is needed.",
      "Input is two strings, output is a string.",
      "Track left, right, and minimum window indices.",
    ],
    algorithm: [
      "Build frequency map need for t.",
      "Initialize left = 0, formed = 0, required = number of unique chars in t.",
      "Initialize minLen = infinity, minLeft = 0.",
      "For right from 0 to s.length - 1:",
      "  Add s[right] to window counts.",
      "  If s[right] count in window equals need[s[right]], increment formed.",
      "  While formed == required:",
      "    Update minLen and minLeft if current window is smaller.",
      "    Remove s[left] from window.",
      "    If count of s[left] falls below need[s[left]], decrement formed.",
      "    left++",
      "Return substring from minLeft with length minLen (or '' if none).",
    ],
    pseudocode: [
      "need = frequency map of t",
      "required = number of unique keys in need",
      "formed = 0",
      "windowCounts = empty map",
      "left = 0, minLen = infinity, minLeft = 0",
      "",
      "for right from 0 to s.length - 1:",
      "  ch = s[right]",
      "  windowCounts[ch]++",
      "  if ch in need and windowCounts[ch] == need[ch]:",
      "    formed++",
      "",
      "  while formed == required:",
      "    if (right - left + 1) < minLen:",
      "      minLen = right - left + 1",
      "      minLeft = left",
      "",
      "    removeCh = s[left]",
      "    windowCounts[removeCh]--",
      "    if removeCh in need and windowCounts[removeCh] < need[removeCh]:",
      "      formed--",
      "    left++",
      "",
      "if minLen == infinity: return ''",
      "else: return s.substring(minLeft, minLeft + minLen)",
    ],
    edgeCases: [
      "Test when t is longer than s.",
      "Test when no valid window exists.",
      "Test when s and t are identical.",
      "Test when t has duplicate characters.",
      "Ensure you handle case sensitivity.",
    ],
    finalNudge: [
      "Use frequency maps to track required and current counts.",
      "Expand right until all requirements are met.",
      "Then shrink left to minimize window while still valid.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a sliding window with frequency counts. Expand right to include characters, and when all required characters are present, shrink from left to find the minimum valid window. Track the smallest window seen.",
  }),

  solutionLogic: {
    approach:
      "Use a sliding window with frequency counts. Expand right to include characters, and when all required characters are present, shrink from left to find the minimum valid window. Track the smallest window seen.",

    steps: [
      "Build frequency map for t.",
      "Expand right, updating window counts.",
      "When all required characters are satisfied:",
      "  Update minimum window if current is smaller.",
      "  Shrink from left until window becomes invalid.",
      "Continue until end of s.",
      "Return minimum window substring.",
    ],

    pseudocode: `need = frequency map of t
required = number of unique keys in need
formed = 0
windowCounts = empty map
left = 0
minLen = infinity
minLeft = 0

for right from 0 to s.length - 1:
    ch = s[right]
    windowCounts[ch]++

    if ch in need and windowCounts[ch] == need[ch]:
        formed++

    while formed == required:
        if (right - left + 1) < minLen:
            minLen = right - left + 1
            minLeft = left

        removeCh = s[left]
        windowCounts[removeCh]--
        if removeCh in need and windowCounts[removeCh] < need[removeCh]:
            formed--
        left++

if minLen == infinity:
    return ''
else:
    return s.substring(minLeft, minLeft + minLen)`,

    timeComplexity: "O(n) where n is length of s",
    spaceComplexity: "O(1) (at most 52 letters for upper+lower)",

    commonMistakes: [
      "Not tracking exact counts (only presence).",
      "Shrinking too aggressively and losing validity.",
      "Not updating minimum window correctly.",
      "Forgetting to handle the case where no valid window exists.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s, t) {
  if (t.length > s.length) return '';

  const need = new Map();
  for (const ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  const required = need.size;
  let formed = 0;
  const windowCounts = new Map();

  let left = 0;
  let minLen = Infinity;
  let minLeft = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    windowCounts.set(ch, (windowCounts.get(ch) || 0) + 1);

    if (need.has(ch) && windowCounts.get(ch) === need.get(ch)) {
      formed++;
    }

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }

      const removeCh = s[left];
      windowCounts.set(removeCh, windowCounts.get(removeCh) - 1);

      if (need.has(removeCh) && windowCounts.get(removeCh) < need.get(removeCh)) {
        formed--;
      }

      left++;
    }
  }

  if (minLen === Infinity) return '';
  return s.substring(minLeft, minLeft + minLen);
}`,

    python: `from collections import Counter

def solve(s, t):
    if len(t) > len(s):
        return ''

    need = Counter(t)
    required = len(need)
    formed = 0
    window_counts = Counter()

    left = 0
    min_len = float('inf')
    min_left = 0

    for right, ch in enumerate(s):
        window_counts[ch] += 1

        if ch in need and window_counts[ch] == need[ch]:
            formed += 1

        while formed == required:
            if (right - left + 1) < min_len:
                min_len = right - left + 1
                min_left = left

            remove_ch = s[left]
            window_counts[remove_ch] -= 1

            if remove_ch in need and window_counts[remove_ch] < need[remove_ch]:
                formed -= 1

            left += 1

    return '' if min_len == float('inf') else s[min_left:min_left + min_len]`,
  },

  starterCode: {
    javascript: `function solve(s, t) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s, t):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(String s, String t) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(string s, string t) {
  // Write your C++ solution here.
  return "";
}`,
  },
};


const Q065 = {
  id: "bs-005",
  slug: "find-minimum-in-rotated-sorted-array",
  title: "Find Minimum in Rotated Sorted Array",
  topic: "binary-search",
  difficulty: "Hard",

  prompt:
    "Given a sorted array that has been rotated at some pivot unknown to you, find the minimum element. The array does not contain duplicates.",

  constraints: [
    "1 <= nums.length <= 5000",
    "-10^4 <= nums[i] <= 10^4",
    "All values of nums are unique.",
    "nums is guaranteed to be rotated at some pivot.",
  ],

  examples: [
    {
      input: "nums = [3,4,5,1,2]",
      output: "1",
      explanation: "The original sorted array was [1,2,3,4,5], rotated at index 3.",
    },
    {
      input: "nums = [4,5,6,7,0,1,2]",
      output: "0",
      explanation: "The minimum element is 0.",
    },
    {
      input: "nums = [11,13,15,17]",
      output: "11",
      explanation: "Array is rotated but still sorted; minimum is first element.",
    },
  ],

  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: 1 },
    { args: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
    { args: [[11, 13, 15, 17]], expected: 11 },
    { args: [[2, 1]], expected: 1 },
  ],

  hiddenTests: [
    { args: [[5, 1, 2, 3, 4]], expected: 1 },
    { args: [[2, 3, 4, 5, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
    { args: [[10, 20, 30, 40, 5]], expected: 5 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for an array to be rotated?",
      "Is the array still partially sorted?",
      "Try the first example and identify the pivot point.",
      "Notice that the minimum is at the pivot.",
      "You need a modified binary search.",
    ],
    example: [
      "For [3,4,5,1,2]:",
      "Array is rotated at index 3 (value 1).",
      "Left half [3,4,5] is sorted.",
      "Right half [1,2] is sorted.",
      "Minimum is 1.",
    ],
    simpleApproach: [
      "One method does linear scan to find minimum.",
      "This is O(n) and ignores the sorted structure.",
      "A modified binary search can do it in O(log n).",
      "At each step, compare mid with right (or left).",
      "Decide which half contains the minimum.",
    ],
    repeatedWork: [
      "Compute mid = (low + high) / 2.",
      "If nums[mid] > nums[high], minimum is in right half.",
      "Else, minimum is in left half (including mid).",
      "Narrow the search range accordingly.",
      "Continue until low == high.",
    ],
    pattern: [
      "This is a modified binary search for minimum.",
      "Compare mid with right endpoint.",
      "If mid > right, min is in (mid+1..high).",
      "Else, min is in (low..mid).",
      "Time is O(log n).",
    ],
    dataStructure: [
      "Use the input array.",
      "Use two indices: low and high.",
      "No other complex structure is needed.",
      "Input is a rotated sorted array.",
      "Output is the minimum element.",
    ],
    algorithm: [
      "Set low = 0, high = n - 1.",
      "While low < high:",
      "  mid = (low + high) / 2.",
      "  If nums[mid] > nums[high]: low = mid + 1.",
      "  Else: high = mid.",
      "Return nums[low].",
    ],
    pseudocode: [
      "low = 0, high = n - 1",
      "while low < high:",
      "  mid = (low + high) // 2",
      "  if nums[mid] > nums[high]:",
      "    low = mid + 1",
      "  else:",
      "    high = mid",
      "return nums[low]",
    ],
    edgeCases: [
      "Test when array is not rotated (fully sorted).",
      "Test when array has one element.",
      "Test when minimum is at the end.",
      "Test when minimum is at the beginning.",
      "Ensure you handle all comparison cases.",
    ],
    finalNudge: [
      "Use binary search comparing mid with right.",
      "Narrow range based on comparison.",
      "Return nums[low] when low == high.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use binary search. If nums[mid] > nums[high], the minimum is in the right half; otherwise, it is in the left half (including mid). Narrow the range until one element remains.",
  }),

  solutionLogic: {
    approach:
      "Use binary search. If nums[mid] > nums[high], the minimum is in the right half; otherwise, it is in the left half (including mid). Narrow the range until one element remains.",

    steps: [
      "Set low = 0, high = n - 1.",
      "While low < high:",
      "  mid = (low + high) / 2.",
      "  If nums[mid] > nums[high]: low = mid + 1.",
      "  Else: high = mid.",
      "Return nums[low].",
    ],

    pseudocode: `low = 0
high = n - 1

while low < high:
    mid = (low + high) // 2
    if nums[mid] > nums[high]:
        low = mid + 1
    else:
        high = mid

return nums[low]`,

    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Using standard binary search conditions.",
      "Comparing with left instead of right.",
      "Not handling the case where array is not rotated.",
      "Using wrong update for low/high.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return nums[low];
}`,

    python: `def solve(nums):
    low, high = 0, len(nums) - 1

    while low < high:
        mid = (low + high) // 2

        if nums[mid] > nums[high]:
            low = mid + 1
        else:
            high = mid

    return nums[low]`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q066 = {
  id: "ll-005",
  slug: "reverse-nodes-in-k-group",
  title: "Reverse Nodes in k-Group",
  topic: "linked-lists",
  difficulty: "Hard",

  prompt:
    "Given the head of a linked list and an integer k, reverse the nodes of the list k at a time, and return the modified list. If the number of nodes is not a multiple of k, the remaining nodes at the end should remain as they are. You may not alter the values in the nodes, only the nodes themselves may be changed.",

  constraints: [
    "The number of nodes in the list is n.",
    "1 <= k <= n <= 5000",
    "0 <= node.val <= 1000",
  ],

  examples: [
    {
      input: "head = [1,2,3,4,5], k = 2",
      output: "[2,1,4,3,5]",
      explanation: "Reverse every 2 nodes: [1,2]→[2,1], [3,4]→[4,3], [5] remains.",
    },
    {
      input: "head = [1,2,3,4,5], k = 3",
      output: "[3,2,1,4,5]",
      explanation: "Reverse first 3 nodes: [1,2,3]→[3,2,1], [4,5] remain.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [2, 1, 4, 3, 5] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [3, 2, 1, 4, 5] },
    { args: [[1, 2, 3], 1], expected: [1, 2, 3] },
    { args: [[1, 2, 3], 3], expected: [3, 2, 1] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: [3, 2, 1, 6, 5, 4] },
    { args: [[1, 2, 3, 4], 4], expected: [4, 3, 2, 1] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [5, 4, 3, 2, 1] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4, 5] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean to reverse k nodes at a time?",
      "What happens to remaining nodes if count is not a multiple of k?",
      "Try the first example and reverse groups manually.",
      "Notice that you must reverse in-place, not just values.",
      "Think about processing the list in chunks of k.",
    ],
    example: [
      "For [1,2,3,4,5], k=2:",
      "First group [1,2] → [2,1].",
      "Second group [3,4] → [4,3].",
      "Remaining [5] stays as is.",
      "Result: [2,1,4,3,5].",
    ],
    simpleApproach: [
      "One method counts nodes to check if k nodes exist.",
      "If yes, reverse those k nodes.",
      "Connect reversed group to the rest recursively or iteratively.",
      "If fewer than k nodes remain, leave them as is.",
      "This is O(n) time.",
    ],
    repeatedWork: [
      "For each group of k nodes:",
      "  Check if k nodes exist.",
      "  If yes, reverse them.",
      "  Connect to previous group's tail.",
      "  Move to next group.",
      "If fewer than k nodes, attach as is.",
    ],
    pattern: [
      "This is a linked list chunk reversal pattern.",
      "Use a helper to reverse k nodes.",
      "Check if k nodes exist before reversing.",
      "Connect groups via their tails.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the linked list itself.",
      "Use pointers to track group boundaries.",
      "No other complex structure is needed.",
      "Input is a linked list head and integer k.",
      "Output is the new head of modified list.",
    ],
    algorithm: [
      "Check if there are at least k nodes; if not, return head.",
      "Reverse first k nodes.",
      "Recursively (or iteratively) process the rest.",
      "Connect reversed part to the processed rest.",
      "Return new head of reversed part.",
    ],
    pseudocode: [
      "function reverseKGroup(head, k):",
      "  count = 0",
      "  curr = head",
      "  while curr and count < k:",
      "    curr = curr.next",
      "    count++",
      "  if count < k: return head",
      "",
      "  prev = null, curr = head, next = null",
      "  for i from 0 to k-1:",
      "    next = curr.next",
      "    curr.next = prev",
      "    prev = curr",
      "    curr = next",
      "",
      "  head.next = reverseKGroup(curr, k)",
      "  return prev",
    ],
    edgeCases: [
      "Test when k = 1 (no change).",
      "Test when k = n (reverse entire list).",
      "Test when n is not a multiple of k.",
      "Test with single-node list.",
      "Ensure you do not reverse partial groups.",
    ],
    finalNudge: [
      "Check if k nodes exist before reversing.",
      "Reverse k nodes using standard reversal.",
      "Connect to the result of processing the rest.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: For each group of k nodes, first check if k nodes exist. If yes, reverse them and recursively process the rest. Connect the reversed group to the processed rest. If fewer than k nodes remain, leave them as is.",
  }),

  solutionLogic: {
    approach:
      "For each group of k nodes, first check if k nodes exist. If yes, reverse them and recursively process the rest. Connect the reversed group to the processed rest. If fewer than k nodes remain, leave them as is.",

    steps: [
      "Count k nodes from head.",
      "If fewer than k, return head.",
      "Reverse first k nodes.",
      "Recursively process remaining list.",
      "Connect reversed part to result.",
      "Return new head.",
    ],

    pseudocode: `function reverseKGroup(head, k):
    count = 0
    curr = head
    while curr and count < k:
        curr = curr.next
        count++
    if count < k:
        return head

    prev = null
    curr = head
    for i from 0 to k-1:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next

    head.next = reverseKGroup(curr, k)
    return prev`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n/k) for recursion stack (or O(1) if iterative)",

    commonMistakes: [
      "Reversing without checking if k nodes exist.",
      "Not connecting reversed group to the rest.",
      "Losing reference to remaining list.",
      "Reversing partial groups.",
    ],
  },

  referenceSolution: {
    javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function solve(head, k) {
  let count = 0;
  let curr = head;

  while (curr && count < k) {
    curr = curr.next;
    count++;
  }

  if (count < k) {
    return head;
  }

  let prev = null;
  curr = head;
  for (let i = 0; i < k; i++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  head.next = solve(curr, k);
  return prev;
}`,

    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(head, k):
    count = 0
    curr = head

    while curr and count < k:
        curr = curr.next
        count += 1

    if count < k:
        return head

    prev = None
    curr = head
    for _ in range(k):
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node

    head.next = solve(curr, k)
    return prev`,
  },

  starterCode: {
    javascript: `function solve(head, k) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(head, k):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] head, int k) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> head, int k) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q067 = {
  id: "sq-005",
  slug: "sliding-window-maximum",
  title: "Sliding Window Maximum",
  topic: "stacks-queues",
  difficulty: "Hard",

  prompt:
    "You are given an array of integers nums and a sliding window of size k which moves from the left end to the right end of the array. You can only see the k numbers in the window. Return an array of the maximum values for each window position.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-10^4 <= nums[i] <= 10^4",
    "1 <= k <= nums.length",
  ],

  examples: [
    {
      input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
      output: "[3,3,5,5,6,7]",
      explanation:
        "Window [1,3,-1] → max 3, [3,-1,-3] → max 3, [-1,-3,5] → max 5, etc.",
    },
    {
      input: "nums = [1], k = 1",
      output: "[1]",
      explanation: "Only one window.",
    },
  ],

  visibleTests: [
    { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
    { args: [[1], 1], expected: [1] },
    { args: [[1, -1], 1], expected: [1, -1] },
    { args: [[9, 11], 2], expected: [11] },
  ],

  hiddenTests: [
    { args: [[1, 3, 1, 2, 0, 5], 3], expected: [3, 3, 2, 5] },
    { args: [[4, -2], 2], expected: [4] },
    { args: [[1, 3, 1, 2, 0, 5], 1], expected: [1, 3, 1, 2, 0, 5] },
    { args: [[5, 4, 3, 2, 1], 3], expected: [5, 4, 3] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each element of the output represent?",
      "How does the window move?",
      "Try the first example and find max for each window.",
      "Notice that you need an efficient way to track maximums.",
      "Think about using a deque to maintain candidates.",
    ],
    example: [
      "For [1,3,-1,-3,5,3,6,7], k=3:",
      "Window [1,3,-1] → max 3.",
      "Window [3,-1,-3] → max 3.",
      "Window [-1,-3,5] → max 5.",
      "Continue for all windows.",
    ],
    simpleApproach: [
      "One method computes max for each window naively.",
      "This is O(n*k) and too slow.",
      "A deque-based approach can do it in O(n).",
      "Maintain indices of potential maximums.",
      "Remove indices that are out of window or smaller.",
    ],
    repeatedWork: [
      "Use a deque to store indices of elements.",
      "For each new element:",
      "  Remove indices from back if their values <= current.",
      "  Push current index.",
      "  Remove front index if it is out of window.",
      "  Front of deque is index of current maximum.",
    ],
    pattern: [
      "This is a monotonic deque pattern for sliding window.",
      "Deque stores indices in decreasing order of values.",
      "Front always has index of maximum in current window.",
      "Remove outdated or dominated indices.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a deque (double-ended queue).",
      "Store indices, not values.",
      "No other complex structure is needed.",
      "Input is an integer array and window size k.",
      "Output is an integer array of maximums.",
    ],
    algorithm: [
      "Create empty deque, result = [].",
      "For i from 0 to n-1:",
      "  While deque not empty and nums[deque.back] <= nums[i]: pop back.",
      "  Push i to back of deque.",
      "  If deque.front <= i - k: pop front.",
      "  If i >= k - 1: result.push(nums[deque.front]).",
      "Return result.",
    ],
    pseudocode: [
      "deque = empty",
      "result = []",
      "",
      "for i from 0 to n-1:",
      "  while deque not empty and nums[deque.back] <= nums[i]:",
      "    deque.popBack()",
      "  deque.pushBack(i)",
      "  if deque.front <= i - k:",
      "    deque.popFront()",
      "  if i >= k - 1:",
      "    result.push(nums[deque.front])",
      "",
      "return result",
    ],
    edgeCases: [
      "Test when k = 1.",
      "Test when k = n.",
      "Test with decreasing or increasing array.",
      "Test with all equal elements.",
      "Ensure you handle window boundaries correctly.",
    ],
    finalNudge: [
      "Use a deque to store indices of potential maximums.",
      "Maintain decreasing order of values in deque.",
      "Front of deque is always the maximum for current window.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a deque to store indices of elements in decreasing order of their values. For each new element, remove smaller or equal elements from back, add current index, remove outdated indices from front. Front of deque is the maximum.",
  }),

  solutionLogic: {
    approach:
      "Use a deque to store indices of elements in decreasing order of their values. For each new element, remove smaller or equal elements from back, add current index, remove outdated indices from front. Front of deque is the maximum.",

    steps: [
      "Initialize empty deque, result = [].",
      "For each index i:",
      "  Remove from back while nums[back] <= nums[i].",
      "  Push i to back.",
      "  Remove front if out of window.",
      "  If i >= k-1, add nums[front] to result.",
      "Return result.",
    ],

    pseudocode: `deque = empty
result = []

for i from 0 to n-1:
    while deque not empty and nums[deque.back] <= nums[i]:
        deque.popBack()
    deque.pushBack(i)
    if deque.front <= i - k:
        deque.popFront()
    if i >= k - 1:
        result.push(nums[deque.front])

return result`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(k) for the deque",

    commonMistakes: [
      "Storing values instead of indices.",
      "Not removing outdated indices.",
      "Not maintaining decreasing order.",
      "Adding to result before window is full.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, k) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);

    if (deque[0] <= i - k) {
      deque.shift();
    }

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}`,

    python: `from collections import deque

def solve(nums, k):
    dq = deque()
    result = []

    for i, num in enumerate(nums):
        while dq and nums[dq[-1]] <= num:
            dq.pop()
        dq.append(i)

        if dq[0] <= i - k:
            dq.popleft()

        if i >= k - 1:
            result.append(nums[dq[0]])

    return result`,
  },

  starterCode: {
    javascript: `function solve(nums, k) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, k):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums, int k) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums, int k) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q068 = {
  id: "rec-004",
  slug: "generate-parentheses",
  title: "Generate Parentheses",
  topic: "recursion",
  difficulty: "Medium",

  prompt:
    "Given n pairs of parentheses, generate all combinations of well-formed parentheses. Return the answer in any order.",

  constraints: [
    "1 <= n <= 8",
  ],

  examples: [
    {
      input: "n = 3",
      output: '["((()))","(()())","(())()","()(())","()()()"]',
      explanation: "All valid combinations of 3 pairs of parentheses.",
    },
    {
      input: "n = 1",
      output: '["()"]',
      explanation: "Only one valid combination.",
    },
  ],

  visibleTests: [
    { args: [3], expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
    { args: [1], expected: ["()"] },
    { args: [2], expected: ["(())", "()()"] },
    { args: [4], expected: "14 combinations" },
  ],

  hiddenTests: [
    { args: [5], expected: "42 combinations" },
    { args: [6], expected: "132 combinations" },
    { args: [7], expected: "429 combinations" },
    { args: [8], expected: "1430 combinations" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What makes a parentheses string well-formed?",
      "How many total characters will each string have?",
      "Try n = 2 and list all valid combinations.",
      "Notice that at any point, open count >= close count.",
      "Think about building strings recursively.",
    ],
    example: [
      "For n = 3:",
      "Valid: '((()))', '(()())', '(())()', '()(())', '()()()'.",
      "Invalid: '())(()', '(()', etc.",
      "Each string has 3 '(' and 3 ')'.",
      "At no point do closing parentheses exceed opening.",
    ],
    simpleApproach: [
      "One method generates all 2^(2n) strings and checks validity.",
      "This is inefficient.",
      "A backtracking approach builds only valid strings.",
      "Track number of open and close parentheses used.",
      "Add '(' if open < n, add ')' if close < open.",
    ],
    repeatedWork: [
      "Start with empty string, open = 0, close = 0.",
      "If open < n, you can add '('.",
      "If close < open, you can add ')'.",
      "When length == 2n, you have a valid string.",
      "Backtrack to explore other possibilities.",
    ],
    pattern: [
      "This is a backtracking with constraints pattern.",
      "State: current string, open count, close count.",
      "Base case: length == 2n, add to result.",
      "Recursive case: add '(' if allowed, add ')' if allowed.",
      "Collect all valid strings.",
    ],
    dataStructure: [
      "Use a string builder or array for current combination.",
      "Use an array to store results.",
      "No other complex structure is needed.",
      "Input is integer n, output is array of strings.",
      "Recursion handles exploration.",
    ],
    algorithm: [
      "Create result = [].",
      "Define backtrack(current, open, close):",
      "  If current.length == 2n:",
      "    result.push(current).",
      "    Return.",
      "  If open < n: backtrack(current + '(', open+1, close).",
      "  If close < open: backtrack(current + ')', open, close+1).",
      "Call backtrack('', 0, 0).",
      "Return result.",
    ],
    pseudocode: [
      "result = []",
      "",
      "function backtrack(current, open, close):",
      "  if current.length == 2*n:",
      "    result.push(current)",
      "    return",
      "  if open < n:",
      "    backtrack(current + '(', open+1, close)",
      "  if close < open:",
      "    backtrack(current + ')', open, close+1)",
      "",
      "backtrack('', 0, 0)",
      "return result",
    ],
    edgeCases: [
      "Test n = 1.",
      "Test n = 2.",
      "Test maximum n = 8.",
      "Ensure all strings are well-formed.",
      "Check that count of '(' and ')' is n each.",
    ],
    finalNudge: [
      "Use backtracking with open and close counts.",
      "Add '(' if open < n, ')' if close < open.",
      "When length is 2n, add to result.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use backtracking. Track number of open and close parentheses used. Add '(' if open < n, add ')' if close < open. When string length is 2n, it is a valid combination.",
  }),

  solutionLogic: {
    approach:
      "Use backtracking. Track number of open and close parentheses used. Add '(' if open < n, add ')' if close < open. When string length is 2n, it is a valid combination.",

    steps: [
      "Initialize result = [].",
      "Define backtrack(current, open, close).",
      "If length == 2n, add current to result.",
      "If open < n, recurse with '('.",
      "If close < open, recurse with ')'.",
      "Return result.",
    ],

    pseudocode: `result = []

function backtrack(current, open, close):
    if current.length == 2*n:
        result.push(current)
        return
    if open < n:
        backtrack(current + '(', open+1, close)
    if close < open:
        backtrack(current + ')', open, close+1)

backtrack('', 0, 0)
return result`,

    timeComplexity: "O(4^n / sqrt(n)) (Catalan number growth)",
    spaceComplexity: "O(n) for recursion stack",

    commonMistakes: [
      "Adding ')' when close >= open.",
      "Not stopping at length 2n.",
      "Generating invalid strings.",
      "Not tracking counts correctly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(n) {
  const result = [];

  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);
  return result;
}`,

    python: `def solve(n):
    result = []

    def backtrack(current, open_count, close_count):
        if len(current) == 2 * n:
            result.append(current)
            return

        if open_count < n:
            backtrack(current + '(', open_count + 1, close_count)
        if close_count < open_count:
            backtrack(current + ')', open_count, close_count + 1)

    backtrack('', 0, 0)
    return result`,
  },

  starterCode: {
    javascript: `function solve(n) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(n):
    # Write your Python solution here.
    pass`,
    java: `public static String[] solve(int n) {
  // Write your Java solution here.
  return new String[]{};
}`,
    cpp: `vector<string> solve(int n) {
  // Write your C++ solution here.
  return vector<string>{};
}`,
  },
};


const Q069 = {
  id: "tree-005",
  slug: "binary-tree-maximum-path-sum",
  title: "Binary Tree Maximum Path Sum",
  topic: "trees",
  difficulty: "Hard",

  prompt:
    "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The path sum is the sum of the node values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",

  constraints: [
    "The number of nodes in the tree is in the range [1, 30000].",
    "-1000 <= node.val <= 1000",
  ],

  examples: [
    {
      input: "root = [1,2,3]",
      output: "6",
      explanation: "The optimal path is 2 → 1 → 3 with sum 2+1+3 = 6.",
    },
    {
      input: "root = [-10,9,20,null,null,15,7]",
      output: "42",
      explanation: "The optimal path is 15 → 20 → 7 with sum 15+20+7 = 42.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[-10, 9, 20, null, null, 15, 7]], expected: 42 },
    { args: [[-3]], expected: -3 },
    { args: [[1, -2, 3]], expected: 4 },
  ],

  hiddenTests: [
    { args: [[-1, -2, 10, -6, null, -3, -6]], expected: 10 },
    { args: [[1, 2, -3, -4, 5]], expected: 5 },
    { args: [[5, -2, -3, 10, -5]], expected: 15 },
    { args: [[-5, 1, 2, -6, 3]], expected: 3 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What defines a path in a binary tree?",
      "Can the path start and end at any node?",
      "Try the first example and identify possible paths.",
      "Notice that the path does not need to pass through root.",
      "Think about computing maximum path sum recursively.",
    ],
    example: [
      "For [1,2,3]:",
      "Path 2→1→3 has sum 6.",
      "Path 1→2 has sum 3.",
      "Path 1→3 has sum 4.",
      "Maximum is 6.",
    ],
    simpleApproach: [
      "One method tries all pairs of nodes as path endpoints.",
      "This is O(n^2) and too slow.",
      "A recursive approach can do it in O(n).",
      "For each node, compute max path sum through it.",
      "Track global maximum.",
    ],
    repeatedWork: [
      "For each node, compute max gain from left and right subtrees.",
      "Max gain is max(0, recursive call) to ignore negative paths.",
      "Current path sum through node = node.val + leftGain + rightGain.",
      "Update global max with this sum.",
      "Return node.val + max(leftGain, rightGain) for parent use.",
    ],
    pattern: [
      "This is a tree DFS with global max pattern.",
      "For each node, compute max path sum through it.",
      "Use recursion to get max gains from children.",
      "Update global maximum at each node.",
      "Return max single-branch sum for parent.",
    ],
    dataStructure: [
      "Use the tree structure itself.",
      "Use a variable to track global maximum.",
      "No other complex structure is needed.",
      "Input is a tree root, output is an integer.",
      "Recursion handles traversal.",
    ],
    algorithm: [
      "Initialize globalMax = -infinity.",
      "Define maxGain(node):",
      "  If node is null, return 0.",
      "  leftGain = max(maxGain(node.left), 0).",
      "  rightGain = max(maxGain(node.right), 0).",
      "  currentPathSum = node.val + leftGain + rightGain.",
      "  globalMax = max(globalMax, currentPathSum).",
      "  Return node.val + max(leftGain, rightGain).",
      "Call maxGain(root).",
      "Return globalMax.",
    ],
    pseudocode: [
      "globalMax = -infinity",
      "",
      "function maxGain(node):",
      "  if node == null: return 0",
      "  leftGain = max(maxGain(node.left), 0)",
      "  rightGain = max(maxGain(node.right), 0)",
      "  currentPathSum = node.val + leftGain + rightGain",
      "  globalMax = max(globalMax, currentPathSum)",
      "  return node.val + max(leftGain, rightGain)",
      "",
      "maxGain(root)",
      "return globalMax",
    ],
    edgeCases: [
      "Test with single-node tree.",
      "Test with all negative values.",
      "Test with skewed tree.",
      "Test with positive and negative values.",
      "Ensure path is non-empty.",
    ],
    finalNudge: [
      "Use recursion to compute max gain from each subtree.",
      "At each node, compute path sum through it.",
      "Update global maximum.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: For each node, compute max gain from left and right subtrees (ignoring negative gains). The max path sum through this node is node.val + leftGain + rightGain. Track the global maximum of these sums. Return max single-branch sum for parent use.",
  }),

  solutionLogic: {
    approach:
      "For each node, compute max gain from left and right subtrees (ignoring negative gains). The max path sum through this node is node.val + leftGain + rightGain. Track the global maximum of these sums. Return max single-branch sum for parent use.",

    steps: [
      "Initialize globalMax = -infinity.",
      "Define maxGain(node).",
      "Compute leftGain and rightGain (max with 0).",
      "Update globalMax with node.val + leftGain + rightGain.",
      "Return node.val + max(leftGain, rightGain).",
      "Call maxGain(root) and return globalMax.",
    ],

    pseudocode: `globalMax = -infinity

function maxGain(node):
    if node == null:
        return 0
    leftGain = max(maxGain(node.left), 0)
    rightGain = max(maxGain(node.right), 0)
    currentPathSum = node.val + leftGain + rightGain
    globalMax = max(globalMax, currentPathSum)
    return node.val + max(leftGain, rightGain)

maxGain(root)
return globalMax`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for recursion stack",

    commonMistakes: [
      "Not ignoring negative gains from children.",
      "Returning sum of both branches instead of one.",
      "Not updating global maximum.",
      "Forgetting to handle all-negative trees.",
    ],
  },

  referenceSolution: {
    javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solve(root) {
  let globalMax = -Infinity;

  function maxGain(node) {
    if (!node) return 0;

    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);

    const currentPathSum = node.val + leftGain + rightGain;
    globalMax = Math.max(globalMax, currentPathSum);

    return node.val + Math.max(leftGain, rightGain);
  }

  maxGain(root);
  return globalMax;
}`,

    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(root):
    global_max = float('-inf')

    def max_gain(node):
        nonlocal global_max
        if not node:
            return 0

        left_gain = max(max_gain(node.left), 0)
        right_gain = max(max_gain(node.right), 0)

        current_path_sum = node.val + left_gain + right_gain
        global_max = max(global_max, current_path_sum)

        return node.val + max(left_gain, right_gain)

    max_gain(root)
    return global_max`,
  },

  starterCode: {
    javascript: `function solve(root) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(root):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] root) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> root) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q070 = {
  id: "graph-005",
  slug: "alien-dictionary",
  title: "Alien Dictionary",
  topic: "graphs",
  difficulty: "Hard",

  prompt:
    "There is a new alien language that uses the English lowercase letters, but the order of the alphabet is different. You are given a list of strings from the alien dictionary, sorted lexicographically by the rules of this new language. Return a string of the unique letters in this language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return ''. If there are multiple solutions, return any of them.",

  constraints: [
    "1 <= words.length <= 100",
    "1 <= words[i].length <= 100",
    "words[i] consists of only lowercase English letters.",
  ],

  examples: [
    {
      input: 'words = ["wrt","wrf","er","ett","rftt"]',
      output: '"wertf"',
      explanation: "One possible order of letters that explains the sorting.",
    },
    {
      input: 'words = ["z","x"]',
      output: '"zx"',
      explanation: "'z' comes before 'x' in this language.",
    },
    {
      input: 'words = ["z","x","z"]',
      output: '""',
      explanation: "Order is invalid due to cycle.",
    },
  ],

  visibleTests: [
    { args: [["wrt", "wrf", "er", "ett", "rftt"]], expected: "wertf" },
    { args: [["z", "x"]], expected: "zx" },
    { args: [["z", "x", "z"]], expected: "" },
    { args: [["abc", "ab"]], expected: "" },
  ],

  hiddenTests: [
    { args: [["za", "zb", "ca", "cb"]], expected: "zabc" },
    { args: [["abc", "abd", "z"]], expected: "abcdz" },
    { args: [["x", "x"]], expected: "x" },
    { args: [["abc", "ab", "a"]], expected: "" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What information can you extract from adjacent words?",
      "How does lexicographical order relate to character order?",
      "Try the first example and compare adjacent words.",
      "Notice that the first differing character gives an ordering rule.",
      "Think about building a graph of character dependencies.",
    ],
    example: [
      "For ['wrt','wrf','er','ett','rftt']:",
      "Compare 'wrt' and 'wrf': first diff at 't' vs 'f' → t < f.",
      "Compare 'wrf' and 'er': 'w' vs 'e' → w < e.",
      "Compare 'er' and 'ett': 'r' vs 't' → r < t.",
      "Build graph and find topological order.",
    ],
    simpleApproach: [
      "One method compares each adjacent pair of words.",
      "For each pair, find first differing character.",
      "Add directed edge from char1 to char2.",
      "Perform topological sort on the graph.",
      "If cycle detected, return ''.",
    ],
    repeatedWork: [
      "For each adjacent word pair:",
      "  Find first index where they differ.",
      "  Add edge word1[i] → word2[i].",
      "  Break after first difference.",
      "If word2 is prefix of word1 and shorter, invalid → return ''.",
      "Then do topological sort.",
    ],
    pattern: [
      "This is a graph + topological sort pattern.",
      "Nodes are characters, edges represent order.",
      "Use DFS or Kahn's algorithm for topological sort.",
      "Detect cycles to identify invalid orders.",
      "Time is O(total characters).",
    ],
    dataStructure: [
      "Use adjacency list for graph.",
      "Use in-degree array or visited states for topo sort.",
      "No other complex structure is needed.",
      "Input is array of strings, output is a string.",
      "Characters are nodes.",
    ],
    algorithm: [
      "Build graph: for each adjacent word pair, add edge at first diff.",
      "If invalid prefix case, return ''.",
      "Perform topological sort (DFS with states or Kahn's).",
      "If cycle detected, return ''.",
      "Else return topological order as string.",
    ],
    pseudocode: [
      "graph = empty adjacency list",
      "inDegree = map char → 0",
      "",
      "for i from 0 to words.length - 2:",
      "  w1 = words[i], w2 = words[i+1]",
      "  minLen = min(w1.length, w2.length)",
      "  found = false",
      "  for j from 0 to minLen - 1:",
      "    if w1[j] != w2[j]:",
      "      add edge w1[j] → w2[j] if not already present",
      "      found = true",
      "      break",
      "  if not found and w1.length > w2.length:",
      "    return ''",
      "",
      "topoOrder = topologicalSort(graph)",
      "if topoOrder has cycle: return ''",
      "else: return topoOrder as string",
    ],
    edgeCases: [
      "Test with single word.",
      "Test with all same words.",
      "Test with invalid prefix case (e.g., ['abc','ab']).",
      "Test with cycle in graph.",
      "Ensure you include all unique characters.",
    ],
    finalNudge: [
      "Compare adjacent words to extract ordering rules.",
      "Build a graph of character dependencies.",
      "Perform topological sort, detect cycles.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Compare adjacent words to find first differing characters and build a directed graph. Perform topological sort on this graph. If a cycle is detected or invalid prefix case exists, return ''; otherwise return the topological order.",
  }),

  solutionLogic: {
    approach:
      "Compare adjacent words to find first differing characters and build a directed graph. Perform topological sort on this graph. If a cycle is detected or invalid prefix case exists, return ''; otherwise return the topological order.",

    steps: [
      "Build graph from adjacent word pairs.",
      "Handle invalid prefix case.",
      "Perform topological sort (DFS or Kahn's).",
      "Detect cycles.",
      "Return order or '' if invalid.",
    ],

    pseudocode: `graph = adjacency list
inDegree = map char → 0

for each adjacent pair (w1, w2):
    find first differing character c1, c2
    if found:
        add edge c1 → c2 if not present
    else if w1 longer than w2:
        return ''

topoOrder = topologicalSort(graph)
if cycle detected:
    return ''
else:
    return topoOrder as string`,

    timeComplexity: "O(total number of characters in all words)",
    spaceComplexity: "O(1) (at most 26 letters)",

    commonMistakes: [
      "Not handling invalid prefix case.",
      "Adding duplicate edges.",
      "Not detecting cycles correctly.",
      "Missing characters not involved in any edge.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(words) {
  const graph = new Map();
  const inDegree = new Map();
  const chars = new Set();

  for (const word of words) {
    for (const ch of word) {
      chars.add(ch);
      if (!graph.has(ch)) graph.set(ch, []);
      if (!inDegree.has(ch)) inDegree.set(ch, 0);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);

    let found = false;
    for (let j = 0; j < minLen; j++) {
      const c1 = w1[j];
      const c2 = w2[j];
      if (c1 !== c2) {
        if (!graph.get(c1).includes(c2)) {
          graph.get(c1).push(c2);
          inDegree.set(c2, inDegree.get(c2) + 1);
        }
        found = true;
        break;
      }
    }

    if (!found && w1.length > w2.length) {
      return '';
    }
  }

  const queue = [];
  for (const ch of chars) {
    if (inDegree.get(ch) === 0) {
      queue.push(ch);
    }
  }

  let result = '';
  while (queue.length > 0) {
    const ch = queue.shift();
    result += ch;
    for (const neighbor of graph.get(ch)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result.length === chars.size ? result : '';
}`,

    python: `from collections import defaultdict, deque

def solve(words):
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    chars = set()

    for word in words:
        for ch in word:
            chars.add(ch)
            if ch not in graph:
                graph[ch] = []
            if ch not in in_degree:
                in_degree[ch] = 0

    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i + 1]
        min_len = min(len(w1), len(w2))

        found = False
        for j in range(min_len):
            c1, c2 = w1[j], w2[j]
            if c1 != c2:
                if c2 not in graph[c1]:
                    graph[c1].append(c2)
                    in_degree[c2] += 1
                found = True
                break

        if not found and len(w1) > len(w2):
            return ''

    queue = deque([ch for ch in chars if in_degree[ch] == 0])
    result = []

    while queue:
        ch = queue.popleft()
        result.append(ch)
        for neighbor in graph[ch]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return ''.join(result) if len(result) == len(chars) else ''`,
  },

  starterCode: {
    javascript: `function solve(words) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(words):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(String[] words) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(vector<string> words) {
  // Write your C++ solution here.
  return "";
}`,
  },
};


const Q071 = {
  id: "arr-008",
  slug: "jump-game",
  title: "Jump Game",
  topic: "arrays",
  difficulty: "Medium",

  prompt:
    "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",

  constraints: [
    "1 <= nums.length <= 10000",
    "0 <= nums[i] <= 1000",
  ],

  examples: [
    {
      input: "nums = [2,3,1,1,4]",
      output: "true",
      explanation:
        "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
    },
    {
      input: "nums = [3,2,1,0,4]",
      output: "false",
      explanation:
        "You will always arrive at index 3, but you cannot move further.",
    },
  ],

  visibleTests: [
    { args: [[2, 3, 1, 1, 4]], expected: true },
    { args: [[3, 2, 1, 0, 4]], expected: false },
    { args: [[1, 1, 1, 1]], expected: true },
    { args: [[0]], expected: true },
  ],

  hiddenTests: [
    { args: [[1, 0, 1, 0]], expected: false },
    { args: [[2, 0, 0]], expected: true },
    { args: [[1, 2, 3]], expected: true },
    { args: [[0, 1]], expected: false },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each element of nums represent?",
      "Are you checking reachability or minimum jumps?",
      "Try the first example and trace possible jumps.",
      "Notice that you only need to know if last index is reachable.",
      "Think about tracking the farthest reachable index.",
    ],
    example: [
      "For [2,3,1,1,4]:",
      "From index 0, you can reach up to index 2.",
      "From index 1, you can reach up to index 4 (last).",
      "So last index is reachable.",
      "For [3,2,1,0,4]:",
      "You get stuck at index 3 (value 0).",
    ],
    simpleApproach: [
      "One method uses DP or recursion to check reachability.",
      "This is O(n^2) in worst case.",
      "A greedy approach can do it in O(n).",
      "Track the farthest index you can reach so far.",
      "If current index is beyond farthest, you cannot proceed.",
    ],
    repeatedWork: [
      "Initialize farthest = 0.",
      "For each index i:",
      "  If i > farthest, return false (cannot reach i).",
      "  Update farthest = max(farthest, i + nums[i]).",
      "  If farthest >= last index, return true.",
      "If loop completes, return true.",
    ],
    pattern: [
      "This is a greedy reachability pattern.",
      "Track the maximum reachable index.",
      "If current index is unreachable, return false.",
      "If farthest reaches or passes last index, return true.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the input array.",
      "Use a variable for farthest reachable index.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is a boolean.",
    ],
    algorithm: [
      "Set farthest = 0.",
      "For i from 0 to n-1:",
      "  If i > farthest: return false.",
      "  farthest = max(farthest, i + nums[i]).",
      "  If farthest >= n-1: return true.",
      "Return true.",
    ],
    pseudocode: [
      "farthest = 0",
      "for i from 0 to n-1:",
      "  if i > farthest:",
      "    return false",
      "  farthest = max(farthest, i + nums[i])",
      "  if farthest >= n-1:",
      "    return true",
      "return true",
    ],
    edgeCases: [
      "Test when array has one element.",
      "Test when first element is 0.",
      "Test when you can exactly reach last index.",
      "Test when you get stuck before last index.",
      "Ensure you handle n = 1 correctly.",
    ],
    finalNudge: [
      "Track the farthest index you can reach.",
      "If current index is beyond farthest, return false.",
      "If farthest reaches last index, return true.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Iterate through the array, tracking the farthest reachable index. If at any point the current index is beyond farthest, return false. If farthest reaches or passes the last index, return true.",
  }),

  solutionLogic: {
    approach:
      "Iterate through the array, tracking the farthest reachable index. If at any point the current index is beyond farthest, return false. If farthest reaches or passes the last index, return true.",

    steps: [
      "Initialize farthest = 0.",
      "For each index i:",
      "  If i > farthest, return false.",
      "  Update farthest = max(farthest, i + nums[i]).",
      "  If farthest >= n-1, return true.",
      "Return true.",
    ],

    pseudocode: `farthest = 0

for i from 0 to n-1:
    if i > farthest:
        return false
    farthest = max(farthest, i + nums[i])
    if farthest >= n-1:
        return true

return true`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not checking if i > farthest.",
      "Using wrong update for farthest.",
      "Not handling single-element array.",
      "Returning false too early.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  let farthest = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > farthest) {
      return false;
    }
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= n - 1) {
      return true;
    }
  }

  return true;
}`,

    python: `def solve(nums):
    farthest = 0
    n = len(nums)

    for i in range(n):
        if i > farthest:
            return False
        farthest = max(farthest, i + nums[i])
        if farthest >= n - 1:
            return True

    return True`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int[] nums) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<int> nums) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q072 = {
  id: "str-006",
  slug: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  topic: "strings",
  difficulty: "Medium",

  prompt:
    "Given a string s, find the length of the longest substring without repeating characters.",

  constraints: [
    "0 <= s.length <= 50000",
    "s consists of English letters, digits, symbols and spaces.",
  ],

  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: "The longest substring without repeating characters is 'abc'.",
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation: "The longest substring is 'b'.",
    },
    {
      input: 's = "pwwkew"',
      output: "3",
      explanation: "The longest substring is 'wke' or 'kew'.",
    },
  ],

  visibleTests: [
    { args: ["abcabcbb"], expected: 3 },
    { args: ["bbbbb"], expected: 1 },
    { args: ["pwwkew"], expected: 3 },
    { args: [""], expected: 0 },
  ],

  hiddenTests: [
    { args: ["abcdef"], expected: 6 },
    { args: ["abba"], expected: 2 },
    { args: ["dvdf"], expected: 3 },
    { args: ["tmmzuxt"], expected: 5 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What defines a valid substring in this problem?",
      "Are you looking for a subsequence or a contiguous substring?",
      "Try the first example and identify valid substrings.",
      "Notice that characters must not repeat within the substring.",
      "Think about using a sliding window.",
    ],
    example: [
      "For 'abcabcbb':",
      "Substring 'abc' (indices 0-2) has no repeats, length 3.",
      "Substring 'bca' (indices 1-3) also length 3.",
      "Longest such substring has length 3.",
      "For 'bbbbb': longest is 'b', length 1.",
    ],
    simpleApproach: [
      "One method checks all substrings for uniqueness.",
      "This is O(n^3) or O(n^2) and too slow.",
      "A sliding window with a set or map can do it in O(n).",
      "Expand right, shrink left when duplicate found.",
      "Track maximum window size.",
    ],
    repeatedWork: [
      "Maintain a window [left, right] with unique characters.",
      "Use a set or map to track characters in current window.",
      "When duplicate found, shrink from left until unique.",
      "Update maximum length.",
      "Each character is added and removed at most once.",
    ],
    pattern: [
      "This is a sliding window with uniqueness constraint pattern.",
      "Use a set or map to track characters in window.",
      "Expand right, shrink left when duplicate appears.",
      "Track maximum window size.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a set or map to store characters in current window.",
      "Use two indices: left and right.",
      "No other complex structure is needed.",
      "Input is a string.",
      "Output is an integer (max length).",
    ],
    algorithm: [
      "Create empty set, left = 0, maxLen = 0.",
      "For right from 0 to s.length - 1:",
      "  While s[right] in set:",
      "    Remove s[left] from set, left++.",
      "  Add s[right] to set.",
      "  maxLen = max(maxLen, right - left + 1).",
      "Return maxLen.",
    ],
    pseudocode: [
      "set = empty",
      "left = 0, maxLen = 0",
      "",
      "for right from 0 to s.length - 1:",
      "  while s[right] in set:",
      "    set.remove(s[left])",
      "    left++",
      "  set.add(s[right])",
      "  maxLen = max(maxLen, right - left + 1)",
      "",
      "return maxLen",
    ],
    edgeCases: [
      "Test with empty string.",
      "Test with all unique characters.",
      "Test with all same characters.",
      "Test with repeating pattern.",
      "Ensure you handle single-character strings.",
    ],
    finalNudge: [
      "Use a set to track characters in current window.",
      "Shrink window from left when duplicate found.",
      "Track maximum window size.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a sliding window with a set to track characters. Expand right, and when a duplicate is found, shrink from left until the window is unique again. Track the maximum window size.",
  }),

  solutionLogic: {
    approach:
      "Use a sliding window with a set to track characters. Expand right, and when a duplicate is found, shrink from left until the window is unique again. Track the maximum window size.",

    steps: [
      "Initialize empty set, left = 0, maxLen = 0.",
      "For each right:",
      "  While s[right] in set: remove s[left], left++.",
      "  Add s[right] to set.",
      "  Update maxLen = right - left + 1.",
      "Return maxLen.",
    ],

    pseudocode: `set = empty
left = 0
maxLen = 0

for right from 0 to s.length - 1:
    while s[right] in set:
        set.remove(s[left])
        left++
    set.add(s[right])
    maxLen = max(maxLen, right - left + 1)

return maxLen`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(min(n, charset))",

    commonMistakes: [
      "Not shrinking window when duplicate found.",
      "Using wrong formula for length.",
      "Not handling empty string.",
      "Forgetting to add current character to set.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  const set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`,

    python: `def solve(s):
    char_set = set()
    left = 0
    max_len = 0

    for right, ch in enumerate(s):
        while ch in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(ch)
        max_len = max(max_len, right - left + 1)

    return max_len`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(String s) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(string s) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q073 = {
  id: "hash-006",
  slug: "two-sum",
  title: "Two Sum",
  topic: "hashing",
  difficulty: "Medium",

  prompt:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",

  constraints: [
    "2 <= nums.length <= 10000",
    "-10^9 <= nums[i], target <= 10^9",
  ],

  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "nums[0] + nums[1] = 2 + 7 = 9.",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "nums[1] + nums[2] = 2 + 4 = 6.",
    },
  ],

  visibleTests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { args: [[3, 2, 4], 6], expected: [1, 2] },
    { args: [[3, 3], 6], expected: [0, 1] },
    { args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 9], expected: [3, 4] },
    { args: [[0, 4, 3, 0], 0], expected: [0, 3] },
    { args: [[-3, 4, 3, 90], 0], expected: [0, 2] },
    { args: [[1, 5, 3, 7, 9], 12], expected: [2, 3] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What sum are you looking for?",
      "Are you returning values or indices?",
      "Try the first example and find the pair manually.",
      "Notice that you cannot use the same element twice.",
      "Think about using a hash map to store seen numbers.",
    ],
    example: [
      "For [2,7,11,15], target=9:",
      "At index 0: need 9-2=7, not seen yet.",
      "At index 1: need 9-7=2, which was seen at index 0.",
      "Return [0,1].",
    ],
    simpleApproach: [
      "One method checks all pairs of indices.",
      "This is O(n^2) and slower for large arrays.",
      "A hash map approach can do it in O(n).",
      "Store each number and its index as you iterate.",
      "Check if complement exists in map.",
    ],
    repeatedWork: [
      "For each number, compute complement = target - num.",
      "If complement is in map, return [map[complement], currentIndex].",
      "Else, store num and its index in map.",
      "Each number is processed once.",
      "Guaranteed to find exactly one solution.",
    ],
    pattern: [
      "This is a hash map for complement pattern.",
      "Map stores number → index.",
      "For each num, check if (target - num) exists.",
      "If yes, return indices; else store num.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a hash map (object or Map).",
      "Key: number, value: index.",
      "No other complex structure is needed.",
      "Input is an integer array and target.",
      "Output is an array of two indices.",
    ],
    algorithm: [
      "Create empty map.",
      "For i from 0 to n-1:",
      "  complement = target - nums[i].",
      "  If complement in map: return [map[complement], i].",
      "  map[nums[i]] = i.",
      "Return [] (should not reach here).",
    ],
    pseudocode: [
      "map = empty",
      "for i from 0 to n-1:",
      "  complement = target - nums[i]",
      "  if complement in map:",
      "    return [map[complement], i]",
      "  map[nums[i]] = i",
      "return []",
    ],
    edgeCases: [
      "Test with negative numbers.",
      "Test with zeros.",
      "Test when solution involves first and last elements.",
      "Ensure you do not use same element twice.",
      "Check that you return indices, not values.",
    ],
    finalNudge: [
      "Use a map to store number → index.",
      "For each number, check if complement exists.",
      "Return indices when found.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a hash map to store numbers and their indices. For each number, check if its complement (target - num) exists in the map. If yes, return the indices; otherwise, store the current number.",
  }),

  solutionLogic: {
    approach:
      "Use a hash map to store numbers and their indices. For each number, check if its complement (target - num) exists in the map. If yes, return the indices; otherwise, store the current number.",

    steps: [
      "Initialize empty map.",
      "For each index i:",
      "  complement = target - nums[i].",
      "  If complement in map: return [map[complement], i].",
      "  Store nums[i] → i in map.",
      "Return [] (unreachable).",
    ],

    pseudocode: `map = {}

for i from 0 to n-1:
    complement = target - nums[i]
    if complement in map:
        return [map[complement], i]
    map[nums[i]] = i

return []`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the map",

    commonMistakes: [
      "Returning values instead of indices.",
      "Using same element twice.",
      "Not storing index in map.",
      "Checking complement after storing (can cause self-match).",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}`,

    python: `def solve(nums, target):
    num_map = {}

    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i

    return []`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums, int target) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q074 = {
  id: "tp-006",
  slug: "valid-palindrome",
  title: "Valid Palindrome",
  topic: "two-pointers",
  difficulty: "Easy",

  prompt:
    "A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.",

  constraints: [
    "1 <= s.length <= 200000",
    "s consists of ASCII characters.",
  ],

  examples: [
    {
      input: 's = "A man, a plan, a canal: Panama"',
      output: "true",
      explanation: "After cleaning: 'amanaplanacanalpanama', which is a palindrome.",
    },
    {
      input: 's = "race a car"',
      output: "false",
      explanation: "After cleaning: 'raceacar', not a palindrome.",
    },
    {
      input: 's = " "',
      output: "true",
      explanation: "Empty string after cleaning is a palindrome.",
    },
  ],

  visibleTests: [
    { args: ["A man, a plan, a canal: Panama"], expected: true },
    { args: ["race a car"], expected: false },
    { args: [" "], expected: true },
    { args: ["a"], expected: true },
  ],

  hiddenTests: [
    { args: ["ab2a"], expected: true },
    { args: ["ab2c"], expected: false },
    { args: ["0P"], expected: false },
    { args: ["aa"], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What characters should you consider?",
      "Do you need to create a cleaned string first?",
      "Try the first example and clean it manually.",
      "Notice that case should be ignored.",
      "Think about using two pointers from both ends.",
    ],
    example: [
      "For 'A man, a plan, a canal: Panama':",
      "Cleaned: 'amanaplanacanalpanama'.",
      "Reads same forward and backward.",
      "For 'race a car':",
      "Cleaned: 'raceacar', not a palindrome.",
    ],
    simpleApproach: [
      "One method creates a cleaned string first.",
      "Then checks if it equals its reverse.",
      "This is O(n) time and O(n) space.",
      "A two-pointer approach can do it in O(1) extra space.",
      "Skip non-alphanumeric characters on the fly.",
    ],
    repeatedWork: [
      "Use two pointers: left at start, right at end.",
      "Move left forward until alphanumeric.",
      "Move right backward until alphanumeric.",
      "Compare characters (case-insensitive).",
      "If mismatch, return false; else move both inward.",
    ],
    pattern: [
      "This is a two-pointer validation pattern.",
      "Skip invalid characters as you move.",
      "Compare valid characters case-insensitively.",
      "If all match, return true.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the input string.",
      "Use two indices: left and right.",
      "No other complex structure is needed.",
      "Input is a string.",
      "Output is a boolean.",
    ],
    algorithm: [
      "Set left = 0, right = s.length - 1.",
      "While left < right:",
      "  While left < right and not s[left] alphanumeric: left++.",
      "  While left < right and not s[right] alphanumeric: right--.",
      "  If s[left].toLowerCase() != s[right].toLowerCase(): return false.",
      "  left++, right--.",
      "Return true.",
    ],
    pseudocode: [
      "left = 0, right = s.length - 1",
      "while left < right:",
      "  while left < right and not s[left] alphanumeric:",
      "    left++",
      "  while left < right and not s[right] alphanumeric:",
      "    right--",
      "  if s[left].lower != s[right].lower:",
      "    return false",
      "  left++, right--",
      "return true",
    ],
    edgeCases: [
      "Test with empty or space-only string.",
      "Test with single character.",
      "Test with all non-alphanumeric.",
      "Test with mixed case.",
      "Ensure you handle boundaries correctly.",
    ],
    finalNudge: [
      "Use two pointers from both ends.",
      "Skip non-alphanumeric characters.",
      "Compare case-insensitively.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use two pointers from both ends. Skip non-alphanumeric characters, compare remaining characters case-insensitively. If all match, return true; otherwise false.",
  }),

  solutionLogic: {
    approach:
      "Use two pointers from both ends. Skip non-alphanumeric characters, compare remaining characters case-insensitively. If all match, return true; otherwise false.",

    steps: [
      "Initialize left = 0, right = n-1.",
      "While left < right:",
      "  Skip non-alphanumeric from left.",
      "  Skip non-alphanumeric from right.",
      "  Compare s[left] and s[right] (lowercase).",
      "  If mismatch, return false.",
      "  Move both inward.",
      "Return true.",
    ],

    pseudocode: `left = 0
right = s.length - 1

while left < right:
    while left < right and not s[left] alphanumeric:
        left++
    while left < right and not s[right] alphanumeric:
        right--
    if s[left].lower != s[right].lower:
        return false
    left++
    right--

return true`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not skipping non-alphanumeric characters.",
      "Not handling case correctly.",
      "Comparing wrong characters.",
      "Not handling empty or space-only strings.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(ch) {
  return (
    (ch >= 'a' && ch <= 'z') ||
    (ch >= 'A' && ch <= 'Z') ||
    (ch >= '0' && ch <= '9')
  );
}`,

    python: `def solve(s):
    left, right = 0, len(s) - 1

    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1

        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(String s) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(string s) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q075 = {
  id: "bs-006",
  slug: "binary-search",
  title: "Binary Search",
  topic: "binary-search",
  difficulty: "Easy",

  prompt:
    "Given a sorted array of integers nums and an integer target, return the index of target if it exists in the array, otherwise return -1. You must write an algorithm with O(log n) runtime complexity.",

  constraints: [
    "1 <= nums.length <= 10000",
    "-10^4 <= nums[i], target <= 10^4",
    "All integers in nums are unique and sorted in ascending order.",
  ],

  examples: [
    {
      input: "nums = [-1,0,3,5,9,12], target = 9",
      output: "4",
      explanation: "9 exists at index 4.",
    },
    {
      input: "nums = [-1,0,3,5,9,12], target = 2",
      output: "-1",
      explanation: "2 does not exist in the array.",
    },
  ],

  visibleTests: [
    { args: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { args: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
    { args: [[5], 5], expected: 0 },
    { args: [[5], 2], expected: -1 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 4 },
    { args: [[-5, -3, 0, 2, 4], 0], expected: 2 },
    { args: [[1, 3, 5, 7, 9], 8], expected: -1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What property of the array can you exploit?",
      "Are you looking for existence or all occurrences?",
      "Try the first example and find target manually.",
      "Notice that the array is sorted.",
      "Think about dividing the search space in half.",
    ],
    example: [
      "For [-1,0,3,5,9,12], target=9:",
      "Middle is 3 (index 2), 9 > 3 → search right half.",
      "New middle is 9 (index 4), found.",
      "For target=2:",
      "2 is not in array, eventually search space becomes empty.",
    ],
    simpleApproach: [
      "One method does linear scan.",
      "This is O(n) and ignores sorted property.",
      "Binary search can do it in O(log n).",
      "Repeatedly divide search space in half.",
      "Compare target with middle element.",
    ],
    repeatedWork: [
      "Set low = 0, high = n - 1.",
      "While low <= high:",
      "  mid = (low + high) / 2.",
      "  If nums[mid] == target: return mid.",
      "  If nums[mid] < target: low = mid + 1.",
      "  Else: high = mid - 1.",
      "Return -1.",
    ],
    pattern: [
      "This is the standard binary search pattern.",
      "Maintain search range [low, high].",
      "Compare target with middle element.",
      "Narrow range based on comparison.",
      "Time is O(log n).",
    ],
    dataStructure: [
      "Use the input array.",
      "Use two indices: low and high.",
      "No other complex structure is needed.",
      "Input is a sorted integer array.",
      "Output is an index or -1.",
    ],
    algorithm: [
      "Set low = 0, high = n - 1.",
      "While low <= high:",
      "  mid = (low + high) / 2.",
      "  If nums[mid] == target: return mid.",
      "  If nums[mid] < target: low = mid + 1.",
      "  Else: high = mid - 1.",
      "Return -1.",
    ],
    pseudocode: [
      "low = 0, high = n - 1",
      "while low <= high:",
      "  mid = (low + high) // 2",
      "  if nums[mid] == target:",
      "    return mid",
      "  else if nums[mid] < target:",
      "    low = mid + 1",
      "  else:",
      "    high = mid - 1",
      "return -1",
    ],
    edgeCases: [
      "Test with single-element array.",
      "Test when target is first or last element.",
      "Test when target is not present.",
      "Test with negative numbers.",
      "Ensure you handle empty range correctly.",
    ],
    finalNudge: [
      "Use binary search with low and high.",
      "Compare target with middle element.",
      "Narrow search range accordingly.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use binary search. Maintain search range [low, high]. Compare target with middle element and narrow the range. If found, return index; otherwise return -1.",
  }),

  solutionLogic: {
    approach:
      "Use binary search. Maintain search range [low, high]. Compare target with middle element and narrow the range. If found, return index; otherwise return -1.",

    steps: [
      "Initialize low = 0, high = n-1.",
      "While low <= high:",
      "  mid = (low + high) / 2.",
      "  If nums[mid] == target: return mid.",
      "  If nums[mid] < target: low = mid + 1.",
      "  Else: high = mid - 1.",
      "Return -1.",
    ],

    pseudocode: `low = 0
high = n - 1

while low <= high:
    mid = (low + high) // 2
    if nums[mid] == target:
        return mid
    else if nums[mid] < target:
        low = mid + 1
    else:
        high = mid - 1

return -1`,

    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Using wrong mid calculation (overflow in some languages).",
      "Using wrong update for low/high.",
      "Not handling not-found case.",
      "Using low < high instead of low <= high.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}`,

    python: `def solve(nums, target):
    low, high = 0, len(nums) - 1

    while low <= high:
        mid = (low + high) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int target) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q076 = {
  id: "ll-006",
  slug: "reverse-linked-list",
  title: "Reverse Linked List",
  topic: "linked-lists",
  difficulty: "Easy",

  prompt:
    "Given the head of a singly linked list, reverse the list, and return the head of the reversed list.",

  constraints: [
    "The number of nodes in the list is in the range [0, 5000].",
    "-5000 <= node.val <= 5000",
  ],

  examples: [
    {
      input: "head = [1,2,3,4,5]",
      output: "[5,4,3,2,1]",
      explanation: "List is reversed.",
    },
    {
      input: "head = [1,2]",
      output: "[2,1]",
      explanation: "List is reversed.",
    },
    {
      input: "head = []",
      output: "[]",
      explanation: "Empty list remains empty.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],

  hiddenTests: [
    { args: [[-1, -2, -3]], expected: [-3, -2, -1] },
    { args: [[1, 1, 1]], expected: [1, 1, 1] },
    { args: [[1, 3, 5, 7]], expected: [7, 5, 3, 1] },
    { args: [[10, 20, 30]], expected: [30, 20, 10] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean to reverse a linked list?",
      "Are you changing values or pointers?",
      "Try the first example and trace pointer changes.",
      "Notice that each node's next should point to previous.",
      "Think about iterating with three pointers.",
    ],
    example: [
      "For [1,2,3,4,5]:",
      "Original: 1→2→3→4→5→null.",
      "Reversed: 5→4→3→2→1→null.",
      "Each node's next pointer is reversed.",
    ],
    simpleApproach: [
      "One method uses recursion to reverse.",
      "Another uses iteration with three pointers.",
      "Both are O(n) time.",
      "Iterative approach uses O(1) extra space.",
      "Track prev, curr, next pointers.",
    ],
    repeatedWork: [
      "Initialize prev = null, curr = head.",
      "While curr not null:",
      "  next = curr.next.",
      "  curr.next = prev.",
      "  prev = curr.",
      "  curr = next.",
      "Return prev as new head.",
    ],
    pattern: [
      "This is a linked list pointer reversal pattern.",
      "Use three pointers: prev, curr, next.",
      "Reverse each node's next pointer.",
      "Move all pointers forward.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the linked list itself.",
      "Use three pointers.",
      "No other complex structure is needed.",
      "Input is a linked list head.",
      "Output is the new head.",
    ],
    algorithm: [
      "Set prev = null, curr = head.",
      "While curr != null:",
      "  next = curr.next.",
      "  curr.next = prev.",
      "  prev = curr.",
      "  curr = next.",
      "Return prev.",
    ],
    pseudocode: [
      "prev = null, curr = head",
      "while curr != null:",
      "  next = curr.next",
      "  curr.next = prev",
      "  prev = curr",
      "  curr = next",
      "return prev",
    ],
    edgeCases: [
      "Test with empty list.",
      "Test with single-node list.",
      "Test with two-node list.",
      "Ensure you return the correct new head.",
      "Check that all pointers are reversed.",
    ],
    finalNudge: [
      "Use prev, curr, next pointers.",
      "Reverse curr.next to point to prev.",
      "Move all pointers forward.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Iterate through the list, reversing each node's next pointer to point to the previous node. Track prev, curr, and next pointers. Return prev as the new head.",
  }),

  solutionLogic: {
    approach:
      "Iterate through the list, reversing each node's next pointer to point to the previous node. Track prev, curr, and next pointers. Return prev as the new head.",

    steps: [
      "Initialize prev = null, curr = head.",
      "While curr not null:",
      "  Save next = curr.next.",
      "  Reverse: curr.next = prev.",
      "  Move: prev = curr, curr = next.",
      "Return prev.",
    ],

    pseudocode: `prev = null
curr = head

while curr != null:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next

return prev`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Losing reference to next node.",
      "Not updating prev correctly.",
      "Returning wrong head.",
      "Not handling empty list.",
    ],
  },

  referenceSolution: {
    javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function solve(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}`,

    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(head):
    prev = None
    curr = head

    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node

    return prev`,
  },

  starterCode: {
    javascript: `function solve(head) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(head):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] head) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> head) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q077 = {
  id: "sq-006",
  slug: "valid-parentheses",
  title: "Valid Parentheses",
  topic: "stacks-queues",
  difficulty: "Easy",

  prompt:
    "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type and in the correct order.",

  constraints: [
    "1 <= s.length <= 10000",
    "s consists of parentheses only '()[]{}'.",
  ],

  examples: [
    {
      input: 's = "()[]{}"',
      output: "true",
      explanation: "All brackets are correctly matched.",
    },
    {
      input: 's = "([)]"',
      output: "false",
      explanation: "Brackets are not closed in correct order.",
    },
    {
      input: 's = "{[]}"',
      output: "true",
      explanation: "Nested brackets are valid.",
    },
  ],

  visibleTests: [
    { args: ["()[]{}"], expected: true },
    { args: ["([)]"], expected: false },
    { args: ["{[]}"], expected: true },
    { args: [""], expected: true },
  ],

  hiddenTests: [
    { args: ["(]"], expected: false },
    { args: ["([])"], expected: true },
    { args: ["((()))"], expected: true },
    { args: ["(()"], expected: false },
  ],

  hints: createProgressiveHints({
    understand: [
      "What makes a parentheses string valid?",
      "Do different bracket types matter?",
      "Try the first example and trace matching.",
      "Notice that order of closing matters.",
      "Think about using a stack.",
    ],
    example: [
      "For '()[]{}':",
      "'(' matches ')', '[' matches ']', '{' matches '}'.",
      "For '([)]':",
      "'(' expects ')', but gets ']' → invalid.",
    ],
    simpleApproach: [
      "One method uses counters for each bracket type.",
      "This fails for nested or interleaved cases.",
      "A stack-based approach handles all cases.",
      "Push opening brackets, pop for closing.",
      "Check matches and empty stack at end.",
    ],
    repeatedWork: [
      "For each character:",
      "  If opening, push to stack.",
      "  If closing, check if stack top matches.",
      "    If matches, pop; else invalid.",
      "At end, stack must be empty.",
    ],
    pattern: [
      "This is a stack for matching pattern.",
      "Use a map for closing → opening.",
      "Push opening, pop and check for closing.",
      "Valid if stack empty at end.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a stack.",
      "Use a map for bracket pairs.",
      "No other complex structure is needed.",
      "Input is a string.",
      "Output is a boolean.",
    ],
    algorithm: [
      "Create empty stack, map = {')':'(', ']':'[', '}':'{'}.",
      "For each char c in s:",
      "  If c is opening: push c.",
      "  Else:",
      "    If stack empty or stack.top != map[c]: return false.",
      "    Pop stack.",
      "Return stack is empty.",
    ],
    pseudocode: [
      "stack = empty",
      "map = {')':'(', ']':'[', '}':'{'}",
      "",
      "for each c in s:",
      "  if c is opening:",
      "    stack.push(c)",
      "  else:",
      "    if stack empty or stack.top != map[c]:",
      "      return false",
      "    stack.pop()",
      "",
      "return stack is empty",
    ],
    edgeCases: [
      "Test with empty string.",
      "Test with single bracket.",
      "Test with all opening or all closing.",
      "Test with nested and interleaved.",
      "Ensure stack is empty at end.",
    ],
    finalNudge: [
      "Use a stack to track opening brackets.",
      "For closing, check match with stack top.",
      "Valid if all match and stack empty.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a stack. Push opening brackets. For closing brackets, check if stack top matches the corresponding opening. If all match and stack is empty at end, string is valid.",
  }),

  solutionLogic: {
    approach:
      "Use a stack. Push opening brackets. For closing brackets, check if stack top matches the corresponding opening. If all match and stack is empty at end, string is valid.",

    steps: [
      "Initialize empty stack, map closing→opening.",
      "For each char:",
      "  If opening: push.",
      "  Else: if stack empty or top doesn't match → false; else pop.",
      "Return stack is empty.",
    ],

    pseudocode: `stack = empty
map = {')':'(', ']':'[', '}':'{'}

for each c in s:
    if c is opening:
        stack.push(c)
    else:
        if stack empty or stack.top != map[c]:
            return false
        stack.pop()

return stack is empty`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the stack",

    commonMistakes: [
      "Not checking stack empty before accessing top.",
      "Using wrong map for bracket pairs.",
      "Not checking if stack is empty at end.",
      "Ignoring different bracket types.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };

  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[ch]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}`,

    python: `def solve(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}

    for ch in s:
        if ch in '([{':
            stack.append(ch)
        else:
            if not stack or stack[-1] != mapping[ch]:
                return False
            stack.pop()

    return len(stack) == 0`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(String s) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(string s) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q078 = {
  id: "rec-005",
  slug: "climbing-stairs",
  title: "Climbing Stairs",
  topic: "recursion",
  difficulty: "Easy",

  prompt:
    "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",

  constraints: [
    "1 <= n <= 45",
  ],

  examples: [
    {
      input: "n = 2",
      output: "2",
      explanation: "1+1 or 2.",
    },
    {
      input: "n = 3",
      output: "3",
      explanation: "1+1+1, 1+2, or 2+1.",
    },
  ],

  visibleTests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
    { args: [1], expected: 1 },
    { args: [4], expected: 5 },
  ],

  hiddenTests: [
    { args: [5], expected: 8 },
    { args: [6], expected: 13 },
    { args: [7], expected: 21 },
    { args: [10], expected: 89 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What are the possible moves at each step?",
      "Are you counting paths or minimum steps?",
      "Try n = 3 and list all ways manually.",
      "Notice that last move can be 1 or 2 steps.",
      "Think about recurrence relation.",
    ],
    example: [
      "For n = 3:",
      "Ways: 1+1+1, 1+2, 2+1 → total 3.",
      "For n = 2:",
      "Ways: 1+1, 2 → total 2.",
      "For n = 4:",
      "Ways: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 → total 5.",
    ],
    simpleApproach: [
      "One method uses pure recursion.",
      "ways(n) = ways(n-1) + ways(n-2).",
      "This is O(2^n) and too slow.",
      "Use memoization or DP to optimize.",
      "This becomes O(n).",
    ],
    repeatedWork: [
      "To reach step n, you can come from n-1 (1 step) or n-2 (2 steps).",
      "So ways(n) = ways(n-1) + ways(n-2).",
      "Base cases: ways(1) = 1, ways(2) = 2.",
      "This is Fibonacci sequence.",
      "Compute iteratively in O(n).",
    ],
    pattern: [
      "This is a simple DP / recurrence pattern.",
      "ways[i] = ways[i-1] + ways[i-2].",
      "Base: ways[1]=1, ways[2]=2.",
      "Can optimize space to O(1).",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use two variables for previous two values.",
      "No complex structure is needed.",
      "Input is integer n.",
      "Output is integer (number of ways).",
      "This is Fibonacci-like.",
    ],
    algorithm: [
      "If n <= 2, return n.",
      "Set a = 1, b = 2.",
      "For i from 3 to n:",
      "  c = a + b.",
      "  a = b, b = c.",
      "Return b.",
    ],
    pseudocode: [
      "if n <= 2: return n",
      "a = 1, b = 2",
      "for i from 3 to n:",
      "  c = a + b",
      "  a = b",
      "  b = c",
      "return b",
    ],
    edgeCases: [
      "Test n = 1.",
      "Test n = 2.",
      "Test n = 3, 4.",
      "Ensure you handle small n correctly.",
      "Check that result fits in integer.",
    ],
    finalNudge: [
      "Use recurrence ways(n) = ways(n-1) + ways(n-2).",
      "Base cases: 1 and 2.",
      "Compute iteratively.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: The number of ways to reach step n is the sum of ways to reach n-1 and n-2. This is Fibonacci sequence. Compute iteratively in O(n) time and O(1) space.",
  }),

  solutionLogic: {
    approach:
      "The number of ways to reach step n is the sum of ways to reach n-1 and n-2. This is Fibonacci sequence. Compute iteratively in O(n) time and O(1) space.",

    steps: [
      "If n <= 2, return n.",
      "Initialize a = 1, b = 2.",
      "For i from 3 to n:",
      "  c = a + b.",
      "  a = b, b = c.",
      "Return b.",
    ],

    pseudocode: `if n <= 2:
    return n

a = 1
b = 2

for i from 3 to n:
    c = a + b
    a = b
    b = c

return b`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Using wrong base cases.",
      "Off-by-one in loop.",
      "Using pure recursion without memoization.",
      "Returning a instead of b.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(n) {
  if (n <= 2) {
    return n;
  }

  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
}`,

    python: `def solve(n):
    if n <= 2:
        return n

    a, b = 1, 2

    for _ in range(3, n + 1):
        c = a + b
        a = b
        b = c

    return b`,
  },

  starterCode: {
    javascript: `function solve(n) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(n):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int n) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(int n) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q079 = {
  id: "tree-006",
  slug: "maximum-depth-of-binary-tree",
  title: "Maximum Depth of Binary Tree",
  topic: "trees",
  difficulty: "Easy",

  prompt:
    "Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",

  constraints: [
    "The number of nodes in the tree is in the range [0, 10000].",
    "-100 <= node.val <= 100",
  ],

  examples: [
    {
      input: "root = [3,9,20,null,null,15,7]",
      output: "3",
      explanation: "Longest path is 3→20→15 or 3→20→7, depth 3.",
    },
    {
      input: "root = [1,null,2]",
      output: "2",
      explanation: "Path 1→2, depth 2.",
    },
    {
      input: "root = []",
      output: "0",
      explanation: "Empty tree has depth 0.",
    },
  ],

  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
    { args: [[1, null, 2]], expected: 2 },
    { args: [[]], expected: 0 },
    { args: [[1]], expected: 1 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 3 },
    { args: [[1, 2, null, 3, null, 4]], expected: 4 },
    { args: [[1, 2, 3, null, null, 4, 5, 6]], expected: 4 },
    { args: [[-1, -2, -3]], expected: 2 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the depth of a tree?",
      "Are you counting nodes or edges?",
      "Try the first example and trace longest path.",
      "Notice that depth of leaf is 1 + depth of parent.",
      "Think about recursion on subtrees.",
    ],
    example: [
      "For [3,9,20,null,null,15,7]:",
      "Left subtree depth: 2 (3→9).",
      "Right subtree depth: 3 (3→20→15).",
      "Max depth: 3.",
    ],
    simpleApproach: [
      "One method uses BFS level by level.",
      "Count levels until queue empty.",
      "This is O(n) time and O(n) space.",
      "A recursive DFS can do it in O(n) time.",
      "Depth = 1 + max(depth(left), depth(right)).",
    ],
    repeatedWork: [
      "For each node, depth is 1 + max of children depths.",
      "Base case: null node has depth 0.",
      "Recursively compute for left and right.",
      "Return 1 + max(leftDepth, rightDepth).",
      "Each node visited once.",
    ],
    pattern: [
      "This is a tree DFS depth pattern.",
      "Base: null → 0.",
      "Recursive: 1 + max(left, right).",
      "Time is O(n).",
      "Space is O(h) for recursion stack.",
    ],
    dataStructure: [
      "Use the tree structure itself.",
      "No extra data structure is needed.",
      "Input is a tree root.",
      "Output is an integer (depth).",
      "Recursion handles traversal.",
    ],
    algorithm: [
      "If root is null, return 0.",
      "leftDepth = maxDepth(root.left).",
      "rightDepth = maxDepth(root.right).",
      "Return 1 + max(leftDepth, rightDepth).",
    ],
    pseudocode: [
      "function maxDepth(node):",
      "  if node == null: return 0",
      "  left = maxDepth(node.left)",
      "  right = maxDepth(node.right)",
      "  return 1 + max(left, right)",
    ],
    edgeCases: [
      "Test with empty tree.",
      "Test with single-node tree.",
      "Test with skewed tree.",
      "Test with complete binary tree.",
      "Ensure you count nodes, not edges.",
    ],
    finalNudge: [
      "Use recursion: depth = 1 + max(left, right).",
      "Base case: null → 0.",
      "Return depth of root.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: For each node, maximum depth is 1 + max of depths of left and right subtrees. Base case: null node has depth 0. Recursively compute for all nodes.",
  }),

  solutionLogic: {
    approach:
      "For each node, maximum depth is 1 + max of depths of left and right subtrees. Base case: null node has depth 0. Recursively compute for all nodes.",

    steps: [
      "If root is null, return 0.",
      "Compute leftDepth recursively.",
      "Compute rightDepth recursively.",
      "Return 1 + max(leftDepth, rightDepth).",
    ],

    pseudocode: `function maxDepth(node):
    if node == null:
        return 0
    left = maxDepth(node.left)
    right = maxDepth(node.right)
    return 1 + max(left, right)`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(h) for recursion stack",

    commonMistakes: [
      "Returning 0 for leaf instead of 1.",
      "Not handling null root.",
      "Using min instead of max.",
      "Counting edges instead of nodes.",
    ],
  },

  referenceSolution: {
    javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solve(root) {
  if (!root) return 0;

  const leftDepth = solve(root.left);
  const rightDepth = solve(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}`,

    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(root):
    if not root:
        return 0

    left_depth = solve(root.left)
    right_depth = solve(root.right)

    return 1 + max(left_depth, right_depth)`,
  },

  starterCode: {
    javascript: `function solve(root) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(root):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(Integer[] root) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<optional<int>> root) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q080 = {
  id: "graph-006",
  slug: "flood-fill",
  title: "Flood Fill",
  topic: "graphs",
  difficulty: "Easy",

  prompt:
    "You are given an image represented by an m x n integer grid, where image[i][j] represents the pixel value. You are also given a starting pixel (sr, sc) and a new color. Perform a flood fill starting from (sr, sc), changing all connected pixels of the same original color to the new color. Return the modified image.",

  constraints: [
    "1 <= m, n <= 50",
    "0 <= image[i][j], newColor < 2^16",
    "0 <= sr < m, 0 <= sc < n",
  ],

  examples: [
    {
      input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2",
      output: "[[2,2,2],[2,2,0],[2,0,1]]",
      explanation: "All 4-directionally connected 1's from (1,1) are changed to 2.",
    },
    {
      input: "image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2",
      output: "[[2,2,2],[2,2,2]]",
      explanation: "All pixels are connected and changed.",
    },
  ],

  visibleTests: [
    {
      args: [[[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2],
      expected: [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    },
    {
      args: [[[0, 0, 0], [0, 0, 0]], 0, 0, 2],
      expected: [
        [2, 2, 2],
        [2, 2, 2],
      ],
    },
    { args: [[[1]], 0, 0, 2], expected: [[2]] },
    { args: [[[1, 2], [2, 1]], 0, 0, 3], expected: [[3, 2], [2, 1]] },
  ],

  hiddenTests: [
    {
      args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, 1, 0],
      expected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      args: [[[1, 2, 3], [2, 1, 2], [3, 2, 1]], 1, 1, 5],
      expected: [
        [1, 2, 3],
        [2, 5, 2],
        [3, 2, 1],
      ],
    },
    {
      args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1, 1, 2],
      expected: [
        [0, 0, 0],
        [0, 2, 0],
        [0, 0, 0],
      ],
    },
    {
      args: [[[1, 1, 1], [1, 0, 1], [1, 1, 1]], 0, 0, 2],
      expected: [
        [2, 2, 2],
        [2, 0, 2],
        [2, 2, 2],
      ],
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does flood fill do?",
      "Are you changing all pixels or only connected ones?",
      "Try the first example and trace connected pixels.",
      "Notice that only 4-directional neighbors matter.",
      "Think about DFS or BFS from starting pixel.",
    ],
    example: [
      "For image with 1's and starting at (1,1):",
      "Change all connected 1's to new color.",
      "Pixels not connected remain unchanged.",
      "Result is modified image.",
    ],
    simpleApproach: [
      "One method uses recursion (DFS) to fill.",
      "Another uses queue (BFS).",
      "Both are O(m*n) in worst case.",
      "Check bounds and original color.",
      "Avoid infinite loops if newColor == original.",
    ],
    repeatedWork: [
      "From (sr, sc), visit all 4 neighbors.",
      "If neighbor has original color, recurse/queue it.",
      "Change color of visited pixels.",
      "Continue until no more connected pixels.",
      "Each pixel visited at most once.",
    ],
    pattern: [
      "This is a graph traversal on grid pattern.",
      "Nodes are pixels, edges connect 4-neighbors.",
      "Use DFS or BFS from start.",
      "Change color of reachable nodes.",
      "Time is O(m*n).",
    ],
    dataStructure: [
      "Use the input grid.",
      "Use recursion stack or queue.",
      "No other complex structure is needed.",
      "Input is 2D grid, start coords, new color.",
      "Output is modified grid.",
    ],
    algorithm: [
      "If image[sr][sc] == newColor, return image (no change).",
      "originalColor = image[sr][sc].",
      "DFS/BFS from (sr, sc):",
      "  If out of bounds or color != originalColor, return.",
      "  Set image[r][c] = newColor.",
      "  Recurse/queue 4 neighbors.",
      "Return image.",
    ],
    pseudocode: [
      "if image[sr][sc] == newColor: return image",
      "original = image[sr][sc]",
      "",
      "function dfs(r, c):",
      "  if r,c out of bounds or image[r][c] != original:",
      "    return",
      "  image[r][c] = newColor",
      "  dfs(r-1, c)",
      "  dfs(r+1, c)",
      "  dfs(r, c-1)",
      "  dfs(r, c+1)",
      "",
      "dfs(sr, sc)",
      "return image",
    ],
    edgeCases: [
      "Test when newColor == originalColor.",
      "Test with single pixel.",
      "Test when all pixels are connected.",
      "Test when only start pixel changes.",
      "Ensure you handle boundaries.",
    ],
    finalNudge: [
      "Use DFS or BFS from starting pixel.",
      "Change color of connected pixels with original color.",
      "Avoid changing if newColor == original.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use DFS or BFS from (sr, sc). Change color of all 4-directionally connected pixels that have the original color. If newColor equals original, no change is needed.",
  }),

  solutionLogic: {
    approach:
      "Use DFS or BFS from (sr, sc). Change color of all 4-directionally connected pixels that have the original color. If newColor equals original, no change is needed.",

    steps: [
      "If image[sr][sc] == newColor, return image.",
      "original = image[sr][sc].",
      "DFS/BFS from (sr, sc):",
      "  If invalid or color != original: return.",
      "  Set image[r][c] = newColor.",
      "  Visit 4 neighbors.",
      "Return image.",
    ],

    pseudocode: `if image[sr][sc] == newColor:
    return image

original = image[sr][sc]

function dfs(r, c):
    if r,c out of bounds or image[r][c] != original:
        return
    image[r][c] = newColor
    dfs(r-1, c)
    dfs(r+1, c)
    dfs(r, c-1)
    dfs(r, c+1)

dfs(sr, sc)
return image`,

    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n) in worst case for recursion/queue",

    commonMistakes: [
      "Not checking newColor == original.",
      "Changing wrong pixels.",
      "Not handling boundaries.",
      "Infinite recursion if not checking color.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(image, sr, sc, newColor) {
  const original = image[sr][sc];
  if (original === newColor) return image;

  const m = image.length;
  const n = image[0].length;

  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== original) {
      return;
    }
    image[r][c] = newColor;
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  dfs(sr, sc);
  return image;
}`,

    python: `def solve(image, sr, sc, newColor):
    original = image[sr][sc]
    if original == newColor:
        return image

    m, n = len(image), len(image[0])

    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or image[r][c] != original:
            return
        image[r][c] = newColor
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)

    dfs(sr, sc)
    return image`,
  },

  starterCode: {
    javascript: `function solve(image, sr, sc, newColor) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(image, sr, sc, newColor):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[][] image, int sr, int sc, int newColor) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<vector<int>> image, int sr, int sc, int newColor) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q081 = {
  id: "arr-009",
  slug: "jump-game-ii",
  title: "Jump Game II",
  topic: "arrays",
  difficulty: "Medium",

  prompt:
    "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return the minimum number of jumps to reach the last index. You can assume that you can always reach the last index.",

  constraints: [
    "1 <= nums.length <= 1000",
    "0 <= nums[i] <= 1000",
  ],

  examples: [
    {
      input: "nums = [2,3,1,1,4]",
      output: "2",
      explanation:
        "Jump from index 0 to 1, then from index 1 to the last index.",
    },
    {
      input: "nums = [2,3,0,1,4]",
      output: "2",
      explanation:
        "Jump from index 0 to 1, then from index 1 to the last index.",
    },
  ],

  visibleTests: [
    { args: [[2, 3, 1, 1, 4]], expected: 2 },
    { args: [[2, 3, 0, 1, 4]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 3 },
    { args: [[1]], expected: 0 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[3, 2, 1]], expected: 1 },
    { args: [[1, 3, 2]], expected: 2 },
    { args: [[2, 1, 1, 1, 1]], expected: 3 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each element of nums represent?",
      "Are you checking reachability or minimum jumps?",
      "Try the first example and trace possible jump sequences.",
      "Notice that you can always reach the last index.",
      "Think about tracking ranges of reachable indices.",
    ],
    example: [
      "For [2,3,1,1,4]:",
      "From index 0, you can reach indices 1 or 2.",
      "From index 1, you can reach up to index 4 (last).",
      "So minimum jumps: 0→1→4 (2 jumps).",
    ],
    simpleApproach: [
      "One method uses DP: dp[i] = min jumps to reach i.",
      "This is O(n^2) in worst case.",
      "A greedy approach can do it in O(n).",
      "Track current jump range and farthest reachable.",
      "Increment jumps when moving to next range.",
    ],
    repeatedWork: [
      "Maintain currentEnd (end of current jump range).",
      "Maintain farthest (farthest index reachable so far).",
      "For each index i (except last):",
      "  farthest = max(farthest, i + nums[i]).",
      "  If i == currentEnd:",
      "    jumps++, currentEnd = farthest.",
      "Return jumps.",
    ],
    pattern: [
      "This is a greedy range-expansion pattern.",
      "Track current jump range and farthest reach.",
      "When you reach end of current range, jump.",
      "Update range to farthest.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the input array.",
      "Use variables for jumps, currentEnd, farthest.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is an integer (min jumps).",
    ],
    algorithm: [
      "Set jumps = 0, currentEnd = 0, farthest = 0.",
      "For i from 0 to n-2:",
      "  farthest = max(farthest, i + nums[i]).",
      "  If i == currentEnd:",
      "    jumps++, currentEnd = farthest.",
      "Return jumps.",
    ],
    pseudocode: [
      "jumps = 0, currentEnd = 0, farthest = 0",
      "for i from 0 to n-2:",
      "  farthest = max(farthest, i + nums[i])",
      "  if i == currentEnd:",
      "    jumps++",
      "    currentEnd = farthest",
      "return jumps",
    ],
    edgeCases: [
      "Test when array has one element.",
      "Test when you can jump directly to end.",
      "Test when you must take multiple small jumps.",
      "Ensure you do not count extra jump at end.",
      "Handle n = 1 correctly (0 jumps).",
    ],
    finalNudge: [
      "Track current jump range end and farthest reach.",
      "Increment jumps when you reach currentEnd.",
      "Update currentEnd to farthest.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Iterate through the array, tracking the farthest reachable index and the end of the current jump range. When you reach the end of the current range, increment jumps and update the range to farthest.",
  }),

  solutionLogic: {
    approach:
      "Iterate through the array, tracking the farthest reachable index and the end of the current jump range. When you reach the end of the current range, increment jumps and update the range to farthest.",

    steps: [
      "Initialize jumps = 0, currentEnd = 0, farthest = 0.",
      "For i from 0 to n-2:",
      "  Update farthest = max(farthest, i + nums[i]).",
      "  If i == currentEnd:",
      "    jumps++, currentEnd = farthest.",
      "Return jumps.",
    ],

    pseudocode: `jumps = 0
currentEnd = 0
farthest = 0

for i from 0 to n-2:
    farthest = max(farthest, i + nums[i])
    if i == currentEnd:
        jumps++
        currentEnd = farthest

return jumps`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Iterating to n-1 instead of n-2.",
      "Not updating currentEnd correctly.",
      "Counting extra jump at the end.",
      "Not handling single-element array.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}`,

    python: `def solve(nums):
    jumps = 0
    current_end = 0
    farthest = 0
    n = len(nums)

    for i in range(n - 1):
        farthest = max(farthest, i + nums[i])
        if i == current_end:
            jumps += 1
            current_end = farthest

    return jumps`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q082 = {
  id: "str-007",
  slug: "longest-palindromic-substring",
  title: "Longest Palindromic Substring",
  topic: "strings",
  difficulty: "Medium",

  prompt:
    "Given a string s, return the longest palindromic substring in s.",

  constraints: [
    "1 <= s.length <= 1000",
    "s consists of digits and English letters.",
  ],

  examples: [
    {
      input: 's = "babad"',
      output: '"bab"',
      explanation: "'bab' and 'aba' are both valid; 'bab' is one answer.",
    },
    {
      input: 's = "cbbd"',
      output: '"bb"',
      explanation: "Longest palindrome is 'bb'.",
    },
  ],

  visibleTests: [
    { args: ["babad"], expected: "bab" },
    { args: ["cbbd"], expected: "bb" },
    { args: ["a"], expected: "a" },
    { args: ["ac"], expected: "a" },
  ],

  hiddenTests: [
    { args: ["racecar"], expected: "racecar" },
    { args: ["abacdfgdcaba"], expected: "aba" },
    { args: ["aaaa"], expected: "aaaa" },
    { args: ["abcba"], expected: "abcba" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a palindromic substring?",
      "Are you looking for subsequence or contiguous substring?",
      "Try the first example and identify palindromes.",
      "Notice that palindromes expand around a center.",
      "Think about checking all possible centers.",
    ],
    example: [
      "For 'babad':",
      "Palindromes: 'b', 'a', 'b', 'a', 'd', 'bab', 'aba'.",
      "Longest is 'bab' (or 'aba').",
      "For 'cbbd':",
      "Longest is 'bb'.",
    ],
    simpleApproach: [
      "One method checks all substrings for palindrome.",
      "This is O(n^3) or O(n^2).",
      "An expand-around-center approach is O(n^2).",
      "For each center, expand outward while palindrome.",
      "Track the longest found.",
    ],
    repeatedWork: [
      "There are 2n-1 centers (n chars + n-1 gaps).",
      "For each center, expand left and right.",
      "While characters match, expand.",
      "Track the longest palindrome seen.",
      "Each expansion is O(n), total O(n^2).",
    ],
    pattern: [
      "This is an expand-around-center pattern.",
      "Centers are at each char and between chars.",
      "Expand while s[left] == s[right].",
      "Track max length and start index.",
      "Time is O(n^2).",
    ],
    dataStructure: [
      "Use the input string.",
      "Use indices for center, left, right.",
      "No other complex structure is needed.",
      "Input is a string.",
      "Output is a string (longest palindrome).",
    ],
    algorithm: [
      "If s is empty, return ''.",
      "Initialize start = 0, maxLen = 1.",
      "For each center i from 0 to n-1:",
      "  Expand for odd-length (i, i).",
      "  Expand for even-length (i, i+1).",
      "  Update start and maxLen if longer found.",
      "Return s.substring(start, start + maxLen).",
    ],
    pseudocode: [
      "start = 0, maxLen = 1",
      "",
      "function expand(left, right):",
      "  while left >= 0 and right < n and s[left] == s[right]:",
      "    left--, right++",
      "  return right - left - 1",
      "",
      "for i from 0 to n-1:",
      "  len1 = expand(i, i)",
      "  len2 = expand(i, i+1)",
      "  len = max(len1, len2)",
      "  if len > maxLen:",
      "    maxLen = len",
      "    start = i - (len-1)/2",
      "",
      "return s.substring(start, start + maxLen)",
    ],
    edgeCases: [
      "Test with single character.",
      "Test with all same characters.",
      "Test with no palindrome longer than 1.",
      "Test with even and odd length palindromes.",
      "Ensure you handle both center types.",
    ],
    finalNudge: [
      "Expand around each character and each gap.",
      "Track the longest palindrome found.",
      "Return the substring.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: For each possible center (character or gap), expand outward while characters match. Track the longest palindrome found and return it.",
  }),

  solutionLogic: {
    approach:
      "For each possible center (character or gap), expand outward while characters match. Track the longest palindrome found and return it.",

    steps: [
      "Initialize start = 0, maxLen = 1.",
      "For each i:",
      "  Expand around (i, i) for odd length.",
      "  Expand around (i, i+1) for even length.",
      "  Update start and maxLen if longer.",
      "Return s[start : start+maxLen].",
    ],

    pseudocode: `start = 0
maxLen = 1

function expand(left, right):
    while left >= 0 and right < n and s[left] == s[right]:
        left--
        right++
    return right - left - 1

for i from 0 to n-1:
    len1 = expand(i, i)
    len2 = expand(i, i+1)
    length = max(len1, len2)
    if length > maxLen:
        maxLen = length
        start = i - (length - 1) / 2

return s.substring(start, start + maxLen)`,

    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Only checking odd-length palindromes.",
      "Incorrect start index calculation.",
      "Not handling single-character case.",
      "Off-by-one in expansion.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s) {
  if (!s) return '';

  let start = 0;
  let maxLen = 1;
  const n = s.length;

  function expand(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < n; i++) {
    const len1 = expand(i, i);
    const len2 = expand(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLen);
}`,

    python: `def solve(s):
    if not s:
        return ''

    start = 0
    max_len = 1
    n = len(s)

    def expand(left, right):
        while left >= 0 and right < n and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1

    for i in range(n):
        len1 = expand(i, i)
        len2 = expand(i, i + 1)
        length = max(len1, len2)

        if length > max_len:
            max_len = length
            start = i - (length - 1) // 2

    return s[start:start + max_len]`,
  },

  starterCode: {
    javascript: `function solve(s) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s):
    # Write your Python solution here.
    pass`,
    java: `public static String solve(String s) {
  // Write your Java solution here.
  return "";
}`,
    cpp: `string solve(string s) {
  // Write your C++ solution here.
  return "";
}`,
  },
};


const Q083 = {
  id: "hash-007",
  slug: "contains-duplicate",
  title: "Contains Duplicate",
  topic: "hashing",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",

  constraints: [
    "1 <= nums.length <= 100000",
    "-10^9 <= nums[i] <= 10^9",
  ],

  examples: [
    {
      input: "nums = [1,2,3,1]",
      output: "true",
      explanation: "1 appears twice.",
    },
    {
      input: "nums = [1,2,3,4]",
      output: "false",
      explanation: "All elements are distinct.",
    },
    {
      input: "nums = [1,1,1,1]",
      output: "true",
      explanation: "1 appears multiple times.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3, 1]], expected: true },
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[1, 1, 1, 1]], expected: true },
    { args: [[1]], expected: false },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 2]], expected: true },
    { args: [[-1, -2, -3]], expected: false },
    { args: [[0, 0]], expected: true },
    { args: [[1, 2, 3, 4, 5, 1]], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What are you checking for?",
      "Do you need to count occurrences or just detect any duplicate?",
      "Try the first example and look for repeated values.",
      "Notice that you can stop as soon as you find a duplicate.",
      "Think about using a set to track seen numbers.",
    ],
    example: [
      "For [1,2,3,1]:",
      "1 appears at index 0 and 3 → duplicate.",
      "For [1,2,3,4]:",
      "All unique → no duplicate.",
    ],
    simpleApproach: [
      "One method sorts the array and checks adjacent elements.",
      "This is O(n log n) time.",
      "A hash set approach can do it in O(n) time.",
      "Track seen numbers in a set.",
      "If a number is already in set, return true.",
    ],
    repeatedWork: [
      "For each number:",
      "  If number in set: return true.",
      "  Else: add to set.",
      "If loop completes, return false.",
      "Each number processed once.",
    ],
    pattern: [
      "This is a set membership pattern.",
      "Use a set to track seen elements.",
      "Check before adding.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use a hash set.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is a boolean.",
    ],
    algorithm: [
      "Create empty set.",
      "For each num in nums:",
      "  If num in set: return true.",
      "  Add num to set.",
      "Return false.",
    ],
    pseudocode: [
      "set = empty",
      "for num in nums:",
      "  if num in set:",
      "    return true",
      "  set.add(num)",
      "return false",
    ],
    edgeCases: [
      "Test with single element.",
      "Test with all same elements.",
      "Test with all distinct.",
      "Test with duplicate at end.",
      "Ensure you return early on first duplicate.",
    ],
    finalNudge: [
      "Use a set to track seen numbers.",
      "Return true on first repeat.",
      "If no repeat, return false.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a hash set to track seen numbers. For each number, if it is already in the set, return true. If loop completes without finding duplicates, return false.",
  }),

  solutionLogic: {
    approach:
      "Use a hash set to track seen numbers. For each number, if it is already in the set, return true. If loop completes without finding duplicates, return false.",

    steps: [
      "Initialize empty set.",
      "For each num:",
      "  If num in set: return true.",
      "  Else: add num to set.",
      "Return false.",
    ],

    pseudocode: `set = empty

for num in nums:
    if num in set:
        return true
    set.add(num)

return false`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the set",

    commonMistakes: [
      "Not returning early on duplicate.",
      "Using wrong data structure.",
      "Not handling single-element array.",
      "Checking after adding instead of before.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}`,

    python: `def solve(nums):
    seen = set()

    for num in nums:
        if num in seen:
            return True
        seen.add(num)

    return False`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int[] nums) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<int> nums) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q084 = {
  id: "tp-007",
  slug: "3sum-closest",
  title: "3Sum Closest",
  topic: "two-pointers",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums and an integer target, find three integers in nums such that their sum is closest to target. Return the sum of these three integers.",

  constraints: [
    "3 <= nums.length <= 1000",
    "-1000 <= nums[i] <= 1000",
    "-10^4 <= target <= 10^4",
  ],

  examples: [
    {
      input: "nums = [-1,2,1,-4], target = 1",
      output: "2",
      explanation: "The sum that is closest to 1 is 2 (-1+2+1).",
    },
    {
      input: "nums = [0,0,0], target = 1",
      output: "0",
      explanation: "Only possible sum is 0.",
    },
  ],

  visibleTests: [
    { args: [[-1, 2, 1, -4], 1], expected: 2 },
    { args: [[0, 0, 0], 1], expected: 0 },
    { args: [[1, 1, 1, 0], 100], expected: 3 },
    { args: [[-1, 0, 1], 0], expected: 0 },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 10], expected: 12 },
    { args: [[-3, -2, -1], 0], expected: -6 },
    { args: [[-1, 2, 1, -4, 10], 5], expected: 4 },
    { args: [[1, 2, 4, 8, 16], 100], expected: 26 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What sum are you trying to get close to?",
      "Are you returning the sum or the triplet?",
      "Try the first example and compute all triplet sums.",
      "Notice that you want the sum with minimum |sum - target|.",
      "Think about sorting and using two pointers.",
    ],
    example: [
      "For [-1,2,1,-4], target=1:",
      "Triplets: (-1,2,1)=2, (-1,2,-4)=-3, (-1,1,-4)=-4, (2,1,-4)=-1.",
      "Closest to 1 is 2 (diff=1).",
    ],
    simpleApproach: [
      "One method checks all triplets.",
      "This is O(n^3) and too slow.",
      "Sort and fix one element, then use two pointers.",
      "This reduces to O(n^2).",
      "Track the closest sum seen.",
    ],
    repeatedWork: [
      "Sort the array.",
      "For each i, set left = i+1, right = n-1.",
      "Compute sum = nums[i] + nums[left] + nums[right].",
      "Update closest if |sum - target| is smaller.",
      "Move pointers based on sum vs target.",
    ],
    pattern: [
      "This is a sorting + two-pointer pattern.",
      "Fix one element, use two pointers for the other two.",
      "Track closest sum to target.",
      "Move pointers to reduce difference.",
      "Time is O(n^2).",
    ],
    dataStructure: [
      "Use the input array, sorted.",
      "Use two indices: left and right.",
      "No other complex structure is needed.",
      "Input is an integer array and target.",
      "Output is an integer (closest sum).",
    ],
    algorithm: [
      "Sort nums.",
      "Initialize closest = nums[0]+nums[1]+nums[2].",
      "For i from 0 to n-3:",
      "  left = i+1, right = n-1.",
      "  While left < right:",
      "    sum = nums[i] + nums[left] + nums[right].",
      "    If |sum - target| < |closest - target|: closest = sum.",
      "    If sum < target: left++.",
      "    Else: right--.",
      "Return closest.",
    ],
    pseudocode: [
      "sort(nums)",
      "closest = nums[0]+nums[1]+nums[2]",
      "",
      "for i from 0 to n-3:",
      "  left = i+1, right = n-1",
      "  while left < right:",
      "    sum = nums[i] + nums[left] + nums[right]",
      "    if abs(sum - target) < abs(closest - target):",
      "      closest = sum",
      "    if sum < target:",
      "      left++",
      "    else:",
      "      right--",
      "",
      "return closest",
    ],
    edgeCases: [
      "Test with exactly three elements.",
      "Test when target is very large or small.",
      "Test when multiple sums are equally close.",
      "Ensure you return the sum, not the triplet.",
    ],
    finalNudge: [
      "Sort the array.",
      "Fix one element, use two pointers.",
      "Track closest sum to target.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Sort the array. For each element, use two pointers to find the best pair. Track the sum with minimum difference to target. Return the closest sum.",
  }),

  solutionLogic: {
    approach:
      "Sort the array. For each element, use two pointers to find the best pair. Track the sum with minimum difference to target. Return the closest sum.",

    steps: [
      "Sort nums.",
      "Initialize closest with first triplet.",
      "For each i:",
      "  left = i+1, right = n-1.",
      "  While left < right:",
      "    Compute sum, update closest if better.",
      "    Move pointers based on sum vs target.",
      "Return closest.",
    ],

    pseudocode: `sort(nums)
closest = nums[0] + nums[1] + nums[2]

for i from 0 to n-3:
    left = i + 1
    right = n - 1
    while left < right:
        sum = nums[i] + nums[left] + nums[right]
        if abs(sum - target) < abs(closest - target):
            closest = sum
        if sum < target:
            left++
        else:
            right--

return closest`,

    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1) extra",

    commonMistakes: [
      "Not sorting the array.",
      "Using wrong comparison for closest.",
      "Returning triplet instead of sum.",
      "Not handling three-element array.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closest;
}`,

    python: `def solve(nums, target):
    nums.sort()
    closest = nums[0] + nums[1] + nums[2]
    n = len(nums)

    for i in range(n - 2):
        left, right = i + 1, n - 1

        while left < right:
            s = nums[i] + nums[left] + nums[right]

            if abs(s - target) < abs(closest - target):
                closest = s

            if s < target:
                left += 1
            else:
                right -= 1

    return closest`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums, int target) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q085 = {
  id: "bs-007",
  slug: "kth-smallest-element-in-sorted-matrix",
  title: "Kth Smallest Element in Sorted Matrix",
  topic: "binary-search",
  difficulty: "Medium",

  prompt:
    "Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.",

  constraints: [
    "n == matrix.length",
    "n == matrix[i].length",
    "1 <= n <= 300",
    "-10^9 <= matrix[i][j] <= 10^9",
    "1 <= k <= n^2",
  ],

  examples: [
    {
      input: "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8",
      output: "13",
      explanation: "Sorted elements: 1,5,9,10,11,12,13,13,15 → 8th is 13.",
    },
    {
      input: "matrix = [[-5]], k = 1",
      output: "-5",
      explanation: "Only one element.",
    },
  ],

  visibleTests: [
    { args: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8], expected: 13 },
    { args: [[[-5]], 1], expected: -5 },
    { args: [[[1, 2], [3, 4]], 4], expected: 4 },
    { args: [[[1, 2], [3, 4]], 2], expected: 2 },
  ],

  hiddenTests: [
    { args: [[[1, 3, 5], [2, 4, 6], [7, 8, 9]], 5], expected: 5 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]], 4], expected: 1 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9], expected: 9 },
    { args: [[[-3, -2, -1], [0, 1, 2], [3, 4, 5]], 5], expected: 1 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What property does the matrix have?",
      "Are you looking for kth in sorted order?",
      "Try the first example and list elements in order.",
      "Notice that rows and columns are sorted.",
      "Think about binary search on value range.",
    ],
    example: [
      "For [[1,5,9],[10,11,13],[12,13,15]], k=8:",
      "Sorted: 1,5,9,10,11,12,13,13,15.",
      "8th smallest is 13.",
    ],
    simpleApproach: [
      "One method flattens and sorts the matrix.",
      "This is O(n^2 log n).",
      "A min-heap approach is O(k log n).",
      "A binary search on values is O(n log(max-min)).",
      "Count elements <= mid in O(n).",
    ],
    repeatedWork: [
      "Binary search on value range [min, max].",
      "For each mid, count elements <= mid.",
      "If count < k, search right half.",
      "Else, search left half.",
      "Counting uses sorted property in O(n).",
    ],
    pattern: [
      "This is a binary search on answer pattern.",
      "Search range is [minVal, maxVal].",
      "For each mid, count elements <= mid.",
      "Adjust range based on count vs k.",
      "Time is O(n log(max-min)).",
    ],
    dataStructure: [
      "Use the input matrix.",
      "Use two values: low and high.",
      "No other complex structure is needed.",
      "Input is a 2D matrix and integer k.",
      "Output is an integer.",
    ],
    algorithm: [
      "Set low = matrix[0][0], high = matrix[n-1][n-1].",
      "While low < high:",
      "  mid = (low + high) / 2.",
      "  count = countLessEqual(matrix, mid).",
      "  If count < k: low = mid + 1.",
      "  Else: high = mid.",
      "Return low.",
    ],
    pseudocode: [
      "low = matrix[0][0]",
      "high = matrix[n-1][n-1]",
      "",
      "function countLessEqual(matrix, target):",
      "  count = 0, row = n-1, col = 0",
      "  while row >= 0 and col < n:",
      "    if matrix[row][col] <= target:",
      "      count += row + 1",
      "      col++",
      "    else:",
      "      row--",
      "  return count",
      "",
      "while low < high:",
      "  mid = (low + high) / 2",
      "  if countLessEqual(matrix, mid) < k:",
      "    low = mid + 1",
      "  else:",
      "    high = mid",
      "",
      "return low",
    ],
    edgeCases: [
      "Test with 1x1 matrix.",
      "Test with k = 1 or k = n^2.",
      "Test with all same elements.",
      "Test with negative numbers.",
      "Ensure you handle duplicates correctly.",
    ],
    finalNudge: [
      "Binary search on value range.",
      "Count elements <= mid in O(n).",
      "Adjust range based on count vs k.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Binary search on value range. For each mid, count elements <= mid using the sorted property. If count < k, search right; else search left. Return low when low == high.",
  }),

  solutionLogic: {
    approach:
      "Binary search on value range. For each mid, count elements <= mid using the sorted property. If count < k, search right; else search left. Return low when low == high.",

    steps: [
      "Set low = min, high = max.",
      "While low < high:",
      "  mid = (low + high) / 2.",
      "  count = countLessEqual(mid).",
      "  If count < k: low = mid + 1.",
      "  Else: high = mid.",
      "Return low.",
    ],

    pseudocode: `low = matrix[0][0]
high = matrix[n-1][n-1]

function countLessEqual(target):
    count = 0
    row = n - 1
    col = 0
    while row >= 0 and col < n:
        if matrix[row][col] <= target:
            count += row + 1
            col++
        else:
            row--
    return count

while low < high:
    mid = (low + high) / 2
    if countLessEqual(mid) < k:
        low = mid + 1
    else:
        high = mid

return low`,

    timeComplexity: "O(n log(max-min))",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not using sorted property for counting.",
      "Using wrong update for low/high.",
      "Not handling duplicates.",
      "Flattening matrix unnecessarily.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(matrix, k) {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];

  function countLessEqual(target) {
    let count = 0;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) {
      if (matrix[row][col] <= target) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }

    return count;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (countLessEqual(mid) < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}`,

    python: `def solve(matrix, k):
    n = len(matrix)
    low = matrix[0][0]
    high = matrix[n - 1][n - 1]

    def count_less_equal(target):
        count = 0
        row = n - 1
        col = 0

        while row >= 0 and col < n:
            if matrix[row][col] <= target:
                count += row + 1
                col += 1
            else:
                row -= 1

        return count

    while low < high:
        mid = (low + high) // 2
        if count_less_equal(mid) < k:
            low = mid + 1
        else:
            high = mid

    return low`,
  },

  starterCode: {
    javascript: `function solve(matrix, k) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(matrix, k):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[][] matrix, int k) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<vector<int>> matrix, int k) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q086 = {
  id: "ll-007",
  slug: "linked-list-cycle",
  title: "Linked List Cycle",
  topic: "linked-lists",
  difficulty: "Medium",

  prompt:
    "Given the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle, otherwise return false.",

  constraints: [
    "The number of nodes in the list is in the range [0, 10000].",
    "-10^5 <= node.val <= 10^5",
  ],

  examples: [
    {
      input: "head = [3,2,0,-4], pos = 1",
      output: "true",
      explanation: "There is a cycle where tail connects to node at index 1.",
    },
    {
      input: "head = [1,2], pos = -1",
      output: "false",
      explanation: "No cycle in the list.",
    },
  ],

  visibleTests: [
    { args: [[3, 2, 0, -4], 1], expected: true },
    { args: [[1, 2], -1], expected: false },
    { args: [[1], -1], expected: false },
    { args: [[1, 2, 3], 0], expected: true },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4], 2], expected: true },
    { args: [[1, 2, 3, 4], -1], expected: false },
    { args: [[-1, -2, -3], 1], expected: true },
    { args: [[5], 0], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does a cycle in a linked list mean?",
      "Are you returning the cycle start or just detecting it?",
      "Try the first example and trace the pointers.",
      "Notice that a cycle means you can loop forever.",
      "Think about using two pointers at different speeds.",
    ],
    example: [
      "For [3,2,0,-4] with pos=1:",
      "List: 3→2→0→-4→2→0→-4→...",
      "Cycle exists (2→0→-4→2).",
      "For [1,2] with pos=-1:",
      "List: 1→2→null, no cycle.",
    ],
    simpleApproach: [
      "One method uses a set to track visited nodes.",
      "This is O(n) time and O(n) space.",
      "Floyd's Tortoise and Hare uses O(1) space.",
      "Use slow (1 step) and fast (2 steps) pointers.",
      "If they meet, cycle exists.",
    ],
    repeatedWork: [
      "Initialize slow = head, fast = head.",
      "While fast and fast.next:",
      "  slow = slow.next.",
      "  fast = fast.next.next.",
      "  If slow == fast: return true.",
      "If loop ends, return false.",
    ],
    pattern: [
      "This is the two-pointer (Floyd's cycle detection) pattern.",
      "Slow moves 1 step, fast moves 2 steps.",
      "If cycle exists, they will meet.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the linked list itself.",
      "Use two pointers.",
      "No other complex structure is needed.",
      "Input is a linked list head.",
      "Output is a boolean.",
    ],
    algorithm: [
      "Set slow = head, fast = head.",
      "While fast != null and fast.next != null:",
      "  slow = slow.next.",
      "  fast = fast.next.next.",
      "  If slow == fast: return true.",
      "Return false.",
    ],
    pseudocode: [
      "slow = head, fast = head",
      "while fast != null and fast.next != null:",
      "  slow = slow.next",
      "  fast = fast.next.next",
      "  if slow == fast:",
      "    return true",
      "return false",
    ],
    edgeCases: [
      "Test with empty list.",
      "Test with single-node list (with or without cycle).",
      "Test with cycle at head.",
      "Test with no cycle.",
      "Ensure you handle fast.next null check.",
    ],
    finalNudge: [
      "Use slow and fast pointers.",
      "If they meet, cycle exists.",
      "If fast reaches end, no cycle.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use Floyd's cycle detection. Move slow by 1 step and fast by 2 steps. If they meet, there is a cycle. If fast reaches end, there is no cycle.",
  }),

  solutionLogic: {
    approach:
      "Use Floyd's cycle detection. Move slow by 1 step and fast by 2 steps. If they meet, there is a cycle. If fast reaches end, there is no cycle.",

    steps: [
      "Initialize slow = head, fast = head.",
      "While fast and fast.next:",
      "  slow = slow.next.",
      "  fast = fast.next.next.",
      "  If slow == fast: return true.",
      "Return false.",
    ],

    pseudocode: `slow = head
fast = head

while fast != null and fast.next != null:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        return true

return false`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not checking fast.next before accessing.",
      "Starting fast at head.next incorrectly.",
      "Not handling empty list.",
      "Using only one pointer.",
    ],
  },

  referenceSolution: {
    javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function solve(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}`,

    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(head):
    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False`,
  },

  starterCode: {
    javascript: `function solve(head) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(head):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int[] arg0, int arg1) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<int> arg0, int arg1) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q087 = {
  id: "sq-007",
  slug: "implement-queue-using-stacks",
  title: "Implement Queue Using Stacks",
  topic: "stacks-queues",
  difficulty: "Medium",

  prompt:
    "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue: push, pop, peek, and empty.",

  constraints: [
    "1 <= number of operations <= 100",
    "Values are integers.",
  ],

  examples: [
    {
      input: "Operations: push(1), push(2), peek(), pop(), empty()",
      output: "[null,null,1,1,false]",
      explanation:
        "Queue: [1,2] → peek=1, pop=1, empty=false.",
    },
  ],

  visibleTests: [
    {
      args: [["push", "push", "peek", "pop", "empty"], [[1], [2], [], [], []]],
      expected: [null, null, 1, 1, false],
    },
    {
      args: [["push", "pop", "empty"], [[1], [], []]],
      expected: [null, 1, true],
    },
  ],

  hiddenTests: [
    {
      args: [["push", "push", "pop", "peek", "empty"], [[1], [2], [], [], []]],
      expected: [null, null, 1, 2, false],
    },
    {
      args: [["push", "peek", "pop", "empty"], [[5], [], [], []]],
      expected: [null, 5, 5, true],
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is the difference between stack and queue?",
      "How can two stacks simulate FIFO behavior?",
      "Try the example and trace push/pop operations.",
      "Notice that one stack can be used for input, one for output.",
      "Think about reversing order twice.",
    ],
    example: [
      "Push 1, push 2: stackIn = [1,2].",
      "Peek: transfer to stackOut → [2,1], peek=1.",
      "Pop: remove 1, stackOut = [2].",
      "Empty: false (stackOut not empty).",
    ],
    simpleApproach: [
      "One method uses one stack for push, one for pop.",
      "When popping, if stackOut empty, transfer all from stackIn.",
      "This reverses order, giving FIFO behavior.",
      "Peek is top of stackOut.",
      "Empty is both stacks empty.",
    ],
    repeatedWork: [
      "push: always push to stackIn.",
      "pop/peek: if stackOut empty, move all from stackIn.",
      "Then pop/peek from stackOut.",
      "Each element moved at most once.",
      "Amortized O(1) per operation.",
    ],
    pattern: [
      "This is a two-stack queue pattern.",
      "stackIn for pushes, stackOut for pops.",
      "Transfer only when stackOut empty.",
      "Time is amortized O(1).",
    ],
    dataStructure: [
      "Use two stacks (arrays).",
      "No other complex structure is needed.",
      "Input is a sequence of operations.",
      "Output is sequence of results.",
    ],
    algorithm: [
      "Initialize stackIn = [], stackOut = [].",
      "push(x): stackIn.push(x).",
      "pop(): if stackOut empty, transfer; return stackOut.pop().",
      "peek(): if stackOut empty, transfer; return stackOut[top].",
      "empty(): return stackIn and stackOut both empty.",
    ],
    pseudocode: [
      "stackIn = [], stackOut = []",
      "",
      "function push(x):",
      "  stackIn.push(x)",
      "",
      "function transfer():",
      "  while stackIn not empty:",
      "    stackOut.push(stackIn.pop())",
      "",
      "function pop():",
      "  if stackOut empty: transfer()",
      "  return stackOut.pop()",
      "",
      "function peek():",
      "  if stackOut empty: transfer()",
      "  return stackOut.top",
      "",
      "function empty():",
      "  return stackIn empty and stackOut empty",
    ],
    edgeCases: [
      "Test with single push and pop.",
      "Test with multiple pushes then pops.",
      "Test peek on empty queue.",
      "Test empty after all pops.",
      "Ensure transfer only when needed.",
    ],
    finalNudge: [
      "Use two stacks: one for input, one for output.",
      "Transfer only when output stack is empty.",
      "Implement push, pop, peek, empty.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use two stacks. Push to input stack. For pop/peek, if output stack is empty, transfer all from input to output (reversing order). Then pop/peek from output stack.",
  }),

  solutionLogic: {
    approach:
      "Use two stacks. Push to input stack. For pop/peek, if output stack is empty, transfer all from input to output (reversing order). Then pop/peek from output stack.",

    steps: [
      "Initialize stackIn, stackOut.",
      "push(x): stackIn.push(x).",
      "pop/peek: if stackOut empty, transfer.",
      "pop: stackOut.pop().",
      "peek: return stackOut[top].",
      "empty: both stacks empty.",
    ],

    pseudocode: `stackIn = []
stackOut = []

function push(x):
    stackIn.push(x)

function transfer():
    while stackIn not empty:
        stackOut.push(stackIn.pop())

function pop():
    if stackOut empty:
        transfer()
    return stackOut.pop()

function peek():
    if stackOut empty:
        transfer()
    return stackOut.top

function empty():
    return stackIn empty and stackOut empty`,

    timeComplexity: "Amortized O(1) per operation",
    spaceComplexity: "O(n) for the two stacks",

    commonMistakes: [
      "Transferring on every pop/peek.",
      "Not checking if stackOut is empty before transfer.",
      "Using wrong stack for operations.",
      "Not handling empty queue correctly.",
    ],
  },

  referenceSolution: {
    javascript: `class MyQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x) {
    this.stackIn.push(x);
  }

  transfer() {
    while (this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop());
    }
  }

  pop() {
    if (this.stackOut.length === 0) {
      this.transfer();
    }
    return this.stackOut.pop();
  }

  peek() {
    if (this.stackOut.length === 0) {
      this.transfer();
    }
    return this.stackOut[this.stackOut.length - 1];
  }

  empty() {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }
}

function solve(operations, values) {
  const queue = new MyQueue();
  const result = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    if (op === 'push') {
      queue.push(values[i][0]);
      result.push(null);
    } else if (op === 'pop') {
      result.push(queue.pop());
    } else if (op === 'peek') {
      result.push(queue.peek());
    } else if (op === 'empty') {
      result.push(queue.empty());
    }
  }

  return result;
}`,

    python: `class MyQueue:
    def __init__(self):
        self.stack_in = []
        self.stack_out = []

    def push(self, x):
        self.stack_in.append(x)

    def transfer(self):
        while self.stack_in:
            self.stack_out.append(self.stack_in.pop())

    def pop(self):
        if not self.stack_out:
            self.transfer()
        return self.stack_out.pop()

    def peek(self):
        if not self.stack_out:
            self.transfer()
        return self.stack_out[-1]

    def empty(self):
        return not self.stack_in and not self.stack_out

def solve(operations, values):
    queue = MyQueue()
    result = []

    for op, val in zip(operations, values):
        if op == 'push':
            queue.push(val[0])
            result.append(None)
        elif op == 'pop':
            result.append(queue.pop())
        elif op == 'peek':
            result.append(queue.peek())
        elif op == 'empty':
            result.append(queue.empty())

    return result`,
  },

  starterCode: {
    javascript: `function solve(operations, values) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(operations, values):
    # Write your Python solution here.
    pass`,
    java: `public static Object[] solve(String[] operations, int[][] values) {
  // Write your Java solution here.
  return new Object[]{};
}`,
    cpp: `vector<optional<int>> solve(vector<string> operations, vector<vector<int>> values) {
  // Write your C++ solution here.
  return vector<optional<int>>{};
}`,
  },
};


const Q088 = {
  id: "rec-006",
  slug: "subsets",
  title: "Subsets",
  topic: "recursion",
  difficulty: "Medium",

  prompt:
    "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the answer in any order.",

  constraints: [
    "1 <= nums.length <= 10",
    "-10 <= nums[i] <= 10",
  ],

  examples: [
    {
      input: "nums = [1,2,3]",
      output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      explanation: "All possible subsets.",
    },
    {
      input: "nums = [0]",
      output: "[[],[0]]",
      explanation: "Empty set and [0].",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3]], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
    { args: [[0]], expected: [[], [0]] },
    { args: [[1]], expected: [[], [1]] },
    { args: [[1, 2]], expected: [[], [1], [2], [1, 2]] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: "16 subsets" },
    { args: [[-1, 0, 1]], expected: "8 subsets" },
    { args: [[5, 10, 15]], expected: "8 subsets" },
    { args: [[1, 3, 5, 7]], expected: "16 subsets" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a subset?",
      "Are you returning all subsets or just some?",
      "Try the first example and list all subsets manually.",
      "Notice that each element can be included or excluded.",
      "Think about recursion or bit manipulation.",
    ],
    example: [
      "For [1,2,3]:",
      "Subsets: [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3].",
      "Total 2^3 = 8 subsets.",
    ],
    simpleApproach: [
      "One method uses bit manipulation (0 to 2^n - 1).",
      "Each bit represents inclusion of an element.",
      "This is O(n * 2^n).",
      "A backtracking approach is also O(n * 2^n).",
      "For each element, choose to include or exclude.",
    ],
    repeatedWork: [
      "Start with empty subset.",
      "For each element, branch: include or exclude.",
      "Recurse for remaining elements.",
      "When all elements processed, add subset.",
      "This explores all 2^n subsets.",
    ],
    pattern: [
      "This is a backtracking (include/exclude) pattern.",
      "State: current index, current subset.",
      "Base case: index == n, add subset.",
      "Recursive: include nums[index], recurse; exclude, recurse.",
      "Collect all subsets.",
    ],
    dataStructure: [
      "Use an array for current subset.",
      "Use an array to store all subsets.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is array of arrays.",
    ],
    algorithm: [
      "Create result = [].",
      "Define backtrack(index, current):",
      "  If index == n: result.push(copy of current).",
      "  Else:",
      "    Exclude: backtrack(index+1, current).",
      "    Include: current.push(nums[index]), backtrack(index+1, current), current.pop().",
      "Call backtrack(0, []).",
      "Return result.",
    ],
    pseudocode: [
      "result = []",
      "",
      "function backtrack(index, current):",
      "  if index == n:",
      "    result.push(copy of current)",
      "    return",
      "  // Exclude",
      "  backtrack(index + 1, current)",
      "  // Include",
      "  current.push(nums[index])",
      "  backtrack(index + 1, current)",
      "  current.pop()",
      "",
      "backtrack(0, [])",
      "return result",
    ],
    edgeCases: [
      "Test with single element.",
      "Test with two elements.",
      "Test with negative numbers.",
      "Ensure you include empty subset.",
      "Check that no duplicates in result.",
    ],
    finalNudge: [
      "Use backtracking with include/exclude.",
      "Base case: all elements processed.",
      "Collect all subsets.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use backtracking. For each element, branch into two: include it or exclude it. When all elements are processed, add the current subset to the result.",
  }),

  solutionLogic: {
    approach:
      "Use backtracking. For each element, branch into two: include it or exclude it. When all elements are processed, add the current subset to the result.",

    steps: [
      "Initialize result = [].",
      "Define backtrack(index, current).",
      "If index == n: add copy of current.",
      "Else: exclude, then include and recurse.",
      "Backtrack by popping.",
      "Return result.",
    ],

    pseudocode: `result = []

function backtrack(index, current):
    if index == n:
        result.push(copy of current)
        return
    // Exclude
    backtrack(index + 1, current)
    // Include
    current.push(nums[index])
    backtrack(index + 1, current)
    current.pop()

backtrack(0, [])
return result`,

    timeComplexity: "O(n * 2^n)",
    spaceComplexity: "O(n) for recursion stack",

    commonMistakes: [
      "Not copying current subset before adding.",
      "Forgetting to pop after include.",
      "Missing empty subset.",
      "Generating duplicates.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const result = [];

  function backtrack(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    // Exclude
    backtrack(index + 1, current);

    // Include
    current.push(nums[index]);
    backtrack(index + 1, current);
    current.pop();
  }

  backtrack(0, []);
  return result;
}`,

    python: `def solve(nums):
    result = []

    def backtrack(index, current):
        if index == len(nums):
            result.append(current[:])
            return

        # Exclude
        backtrack(index + 1, current)

        # Include
        current.append(nums[index])
        backtrack(index + 1, current)
        current.pop()

    backtrack(0, [])
    return result`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[] nums) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q089 = {
  id: "tree-007",
  slug: "same-tree",
  title: "Same Tree",
  topic: "trees",
  difficulty: "Medium",

  prompt:
    "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",

  constraints: [
    "The number of nodes in both trees is in the range [0, 100].",
    "-10^4 <= node.val <= 10^4",
  ],

  examples: [
    {
      input: "p = [1,2,3], q = [1,2,3]",
      output: "true",
      explanation: "Both trees are structurally identical with same values.",
    },
    {
      input: "p = [1,2], q = [1,null,2]",
      output: "false",
      explanation: "Structures differ.",
    },
    {
      input: "p = [1,2,1], q = [1,1,2]",
      output: "false",
      explanation: "Values differ at same positions.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3], [1, 2, 3]], expected: true },
    { args: [[1, 2], [1, null, 2]], expected: false },
    { args: [[1, 2, 1], [1, 1, 2]], expected: false },
    { args: [[], []], expected: true },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4], [1, 2, 3, 4]], expected: true },
    { args: [[1, 2, 3], [1, 2, 4]], expected: false },
    { args: [[1, 2, null], [1, 2, 3]], expected: false },
    { args: [[-1, -2, -3], [-1, -2, -3]], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What makes two trees the same?",
      "Do you need to check structure and values?",
      "Try the first example and compare nodes.",
      "Notice that both structure and values must match.",
      "Think about recursion on both trees simultaneously.",
    ],
    example: [
      "For p=[1,2,3], q=[1,2,3]:",
      "Roots: 1==1, left: 2==2, right: 3==3.",
      "Structures match, values match → same.",
      "For p=[1,2], q=[1,null,2]:",
      "Left child of p is 2, left child of q is null → different.",
    ],
    simpleApproach: [
      "One method uses BFS/DFS to traverse both trees.",
      "Compare nodes level by level or recursively.",
      "If any mismatch, return false.",
      "Recursive approach is concise.",
      "Check root, then left subtrees, then right subtrees.",
    ],
    repeatedWork: [
      "If both nodes null: same.",
      "If one null, other not: different.",
      "If values differ: different.",
      "Else: check left subtrees and right subtrees.",
      "Combine results with AND.",
    ],
    pattern: [
      "This is a tree recursion pattern.",
      "Base: both null → true; one null → false.",
      "Recursive: values match AND left same AND right same.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the tree structures.",
      "No extra data structure is needed.",
      "Input is two tree roots.",
      "Output is a boolean.",
      "Recursion handles traversal.",
    ],
    algorithm: [
      "If p and q both null: return true.",
      "If one of p, q is null: return false.",
      "If p.val != q.val: return false.",
      "Return isSameTree(p.left, q.left) AND isSameTree(p.right, q.right).",
    ],
    pseudocode: [
      "function isSame(p, q):",
      "  if p == null and q == null: return true",
      "  if p == null or q == null: return false",
      "  if p.val != q.val: return false",
      "  return isSame(p.left, q.left) and isSame(p.right, q.right)",
    ],
    edgeCases: [
      "Test with both empty trees.",
      "Test with one empty, one non-empty.",
      "Test with single-node trees.",
      "Test with different structures.",
      "Test with same structure, different values.",
    ],
    finalNudge: [
      "Check null cases first.",
      "Compare values.",
      "Recurse on left and right.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Recursively compare both trees. If both nodes are null, they match. If one is null or values differ, they don't. Otherwise, check left and right subtrees.",
  }),

  solutionLogic: {
    approach:
      "Recursively compare both trees. If both nodes are null, they match. If one is null or values differ, they don't. Otherwise, check left and right subtrees.",

    steps: [
      "If both null: return true.",
      "If one null: return false.",
      "If values differ: return false.",
      "Return isSame(left, left) AND isSame(right, right).",
    ],

    pseudocode: `function isSame(p, q):
    if p == null and q == null:
        return true
    if p == null or q == null:
        return false
    if p.val != q.val:
        return false
    return isSame(p.left, q.left) and isSame(p.right, q.right)`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(h) for recursion stack",

    commonMistakes: [
      "Not handling null cases correctly.",
      "Comparing only values, not structure.",
      "Using OR instead of AND for subtrees.",
      "Not checking both null case first.",
    ],
  },

  referenceSolution: {
    javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solve(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return solve(p.left, q.left) && solve(p.right, q.right);
}`,

    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    if p.val != q.val:
        return False

    return solve(p.left, q.left) and solve(p.right, q.right)`,
  },

  starterCode: {
    javascript: `function solve(p, q) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(p, q):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int[] p, int[] q) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<int> p, vector<int> q) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q090 = {
  id: "graph-007",
  slug: "course-schedule-ii",
  title: "Course Schedule II",
  topic: "graphs",
  difficulty: "Medium",

  prompt:
    "There are numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a, b] means you must take course b before course a. Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",

  constraints: [
    "1 <= numCourses <= 2000",
    "0 <= prerequisites.length <= 5000",
    "prerequisites[i].length == 2",
    "0 <= a, b < numCourses",
    "All pairs [a, b] are distinct.",
  ],

  examples: [
    {
      input: "numCourses = 2, prerequisites = [[1,0]]",
      output: "[0,1]",
      explanation: "Take course 0 first, then course 1.",
    },
    {
      input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
      output: "[0,1,2,3] or [0,2,1,3]",
      explanation: "Multiple valid orderings exist.",
    },
    {
      input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
      output: "[]",
      explanation: "Cycle makes it impossible.",
    },
  ],

  visibleTests: [
    { args: [2, [[1, 0]]], expected: [0, 1] },
    { args: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]], expected: [0, 1, 2, 3] },
    { args: [2, [[1, 0], [0, 1]]], expected: [] },
    { args: [1, []], expected: [0] },
  ],

  hiddenTests: [
    { args: [3, [[1, 0], [2, 1]]], expected: [0, 1, 2] },
    { args: [3, [[0, 1], [0, 2], [1, 2]]], expected: [1, 2, 0] },
    { args: [4, [[1, 0], [2, 1], [3, 2], [1, 3]]], expected: [] },
    { args: [5, [[1, 0], [2, 0], [3, 1], [3, 2], [4, 3]]], expected: [0, 1, 2, 3, 4] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does each prerequisite pair [a, b] represent?",
      "Are you returning any valid order or a specific one?",
      "Try the first example and draw the dependency graph.",
      "Notice that this is topological sorting.",
      "Think about Kahn's algorithm or DFS-based topo sort.",
    ],
    example: [
      "For numCourses=4, prerequisites=[[1,0],[2,0],[3,1],[3,2]]:",
      "Edges: 0→1, 0→2, 1→3, 2→3.",
      "Valid order: 0,1,2,3 or 0,2,1,3.",
      "For [[1,0],[0,1]]: cycle → impossible.",
    ],
    simpleApproach: [
      "One method uses DFS with post-order and reverse.",
      "Another uses Kahn's algorithm (BFS with in-degrees).",
      "Both are O(n + e).",
      "Kahn's naturally gives a valid order.",
      "If not all courses processed, cycle exists.",
    ],
    repeatedWork: [
      "Build adjacency list and in-degree array.",
      "Enqueue all courses with in-degree 0.",
      "Process queue, reducing in-degrees of neighbors.",
      "Add processed courses to result.",
      "If result size < numCourses, cycle → return [].",
    ],
    pattern: [
      "This is a topological sort pattern.",
      "Use Kahn's algorithm for ordering.",
      "Track in-degrees and process zero in-degree nodes.",
      "Time is O(n + e).",
    ],
    dataStructure: [
      "Use adjacency list for graph.",
      "Use array for in-degrees.",
      "Use queue for BFS.",
      "Input is number of courses and prerequisites.",
      "Output is ordering array or empty.",
    ],
    algorithm: [
      "Build graph: for [a,b], add edge b→a.",
      "Compute in-degrees.",
      "Enqueue all nodes with in-degree 0.",
      "Initialize result = [].",
      "While queue not empty:",
      "  Pop course, add to result.",
      "  For each neighbor, decrement in-degree.",
      "  If in-degree becomes 0, enqueue.",
      "If result.length == numCourses: return result; else return [].",
    ],
    pseudocode: [
      "graph = adjacency list",
      "inDegree = array of size numCourses",
      "for [a, b] in prerequisites:",
      "  graph[b].push(a)",
      "  inDegree[a]++",
      "",
      "queue = all i where inDegree[i] == 0",
      "result = []",
      "",
      "while queue not empty:",
      "  course = queue.pop()",
      "  result.push(course)",
      "  for neighbor in graph[course]:",
      "    inDegree[neighbor]--",
      "    if inDegree[neighbor] == 0:",
      "      queue.push(neighbor)",
      "",
      "if result.length == numCourses:",
      "  return result",
      "else:",
      "  return []",
    ],
    edgeCases: [
      "Test when there are no prerequisites.",
      "Test when numCourses is 1.",
      "Test when there is a cycle.",
      "Test when graph is disconnected.",
      "Ensure you handle all courses.",
    ],
    finalNudge: [
      "Build graph and in-degrees.",
      "Process zero in-degree nodes.",
      "Check if all courses are in result.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use Kahn's algorithm. Build graph and in-degrees. Process nodes with in-degree 0, reducing neighbors' in-degrees. If all courses are processed, return order; else return empty (cycle).",
  }),

  solutionLogic: {
    approach:
      "Use Kahn's algorithm. Build graph and in-degrees. Process nodes with in-degree 0, reducing neighbors' in-degrees. If all courses are processed, return order; else return empty (cycle).",

    steps: [
      "Build adjacency list and in-degree array.",
      "Enqueue all nodes with in-degree 0.",
      "Process queue, add to result.",
      "Decrement neighbors' in-degrees.",
      "If result size == numCourses, return result; else [].",
    ],

    pseudocode: `graph = adjacency list
inDegree = array of size numCourses

for [a, b] in prerequisites:
    graph[b].push(a)
    inDegree[a]++

queue = all i where inDegree[i] == 0
result = []

while queue not empty:
    course = queue.pop()
    result.push(course)
    for neighbor in graph[course]:
        inDegree[neighbor]--
        if inDegree[neighbor] == 0:
            queue.push(neighbor)

if result.length == numCourses:
    return result
else:
    return []`,

    timeComplexity: "O(numCourses + prerequisites.length)",
    spaceComplexity: "O(numCourses + prerequisites.length)",

    commonMistakes: [
      "Reversing edge direction.",
      "Not checking result size at end.",
      "Forgetting to include courses with no edges.",
      "Using DFS but not correctly ordering.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    inDegree[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const result = [];

  while (queue.length > 0) {
    const course = queue.shift();
    result.push(course);

    for (const neighbor of graph[course]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result.length === numCourses ? result : [];
}`,

    python: `from collections import deque

def solve(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    in_degree = [0] * numCourses

    for a, b in prerequisites:
        graph[b].append(a)
        in_degree[a] += 1

    queue = deque(i for i in range(numCourses) if in_degree[i] == 0)
    result = []

    while queue:
        course = queue.popleft()
        result.append(course)

        for neighbor in graph[course]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return result if len(result) == numCourses else []`,
  },

  starterCode: {
    javascript: `function solve(numCourses, prerequisites) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(numCourses, prerequisites):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int numCourses, int[][] prerequisites) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(int numCourses, vector<vector<int>> prerequisites) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q091 = {
  id: "arr-010",
  slug: "merge-intervals",
  title: "Merge Intervals",
  topic: "arrays",
  difficulty: "Hard",

  prompt:
    "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",

  constraints: [
    "1 <= intervals.length <= 10000",
    "0 <= start <= end <= 10000",
  ],

  examples: [
    {
      input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      output: "[[1,6],[8,10],[15,18]]",
      explanation: "[1,3] and [2,6] overlap and are merged into [1,6].",
    },
    {
      input: "intervals = [[1,4],[4,5]]",
      output: "[[1,5]]",
      explanation: "[1,4] and [4,5] are considered overlapping.",
    },
  ],

  visibleTests: [
    { args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
    { args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
    { args: [[[1, 2], [3, 4]]], expected: [[1, 2], [3, 4]] },
    { args: [[[1, 5]]], expected: [[1, 5]] },
  ],

  hiddenTests: [
    { args: [[[1, 4], [0, 4]]], expected: [[0, 4]] },
    { args: [[[1, 4], [2, 3]]], expected: [[1, 4]] },
    { args: [[[1, 10], [2, 6], [8, 10]]], expected: [[1, 10]] },
    { args: [[[1, 2], [2, 3], [3, 4]]], expected: [[1, 4]] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean for two intervals to overlap?",
      "Are the intervals sorted initially?",
      "Try the first example and identify overlapping pairs.",
      "Notice that [1,3] and [2,6] overlap because 2 <= 3.",
      "Think about sorting by start time.",
    ],
    example: [
      "For [[1,3],[2,6],[8,10],[15,18]]:",
      "Sort by start: already sorted.",
      "[1,3] and [2,6] overlap → merge to [1,6].",
      "[1,6] and [8,10] do not overlap.",
      "Result: [1,6], [8,10], [15,18].",
    ],
    simpleApproach: [
      "One method compares all pairs of intervals.",
      "This is O(n^2) and inefficient.",
      "Sorting by start time allows linear merge.",
      "This is O(n log n) due to sorting.",
      "Then merge in one pass.",
    ],
    repeatedWork: [
      "Sort intervals by start time.",
      "Initialize merged = [first interval].",
      "For each subsequent interval:",
      "  If current.start <= merged.last.end:",
      "    Merge: update merged.last.end = max(last.end, current.end).",
      "  Else: add current to merged.",
      "Return merged.",
    ],
    pattern: [
      "This is a sort-then-merge pattern.",
      "Sort by start time.",
      "Iterate and merge overlapping.",
      "Time is O(n log n).",
    ],
    dataStructure: [
      "Use the input array (sorted).",
      "Use an output array for merged intervals.",
      "No other complex structure is needed.",
      "Input is array of [start, end].",
      "Output is array of merged intervals.",
    ],
    algorithm: [
      "If intervals empty, return [].",
      "Sort intervals by start.",
      "merged = [intervals[0]].",
      "For each interval in intervals[1:]:",
      "  If interval.start <= merged[last].end:",
      "    merged[last].end = max(merged[last].end, interval.end).",
      "  Else: merged.push(interval).",
      "Return merged.",
    ],
    pseudocode: [
      "if intervals empty: return []",
      "sort intervals by start",
      "merged = [intervals[0]]",
      "",
      "for each interval in intervals[1:]:",
      "  if interval.start <= merged[last].end:",
      "    merged[last].end = max(merged[last].end, interval.end)",
      "  else:",
      "    merged.push(interval)",
      "",
      "return merged",
    ],
    edgeCases: [
      "Test with single interval.",
      "Test with no overlaps.",
      "Test with all overlapping.",
      "Test with touching intervals (end == start).",
      "Ensure sorting is by start time.",
    ],
    finalNudge: [
      "Sort by start time.",
      "Merge overlapping intervals in one pass.",
      "Update end time when merging.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Sort intervals by start time. Iterate through sorted intervals, merging any that overlap with the last merged interval by updating its end time. Non-overlapping intervals are added as-is.",
  }),

  solutionLogic: {
    approach:
      "Sort intervals by start time. Iterate through sorted intervals, merging any that overlap with the last merged interval by updating its end time. Non-overlapping intervals are added as-is.",

    steps: [
      "Sort intervals by start.",
      "Initialize merged with first interval.",
      "For each subsequent interval:",
      "  If overlaps with last merged: update end.",
      "  Else: add to merged.",
      "Return merged.",
    ],

    pseudocode: `sort intervals by start
merged = [intervals[0]]

for each interval in intervals[1:]:
    if interval.start <= merged[last].end:
        merged[last].end = max(merged[last].end, interval.end)
    else:
        merged.push(interval)

return merged`,

    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n) for output array",

    commonMistakes: [
      "Not sorting before merging.",
      "Using min instead of max for end time.",
      "Not handling touching intervals.",
      "Modifying input array in place incorrectly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}`,

    python: `def solve(intervals):
    if not intervals:
        return []

    intervals.sort(key=lambda x: x[0])

    merged = [intervals[0]]

    for current in intervals[1:]:
        last = merged[-1]
        if current[0] <= last[1]:
            last[1] = max(last[1], current[1])
        else:
            merged.append(current)

    return merged`,
  },

  starterCode: {
    javascript: `function solve(intervals) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(intervals):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[][] intervals) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<vector<int>> intervals) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q092 = {
  id: "str-008",
  slug: "regular-expression-matching",
  title: "Regular Expression Matching",
  topic: "strings",
  difficulty: "Hard",

  prompt:
    "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n- '.' matches any single character.\n- '*' matches zero or more of the preceding element.\nThe matching should cover the entire input string (not partial).",

  constraints: [
    "0 <= s.length <= 20",
    "0 <= p.length <= 20",
    "s contains only lowercase English letters.",
    "p contains only lowercase English letters, '.', and '*'.",
    "It is guaranteed that each '*' is preceded by a valid character.",
  ],

  examples: [
    {
      input: 's = "aa", p = "a"',
      output: "false",
      explanation: "'a' does not match 'aa'.",
    },
    {
      input: 's = "aa", p = "a*"',
      output: "true",
      explanation: "'a*' matches 'aa' (two 'a's).",
    },
    {
      input: 's = "ab", p = ".*"',
      output: "true",
      explanation: "'.*' matches any sequence, including 'ab'.",
    },
  ],

  visibleTests: [
    { args: ["aa", "a"], expected: false },
    { args: ["aa", "a*"], expected: true },
    { args: ["ab", ".*"], expected: true },
    { args: ["aab", "c*a*b"], expected: true },
  ],

  hiddenTests: [
    { args: ["mississippi", "mis*is*p*."], expected: false },
    { args: ["aaa", "a*a"], expected: true },
    { args: ["aaa", "ab*a"], expected: false },
    { args: ["", "a*"], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What do '.' and '*' mean in this problem?",
      "Are you checking full match or partial?",
      "Try the first example and see why it fails.",
      "Notice that '*' applies to the preceding character.",
      "Think about recursion or DP.",
    ],
    example: [
      "For s='aa', p='a*':",
      "'a*' can match '', 'a', 'aa', 'aaa', ...",
      "Here it matches 'aa' → true.",
      "For s='ab', p='.*':",
      "'.*' matches any sequence → true.",
    ],
    simpleApproach: [
      "One method uses recursion with memoization.",
      "Another uses DP table.",
      "Both are O(m*n) where m=len(s), n=len(p).",
      "Handle '*' by trying 0 or more occurrences.",
      "Handle '.' as wildcard.",
    ],
    repeatedWork: [
      "Define dp[i][j] = s[0..i) matches p[0..j).",
      "Base: dp[0][0] = true.",
      "For each pattern char:",
      "  If p[j-1] is '*', check 0 occurrence or 1+ occurrences.",
      "  If p[j-1] is '.' or matches s[i-1]: dp[i][j] = dp[i-1][j-1].",
      "Fill table and return dp[m][n].",
    ],
    pattern: [
      "This is a 2D DP pattern for string matching.",
      "dp[i][j] depends on previous states.",
      "Handle '*' specially (0 or more).",
      "Time is O(m*n).",
    ],
    dataStructure: [
      "Use a 2D DP table.",
      "No other complex structure is needed.",
      "Input is two strings.",
      "Output is a boolean.",
    ],
    algorithm: [
      "Create dp[m+1][n+1], dp[0][0]=true.",
      "Initialize dp[0][j] for patterns like 'a*', 'a*b*', etc.",
      "For i from 1 to m:",
      "  For j from 1 to n:",
      "    If p[j-1] == '*':",
      "      dp[i][j] = dp[i][j-2] (0 occ) OR (match and dp[i-1][j]).",
      "    Else if p[j-1] == '.' or p[j-1] == s[i-1]:",
      "      dp[i][j] = dp[i-1][j-1].",
      "Return dp[m][n].",
    ],
    pseudocode: [
      "m = s.length, n = p.length",
      "dp = (m+1)x(n+1) table, all false",
      "dp[0][0] = true",
      "",
      "for j from 1 to n:",
      "  if p[j-1] == '*':",
      "    dp[0][j] = dp[0][j-2]",
      "",
      "for i from 1 to m:",
      "  for j from 1 to n:",
      "    if p[j-1] == '*':",
      "      dp[i][j] = dp[i][j-2]",
      "      if p[j-2] == '.' or p[j-2] == s[i-1]:",
      "        dp[i][j] = dp[i][j] or dp[i-1][j]",
      "    else if p[j-1] == '.' or p[j-1] == s[i-1]:",
      "      dp[i][j] = dp[i-1][j-1]",
      "",
      "return dp[m][n]",
    ],
    edgeCases: [
      "Test with empty string and pattern.",
      "Test with pattern 'a*' on empty string.",
      "Test with '.*' on various strings.",
      "Test with no '*' in pattern.",
      "Ensure full match, not partial.",
    ],
    finalNudge: [
      "Use DP table for s and p.",
      "Handle '*' as 0 or more occurrences.",
      "Handle '.' as wildcard.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use 2D DP where dp[i][j] indicates if s[0..i) matches p[0..j). Handle '*' by considering 0 occurrences or 1+ occurrences. Handle '.' as matching any character.",
  }),

  solutionLogic: {
    approach:
      "Use 2D DP where dp[i][j] indicates if s[0..i) matches p[0..j). Handle '*' by considering 0 occurrences or 1+ occurrences. Handle '.' as matching any character.",

    steps: [
      "Create dp table, dp[0][0]=true.",
      "Initialize dp[0][j] for patterns with '*'.",
      "Fill table based on character matches and '*'.",
      "Return dp[m][n].",
    ],

    pseudocode: `m = s.length, n = p.length
dp = (m+1)x(n+1) table, all false
dp[0][0] = true

for j from 1 to n:
    if p[j-1] == '*':
        dp[0][j] = dp[0][j-2]

for i from 1 to m:
    for j from 1 to n:
        if p[j-1] == '*':
            dp[i][j] = dp[i][j-2]
            if p[j-2] == '.' or p[j-2] == s[i-1]:
                dp[i][j] = dp[i][j] or dp[i-1][j]
        else if p[j-1] == '.' or p[j-1] == s[i-1]:
            dp[i][j] = dp[i-1][j-1]

return dp[m][n]`,

    timeComplexity: "O(m * n)",
    spaceComplexity: "O(m * n) for DP table",

    commonMistakes: [
      "Not handling empty string correctly.",
      "Using wrong indices for '*' logic.",
      "Not initializing dp[0][j] properly.",
      "Checking partial match instead of full.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(s, p) {
  const m = s.length;
  const n = p.length;

  const dp = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(false)
  );

  dp[0][0] = true;

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
}`,

    python: `def solve(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True

    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 2]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == '*':
                dp[i][j] = dp[i][j - 2]
                if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
            elif p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]

    return dp[m][n]`,
  },

  starterCode: {
    javascript: `function solve(s, p) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(s, p):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(String s, String p) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(string s, string p) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q093 = {
  id: "hash-008",
  slug: "longest-consecutive-sequence",
  title: "Longest Consecutive Sequence",
  topic: "hashing",
  difficulty: "Hard",

  prompt:
    "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Solve it in O(n) time.",

  constraints: [
    "0 <= nums.length <= 100000",
    "-10^9 <= nums[i] <= 10^9",
  ],

  examples: [
    {
      input: "nums = [100,4,200,1,3,2]",
      output: "4",
      explanation: "The longest consecutive sequence is [1,2,3,4].",
    },
    {
      input: "nums = [0,3,7,2,5,8,4,6,0,1]",
      output: "9",
      explanation: "The longest consecutive sequence is [0,1,2,3,4,5,6,7,8].",
    },
  ],

  visibleTests: [
    { args: [[100, 4, 200, 1, 3, 2]], expected: 4 },
    { args: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[1]], expected: 1 },
  ],

  hiddenTests: [
    { args: [[1, 3, 5, 7, 9]], expected: 1 },
    { args: [[-1, -2, -3, -4]], expected: 4 },
    { args: [[0, -1, 1, 2, 3]], expected: 5 },
    { args: [[1, 2, 0, 1]], expected: 3 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What defines a consecutive sequence?",
      "Does the order in the array matter?",
      "Try the first example and identify consecutive numbers.",
      "Notice that you need O(n) time, so sorting is not allowed.",
      "Think about using a hash set.",
    ],
    example: [
      "For [100,4,200,1,3,2]:",
      "Consecutive: 1,2,3,4 → length 4.",
      "100 and 200 are isolated.",
      "For [0,3,7,2,5,8,4,6,0,1]:",
      "Consecutive: 0,1,2,3,4,5,6,7,8 → length 9.",
    ],
    simpleApproach: [
      "One method sorts the array and scans.",
      "This is O(n log n) and not allowed.",
      "A hash set approach can do it in O(n).",
      "Store all numbers in a set.",
      "For each number, if it is the start of a sequence, count length.",
    ],
    repeatedWork: [
      "Put all numbers in a set.",
      "For each num in nums:",
      "  If num-1 is not in set (num is start):",
      "    current = num, length = 1.",
      "    While current+1 in set: current++, length++.",
      "    Update maxLength.",
      "Each number is part of at most one sequence scan.",
    ],
    pattern: [
      "This is a hash set sequence detection pattern.",
      "Only start counting from sequence starts.",
      "A number is a start if num-1 is not in set.",
      "Time is O(n) because each number visited once.",
    ],
    dataStructure: [
      "Use a hash set for O(1) lookups.",
      "No other complex structure is needed.",
      "Input is an integer array.",
      "Output is an integer (max length).",
    ],
    algorithm: [
      "Create set from nums.",
      "maxLength = 0.",
      "For each num in nums:",
      "  If num-1 not in set:",
      "    current = num, length = 1.",
      "    While current+1 in set: current++, length++.",
      "    maxLength = max(maxLength, length).",
      "Return maxLength.",
    ],
    pseudocode: [
      "set = set(nums)",
      "maxLength = 0",
      "",
      "for num in nums:",
      "  if num-1 not in set:",
      "    current = num",
      "    length = 1",
      "    while current+1 in set:",
      "      current++",
      "      length++",
      "    maxLength = max(maxLength, length)",
      "",
      "return maxLength",
    ],
    edgeCases: [
      "Test with single element.",
      "Test with no consecutive numbers.",
      "Test with all consecutive.",
      "Test with duplicates.",
      "Ensure you only start from sequence starts.",
    ],
    finalNudge: [
      "Use a set for O(1) lookups.",
      "Only count from sequence starts (num-1 not in set).",
      "Extend while num+1 exists.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a hash set to store all numbers. For each number, if it is the start of a sequence (num-1 not in set), count how many consecutive numbers follow. Track the maximum length.",
  }),

  solutionLogic: {
    approach:
      "Use a hash set to store all numbers. For each number, if it is the start of a sequence (num-1 not in set), count how many consecutive numbers follow. Track the maximum length.",

    steps: [
      "Create set from nums.",
      "For each num:",
      "  If num-1 not in set:",
      "    Count consecutive numbers starting from num.",
      "    Update maxLength.",
      "Return maxLength.",
    ],

    pseudocode: `set = set(nums)
maxLength = 0

for num in nums:
    if num - 1 not in set:
        current = num
        length = 1
        while current + 1 in set:
            current += 1
            length += 1
        maxLength = max(maxLength, length)

return maxLength`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for the set",

    commonMistakes: [
      "Counting from every number instead of starts.",
      "Not handling duplicates.",
      "Using sorting (O(n log n)).",
      "Not updating maxLength correctly.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const set = new Set(nums);
  let maxLength = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}`,

    python: `def solve(nums):
    num_set = set(nums)
    max_length = 0

    for num in nums:
        if num - 1 not in num_set:
            current = num
            length = 1

            while current + 1 in num_set:
                current += 1
                length += 1

            max_length = max(max_length, length)

    return max_length`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q094 = {
  id: "tp-008",
  slug: "minimum-size-subarray-sum",
  title: "Minimum Size Subarray Sum",
  topic: "two-pointers",
  difficulty: "Hard",

  prompt:
    "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.",

  constraints: [
    "1 <= target <= 10^9",
    "1 <= nums.length <= 100000",
    "1 <= nums[i] <= 10^9",
  ],

  examples: [
    {
      input: "target = 7, nums = [2,3,1,2,4,3]",
      output: "2",
      explanation: "The subarray [4,3] has sum 7 and minimal length.",
    },
    {
      input: "target = 15, nums = [1,2,3,4,5]",
      output: "5",
      explanation: "The entire array sums to 15.",
    },
    {
      input: "target = 100, nums = [1,2,3]",
      output: "0",
      explanation: "No subarray sums to at least 100.",
    },
  ],

  visibleTests: [
    { args: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
    { args: [15, [1, 2, 3, 4, 5]], expected: 5 },
    { args: [100, [1, 2, 3]], expected: 0 },
    { args: [7, [2, 3, 1, 1, 1, 1, 1]], expected: 2 },
  ],

  hiddenTests: [
    { args: [7, [1, 1, 1, 1, 10]], expected: 1 },
    { args: [3, [1, 1, 1]], expected: 3 },
    { args: [10, [1, 2, 3, 4, 5]], expected: 4 },
    { args: [213982, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: 0 },
  ],

  hints: createProgressiveHints({
    understand: [
      "What sum condition must the subarray satisfy?",
      "Are you minimizing length or sum?",
      "Try the first example and find subarrays with sum >= 7.",
      "Notice that all numbers are positive.",
      "Think about using a sliding window.",
    ],
    example: [
      "For target=7, nums=[2,3,1,2,4,3]:",
      "Subarray [4,3] sums to 7, length 2.",
      "Subarray [2,3,1,2] sums to 8, length 4.",
      "Minimal length is 2.",
    ],
    simpleApproach: [
      "One method checks all subarrays.",
      "This is O(n^2) and too slow.",
      "A sliding window can do it in O(n).",
      "Expand right until sum >= target.",
      "Then shrink left to minimize length.",
    ],
    repeatedWork: [
      "Maintain window [left, right] with current sum.",
      "Expand right, adding nums[right].",
      "While sum >= target:",
      "  Update minLength.",
      "  Shrink left, subtract nums[left].",
      "Track minimal valid window length.",
    ],
    pattern: [
      "This is a sliding window with sum constraint pattern.",
      "Expand until condition met.",
      "Shrink to minimize while condition holds.",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the input array.",
      "Use two indices: left and right.",
      "Use a variable for current sum.",
      "Input is target and integer array.",
      "Output is minimal length or 0.",
    ],
    algorithm: [
      "Set left = 0, sum = 0, minLength = infinity.",
      "For right from 0 to n-1:",
      "  sum += nums[right].",
      "  While sum >= target:",
      "    minLength = min(minLength, right - left + 1).",
      "    sum -= nums[left], left++.",
      "Return minLength (or 0 if still infinity).",
    ],
    pseudocode: [
      "left = 0, sum = 0, minLength = infinity",
      "",
      "for right from 0 to n-1:",
      "  sum += nums[right]",
      "  while sum >= target:",
      "    minLength = min(minLength, right - left + 1)",
      "    sum -= nums[left]",
      "    left++",
      "",
      "return minLength if minLength != infinity else 0",
    ],
    edgeCases: [
      "Test when no subarray meets target.",
      "Test when entire array is needed.",
      "Test when single element meets target.",
      "Test with large target.",
      "Ensure you return 0 if no valid subarray.",
    ],
    finalNudge: [
      "Use sliding window with left and right.",
      "Expand until sum >= target.",
      "Shrink to minimize length.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use a sliding window. Expand right until sum >= target, then shrink left to minimize length while sum remains >= target. Track the minimal valid window length.",
  }),

  solutionLogic: {
    approach:
      "Use a sliding window. Expand right until sum >= target, then shrink left to minimize length while sum remains >= target. Track the minimal valid window length.",

    steps: [
      "Initialize left = 0, sum = 0, minLength = infinity.",
      "For right from 0 to n-1:",
      "  Add nums[right] to sum.",
      "  While sum >= target:",
      "    Update minLength.",
      "    Subtract nums[left], left++.",
      "Return minLength or 0.",
    ],

    pseudocode: `left = 0
sum = 0
minLength = infinity

for right from 0 to n-1:
    sum += nums[right]
    while sum >= target:
        minLength = min(minLength, right - left + 1)
        sum -= nums[left]
        left++

return minLength if minLength != infinity else 0`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not shrinking window when sum >= target.",
      "Using wrong formula for length.",
      "Not returning 0 when no valid subarray.",
      "Using negative numbers (breaks logic).",
    ],
  },

  referenceSolution: {
    javascript: `function solve(target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}`,

    python: `def solve(target, nums):
    left = 0
    current_sum = 0
    min_length = float('inf')

    for right in range(len(nums)):
        current_sum += nums[right]

        while current_sum >= target:
            min_length = min(min_length, right - left + 1)
            current_sum -= nums[left]
            left += 1

    return min_length if min_length != float('inf') else 0`,
  },

  starterCode: {
    javascript: `function solve(target, nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(target, nums):
    # Write your Python solution here.
    pass`,
    java: `public static int solve(int target, int[] nums) {
  // Write your Java solution here.
  return 0;
}`,
    cpp: `int solve(int target, vector<int> nums) {
  // Write your C++ solution here.
  return 0;
}`,
  },
};


const Q095 = {
  id: "bs-008",
  slug: "find-first-and-last-position",
  title: "Find First and Last Position of Element in Sorted Array",
  topic: "binary-search",
  difficulty: "Hard",

  prompt:
    "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found, return [-1, -1].",

  constraints: [
    "0 <= nums.length <= 100000",
    "-10^9 <= nums[i], target <= 10^9",
    "nums is sorted in non-decreasing order.",
  ],

  examples: [
    {
      input: "nums = [5,7,7,8,8,10], target = 8",
      output: "[3,4]",
      explanation: "8 appears at indices 3 and 4.",
    },
    {
      input: "nums = [5,7,7,8,8,10], target = 6",
      output: "[-1,-1]",
      explanation: "6 is not in the array.",
    },
    {
      input: "nums = [], target = 0",
      output: "[-1,-1]",
      explanation: "Empty array.",
    },
  ],

  visibleTests: [
    { args: [[5, 7, 7, 8, 8, 10], 8], expected: [3, 4] },
    { args: [[5, 7, 7, 8, 8, 10], 6], expected: [-1, -1] },
    { args: [[], 0], expected: [-1, -1] },
    { args: [[2, 2], 2], expected: [0, 1] },
  ],

  hiddenTests: [
    { args: [[1, 2, 2, 2, 3], 2], expected: [1, 3] },
    { args: [[1, 1, 1, 1], 1], expected: [0, 3] },
    { args: [[1, 3, 5], 5], expected: [2, 2] },
    { args: [[1, 3, 3, 3, 5, 7], 3], expected: [1, 3] },
  ],

  hints: createProgressiveHints({
    understand: [
      "What are you asked to find?",
      "Is the array sorted?",
      "Try the first example and locate all occurrences.",
      "Notice that you need first and last index.",
      "Think about modified binary search.",
    ],
    example: [
      "For [5,7,7,8,8,10], target=8:",
      "First occurrence at index 3.",
      "Last occurrence at index 4.",
      "Result: [3,4].",
    ],
    simpleApproach: [
      "One method does linear scan.",
      "This is O(n) and ignores sorted property.",
      "Two binary searches can do it in O(log n).",
      "One to find first occurrence, one for last.",
      "Modify binary search to continue searching.",
    ],
    repeatedWork: [
      "For first occurrence:",
      "  Binary search; when found, search left half.",
      "For last occurrence:",
      "  Binary search; when found, search right half.",
      "If not found, return -1.",
    ],
    pattern: [
      "This is a binary search for boundaries pattern.",
      "Find first: on match, search left.",
      "Find last: on match, search right.",
      "Time is O(log n).",
    ],
    dataStructure: [
      "Use the input array.",
      "Use two indices: low and high.",
      "No other complex structure is needed.",
      "Input is sorted array and target.",
      "Output is [first, last] or [-1,-1].",
    ],
    algorithm: [
      "Define binarySearch(findFirst):",
      "  low=0, high=n-1, result=-1.",
      "  While low <= high:",
      "    mid = (low+high)/2.",
      "    If nums[mid] == target:",
      "      result = mid.",
      "      If findFirst: high = mid-1.",
      "      Else: low = mid+1.",
      "    Else if nums[mid] < target: low = mid+1.",
      "    Else: high = mid-1.",
      "  Return result.",
      "Return [binarySearch(true), binarySearch(false)].",
    ],
    pseudocode: [
      "function binarySearch(findFirst):",
      "  low=0, high=n-1, result=-1",
      "  while low <= high:",
      "    mid = (low+high)//2",
      "    if nums[mid] == target:",
      "      result = mid",
      "      if findFirst: high = mid-1",
      "      else: low = mid+1",
      "    else if nums[mid] < target:",
      "      low = mid+1",
      "    else:",
      "      high = mid-1",
      "  return result",
      "",
      "return [binarySearch(true), binarySearch(false)]",
    ],
    edgeCases: [
      "Test with empty array.",
      "Test with target not present.",
      "Test with all elements equal to target.",
      "Test with single occurrence.",
      "Ensure you handle boundaries correctly.",
    ],
    finalNudge: [
      "Use two binary searches.",
      "For first, on match search left.",
      "For last, on match search right.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Perform two binary searches. For first occurrence, when target is found, continue searching left half. For last occurrence, continue searching right half. Return [first, last] or [-1,-1].",
  }),

  solutionLogic: {
    approach:
      "Perform two binary searches. For first occurrence, when target is found, continue searching left half. For last occurrence, continue searching right half. Return [first, last] or [-1,-1].",

    steps: [
      "Define binarySearch(findFirst).",
      "Binary search; on match, store result.",
      "If findFirst: search left; else search right.",
      "Return result.",
      "Return [first, last].",
    ],

    pseudocode: `function binarySearch(findFirst):
    low = 0, high = n - 1, result = -1
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            result = mid
            if findFirst:
                high = mid - 1
            else:
                low = mid + 1
        else if nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return result

return [binarySearch(true), binarySearch(false)]`,

    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",

    commonMistakes: [
      "Not continuing search after finding target.",
      "Using wrong update for low/high.",
      "Not handling not-found case.",
      "Returning wrong indices.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums, target) {
  function binarySearch(findFirst) {
    let low = 0;
    let high = nums.length - 1;
    let result = -1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        result = mid;
        if (findFirst) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return result;
  }

  return [binarySearch(true), binarySearch(false)];
}`,

    python: `def solve(nums, target):
    def binary_search(find_first):
        low, high = 0, len(nums) - 1
        result = -1

        while low <= high:
            mid = (low + high) // 2

            if nums[mid] == target:
                result = mid
                if find_first:
                    high = mid - 1
                else:
                    low = mid + 1
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1

        return result

    return [binary_search(True), binary_search(False)]`,
  },

  starterCode: {
    javascript: `function solve(nums, target) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums, target):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] nums, int target) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> nums, int target) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q096 = {
  id: "ll-008",
  slug: "add-two-numbers",
  title: "Add Two Numbers",
  topic: "linked-lists",
  difficulty: "Hard",

  prompt:
    "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",

  constraints: [
    "The number of nodes in each linked list is in the range [1, 100].",
    "0 <= node.val <= 9",
    "It is guaranteed that the list represents a number that does not have leading zeros.",
  ],

  examples: [
    {
      input: "l1 = [2,4,3], l2 = [5,6,4]",
      output: "[7,0,8]",
      explanation: "342 + 465 = 807, stored as [7,0,8].",
    },
    {
      input: "l1 = [0], l2 = [0]",
      output: "[0]",
      explanation: "0 + 0 = 0.",
    },
    {
      input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
      output: "[8,9,9,9,0,0,0,1]",
      explanation: "9999999 + 9999 = 10009998.",
    },
  ],

  visibleTests: [
    { args: [[2, 4, 3], [5, 6, 4]], expected: [7, 0, 8] },
    { args: [[0], [0]], expected: [0] },
    { args: [[9, 9, 9], [9, 9, 9, 9]], expected: [8, 9, 9, 0, 1] },
    { args: [[1, 8], [0]], expected: [1, 8] },
  ],

  hiddenTests: [
    { args: [[5], [5]], expected: [0, 1] },
    { args: [[1, 2, 3], [4, 5, 6]], expected: [5, 7, 9] },
    { args: [[9, 9], [1]], expected: [0, 0, 1] },
    { args: [[1], [9, 9]], expected: [0, 0, 1] },
  ],

  hints: createProgressiveHints({
    understand: [
      "How are the numbers represented?",
      "Are digits in normal or reverse order?",
      "Try the first example and add manually.",
      "Notice that addition is done digit by digit with carry.",
      "Think about simulating manual addition.",
    ],
    example: [
      "For l1=[2,4,3], l2=[5,6,4]:",
      "Numbers: 342 and 465.",
      "Sum: 807 → [7,0,8].",
      "Add digit by digit from head.",
    ],
    simpleApproach: [
      "One method converts lists to numbers, adds, converts back.",
      "This can overflow for large numbers.",
      "Direct digit-by-digit addition is safer.",
      "Use a dummy head for result list.",
      "Track carry.",
    ],
    repeatedWork: [
      "Initialize dummy head, tail, carry=0.",
      "While l1 or l2 or carry:",
      "  sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry.",
      "  carry = sum / 10, digit = sum % 10.",
      "  tail.next = new Node(digit), tail = tail.next.",
      "  Move l1, l2 if not null.",
      "Return dummy.next.",
    ],
    pattern: [
      "This is a linked list arithmetic pattern.",
      "Process both lists in parallel.",
      "Handle different lengths and carry.",
      "Time is O(max(m,n)).",
    ],
    dataStructure: [
      "Use the input linked lists.",
      "Use a dummy head for result.",
      "No other complex structure is needed.",
      "Input is two linked lists.",
      "Output is a linked list.",
    ],
    algorithm: [
      "dummy = new Node(0), tail = dummy, carry = 0.",
      "While l1 or l2 or carry:",
      "  sum = (l1?l1.val:0) + (l2?l2.val:0) + carry.",
      "  carry = sum / 10, digit = sum % 10.",
      "  tail.next = new Node(digit), tail = tail.next.",
      "  l1 = l1?.next, l2 = l2?.next.",
      "Return dummy.next.",
    ],
    pseudocode: [
      "dummy = new Node(0)",
      "tail = dummy",
      "carry = 0",
      "",
      "while l1 != null or l2 != null or carry != 0:",
      "  sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry",
      "  carry = sum / 10",
      "  digit = sum % 10",
      "  tail.next = new Node(digit)",
      "  tail = tail.next",
      "  l1 = l1 ? l1.next : null",
      "  l2 = l2 ? l2.next : null",
      "",
      "return dummy.next",
    ],
    edgeCases: [
      "Test with single-digit lists.",
      "Test with different lengths.",
      "Test with carry at the end.",
      "Test with one list being [0].",
      "Ensure you handle final carry.",
    ],
    finalNudge: [
      "Add digit by digit with carry.",
      "Handle different lengths.",
      "Create new nodes for result.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Simulate manual addition. Iterate through both lists, adding corresponding digits and carry. Create new nodes for each digit of the sum. Handle different lengths and final carry.",
  }),

  solutionLogic: {
    approach:
      "Simulate manual addition. Iterate through both lists, adding corresponding digits and carry. Create new nodes for each digit of the sum. Handle different lengths and final carry.",

    steps: [
      "Initialize dummy, tail, carry=0.",
      "While l1 or l2 or carry:",
      "  Compute sum of digits and carry.",
      "  New digit = sum % 10, carry = sum / 10.",
      "  Append new node, move pointers.",
      "Return dummy.next.",
    ],

    pseudocode: `dummy = new Node(0)
tail = dummy
carry = 0

while l1 != null or l2 != null or carry != 0:
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = sum / 10
    digit = sum % 10
    tail.next = new Node(digit)
    tail = tail.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null

return dummy.next`,

    timeComplexity: "O(max(m, n))",
    spaceComplexity: "O(max(m, n)) for result list",

    commonMistakes: [
      "Forgetting final carry.",
      "Not handling different lengths.",
      "Using wrong carry/digit calculation.",
      "Not using dummy head.",
    ],
  },

  referenceSolution: {
    javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function solve(l1, l2) {
  const dummy = new ListNode(0);
  let tail = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    tail.next = new ListNode(digit);
    tail = tail.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}`,

    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(l1, l2):
    dummy = ListNode(0)
    tail = dummy
    carry = 0

    while l1 or l2 or carry:
        s = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
        carry = s // 10
        digit = s % 10

        tail.next = ListNode(digit)
        tail = tail.next

        if l1: l1 = l1.next
        if l2: l2 = l2.next

    return dummy.next`,
  },

  starterCode: {
    javascript: `function solve(l1, l2) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(l1, l2):
    # Write your Python solution here.
    pass`,
    java: `public static int[] solve(int[] l1, int[] l2) {
  // Write your Java solution here.
  return new int[]{};
}`,
    cpp: `vector<int> solve(vector<int> l1, vector<int> l2) {
  // Write your C++ solution here.
  return vector<int>{};
}`,
  },
};


const Q097 = {
  id: "sq-008",
  slug: "min-stack",
  title: "Min Stack",
  topic: "stacks-queues",
  difficulty: "Hard",

  prompt:
    "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class:\n- MinStack() initializes the stack.\n- void push(int val) pushes the element val onto the stack.\n- void pop() removes the element on the top of the stack.\n- int top() gets the top element of the stack.\n- int getMin() retrieves the minimum element in the stack.",

  constraints: [
    "Calls to push, pop, top, getMin are within valid ranges.",
    "No pop or top on empty stack.",
  ],

  examples: [
    {
      input: "Operations: push(-2), push(0), push(-3), getMin, pop, top, getMin",
      output: "[null,null,null,null,-3,null,0,-2]",
      explanation:
        "Stack: [-2], [-2,0], [-2,0,-3]; min=-3; pop → [-2,0]; top=0; min=-2.",
    },
  ],

  visibleTests: [
    {
      args: [["push", "push", "push", "getMin", "pop", "top", "getMin"], [[-2], [0], [-3], [], [], [], []]],
      expected: [null, null, null, -3, null, 0, -2],
    },
    {
      args: [["push", "getMin", "pop"], [[1], [], []]],
      expected: [null, 1, null],
    },
  ],

  hiddenTests: [
    {
      args: [["push", "push", "getMin", "pop", "getMin"], [[1], [2], [], [], []]],
      expected: [null, null, 1, null, 1],
    },
    {
      args: [["push", "push", "push", "getMin", "pop", "getMin"], [[3], [1], [2], [], [], []]],
      expected: [null, null, null, 1, null, 1],
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What operations must your stack support?",
      "Which operation is non-standard for a stack?",
      "Try the example and track minimums manually.",
      "Notice that getMin must be O(1).",
      "Think about storing extra information.",
    ],
    example: [
      "Push -2, 0, -3: stack = [-2,0,-3].",
      "getMin = -3.",
      "Pop: stack = [-2,0].",
      "top = 0, getMin = -2.",
    ],
    simpleApproach: [
      "One method uses a single stack and scans for min.",
      "This makes getMin O(n).",
      "Using an auxiliary stack can make getMin O(1).",
      "Store (value, currentMin) pairs.",
      "Or use a separate min stack.",
    ],
    repeatedWork: [
      "Use two stacks: main and minStack.",
      "push(val): push to main; push min(val, minStack.top) to minStack.",
      "pop(): pop from both.",
      "top(): main.top.",
      "getMin(): minStack.top.",
    ],
    pattern: [
      "This is an auxiliary stack pattern.",
      "minStack tracks minimum at each level.",
      "All operations are O(1).",
      "Space is O(n).",
    ],
    dataStructure: [
      "Use two stacks (arrays).",
      "No other complex structure is needed.",
      "Input is sequence of operations.",
      "Output is sequence of results.",
    ],
    algorithm: [
      "Initialize main = [], minStack = [].",
      "push(val): main.push(val); minStack.push(min(val, minStack.top or val)).",
      "pop(): main.pop(), minStack.pop().",
      "top(): return main[top].",
      "getMin(): return minStack[top].",
    ],
    pseudocode: [
      "main = [], minStack = []",
      "",
      "function push(val):",
      "  main.push(val)",
      "  if minStack empty:",
      "    minStack.push(val)",
      "  else:",
      "    minStack.push(min(val, minStack.top))",
      "",
      "function pop():",
      "  main.pop()",
      "  minStack.pop()",
      "",
      "function top():",
      "  return main.top",
      "",
      "function getMin():",
      "  return minStack.top",
    ],
    edgeCases: [
      "Test with single element.",
      "Test with all same elements.",
      "Test with decreasing then increasing.",
      "Ensure getMin is always correct after pop.",
      "Handle first push correctly.",
    ],
    finalNudge: [
      "Use two stacks: one for values, one for minimums.",
      "Push min(val, currentMin) to minStack.",
      "Pop from both stacks.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use two stacks. main stores values, minStack stores the minimum at each level. On push, push val to main and min(val, minStack.top) to minStack. On pop, pop from both. getMin is minStack.top.",
  }),

  solutionLogic: {
    approach:
      "Use two stacks. main stores values, minStack stores the minimum at each level. On push, push val to main and min(val, minStack.top) to minStack. On pop, pop from both. getMin is minStack.top.",

    steps: [
      "Initialize main and minStack.",
      "push: main.push(val), minStack.push(min(val, minStack.top)).",
      "pop: main.pop(), minStack.pop().",
      "top: main.top.",
      "getMin: minStack.top.",
    ],

    pseudocode: `main = []
minStack = []

function push(val):
    main.push(val)
    if minStack empty:
        minStack.push(val)
    else:
        minStack.push(min(val, minStack.top))

function pop():
    main.pop()
    minStack.pop()

function top():
    return main.top

function getMin():
    return minStack.top`,

    timeComplexity: "O(1) for all operations",
    spaceComplexity: "O(n) for two stacks",

    commonMistakes: [
      "Not pushing to minStack on every push.",
      "Using wrong min comparison.",
      "Popping from only one stack.",
      "Not handling first push.",
    ],
  },

  referenceSolution: {
    javascript: `class MinStack {
  constructor() {
    this.main = [];
    this.minStack = [];
  }

  push(val) {
    this.main.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    }
  }

  pop() {
    this.main.pop();
    this.minStack.pop();
  }

  top() {
    return this.main[this.main.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

function solve(operations, values) {
  const stack = new MinStack();
  const result = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    if (op === 'push') {
      stack.push(values[i][0]);
      result.push(null);
    } else if (op === 'pop') {
      stack.pop();
      result.push(null);
    } else if (op === 'top') {
      result.push(stack.top());
    } else if (op === 'getMin') {
      result.push(stack.getMin());
    }
  }

  return result;
}`,

    python: `class MinStack:
    def __init__(self):
        self.main = []
        self.min_stack = []

    def push(self, val):
        self.main.append(val)
        if not self.min_stack:
            self.min_stack.append(val)
        else:
            self.min_stack.append(min(val, self.min_stack[-1]))

    def pop(self):
        self.main.pop()
        self.min_stack.pop()

    def top(self):
        return self.main[-1]

    def getMin(self):
        return self.min_stack[-1]

def solve(operations, values):
    stack = MinStack()
    result = []

    for op, val in zip(operations, values):
        if op == 'push':
            stack.push(val[0])
            result.append(None)
        elif op == 'pop':
            stack.pop()
            result.append(None)
        elif op == 'top':
            result.append(stack.top())
        elif op == 'getMin':
            result.append(stack.getMin())

    return result`,
  },

  starterCode: {
    javascript: `function solve(operations, values) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(operations, values):
    # Write your Python solution here.
    pass`,
    java: `public static Integer[] solve(String[] operations, int[][] values) {
  // Write your Java solution here.
  return new Integer[]{};
}`,
    cpp: `vector<optional<int>> solve(vector<string> operations, vector<vector<int>> values) {
  // Write your C++ solution here.
  return vector<optional<int>>{};
}`,
  },
};


const Q098 = {
  id: "rec-007",
  slug: "permutations",
  title: "Permutations",
  topic: "recursion",
  difficulty: "Hard",

  prompt:
    "Given an array nums of distinct integers, return all possible permutations. You may return the answer in any order.",

  constraints: [
    "1 <= nums.length <= 6",
    "-10 <= nums[i] <= 10",
    "All integers in nums are unique.",
  ],

  examples: [
    {
      input: "nums = [1,2,3]",
      output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      explanation: "All possible orderings.",
    },
    {
      input: "nums = [0,1]",
      output: "[[0,1],[1,0]]",
      explanation: "Two permutations.",
    },
    {
      input: "nums = [1]",
      output: "[[1]]",
      explanation: "Only one permutation.",
    },
  ],

  visibleTests: [
    { args: [[1, 2, 3]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
    { args: [[0, 1]], expected: [[0, 1], [1, 0]] },
    { args: [[1]], expected: [[1]] },
    { args: [[1, 2]], expected: [[1, 2], [2, 1]] },
  ],

  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: "24 permutations" },
    { args: [[-1, 0, 1]], expected: "6 permutations" },
    { args: [[5, 10, 15]], expected: "6 permutations" },
    { args: [[1, 3, 5, 7]], expected: "24 permutations" },
  ],

  hints: createProgressiveHints({
    understand: [
      "What is a permutation?",
      "Are you returning all orderings or just some?",
      "Try the first example and list all permutations.",
      "Notice that each element appears exactly once in each permutation.",
      "Think about backtracking.",
    ],
    example: [
      "For [1,2,3]:",
      "Permutations: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].",
      "Total 3! = 6.",
    ],
    simpleApproach: [
      "One method uses recursion with swapping.",
      "Another uses backtracking with a used array.",
      "Both are O(n * n!).",
      "Backtracking builds permutations element by element.",
      "Track which elements are used.",
    ],
    repeatedWork: [
      "Start with empty current permutation.",
      "For each unused element:",
      "  Add to current, mark used.",
      "  Recurse.",
      "  Backtrack: remove, mark unused.",
      "When current length == n, add to result.",
    ],
    pattern: [
      "This is a backtracking with used-tracking pattern.",
      "State: current permutation, used set/array.",
      "Base case: length == n, add to result.",
      "Recursive: try each unused element.",
      "Collect all permutations.",
    ],
    dataStructure: [
      "Use an array for current permutation.",
      "Use a boolean array or set for used.",
      "Use an array to store results.",
      "Input is an integer array.",
      "Output is array of arrays.",
    ],
    algorithm: [
      "Create result = [], used = [false]*n, current = [].",
      "Define backtrack():",
      "  If current.length == n: result.push(copy of current).",
      "  For i from 0 to n-1:",
      "    If not used[i]:",
      "      used[i] = true, current.push(nums[i]).",
      "      backtrack().",
      "      current.pop(), used[i] = false.",
      "Call backtrack().",
      "Return result.",
    ],
    pseudocode: [
      "result = [], used = [false]*n, current = []",
      "",
      "function backtrack():",
      "  if current.length == n:",
      "    result.push(copy of current)",
      "    return",
      "  for i from 0 to n-1:",
      "    if not used[i]:",
      "      used[i] = true",
      "      current.push(nums[i])",
      "      backtrack()",
      "      current.pop()",
      "      used[i] = false",
      "",
      "backtrack()",
      "return result",
    ],
    edgeCases: [
      "Test with single element.",
      "Test with two elements.",
      "Test with negative numbers.",
      "Ensure all permutations are unique.",
      "Check that each permutation has length n.",
    ],
    finalNudge: [
      "Use backtracking with used array.",
      "Add element, recurse, backtrack.",
      "When length == n, add to result.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use backtracking. For each position, try each unused element. Mark used, recurse, then backtrack. When permutation is complete (length n), add to result.",
  }),

  solutionLogic: {
    approach:
      "Use backtracking. For each position, try each unused element. Mark used, recurse, then backtrack. When permutation is complete (length n), add to result.",

    steps: [
      "Initialize result, used, current.",
      "Define backtrack().",
      "If current.length == n: add copy.",
      "For each unused i:",
      "  Mark used, add to current, recurse.",
      "  Backtrack: remove, unmark.",
      "Return result.",
    ],

    pseudocode: `result = []
used = [false] * n
current = []

function backtrack():
    if current.length == n:
        result.push(copy of current)
        return
    for i from 0 to n-1:
        if not used[i]:
            used[i] = true
            current.push(nums[i])
            backtrack()
            current.pop()
            used[i] = false

backtrack()
return result`,

    timeComplexity: "O(n * n!)",
    spaceComplexity: "O(n) for recursion and used array",

    commonMistakes: [
      "Not copying current before adding.",
      "Forgetting to unmark used.",
      "Generating duplicates.",
      "Not handling single element.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(nums) {
  const result = [];
  const n = nums.length;
  const used = new Array(n).fill(false);
  const current = [];

  function backtrack() {
    if (current.length === n) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        current.push(nums[i]);
        backtrack();
        current.pop();
        used[i] = false;
      }
    }
  }

  backtrack();
  return result;
}`,

    python: `def solve(nums):
    result = []
    n = len(nums)
    used = [False] * n
    current = []

    def backtrack():
        if len(current) == n:
            result.append(current[:])
            return

        for i in range(n):
            if not used[i]:
                used[i] = True
                current.append(nums[i])
                backtrack()
                current.pop()
                used[i] = False

    backtrack()
    return result`,
  },

  starterCode: {
    javascript: `function solve(nums) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(nums):
    # Write your Python solution here.
    pass`,
    java: `public static int[][] solve(int[] nums) {
  // Write your Java solution here.
  return new int[][]{};
}`,
    cpp: `vector<vector<int>> solve(vector<int> nums) {
  // Write your C++ solution here.
  return vector<vector<int>>{};
}`,
  },
};


const Q099 = {
  id: "tree-008",
  slug: "validate-binary-search-tree",
  title: "Validate Binary Search Tree",
  topic: "trees",
  difficulty: "Hard",

  prompt:
    "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys less than the node's key.\n- The right subtree of a node contains only nodes with keys greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.",

  constraints: [
    "The number of nodes in the tree is in the range [1, 10000].",
    "-2^31 <= node.val <= 2^31 - 1",
  ],

  examples: [
    {
      input: "root = [2,1,3]",
      output: "true",
      explanation: "2 with left 1 and right 3 is a valid BST.",
    },
    {
      input: "root = [5,1,4,null,null,3,6]",
      output: "false",
      explanation: "Root is 5, but right child is 4 (invalid).",
    },
  ],

  visibleTests: [
    { args: [[2, 1, 3]], expected: true },
    { args: [[5, 1, 4, null, null, 3, 6]], expected: false },
    { args: [[1]], expected: true },
    { args: [[5, 4, 6, null, null, 3, 7]], expected: false },
  ],

  hiddenTests: [
    { args: [[10, 5, 15, null, null, 6, 20]], expected: false },
    { args: [[2147483647]], expected: true },
    { args: [[-2147483648, null, 2147483647]], expected: true },
    { args: [[0, null, 1]], expected: true },
  ],

  hints: createProgressiveHints({
    understand: [
      "What are the BST properties?",
      "Is it enough to check only direct children?",
      "Try the first example and verify BST rules.",
      "Notice that all left descendants must be less, not just children.",
      "Think about passing valid ranges down.",
    ],
    example: [
      "For [2,1,3]:",
      "Root 2: left 1 < 2, right 3 > 2 → valid.",
      "For [5,1,4,null,null,3,6]:",
      "Root 5: right child 4 < 5 → invalid.",
    ],
    simpleApproach: [
      "One method does in-order traversal and checks sorted order.",
      "Another uses range validation recursively.",
      "Both are O(n).",
      "Range method: each node must be in (min, max).",
      "Left child: (min, node.val), right: (node.val, max).",
    ],
    repeatedWork: [
      "Define isValid(node, min, max):",
      "  If node null: return true.",
      "  If node.val <= min or node.val >= max: return false.",
      "  Return isValid(left, min, node.val) AND isValid(right, node.val, max).",
      "Call isValid(root, -inf, +inf).",
    ],
    pattern: [
      "This is a tree recursion with range pattern.",
      "Each node has a valid (min, max) range.",
      "Left subtree: (min, node.val).",
      "Right subtree: (node.val, max).",
      "Time is O(n).",
    ],
    dataStructure: [
      "Use the tree structure.",
      "No extra data structure is needed.",
      "Input is a tree root.",
      "Output is a boolean.",
      "Recursion handles traversal.",
    ],
    algorithm: [
      "Define isValid(node, min, max):",
      "  If node null: return true.",
      "  If node.val <= min or >= max: return false.",
      "  Return isValid(left, min, node.val) AND isValid(right, node.val, max).",
      "Call isValid(root, -inf, +inf).",
    ],
    pseudocode: [
      "function isValid(node, min, max):",
      "  if node == null: return true",
      "  if node.val <= min or node.val >= max: return false",
      "  return isValid(node.left, min, node.val) and",
      "         isValid(node.right, node.val, max)",
      "",
      "return isValid(root, -infinity, +infinity)",
    ],
    edgeCases: [
      "Test with single node.",
      "Test with all left or all right.",
      "Test with values at integer limits.",
      "Test with invalid deeper descendants.",
      "Ensure you use strict inequalities.",
    ],
    finalNudge: [
      "Use recursion with min and max bounds.",
      "Left: (min, node.val), right: (node.val, max).",
      "Check bounds at each node.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Recursively validate each node within a (min, max) range. For left subtree, update max to node.val; for right, update min to node.val. If any node violates its range, return false.",
  }),

  solutionLogic: {
    approach:
      "Recursively validate each node within a (min, max) range. For left subtree, update max to node.val; for right, update min to node.val. If any node violates its range, return false.",

    steps: [
      "Define isValid(node, min, max).",
      "If node null: return true.",
      "If node.val out of (min, max): return false.",
      "Return isValid(left) AND isValid(right) with updated bounds.",
      "Call isValid(root, -inf, +inf).",
    ],

    pseudocode: `function isValid(node, min, max):
    if node == null:
        return true
    if node.val <= min or node.val >= max:
        return false
    return isValid(node.left, min, node.val) and
           isValid(node.right, node.val, max)

return isValid(root, -infinity, +infinity)`,

    timeComplexity: "O(n)",
    spaceComplexity: "O(h) for recursion stack",

    commonMistakes: [
      "Checking only direct children.",
      "Using <= or >= instead of strict inequalities.",
      "Not handling integer limits.",
      "Using in-order but not tracking previous correctly.",
    ],
  },

  referenceSolution: {
    javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solve(root) {
  function isValid(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      isValid(node.left, min, node.val) &&
      isValid(node.right, node.val, max)
    );
  }

  return isValid(root, -Infinity, Infinity);
}`,

    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(root):
    def is_valid(node, min_val, max_val):
        if not node:
            return True
        if node.val <= min_val or node.val >= max_val:
            return False
        return (is_valid(node.left, min_val, node.val) and
                is_valid(node.right, node.val, max_val))

    return is_valid(root, float('-inf'), float('inf'))`,
  },

  starterCode: {
    javascript: `function solve(root) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(root):
    # Write your Python solution here.
    pass`,
    java: `public static boolean solve(int[] root) {
  // Write your Java solution here.
  return false;
}`,
    cpp: `bool solve(vector<int> root) {
  // Write your C++ solution here.
  return false;
}`,
  },
};


const Q100 = {
  id: "graph-008",
  slug: "word-ladder-ii",
  title: "Word Ladder II",
  topic: "graphs",
  difficulty: "Hard",

  prompt:
    "Given a beginWord, an endWord, and a wordList, return all the shortest transformation sequences from beginWord to endWord, such that only one letter can be changed at a time and each transformed word must exist in the wordList. Each sequence should be returned as a list of words [beginWord, s1, s2, ..., endWord]. If there is no such sequence, return an empty list.",

  constraints: [
    "1 <= beginWord.length <= 10",
    "endWord.length == beginWord.length",
    "1 <= wordList.length <= 5000",
    "wordList[i].length == beginWord.length",
    "beginWord, endWord, and wordList[i] consist of lowercase English letters.",
    "beginWord != endWord",
    "All the words in wordList are unique.",
  ],

  examples: [
    {
      input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
      output: "[['hit','hot','dot','dog','cog'],['hit','hot','lot','log','cog']]",
      explanation: "Two shortest sequences of length 5.",
    },
    {
      input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
      output: "[]",
      explanation: "'cog' not in wordList, no sequence.",
    },
  ],

  visibleTests: [
    {
      args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]],
      expected: [["hit", "hot", "dot", "dog", "cog"], ["hit", "hot", "lot", "log", "cog"]],
    },
    {
      args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]],
      expected: [],
    },
    {
      args: ["a", "c", ["a", "b", "c"]],
      expected: [["a", "b", "c"]],
    },
    {
      args: ["hot", "dog", ["hot", "hog", "dog"]],
      expected: [["hot", "hog", "dog"]],
    },
  ],

  hiddenTests: [
    {
      args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog", "hog"]],
      expected: [["hit", "hot", "hog", "dog", "cog"], ["hit", "hot", "dot", "dog", "cog"], ["hit", "hot", "lot", "log", "cog"]],
    },
    {
      args: ["red", "tax", ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"]],
      expected: [["red", "ted", "tad", "tax"], ["red", "ted", "tex", "tax"], ["red", "rex", "tex", "tax"]],
    },
    {
      args: ["nape", "mild", ["nape", "napd", "napl", "mald", "mild"]],
      expected: [["nape", "napl", "mald", "mild"]],
    },
    {
      args: ["abc", "def", ["abc", "dbc", "dec", "def"]],
      expected: [["abc", "dbc", "dec", "def"]],
    },
  ],

  hints: createProgressiveHints({
    understand: [
      "What does it mean to transform one word to another?",
      "Are you returning one sequence or all shortest sequences?",
      "Try the first example and trace possible paths.",
      "Notice that you need all shortest paths, not just one.",
      "Think about BFS to find shortest length, then DFS to reconstruct.",
    ],
    example: [
      "For begin='hit', end='cog', list=['hot','dot','dog','lot','log','cog']:",
      "Shortest length is 5.",
      "Two sequences: hit→hot→dot→dog→cog and hit→hot→lot→log→cog.",
    ],
    simpleApproach: [
      "One method does BFS to find shortest length.",
      "Then DFS/backtracking to find all paths of that length.",
      "Alternatively, BFS while storing parent pointers.",
      "Both are complex but necessary for all shortest paths.",
    ],
    repeatedWork: [
      "Use BFS from beginWord to find distances to all words.",
      "If endWord not reached, return [].",
      "Then DFS from beginWord, only moving to words with distance+1.",
      "When endWord reached, add path to result.",
      "This ensures only shortest paths.",
    ],
    pattern: [
      "This is a BFS + DFS pattern for all shortest paths.",
      "BFS computes distances from beginWord.",
      "DFS reconstructs paths following distance+1.",
      "Time is O(n * m^2) where n=words, m=length.",
    ],
    dataStructure: [
      "Use a map for word → distance.",
      "Use adjacency via one-letter transformations.",
      "Use recursion for DFS.",
      "Input is strings and word list.",
      "Output is array of sequences.",
    ],
    algorithm: [
      "BFS: compute distance from beginWord to all reachable words.",
      "If endWord not in distance map, return [].",
      "DFS: from beginWord, move to neighbors with distance+1.",
      "When endWord reached, add path to result.",
      "Backtrack to explore other paths.",
    ],
    pseudocode: [
      "wordSet = set(wordList)",
      "if endWord not in wordSet: return []",
      "",
      "// BFS for distances",
      "dist = map, dist[beginWord] = 0",
      "queue = [beginWord]",
      "while queue not empty:",
      "  word = queue.pop()",
      "  for each one-letter transformation nextWord:",
      "    if nextWord in wordSet and nextWord not in dist:",
      "      dist[nextWord] = dist[word] + 1",
      "      queue.push(nextWord)",
      "",
      "// DFS for paths",
      "result = [], path = [beginWord]",
      "function dfs(word):",
      "  if word == endWord:",
      "    result.push(copy of path)",
      "    return",
      "  for each neighbor with dist[neighbor] == dist[word]+1:",
      "    path.push(neighbor)",
      "    dfs(neighbor)",
      "    path.pop()",
      "",
      "dfs(beginWord)",
      "return result",
    ],
    edgeCases: [
      "Test when endWord not in wordList.",
      "Test when beginWord equals endWord (though constraints say no).",
      "Test when no transformation sequence exists.",
      "Test with multiple shortest paths.",
      "Ensure you only follow shortest paths in DFS.",
    ],
    finalNudge: [
      "Use BFS to compute distances from beginWord.",
      "Use DFS to reconstruct all shortest paths.",
      "Only move to words with distance+1.",
      "Run your code on the visible examples before submitting.",
    ],
    solutionLogic:
      "Solution logic: Use BFS to compute shortest distances from beginWord to all reachable words. Then use DFS to reconstruct all paths that follow distance+1 at each step. This ensures only shortest paths are included.",
  }),

  solutionLogic: {
    approach:
      "Use BFS to compute shortest distances from beginWord to all reachable words. Then use DFS to reconstruct all paths that follow distance+1 at each step. This ensures only shortest paths are included.",

    steps: [
      "BFS: compute dist from beginWord.",
      "If endWord not reachable, return [].",
      "DFS: from beginWord, follow neighbors with dist+1.",
      "When endWord reached, add path.",
      "Backtrack to explore other paths.",
    ],

    pseudocode: `wordSet = set(wordList)
if endWord not in wordSet:
    return []

// BFS
dist = {beginWord: 0}
queue = [beginWord]
while queue:
    word = queue.pop()
    for each one-letter transform nextWord:
        if nextWord in wordSet and nextWord not in dist:
            dist[nextWord] = dist[word] + 1
            queue.push(nextWord)

if endWord not in dist:
    return []

// DFS
result = []
path = [beginWord]

function dfs(word):
    if word == endWord:
        result.push(copy of path)
        return
    for each neighbor with dist[neighbor] == dist[word]+1:
        path.push(neighbor)
        dfs(neighbor)
        path.pop()

dfs(beginWord)
return result`,

    timeComplexity: "O(n * m^2) where n=words, m=word length",
    spaceComplexity: "O(n * m) for dist map and paths",

    commonMistakes: [
      "Not checking endWord in wordList.",
      "Returning only one path instead of all.",
      "Not ensuring shortest paths in DFS.",
      "Generating neighbors inefficiently.",
    ],
  },

  referenceSolution: {
    javascript: `function solve(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];

  // BFS for distances
  const dist = new Map();
  dist.set(beginWord, 0);
  const queue = [beginWord];

  while (queue.length > 0) {
    const word = queue.shift();
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const ch = String.fromCharCode(c);
        if (ch === word[i]) continue;
        const nextWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (wordSet.has(nextWord) && !dist.has(nextWord)) {
          dist.set(nextWord, dist.get(word) + 1);
          queue.push(nextWord);
        }
      }
    }
  }

  if (!dist.has(endWord)) return [];

  // DFS for paths
  const result = [];
  const path = [beginWord];

  function dfs(word) {
    if (word === endWord) {
      result.push([...path]);
      return;
    }
    const d = dist.get(word);
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const ch = String.fromCharCode(c);
        if (ch === word[i]) continue;
        const nextWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (dist.get(nextWord) === d + 1) {
          path.push(nextWord);
          dfs(nextWord);
          path.pop();
        }
      }
    }
  }

  dfs(beginWord);
  return result;
}`,

    python: `from collections import deque

def solve(beginWord, endWord, wordList):
    word_set = set(wordList)
    if endWord not in word_set:
        return []

    # BFS for distances
    dist = {beginWord: 0}
    queue = deque([beginWord])

    while queue:
        word = queue.popleft()
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                if c == word[i]:
                    continue
                next_word = word[:i] + c + word[i+1:]
                if next_word in word_set and next_word not in dist:
                    dist[next_word] = dist[word] + 1
                    queue.append(next_word)

    if endWord not in dist:
        return []

    # DFS for paths
    result = []
    path = [beginWord]

    def dfs(word):
        if word == endWord:
            result.append(path[:])
            return
        d = dist[word]
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                if c == word[i]:
                    continue
                next_word = word[:i] + c + word[i+1:]
                if dist.get(next_word) == d + 1:
                    path.append(next_word)
                    dfs(next_word)
                    path.pop()

    dfs(beginWord)
    return result`,
  },

  starterCode: {
    javascript: `function solve(beginWord, endWord, wordList) {
  // Write your JavaScript solution here.
  return undefined;
}`,
    python: `def solve(beginWord, endWord, wordList):
    # Write your Python solution here.
    pass`,
    java: `public static String[][] solve(String beginWord, String endWord, String[] wordList) {
  // Write your Java solution here.
  return new String[][]{};
}`,
    cpp: `vector<vector<string>> solve(string beginWord, string endWord, vector<string> wordList) {
  // Write your C++ solution here.
  return vector<vector<string>>{};
}`,
  },
};

// ============================================================
// Canonical question bank export
// ============================================================
export const QUESTION_BANK = [
  Q001,
  Q002,
  Q003,
  Q004,
  Q005,
  Q006,
  Q007,
  Q008,
  Q009,
  Q010,
  Q011,
  Q012,
  Q013,
  Q014,
  Q015,
  Q016,
  Q017,
  Q018,
  Q019,
  Q020,
  Q021,
  Q022,
  Q023,
  Q024,
  Q025,
  Q026,
  Q027,
  Q028,
  Q029,
  Q030,
  Q031,
  Q032,
  Q033,
  Q034,
  Q035,
  Q036,
  Q037,
  Q038,
  Q039,
  Q040,
  Q041,
  Q042,
  Q043,
  Q044,
  Q045,
  Q046,
  Q047,
  Q048,
  Q049,
  Q050,
  Q051,
  Q052,
  Q053,
  Q054,
  Q055,
  Q056,
  Q057,
  Q058,
  Q059,
  Q060,
  Q061,
  Q062,
  Q063,
  Q064,
  Q065,
  Q066,
  Q067,
  Q068,
  Q069,
  Q070,
  Q071,
  Q072,
  Q073,
  Q074,
  Q075,
  Q076,
  Q077,
  Q078,
  Q079,
  Q080,
  Q081,
  Q082,
  Q083,
  Q084,
  Q085,
  Q086,
  Q087,
  Q088,
  Q089,
  Q090,
  Q091,
  Q092,
  Q093,
  Q094,
  Q095,
  Q096,
  Q097,
  Q098,
  Q099,
  Q100
];

export const QUESTION_BANK_COUNT = QUESTION_BANK.length;
