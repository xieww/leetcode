# 平衡二叉树

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

```text
    3
   / \
  9  20
    /  \
   15   7
```

返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

返回  false 。

## 思路

```js
var isBalanced = function (root) {
  const ret = isNodeBalanced(root);
  if (ret >= 0) return true;
  return false;
};
function isNodeBalanced(node) {
  if (!node) return 0;
  const left = isNodeBalanced(node.left);
  const right = isNodeBalanced(node.right);
  if (left < 0 || right < 0) return -1; //短路机制，有一个子树不满足条件就直接返回
  if (Math.abs(left - right) > 1) {
    //子树高度差多于1，就返回-1
    return -1;
  } else {
    return Math.max(left, right) + 1;
  }
}
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/balanced-binary-tree/)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
