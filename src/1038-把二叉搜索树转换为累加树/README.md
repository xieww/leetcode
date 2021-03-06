# 把二叉搜索树转换为累加树

给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node  的新值等于原树中大于或等于  node.val  的值之和。

提醒一下，二叉搜索树满足下列约束条件：

节点的左子树仅包含键 小于 节点键的节点。
节点的右子树仅包含键 大于 节点键的节点。
左右子树也必须是二叉搜索树。
注意：该题目与 538: https://leetcode-cn.com/problems/convert-bst-to-greater-tree/  相同

示例 1：

![图例](./tree.png)

```text
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

示例 2：

```text
输入：root = [0,null,1]
输出：[1,null,1]
```

示例 3：

```text
输入：root = [1,0,2]
输出：[3,3,2]
```

示例 4：

```text
输入：root = [3,2,4,1]
输出：[7,9,4,10]
```

提示：

- 树中的节点数介于 1 和 100 之间。
- 每个节点的值介于  0 和  100  之间。
- 树中的所有值 互不相同 。
- 给定的树为二叉搜索树。

## 思路

* 递归中序遍历二叉搜索树，中序遍历默认为升序，此题改为倒序遍历，先遍历右子树，然后用sum暂存累加节点值，将累加后的值赋予节点，然后遍历左子树
* 递归结束返回累加树
* 时间复杂度O(n)
* 空间复杂度O(n)
  
```js
var bstToGst = function (root) {
  let sum = 0;
  const helper = function (root) {
      if (root === null) {
          return;
      }
      helper(root.right)
      sum += root.val;
      root.val = sum;
      helper(root.left);
  }
  helper(root);
  return root;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
