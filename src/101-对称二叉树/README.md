# 对称二叉树

## 思路

### DFS(深度优先遍历)

- 若根节点不存在，返回 true，即为对称二叉树
- 若根节点存在，则遍历左右子树是否对称
- 若左右子树都不存在，则是对称二叉树
- 若左右子树中任意一个不存在，或左右子树当前节点值不相等，则不是对称二叉树
- 递归遍历左子树的左子树和右子树的右子树，左子树的右子树和右子树的左子树是否对称
- 时间复杂度 O(n),n 为树的节点
- 空间复杂度 O(n)

```bash
    2         2
   / \       / \
  3   4     4   3
 / \ / \   / \ / \
8  7 6  5 5  6 7  8
```

```js
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return dfs(root.left, root.right); // 遍历左右子树是否对称
};

var dfs = function (left, right) {
  // 左右子树都不存在，返回true
  if (!left && !right) {
    return true;
  }

  // 若左右子树中任意一个不存在，或左右子树节点值不相等，则返回false
  if (!left || !right || left.val !== right.val) {
    return false;
  }

  // 递归遍历左子树的左子树和右子树的右子树，左子树的右子树和右子树的左子树是否对称
  return dfs(left.left, right.right) && dfs(left.right, right.left);
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/symmetric-tree/)
