# 将有序数组转换为二叉搜索树

```text
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```

## 思路

- 若数组为空直接返回 null
- 若数组长度为 1,返回 new TreeNode(nums[0])
- 若数组长度大于 1，则先找出中间索引，以及对应的中间值 nums[mid]作为根节点，递归遍历左右两个子数组生成对应的左右子树

```js
var sortedArrayToBST = function (nums) {
  if (!nums.length) {
    return null;
  }
  if (nums.length === 1) {
    new TreeNode(nums[0]);
  }
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
