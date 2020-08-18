# 二叉树的最大深度

## 思路

- 首先判断当前是否存在，若不存在则直接返回 0,也就是输的最大深度为 0
- 若节点存在则分别递归遍历左右子树，
- 找出左右子树中最大深度，子树的深度并不包含当前根节点，所以要加 1

### DFS(深度优先搜索)

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
