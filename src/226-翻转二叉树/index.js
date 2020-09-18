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
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// 方法1 递归
// var invertTree = function (root) {
//   if (!root) {
//     return root;
//   }

//   [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
//   return root;
// };

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

// 方法4 DFS
var invertTree = function (root) {
  let dfs = (node) => {
    if (!node) {
      return null;
    }
    dfs(node.left);
    dfs(node.right);
    [node.left, node.right] = [node.right, node.left];
  };

  dfs(root);
  return root;
};

console.log("should be [4,7,2,9,6,3,1]", invertTree([4, 2, 7, 1, 3, 6, 9]));
