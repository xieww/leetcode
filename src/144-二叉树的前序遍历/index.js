/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法1，递归，时间复杂度O(n)，空间复杂度O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = [];
  const helper = function (node) {
    if (node) {
      result.push(node.val);
      helper(node.left);
      helper(node.right);
    }
  };
  helper(root);
  return result;
};

// 方法2，栈，迭代，时间复杂度O(n)，空间复杂度O(n)
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
};

//方法，迭代，3时间复杂度O(n)，空间复杂度O(n)
var preorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length) {
    while (current) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;
};
