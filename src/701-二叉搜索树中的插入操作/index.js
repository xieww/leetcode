function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @description
 * @author xieww
 * @date 2021-01-14
 * @param {*} root
 * @param {*} val
 * @returns
 */
function insertIntoBST(root, val) {
  if (root === null) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}

console.log(insertIntoBST([4, 2, 7, 1, 3], 5));
