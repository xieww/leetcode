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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  if (!root || !root.left) {
    return -1;
  }
  let left =
    root.left.val === root.val
      ? findSecondMinimumValue(root.left)
      : root.left.val;
  let right =
    root.right.val === root.val
      ? findSecondMinimumValue(root.right)
      : root.right.val;

  return left === -1 || right === -1
    ? Math.max(left, right)
    : Math.min(left, right);
};

var findSecondMinimumValue = function (root) {
  var dfs = function (node, minVal = node.val) {
    if (!node) {
      return -1;
    }
    if (node.val !== minVal) {
      return node.val;
    }

    const leftVal = dfs(node.left, minVal);
    const rightVal = dfs(node.right, minVal);

    if (leftVal === -1 && rightVal === -1) return -1;
    if (leftVal === -1 || rightVal === -1) return Math.max(leftVal, rightVal);

    return Math.min(leftVal, rightVal);
  };
  return dfs(root);
};

var findSecondMinimumValue = function (root) {
  if (!root) {
    return -1;
  }
  const rootVal = root.val;
  let min = Infinity;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (rootVal < node.val && node.val < min) {
      min = node.val;
    }
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return min === Infinity ? -1 : min;
};
