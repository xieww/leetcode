# 二叉搜索树中第 K 小的元素

给定一个二叉搜索树，编写一个函数  kthSmallest  来查找其中第  k  个最小的元素。

说明：
你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

示例 1:

```text
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 1
```

示例 2:

```text
输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 3
```

进阶：
如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化  kthSmallest  函数？

## 思路

* 时间复杂度O(n)
* 空间复杂度O(n)

```js
function kthSmallest(root, k) {
  let index = 0;
  let result = "";
  const helper = function (node, k) {
    if (node === null) {
      return;
    }
    helper(node.left, k);
    index++;
    if (index === k) {
      result = node.val;
      return;
    }
    helper(node.right, k);
  };
  helper(root, k);
  return result;
}
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
