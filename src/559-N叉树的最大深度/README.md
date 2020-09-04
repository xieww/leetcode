# N 二叉树的最大深度

> 给定一个 N 叉树，找到其最大深度。

> 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

> 例如，给定一个  3 叉树  :

> 我们应返回其最大深度，3。

> 说明:

> 树的深度不会超过  1000。
> 树的节点总不会超过  5000。

## 思路

* 若节点不存在，直接返回0
* 递归遍历子节点，找出当前和之前深度中的最大值
* 最后结果需要加上根节点

```js
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }

  let max = 0;
  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return max + 1;
};
```

来源：力扣（LeetCode）
链接：[LeetCode 原题](https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
