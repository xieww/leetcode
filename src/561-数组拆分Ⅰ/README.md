# 数组拆分 Ⅰ

> 给定长度为  2n  的数组, 你的任务是将这些数分成  n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到  n 的 min(ai, bi) 总和最大。

> 示例 1:

> 输入: [1,4,3,2]

> 输出: 4
> 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
> 提示:

> n  是正整数,范围在 [1, 10000].
> 数组中的元素范围在 [-10000, 10000].

## 思路

* 先对数组进行升序排序
* 对下标为偶数的元素进行求和运算
* 时间复杂度O(n)

```js
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/array-partition-i)
