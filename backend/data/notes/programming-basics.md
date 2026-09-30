---
slug: "programming-basics"
title: "Programming Basics"
summary: "Master the foundational constructs: variables, memory models, loops, functions, and boolean logic."
estimatedHours: 8
difficulty: "Beginner"
videoId: "z9bZufPHFLc"
videoTitle: "MIT 6.0001: Introduction to Computer Science"
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

Programming basics encompass the fundamental constructs of writing code: variables for storing state, conditionals for decision-making, loops for repetitive tasks, and functions for modularizing logic.

## Examples

- Storing a user's age in a variable.
- Checking if a user is an adult using an if-statement.
- Iterating through a list of names using a for-loop.

## Sample Program with Explanation

```javascript
function greetUsers(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      console.log('Welcome, ' + users[i].name);
    }
  }
}
```

This program defines a function `greetUsers` that takes a list of users. It uses a `for` loop to iterate over the array and an `if` conditional to check their age. State is managed via the loop counter `i`.

## Techniques Used

- Variable assignment and state tracking.
- Conditional branching (if/else).
- Iteration (for/while loops).
- Functional abstraction.
