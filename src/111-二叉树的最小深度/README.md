# 二叉树的最小深度

## 题解

- 若当前 root 节点为空，则说明深度为 0，最小深度也就是 0
- 若当前 root 节点存在，而左右子树节点不存在，则深度为 1，最小深度也就是 1
- 若左右子树存在，则需要分别找出左右子树中的最小深度
- 时间复杂度为 O(n)

### DFS

```js
var minDepth = function (root) {
  if (!root) {
    return 0; // 根节点为空直接返回0，也就是深度为0
  }
  if (!root.left && !root.right) {
    return 1; // 左右子树节点不存在，则深度为1
  }
  let depth = Number.MAX_SAFE_INTEGER;

  // 若左子树存在，则先递归遍历左子树，找出左子树中最小深度，然后和当前depth进行比较，找出最小值
  if (root.left) {
    depth = Math.min(minDepth(root.left), depth);
  }

  // 若右子树存在，则先递归遍历右子树，找出右子树中最小深度，然后和当前depth进行比较，找出最小值
  if (root.right) {
    depth = Math.min(minDepth(root.right), depth);
  }
  return depth + 1;
};
```
[LeetCode 原题](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree)
