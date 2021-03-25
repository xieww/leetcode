# 螺旋矩阵

给你一个 m 行 n 列的矩阵 matrix ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素。

示例 1：

![图例](./spiral1.jpg)

```text
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

示例 2：

![图例](./spiral.jpg)

```text
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 10
- -100 <= matrix[i][j] <= 100

## 思路

```js
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  const result = [];
  while (matrix.length) {
    const first = matrix.shift(); // 删除当前数组第一个元素，并加入到结果集中
    result.push(...first);
    for (const m of matrix) {
      let val = m.pop(); // 删除数组最后一个元素
      if (val) {
        result.push(val);
      }
      m.reverse(); // 反转数组元素顺序
    }
    matrix.reverse(); // 反转数组元素顺序
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/spiral-matrix)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
