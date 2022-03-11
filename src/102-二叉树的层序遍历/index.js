/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const levels = [];
  while (queue.length !== 0) {
    const queueLength = queue.length;
    const currLevel = [];
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      currLevel.push(current.val);
    }
    levels.push(currLevel);
  }
  return levels;
};

// 变形
// var levelOrder = function (root) {
//   if (!root) return [];
//   const queue = [root];
//   const levels = [];
//   while (queue.length !== 0) {
//     const queueLength = queue.length;
//     let temp = null;
//     for (let i = 0; i < queueLength; i++) {
//       const current = queue.shift();
//       temp = current.val;
//       if (current.left) {
//         queue.push(current.left);
//       }
//       if (current.right) {
//         queue.push(current.right);
//       }
//     }
//     levels.push(temp);
//   }
//   return levels;
// };

// 变形
// var levelOrder = function (root) {
//   if (!root) {
//     return [];
//   }
//   const queue = [root];
//   const result = [];
//   while (queue.length) {
//     const node = queue.shift();
//     result.push(node.val);
//     if (node.left) {
//       queue.push(node.left);
//     }
//     if (node.right) {
//       queue.push(node.right);
//     }
//   }
//   return result;
// };


let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

console.log(levelOrder(root));