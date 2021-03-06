# 把二叉搜索树转换为累加树

```text
给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。


例如：

输入: 原始二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13
 

注意：本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同
```

## 思路

```js
var convertBST = function (root) {
  let sum = 0;
  let prev = 0;
  function rec(root) {
    if (root) {
      rec(root.right);
      sum += root.val;
      root.val += prev;
      prev = sum;
      rec(root.left);
    }
  }
  rec(root);
  return root;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/convert-bst-to-greater-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
