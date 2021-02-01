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

/******************前序遍历*********************/

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// var serialize = function (root) {
//   let str = new String();

//   const helper = (root) => {
//     if (root === null) {
//       str = str + "#" + ",";
//       return;
//     }
//     str = str + root.val + ",";

//     helper(root.left);
//     helper(root.right);
//   };
//   helper(root);
//   return str.toString();
// };

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// var deserialize = function (data) {
//   const result = data.split(",");
//   const helper = (nodes) => {
//     if (!nodes || nodes.length === 0) {
//       return null;
//     }

//     const first = nodes.shift();
//     if (first === "#") {
//       return null;
//     }
//     const root = new TreeNode(first);
//     root.left = helper(nodes);
//     root.right = helper(nodes);
//     return root;
//   };
//   return helper(result);
// };

const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

/******************后序遍历*********************/

var serialize = function (root) {
  let str = new String();

  const helper = (root) => {
    if (root === null) {
      str = str + "#" + ",";
      return;
    }

    helper(root.left);
    helper(root.right);
    str = str + root.val + ",";
  };
  helper(root);
  return str.toString();
};

var deserialize = function (data) {
  const result = data.split(",");
  const helper = (nodes) => {
    if (!nodes || nodes.length === 0) {
      return null;
    }

    const last = nodes.pop();
    if (last === "#") {
      return null;
    }
    const root = new TreeNode(last);
    root.right = helper(nodes);
    root.left = helper(nodes);
    return root;
  };
  return helper(result);
};

console.log(serialize(tree));
console.log(deserialize(serialize(tree)));
