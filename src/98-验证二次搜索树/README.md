# 验证二次搜索树

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例  1:

输入:

```text
    2
   / \
  1   3
```

输出: true
示例  2:

输入:

```text
    5
   / \
  1   4
     / \
    3   6
```

输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
  根节点的值为 5 ，但是其右子节点值为 4 。

## 思路

```js
var isValidBST = function (root) {
  var helper = function (root, min = null, max = null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return helper(root.left, min, root) && helper(root.right, root, max);
  };

  return helper(root);
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/validate-binary-search-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
