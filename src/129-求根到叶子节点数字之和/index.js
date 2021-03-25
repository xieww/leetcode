/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/****深度优先 ，时间复杂度O(n)，空间复杂度O(n)***********/
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var sumNumbers = function (root) {
//   let sum = 0;
//   (function traverseTree(node, curr) {
//     if (!root) return;
//     curr = curr * 10 + node.val;
//     if (!node.left && !node.right) {
//       sum = sum + curr;
//       return;
//     }
//     if (node.left) traverseTree(node.left, curr);
//     if (node.right) traverseTree(node.right, curr);
//   })(root, 0);
//   return sum;
// };

// var sumNumbers = function (root, sum = "") {
//   if (!root) return 0;

//   sum += root.val;
//   if (!root.left && !root.right) return parseInt(sum);

//   return sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
// };

// var sumNumbers = function (root, current = 0) {
//   if (root === null) return 0;
//   let value = current * 10 + root.val;
//   if (root.left === null && root.right === null) return value;
//   return sumNumbers(root.left, value) + sumNumbers(root.right, value);
// };

// var sumNumbers = function (root) {
//   var dfs = function (node, sum) {
//     if (!node) {
//       return 0;
//     }
//     sum = sum * 10 + node.val;
//     if (!node.left && !node.right) {
//       return sum;
//     }
//     return dfs(node.left, sum) + dfs(node.right, sum);
//   };
//   return dfs(root, 0);
// };

/****广度优先 ，时间复杂度O(n)，空间复杂度O(n)***********/
// var sumNumbers = function (root) {
//   if (root === null) {
//     return 0;
//   }
//   let sum = 0;
//   const nodeQueue = [];
//   const numQueue = [];
//   nodeQueue.push(root);
//   numQueue.push(root.val);
//   while (nodeQueue.length) {
//     const node = nodeQueue.shift();
//     const num = numQueue.shift();
//     const left = node.left,
//       right = node.right;
//     if (left === null && right === null) {
//       sum += num;
//     } else {
//       if (left !== null) {
//         nodeQueue.push(left);
//         numQueue.push(num * 10 + left.val);
//       }
//       if (right !== null) {
//         nodeQueue.push(right);
//         numQueue.push(num * 10 + right.val);
//       }
//     }
//   }
//   return sum;
// };

var sumNumbers = function (root) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  const nodeQueue = [];
  nodeQueue.push([root, root.val]);
  while (nodeQueue.length) {
    const [node, num] = nodeQueue.shift();
    const left = node.left;
    const right = node.right;
    if (left === null && right === null) {
      sum += num;
    } else {
      if (left !== null) {
        nodeQueue.push([left, num * 10 + left.val]);
      }
      if (right !== null) {
        nodeQueue.push([right, num * 10 + right.val]);
      }
    }
  }
  return sum;
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
console.log(sumNumbers(tree));
