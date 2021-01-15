# 从前序和中序遍历结果构造二叉树

根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

```text
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
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


```js
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
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
