/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let newRoot = null;
  let newTree = null;

  const helper = (node) => {
    if (!node) {
      return;
    }
    node.left && helper(node.left);
    if (!newRoot) {
      newRoot = newTree = node;
    } else {
      newTree.right = node;
      newTree = newTree.right;
      node.left = null;
    }
    node.right && helper(node.right);
  };

  helper(root);
  return newRoot;
};

var increasingBST = function (root) {
  const helper = (node, tail) => {
    if (node == null) return tail;
    const res = helper(node.left, node);
    node.left = null;
    node.right = helper(node.right, tail);
    return res;
  };

  return helper(root, null);
};

var increasingBST = function (root) {
  const newRoot = new TreeNode(undefined);
  let cur = newRoot;
  const helper = (node) => {
    if (node === null) {
      return;
    }
    helper(node.left);
    // for current node, we want to only link the node to the right
    node.left = null;
    cur.right = node;
    // reassign node to cur for the next operation
    cur = node;
    helper(node.right);
  };
  helper(root);
  return newRoot.right;
};

var increasingBST = function (root) {
  if (!root) return null;
  let stack = [];
  let newRoot = null;
  let newTree = null;

  while (root) {
    // left
    while (root) {
      stack.push(root);
      root = root.left;
    }
    while (stack.length > 0) {
      // read/visit
      let node = stack.pop();
      if (!newRoot) {
        newRoot = newTree = node;
      } else {
        newTree.right = node;
        newTree = newTree.right;
      }
      node.left = null;
      // right
      if (node.right) {
        root = node.right;
        break;
      }
    }
  }
  return newRoot;
};
