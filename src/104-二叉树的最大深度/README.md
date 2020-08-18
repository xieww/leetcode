# 二叉树的最大深度

## 思路

- 首先判断树是否存在，若不存在则直接返回 0,也就是输的最大深度为 0
- 若树存在则分别递归变量左右子树，
- 找出左右子树中最大深度，Math.max()找出是子树深度最大值，并不包含当前根节点，所以要加 1

```js
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
```
