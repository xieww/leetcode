/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 方法1 递归
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

// 方法2 DFS
// var invertTree = function (root) {
//   const stack = [root];
//   while (stack.length) {
//     const item = stack.pop();
//     if (item) {
//       [item.left, item.right] = [item.right, item.left];
//       stack.push(item.left, item.right);
//     }
//   }
//   return root;
// };

// 方法3 BFS
// var invertTree = function (root) {
//   const stack = [root];
//   while (stack.length) {
//     const item = stack.shift();
//     if (item) {
//       [item.left, item.right] = [item.right, item.left];
//       stack.push(item.left, item.right);
//     }
//   }
//   return root;
// };
