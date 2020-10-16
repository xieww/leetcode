/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * DFS，递归
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};

// BFS 借助队列
var connect = function (root) {
  if (root == null) return root;
  let queue = [root];
  while (queue.length != 0) {
    let next = [];
    while (queue.length != 0) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left != null) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};

// 时间复杂度O(n)，空间复杂度O(1)
var connect = function (root) {
  let result = root;
  while (root && root.left) {
    let temp = root;
    while (temp) {
      temp.left.next = temp.right;
      temp.right.next = temp.next ? temp.next.left : null;
      temp = temp.next;
    }
    root = root.left;
  }
  return result;
};
