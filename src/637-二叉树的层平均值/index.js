/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const sum = [];
  const count = [];
  const traverse = (node, i) => {
    if (sum[i] === undefined) sum[i] = 0;
    if (count[i] === undefined) count[i] = 0;
    sum[i] += node.val;
    count[i]++;
    if (node.left) traverse(node.left, i + 1);
    if (node.right) traverse(node.right, i + 1);
  };
  traverse(root, 0);
  for (let i = 0; i < sum.length; i++) {
    sum[i] = sum[i] / count[i];
  }
  return sum;
};
