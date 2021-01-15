# 二叉搜索树中的搜索

给定二叉搜索树（BST）的根节点和一个值。 你需要在 BST 中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

例如，

```text
给定二叉搜索树:

        4
       / \
      2   7
     / \
    1   3

和值: 2
```

你应该返回如下子树:

```text

      2
     / \
    1   3
```

在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。

## 思路

* 若根节点不存在直接返回null
* 若根节点的值等于给定的值，则返回当前树
* 若给定的值小于根节点的值，则递归遍历左子树，反之则遍历右子树

```js
var searchBST = function (root, val) {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else {
    return val < root.val
      ? searchBST(root.left, val)
      : searchBST(root.right, val);
  }
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/search-in-a-binary-search-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
