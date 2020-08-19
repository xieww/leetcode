# 二叉树的最大深度

## 思路

- 首先判断当前是否存在，若不存在则直接返回 0,也就是输的最大深度为 0
- 若节点存在则分别递归遍历左右子树，
- 找出左右子树中最大深度，子树的深度并不包含当前根节点，所以要加 1
- 时间复杂度 O(n)
- 空间复杂度 O(height)，height 为树的高度

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

## 思路

- 时间复杂度为 O(n)
- 空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到 O(n)

### BFS(广度优先搜索)

```js
const maxDepth = (root) => {
  if (root == null) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    // 当前层的节点个数
    const length = queue.length;
    // 逐个让当前层的节点出列
    for (let i = 0; i < length; i++) {
      // 当前出列的节点
      const cur = queue.shift();
      // 左右子节点入列
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    // 当前层所有节点已经出列，如果有下一层节点，则队列不为空
    if (queue.length) {
      depth++;
    }
  }
  return depth;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
