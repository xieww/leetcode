/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
// 方法1 DFS
// var maxDepth = function (root) {
//   if (root == null) {
//     return 0;
//   }

//   let max = 0;
//   for (let child of root.children) {
//     max = Math.max(max, maxDepth(child));
//   }

//   return max + 1;
// };

// 方法2 DFS
// var maxDepth = function (root) {
//   if (!root) return 0; // 如果没有节点, 直接返回0
//   let num = 0; // 记录深度
//   if (root.children) {
//     root.children.forEach((item) => {
//       // 遍历有几个节点
//       let max = maxDepth(item); // 递归调用
//       num = Math.max(max, num); // 对比当前和之前得到的 深度, 保留大的
//     });
//   }
//   return num + 1; // 顶级节点算一个 得加1
// };

// 方法3 DFS
// var maxDepth = function (root) {
//   if (!root) return 0;
//   let max = -1;

//   const helper = (node, depth) => {
//     if (depth > max) max = depth;
//     for (let c of node.children) {
//       helper(c, depth + 1);
//     }
//   };

//   helper(root, 1);
//   return max;
// };

// 方法4
// var maxDepth = (root) =>
//   root &&
//   root.children &&
//   root.children.reduce((r, n) => Math.max(r, maxDepth(n)), 0) + 1;

// 方法5 BFS
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [];
  let depthCount = 0;
  queue.push(root);

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      for (let child of node.children) {
        queue.push(child);
      }
    }
    depthCount++;
  }
  return depthCount;
};
