/**
 * @description 递归、中序遍历（中序遍历结果为升序）
 * @author xieww
 * @date 2021-01-18
 * @param {*} root
 * @param {*} k
 * @returns
 */
function kthSmallest(root, k) {
  let index = 0;
  let result = "";
  const helper = function (node, k) {
    if (node === null) {
      return;
    }
    helper(node.left, k);
    index++;
    if (index === k) {
      result = node.val;
      return;
    }
    helper(node.right, k);
  };
  helper(root, k);
  return result;
}

function kthSmallest(root, k) {
  let index = k;
  let result = "";
  const helper = function (node) {
    if (node === null) {
      return;
    }
    helper(node.left);
    index--;
    if (index === 0) {
      result = node.val;
      return;
    }
    helper(node.right);
  };
  helper(root);
  return result;
}

function kthSmallest(root, k) {
  const arr = [];
  while (root !== null) {
    arr.push(root);
    root = root.left;
  }

  while (k !== 0) {
    const node = arr.pop();
    k--;
    if (k === 0) {
      return node.val;
    }
    const right = node.right;
    while (right !== null) {
      arr.push(right);
      right = right.left;
    }
  }
  return -1;
}

console.log(kthSmallest([3, 1, 4, null, 2], 1));
