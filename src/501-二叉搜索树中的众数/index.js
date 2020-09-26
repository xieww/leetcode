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
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  var mode = [];
  var currentNodeVal = NaN;
  var currentNodeCount = 0;
  var maxCount = -Infinity;

  var helper = function (root) {
    if (!root) {
      return;
    }
    helper(root.left);
    currentNodeCount = (root.val === currentNodeVal ? currentNodeCount : 0) + 1;
    currentNodeVal = root.val;
    if (currentNodeCount > maxCount) {
      mode = [root.val];
      maxCount = currentNodeCount;
    } else if (currentNodeCount === maxCount) {
      mode.push(root.val);
    }
    helper(root.right);
  };
  helper(root);
  return mode;
};
