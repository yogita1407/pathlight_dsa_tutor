---
slug: "binary-trees"
title: "Binary Trees"
summary: "Hierarchical data structures for recursive reasoning and ordered searching."
estimatedHours: 9
difficulty: "Intermediate"
videoId: "1-l_UOXGARo"
videoTitle: "Binary trees"
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
A tree is a hierarchical data structure consisting of nodes connected by parent-child relationships, where binary trees restrict each node to having at most two children.

## Examples
* **File Systems:** Representing nested directories and files on a computer operating system.
* **Document Object Model (DOM):** Structuring HTML elements in web browsers for rendering and event handling.
* **Expression Trees:** Evaluating arithmetic expressions in compilers and calculators.

## Sample Program
```javascript
class Node {
  constructor(val) { this.val = val; this.left = null; this.right = null; }
}
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}
const root = new Node(2); root.left = new Node(1); root.right = new Node(3);
inorder(root);
```
```python
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def inorder(node):
    if not node:
        return
    inorder(node.left)
    print(node.val)
    inorder(node.right)

root = Node(2)
root.left = Node(1)
root.right = Node(3)
inorder(root)
```
```java
class Node {
    int val;
    Node left, right;
    Node(int item) { val = item; left = right = null; }
}
public class BinaryTree {
    static void inorder(Node node) {
        if (node == null) return;
        inorder(node.left);
        System.out.println(node.val);
        inorder(node.right);
    }
    public static void main(String[] args) {
        Node root = new Node(2);
        root.left = new Node(1);
        root.right = new Node(3);
        inorder(root);
    }
}
```
```cpp
#include <iostream>
using namespace std;

struct Node {
    int val;
    Node *left, *right;
    Node(int v) : val(v), left(nullptr), right(nullptr) {}
};

void inorder(Node* node) {
    if (!node) return;
    inorder(node->left);
    cout << node->val << endl;
    inorder(node->right);
}

int main() {
    Node* root = new Node(2);
    root->left = new Node(1);
    root->right = new Node(3);
    inorder(root);
    return 0;
}
```
These code snippets define a basic binary tree node structure and implement an inorder traversal (left, root, right) recursively. The output visits the nodes in ascending order: 1, 2, 3.

## Techniques Used
* **Recursion:** Naturally matches the self-referential parent-child structure of trees to traverse subtrees.
* **Depth-First Search (DFS):** Used for preorder, inorder, and postorder traversals to explore branches deeply.
* **Breadth-First Search (BFS):** Utilizes a queue data structure to perform level-order traversals level by level.
