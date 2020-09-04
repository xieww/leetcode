/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];
  if (!root) {
    return result;
  }

  if (!root.left && !root.right) {
    return [`${root.val}`];
  }

  let leftTreePaths = binaryTreePaths(root.left);
  let rightTreePaths = binaryTreePaths(root.right);
  leftTreePaths.forEach((leftTree) => {
    result.push(`${root.val}->${leftTree}`);
  });
  rightTreePaths.forEach((rightTree) => {
    result.push(`${root.val}->${rightTree}`);
  });

  return result;
};

console.log(
  'should be ["1->2->5","1->3"]',
  binaryTreePaths([1, 2, 3, null, 5])
);
