# 二叉树的所有路径

## 思路

```js
var binaryTreePaths = function (root) {
  let result = [];
  if (!root) {
    return result;
  }

  if (!root.left && !root.right) {
    return [`${root.val}`];
  }

  let leftTreePaths = binaryTreePaths(root.left);
  let rightTreePaths = binaryTreePaths(root.right);
  leftTreePaths.forEach((leftTree) => {
    result.push(`${root.val}->${leftTree}`);
  });
  rightTreePaths.forEach((rightTree) => {
    result.push(`${root.val}->${rightTree}`);
  });

  return result;
};
```

来源：力扣（LeetCode）
链接：[LeetCode 原题](https://leetcode-cn.com/problems/binary-tree-paths/)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
