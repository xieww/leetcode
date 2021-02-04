/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }
  if (root.val === p.val || root.val === q.val) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }
  if (left === null && right === null) {
    return null;
  }
  return left === null ? right : left;
};

// var lowestCommonAncestor = function (root, p, q) {
//   let result;
//   const dfs = (root, p, q) => {
//     if (root === null) {
//       return null;
//     }
//     const left = dfs(root.left, p, q);
//     const right = dfs(root.right, p, q);
//     if (
//       (left && right) ||
//       ((root.val === p.val || root.val === q.val) && (left || right))
//     ) {
//       result = root;
//     }
//     return left || right || root.val === p.val || root.val === q.val;
//   };
//   dfs(root, p, q);
//   return result;
// };

const tree = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

console.log(lowestCommonAncestor(tree, { val: 5 }, { val: 1 }));
console.log(lowestCommonAncestor(tree, { val: 5 }, { val: 4 }));
