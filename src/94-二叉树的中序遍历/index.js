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
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//   const result = [];
//   const dfs = (node) => {
//     if (!node) {
//       return;
//     }
//     node.left && dfs(node.left);
//     node.val && result.push(node.val);
//     node.right && dfs(node.right);
//   };
//   dfs(root);
//   return result;
// };

// BFS
var inorderTraversal = function (root) {
  const result = [];
  const queue = [];
  while (root || queue.length) {
    if (root) {
      queue.push(root);
      root = root.left;
    } else {
      root = queue.pop();
      root.val && result.push(root.val);
      root = root.right;
    }
  }
  return result;
};

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};
const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};
const tree3 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

console.log(inorderTraversal(tree1));
console.log(inorderTraversal({}));
console.log(inorderTraversal({ val: 1, left: null, right: null }));
console.log(inorderTraversal(tree2));
console.log(inorderTraversal(tree3));
