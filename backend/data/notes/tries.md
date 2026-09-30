---
slug: "tries"
title: "Tries"
summary: "Store strings by shared prefixes for fast word and prefix queries."
estimatedHours: 6
difficulty: "Advanced"
videoId: "oobqoCJlHA0"
videoTitle: "Trie data structure"
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
A Trie (prefix tree) is a tree-based data structure used to store associative data structures where keys are typically strings, with characters stored along paths and shared prefixes occupying the same nodes.

## Examples
- Autocomplete systems predicting the next characters or words as a user types.
- Dictionary applications and spell-checkers looking up valid word spellings.
- IP routing tables for longest-prefix matching in networking.

## Sample Program

```javascript
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children[char]) curr.children[char] = new TrieNode();
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }
}
```

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        curr.is_end_of_word = True
```

```java
import java.util.HashMap;
import java.util.Map;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEndOfWord = false;
}

class Trie {
    private final TrieNode root = new TrieNode();

    public void insert(String word) {
        TrieNode curr = root;
        for (char ch : word.toCharArray()) {
            curr.children.putIfAbsent(ch, new TrieNode());
            curr = curr.children.get(ch);
        }
        curr.isEndOfWord = true;
    }
}
```

```cpp
#include <unordered_map>
#include <string>

struct TrieNode {
    std::unordered_map<char, TrieNode*> children;
    bool isEndOfWord = false;
    ~TrieNode() {
        for (auto& pair : children) delete pair.second;
    }
};

class Trie {
private:
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }
    ~Trie() { delete root; }
    
    void insert(std::string word) {
        TrieNode* curr = root;
        for (char ch : word) {
            if (curr->children.find(ch) == curr->children.end()) {
                curr->children[ch] = new TrieNode();
            }
            curr = curr->children[ch];
        }
        curr->isEndOfWord = true;
    }
};
```

These implementations define the fundamental building blocks of a Trie, showcasing how nodes track child character mappings and terminal word boundaries during insertion.

## Techniques Used
- Node-based character branching
- Iterative tree traversal
- Boolean flag marking for complete word validation
- Prefix-based space optimization
