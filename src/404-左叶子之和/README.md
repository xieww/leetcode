# 左叶子之和

```text
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
```

## 思路

- 先判断根节点是否存在，若不存在直接返回 0
- 若根节点存在，左右子树不存在，则直接返回根节点
- 递归遍历左右子树，累加遍历得到左叶子节点的值，直至遍历结束，返回最终结果值即可

```js
// DFS
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  var dfs = function (node) {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return node.val;
    }
    const num = dfs(node.left);
    if (num) {
      sum += num;
    }
    dfs(node.right);
  };
  dfs(root);
  return sum;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/sum-of-left-leaves)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
