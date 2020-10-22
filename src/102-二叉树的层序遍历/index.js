/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const levels = [];
  while (queue.length !== 0) {
    const queueLength = queue.length;
    const currLevel = [];
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      currLevel.push(current.val);
    }
    levels.push(currLevel);
  }
  return levels;
};
