function TreeNode(val) {
  this.val = val;
  this.left = this.right = val;
}

/**
 * @description
 * @author xieww
 * @date 2021-01-14
 * @param {*} preOrder 前序遍历数组
 * @param {*} inOrder 中序遍历数组
 * @returns root
 */
// function buildTree(preOrder, inOrder) {
//   return build(
//     preOrder,
//     0,
//     preOrder.length - 1,
//     inOrder,
//     0,
//     inOrder.length - 1
//   );
// }

/**
 * @description
 * @author xieww
 * @date 2021-01-14
 * @param {*} preOrder 前序遍历数组
 * @param {*} preStart 前序遍历起始索引
 * @param {*} preEnd 前序遍历终止索引
 * @param {*} inOrder 中序遍历数组
 * @param {*} inStart 中序遍历起始索引
 * @param {*} inEnd 中序遍历终止索引
 * @returns
 */
function build(preOrder, preStart, preEnd, inOrder, inStart, inEnd) {
  // 若起始索引大于终止索引，则返回null
  if (preStart > preEnd) {
    return null;
  }
  // 根节点为树的前序遍历数组第一个元素
  let rootVal = preOrder[preStart];

  // 查找根节点在中序遍历数组中的索引
  let index = 0;
  for (let i = inStart; i <= inEnd; i++) {
    if (inOrder[i] === rootVal) {
      index = i;
      break;
    }
  }

  // 构建根节点
  const root = new TreeNode(rootVal);

  // 获取前序遍历中左子树的节点数
  const leftSize = index - inStart;
  root.left = build(
    preOrder,
    preStart + 1,
    preStart + leftSize,
    inOrder,
    inStart,
    index - 1
  );
  root.right = build(
    preOrder,
    preStart + leftSize + 1,
    preEnd,
    inOrder,
    index + 1,
    inEnd
  );
  return root;
}

var buildTree = (preorder, inorder) => {
  if (inorder.length == 0) return null;
  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

// var buildTree = (preorder, inorder) => {
//   const map = new Map();
//   for (let i = 0; i < inorder.length; i++) {
//     map.set(inorder[i], i);
//   }
//   const helper = (p_start, p_end, i_start, i_end) => {
//     if (p_start > p_end) return null;
//     let rootVal = preorder[p_start];    // 根节点的值
//     let root = new TreeNode(rootVal);   // 根节点
//     let mid = map.get(rootVal);         // 根节点在inorder的位置
//     let leftNum = mid - i_start;        // 左子树的节点数
//     root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
//     root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
//     return root;
//   };
//   return helper(0, preorder.length - 1, 0, inorder.length - 1);
// };

// var buildTree = function (preorder, inorder) {
//   let pre = 0;
//   let i = 0;
//   const build = function (stop) {
//     if (inorder[i] != stop) {
//       var root = new TreeNode(preorder[pre++]);
//       root.left = build(root.val);
//       i++;
//       root.right = build(stop);
//       return root;
//     }
//     return null;
//   };
//   return build();
// };

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
