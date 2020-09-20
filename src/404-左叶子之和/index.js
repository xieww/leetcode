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
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  var leafTree = function (node) {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return node.val;
    }
    const leftLeave = leafTree(node.left);
    if (leftLeave) {
      sum += leftLeave;
    }
    leafTree(node.right);
  };
  leafTree(root);
  return sum;
};

var sumOfLeftLeaves = function (root) {
  function recurse(node) {
    if (!node) return 0;
    const { left, right } = node;
    if (left && !left.left && !left.right) return left.val + recurse(right);
    return recurse(left) + recurse(right);
  }
  return recurse(root);
};

// var sumOfLeftLeaves = function (root) {
//   if (!root || (!root.left && !root.right)) {
//     return 0;
//   }

//   let sum = 0;

//   let queue = [];

//   queue.unshift(root);

//   while (queue.length) {
//     const node = queue.pop();

//     if (node.left) {
//       const nodeLeft = node.left;

//       if (!nodeLeft.left && !nodeLeft.right) {
//         sum += nodeLeft.val;
//       } else {
//         queue.unshift(nodeLeft);
//       }
//     }

//     if (node.right) {
//       queue.unshift(node.right);
//     }
//   }

//   return sum;
// };
