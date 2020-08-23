# 杨辉三角

## 思路

* 关键点：在杨辉三角中，每个数是它左上方和右上方的数的和。
* numRows为几就需要生成几层，每层的长度为i+1
* result用于存放最终结果，row为每一层结果，每一层循环结束将结果添加进result中，最后返回即可
* 时间复杂度O(numRows^2)
* 空间复杂度O(numRows^2)

![图示](./view.gif)

```js
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);
    if (i > 1) {
      for (let j = 1; j < i; j++) {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    result.push(row);
  }
  return result;
};
```