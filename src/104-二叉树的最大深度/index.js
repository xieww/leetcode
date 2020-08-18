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
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

var maxDepth = (root) => {
  if (root == null) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    // 当前层的节点个数
    const length = queue.length;
    // 逐个让当前层的节点出列
    for (let i = 0; i < length; i++) {
      // 当前出列的节点
      const cur = queue.shift();
      // 左右子节点入列
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    // 当前层所有节点已经出列，如果有下一层节点，则队列不为空
    if (queue.length) {
      depth++;
    }
  }
  return depth;
};

console.log(
  "[3,9,20,null,null,15,7] should be 3",
  maxDepth([3, 9, 20, null, null, 15, 7])
);
