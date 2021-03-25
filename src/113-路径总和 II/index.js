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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  const helper = function (root, sum, path = []) {
    if (root) {
      path.push(root.val);
      if (!root.left && !root.right && sum - root.val === 0) {
        result.push([...path]);
      }
      helper(root.left, sum - root.val, path);
      helper(root.right, sum - root.val, path);
      path.pop();
    }
  };
  helper(root, targetSum);
  return result;
};

const tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};

console.log(pathSum(tree, 22));
