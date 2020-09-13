# 二叉树的层平均值

```text
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

示例 1：

输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。

提示：

节点值的范围在32位有符号整数范围内。
```

```js
var averageOfLevels = function (root) {
  const sum = [];
  const count = [];
  const traverse = (node, i) => {
    if (sum[i] === undefined) sum[i] = 0;
    if (count[i] === undefined) count[i] = 0;
    sum[i] += node.val;
    count[i]++;
    if (node.left) traverse(node.left, i + 1);
    if (node.right) traverse(node.right, i + 1);
  };
  traverse(root, 0);
  for (let i = 0; i < sum.length; i++) {
    sum[i] = sum[i] / count[i];
  }
  return sum;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
