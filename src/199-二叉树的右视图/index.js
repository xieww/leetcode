/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * DFS
 * @param {TreeNode} root
 * @return {number[]}
 */
// var rightSideView = function (root) {
//   const result = [];
//   if (!root) {
//     return result;
//   }
//   const helper = (node, h) => {
//     if (!node) {
//       return;
//     }
//     result[h] = node.val;
//     h++;
//     helper(node.left, h);
//     helper(node.right, h);
//   };
//   helper(root, 0);
//   return result;
// };

// BFS
var rightSideView = function (root) {
  const result = [];
  const queue = [];
  if (!root) {
    return result;
  }
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (i === length - 1) {
        result.push(node.val);
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return result;
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};

console.log(rightSideView(tree));
