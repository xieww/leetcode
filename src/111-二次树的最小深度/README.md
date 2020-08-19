# 二叉树的最小深度

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
