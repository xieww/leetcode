/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return dfs(root.left, root.right);
};

var dfs = function (left, right) {
  if (!left && !right) {
    return true;
  }

  if (!left || !right || left.val !== right.val) {
    return false;
  }

  return dfs(left.left, right.right) && dfs(left.right, right.left);
};

console.log("should be true", isSymmetric([1, 2, 2, 3, 4, 4, 3]));
console.log("should be false", isSymmetric([1, 2, 2, null, 3, null, 3]));
