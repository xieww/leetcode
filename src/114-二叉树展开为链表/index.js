/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) {
    return;
  }
  flatten(root.left);
  flatten(root.right);

  // 后续遍历，左右子树拉平成一条链表
  let left = root.left;
  let right = root.right;

  // 将左子树作为右子树，原左子树置空
  root.left = null;
  root.right = left;

  // 将原来的右子树拼接到当前右子树的末端
  let node = root;
  while (node.right !== null) {
    node = node.right;
  }
  node.right = right;
};
