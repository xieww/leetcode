/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

/**
 * 递归解法，时间复杂度O(H)，空间复杂度O(H)，H为树的高度
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else {
    return val < root.val
      ? searchBST(root.left, val)
      : searchBST(root.right, val);
  }
};

/**
 * @description 迭代解法，时间复杂度O(H)，空间复杂度O(1), H为树的高度
 * @author xieww
 * @date 2021-01-14
 * @param {*} root
 * @param {*} val
 * @returns 
 */
function searchBST(root, val) {
  while (root !== null && root.val !== val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
}
