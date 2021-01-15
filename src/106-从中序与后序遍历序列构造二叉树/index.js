function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @description
 * @author xieww
 * @date 2021-01-15
 * @param {number[]} inOrder
 * @param {number[]} postOrder
 * @returns {TreeNode}
 */
var buildTree = function (inOrder, postOrder) {
  //用map存储中序遍历数组中对应节点值的索引
  const map = new Map();
  for (let i = 0; i < inOrder.length; i++) {
    map.set(inOrder[i], i);
  }

  /**
   * @param {number} iStart 中序遍历起始索引
   * @param {number} iEnd 中序遍历终止索引
   * @param {number} pStart 后序遍历起始索引
   * @param {number} pEnd 后序遍历终止索引
   * @returns {TreeNode}
   */
  const build = function (iStart, iEnd, pStart, pEnd) {
    //边界条件（中序遍历起始索引大于终止索引则直接返回null）
    if (iStart > iEnd) {
      return null;
    }
    // 后序遍历数组的最后一个元素即为二叉树的根节点
    const rootVal = postOrder[pEnd];
    // 以rootVal根节点构建二叉树
    const root = new TreeNode(rootVal);
    // 获取根节点在中序遍历序列中的索引
    const index = map.get(rootVal);
    // 获取左子树的节点个数
    const leftSize = index - iStart;
    // 分别递归遍历出左右子树
    root.left = build(iStart, index - 1, pStart, pStart + leftSize - 1);
    root.right = build(index + 1, iEnd, pStart + leftSize, pEnd - 1);
    return root;
  };
  return build(0, inOrder.length - 1, 0, postOrder.length - 1);
};

// var buildTree = function (inOrder, postOrder) {
//   let hash = {};
//   for (let i = 0; i < inOrder.length; i++) {
//     hash[inOrder[i]] = i;
//   }

//   const build = function (start, end) {
//     if (start > end) return null;
//     let val = postOrder.pop();
//     let root = new TreeNode(val);
//     root.right = build(hash[val] + 1, end);
//     root.left = build(start, hash[val] - 1);
//     return root;
//   };

//   return build(0, inOrder.length - 1);
// };

// var buildTree = function (inOrder, postOrder) {
//   let val = postOrder.pop();
//   let index = inOrder.indexOf(val);
//   return val === undefined
//     ? null
//     : {
//         val,
//         left: buildTree(inOrder.slice(0, index), postOrder.slice(0, index)),
//         right: buildTree(inOrder.slice(index + 1), postOrder.slice(index)),
//       };
// };

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
