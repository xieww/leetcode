/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// 精简版
// var hasPathSum = function (root, sum) {
//   return root
//     ? !root.left && !root.right
//       ? sum === root.val
//       : hasPathSum(root.left, sum - root.val) ||
//         hasPathSum(root.right, sum - root.val)
//     : false;
// };

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
