/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;
  (function traverseTree(node, curr) {
    if (!root) return;
    curr = curr * 10 + node.val;
    if (!node.left && !node.right) {
      sum = sum + curr;
      return;
    }
    if (node.left) traverseTree(node.left, curr);
    if (node.right) traverseTree(node.right, curr);
  })(root, 0);
  return sum;
};

var sumNumbers = function (root, sum = "") {
  if (!root) return 0;

  sum += root.val;
  if (!root.left && !root.right) return parseInt(sum);

  return sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
};

var sumNumbers = function (root, current = 0) {
  if (root === null) return 0;
  let value = current * 10 + root.val;
  if (root.left === null && root.right === null) return value;
  return sumNumbers(root.left, value) + sumNumbers(root.right, value);
};
