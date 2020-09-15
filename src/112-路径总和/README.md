# 路径总和

```text
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
```

## 思路

* 若根节点不存在，直接返回false
* 若根节点存在，左右子节点都不存在，则判断根节点的值是否等于目标和，否则分别递归遍历左右子节点

```js
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return sum === root.val;
  } else {
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/path-sum)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
