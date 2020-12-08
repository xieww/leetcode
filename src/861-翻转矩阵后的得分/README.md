# 翻转矩阵后的得分

有一个二维矩阵 A 其中每个元素的值为 0 或 1 。

移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。

在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。

返回尽可能高的分数。

示例：

```text
输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
输出：39
解释：
转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
```

提示：

1. 1 <= A.length <= 20
2. 1 <= A[0].length <= 20
3. A[i][j]  是  0 或  1

## 思路

```js
var matrixScore = function (A) {
  const len = A.length;
  const itemLen = A[0].length;
  let result = (1 << (itemLen - 1)) * len;
  for (let i = 1; i < itemLen; i++) {
    let current = 0;
    for (let j = 0; j < len; j++) {
      current += A[j][i] === A[j][0] ? 1 : 0;
    }
    result += Math.max(current, len - current) * (1 << (itemLen - i - 1));
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/score-after-flipping-matrix)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
