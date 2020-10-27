# 二叉树的前序遍历

给定一个二叉树，返回它的前序遍历。

示例:

输入: [1,null,2,3]

```text
   1
    \
     2
    /
   3
```

输出: [1,2,3]
进阶:  递归算法很简单，你可以通过迭代算法完成吗？

## 思路

* 前序遍历：根节点 ---> 左子树 ---> 右子树
* 时间复杂度O(n)
* 空间复杂度O(n)

```js
if (!root) {
  return [];
}
const result = [];
const stack = [root];
while (stack.length) {
  const node = stack.pop();
  result.push(node.val);
  if (node.right) {
    stack.push(node.right);
  }
  if (node.left) {
    stack.push(node.left);
  }
}
return result;
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/binary-tree-preorder-traversal)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
