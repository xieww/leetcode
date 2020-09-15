/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// 方法1 精简版
// var hasPathSum = function (root, sum) {
//   return root
//     ? !root.left && !root.right
//       ? sum === root.val
//       : hasPathSum(root.left, sum - root.val) ||
//         hasPathSum(root.right, sum - root.val)
//     : false;
// };

var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return sum === root.val;
  } else {
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
};

// 方法2
var hasPathSum = function (root, sum) {
  if (!root) return false;
  let queue = [root];
  while (queue.length > 0) {
    let cur = queue.shift();
    if (!cur.left && !cur.right && cur.val == sum) {
      return true;
    }
    if (cur.left) {
      cur.left.val += cur.val;
      queue.push(cur.left);
    }
    if (cur.right) {
      cur.right.val += cur.val;
      queue.push(cur.right);
    }
  }
  return false;
};
