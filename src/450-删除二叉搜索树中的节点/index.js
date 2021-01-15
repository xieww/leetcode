function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @description
 * 时间复杂度O(logN),若树为平衡树则H=logN
 * 空间复杂度O(H)，H为树的高度
 * @author xieww
 * @date 2021-01-14
 * @param {*} root
 * @param {*} key
 * @returns
 */
function deleteNode(root, key) {
  if (root === null) {
    return root;
  }

  if (root.val === key) {
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }
    let minNode = getMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }
  return root;
}

function getMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

console.log(deleteNode([5, 3, 6, 2, 4, null, 7], 3));
