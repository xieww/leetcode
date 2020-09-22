/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0;
  let prev = 0;
  function rec(root) {
    if (root) {
      rec(root.right);
      sum += root.val;
      root.val += prev;
      prev = sum;
      rec(root.left);
    }
  }
  rec(root);
  return root;
};
