# 杨辉三角 II

给定一个非负索引  k，其中 k ≤ 33，返回杨辉三角的第 k 行。

![图片](./PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？

## 思路

- 空间复杂度 O(k)

```js
var getRow = function (rowIndex) {
  let row = [1];
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (i === j) {
        row[j] = 1;
      } else {
        row[j] = row[j - 1] + row[j];
      }
    }
  }
  return row;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/pascals-triangle-ii)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
