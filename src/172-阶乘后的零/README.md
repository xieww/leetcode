# 阶乘后的零

## 思路

- 任何非零数字乘以 10 其结果一定尾随 0，而 10 又可分解为 2\*5
- 只需要计算有多少个 2\*5 就可得出有几个尾随 0
- 除了真正跟踪 2 和 5 的数量外，其实只需要跟踪 5 的数量即可。这是因为在任何阶乘计算中，总会有 2 的倍数大于 5 的倍数。

```js
var trailingZeroes = function (n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/)
