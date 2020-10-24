/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *  递归，时间复杂度O(n)，空间复杂度O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  var helper = function (root, min = null, max = null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return helper(root.left, min, root) && helper(root.right, root, max);
  };

  return helper(root);
};

var isValidBST = function (root, min = -Infinity, max = Infinity) {
  return (
    root === null ||
    (root.val < max &&
      root.val > min &&
      isValidBST(root.left, min, root.val) &&
      isValidBST(root.right, root.val, max))
  );
};

// 中序遍历，时间复杂度O(n)，空间复杂度O(n)
var isValidBST = function (root) {
  let stack = [];
  let inOrder = -Infinity;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inOrder，说明不是二叉搜索树
    if (root.val <= inOrder) {
      return false;
    }
    inOrder = root.val;
    root = root.right;
  }
  return true;
};
