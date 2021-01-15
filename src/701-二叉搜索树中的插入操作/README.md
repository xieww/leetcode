# 二叉搜索树中的插入操作

给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。返回插入后二叉搜索树的根节点。输入数据保证 ，新值和原始二叉搜索树中的任意节点值都不同。

注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。你可以返回任意有效的结果 。

示例 1：

![图例1](./insertbst.jpg)

```text
输入：root = [4,2,7,1,3], val = 5
输出：[4,2,7,1,3,5]
解释：另一个满足题目要求可以通过的树是：
```

![图例1](./bst.jpg)

示例 2：

```text
输入：root = [40,20,60,10,30,50,70], val = 25
输出：[40,20,60,10,30,50,70,null,null,25]
```

示例 3：

```text
输入：root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
输出：[4,2,7,1,3,5]
```

提示：

1. 给定的树上的节点数介于 0 和 10^4 之间
2. 每个节点都有一个唯一整数值，取值范围从 0 到 10^8
3. -10^8 <= val <= 10^8
4. 新值和原始二叉搜索树中的任意节点值都不同

## 思路

* 若根节点为空，直接返回以插入者为根节点的新树
* 若根节点大于插入者，则递归遍历左子树，反之则递归遍历右子树
* 遍历结束返回插入新树

```js
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
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
