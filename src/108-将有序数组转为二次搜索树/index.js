/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 方法1
// var sortedArrayToBST = function (nums) {
//   if (!nums.length) {
//     return null;
//   }
//   if (nums.length === 1) {
//     new TreeNode(nums[0]);
//   }
//   const mid = Math.floor(nums.length / 2);
//   const root = new TreeNode(nums[mid]);
//   root.left = sortedArrayToBST(nums.slice(0, mid));
//   root.right = sortedArrayToBST(nums.slice(mid + 1));
//   return root;
// };

// 方法2
var sortedArrayToBST = function (nums) {
  if (!nums.length) {
    return null;
  }
  const helper = (low, high) => {
    if (low > high) {
      return null;
    }
    const mid = Math.floor((low + high) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(low, mid - 1);
    root.right = helper(mid + 1, high);
    return root;
  };
  return helper(0, nums.length - 1);
};

console.log(
  "should be [0,-3,9,-10,null,5] ",
  sortedArrayToBST([-10, -3, 0, 5, 9])
);
