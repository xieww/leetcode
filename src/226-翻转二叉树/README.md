# 翻转二叉树

```text
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

## 思路

- 若根节点为空，直接返回
- 若根节点存在，分别递归调用左右子节点，并交换左右子节点的位置，亦即左子树的左子节点和右子树的右子节点交换，左子树的右子节点和右子树的左子节点进行交换，最后返回节点即可

```js
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/invert-binary-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
