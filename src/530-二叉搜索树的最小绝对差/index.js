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
// 方法1
var getMinimumDifference = function (root) {
  const arr = helper(root);
  let out = Infinity;
  let i = 1;
  while (i < arr.length) {
    const diff = Math.abs(arr[i - 1] - arr[i]);
    if (diff < out) {
      out = diff;
    }
    i++;
  }
  return out;
};

var helper = function (root, out = []) {
  if (root) {
    helper(root.left, out);
    out.push(root.val);
    helper(root.right, out);
    return out;
  }
};

// 方法2 DFS递归
var getMinimumDifference = function (root) {
  var prev = Infinity;
  var min = Infinity;
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    min = Math.min(min, Math.abs(node.val - prev));
    prev = node.val;
    traverse(node.right);
  }
  traverse(root);
  return min;
};

var getMinimumDifference = function (root) {
  let min = Number.MAX_SAFE_INTEGER;
  let pre = -1;
  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (pre == -1) {
      pre = root.val;
    } else {
      min = Math.min(min, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return min;
};
