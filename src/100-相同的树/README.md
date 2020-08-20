# 相同的树 🌲

## 思路

* 两棵树的当前节点都不存在，同时为null，则返回true
* 两棵树中有且仅有一个节点不存在,为null时，则说明两棵树不相同，返回false
* 两棵树都不为空，但是节点不相等，则说明两棵树不相同，返回false
* 若节点相同且存在左右子树，则分别判断左右子树是否相同。
* 时间复杂度为O(n),n为树的节点个数

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
