/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 第一种方式-递归
// var isSymmetric = function (root) {
//   if (!root) {
//     return true;
//   }
//   return dfs(root.left, root.right);
// };

var dfs = function (left, right) {
  if (!left && !right) {
    return true;
  }

  if (!left || !right || left.val !== right.val) {
    return false;
  }

  return dfs(left.left, right.right) && dfs(left.right, right.left);
};

// 第二种方式-队列
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  // 将根节点的左右子树加入队列
  const queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    // 从队列中取出两个节点
    const left = queue.shift();
    const right = queue.shift();
    // 若两个节点都为空继续循环遍历，
    if (!left && !right) {
      continue;
    }

    // 若两个节点中有一个为空或者两个节点值不相等就返回false
    if (!left || !right || left.val !== right.val) {
      return false;
    }

    // 将左子树的左孩子，右子树的右孩子加入队列
    queue.push(left.left);
    queue.push(right.right);

    // 将左子树的右孩子，右子树的左孩子加入队列
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
};

console.log("should be true", isSymmetric([1, 2, 2, 3, 4, 4, 3]));
console.log("should be false", isSymmetric([1, 2, 2, null, 3, null, 3]));
