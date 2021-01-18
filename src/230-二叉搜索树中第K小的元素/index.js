/**
 * @description 递归遍历
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

console.log(kthSmallest([3, 1, 4, null, 2], 1));
