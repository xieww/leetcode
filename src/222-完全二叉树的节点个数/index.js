/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * DFS，递归，时间复杂度O(n)，空间复杂度O(1)
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};

// BFS,队列实现
var countNodes = function (root) {
  if (!root) {
    return 0;
  }

  var helper = (nodes) => {
    let count = 0;
    if (nodes) {
      const queue = [nodes];
      while (queue.length) {
        const node = queue.shift();
        count++;
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return count;
  };

  return 1 + helper(root.left) + helper(root.right);
};

var countNodes = function (root) {
  if (!root) return 0;
  const queue = [root];
  let i = queue.length;
  let front;
  let count = 0;
  while (i) {
    while (i--) {
      front = queue.shift();
      count++;
      front.left && queue.push(front.left);
      front.right && queue.push(front.right);
    }
    i = queue.length;
  }
  return count;
};
