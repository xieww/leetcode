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
var minDepth = function (root) {
  if (!root) {
    return 0; // 根节点为空直接返回0，也就是深度为0
  }
  if (!root.left && !root.right) {
    return 1; // 左右子树节点不存在，则深度为1
  }
  let depth = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    depth = Math.min(minDepth(root.left), depth); // 若左子树存在，则找出左子树中最小深度
  }
  if (root.right) {
    depth = Math.min(minDepth(root.right), depth); // 若右子树存在，则找出右子树中最小深度
  }
  return depth + 1;
};

console.log("[1,2] should be 2", minDepth([1, 2]));
console.log(
  "[3,9,20,null,null,15,7] should be 3",
  minDepth([3, 9, 20, null, null, 15, 7])
);
