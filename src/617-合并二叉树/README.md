# 合并二叉树

```text
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
注意: 合并必须从两个树的根节点开始。
```

## 思路

- t1 和 t2 同时不存在，则返回 null
- 新树的节点值为 t1 和 t2 两棵树节点值相加，根据此规则递归遍历 t1，t2 的左右子树
- 时间复杂度 O(n)

```js
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null;
  const root = new TreeNode(((t1 || 0).val || 0) + ((t2 || 0).val || 0));
  root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  return root;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/merge-two-binary-trees)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
