# 相同的树 🌲

## 思路

### DFS(深度优先搜索)

```js
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```
[LeetCode 原题](https://leetcode-cn.com/problems/same-tree)
