# 在每个树行中找最大值

## 思路

### 广度优先搜索算法（英语：Breadth-First Search，缩写为BFS）

- 若树节点为空则直接返回[]
- 将树以一个 queue 队列进行存储，然后进行遍历
- 层级最大值 max 初始值设为-Infinity，依次从队列中读取节点和当前 max 进行比较，重置 max
- 若存在左右子树则将其分别存进 queue 队列

```js
var largestValues = function (root) {
  let result = [];
  if (!root) return result;
  let queue = [root];
  while (queue.length) {
    const length = queue.length;
    let max = -Infinity;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(max);
  }
  return result;
};
```

### 深度优先搜索（英语：Deep First Search，缩写为DFS）

- DFS 解法重点是递归调用 dfs 辅助函数

```js
var largestValues = function (root) {
  const result = [];
  const dfs = (node, level) => {
    if (!node) return;
    // 判断result[level]是否存在
    if (result[level] === void 0) {
      result[level] = -Infinity;
    }
    result[level] = Math.max(result[level], node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return result;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row)
