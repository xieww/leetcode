# 从中序与后序遍历序列构造二叉树

根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

```text
中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
```

返回如下的二叉树：

```text
    3
   / \
  9  20
    /  \
   15   7
```

## 思路

* 时间复杂度O(n)
* 空间复杂度O(n)

```js
var buildTree = function (inOrder, postOrder) {
  //用map存储中序遍历数组中对应节点值的索引
  const map = new Map();
  for (let i = 0; i < inOrder.length; i++) {
    map.set(inOrder[i], i);
  }

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
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
