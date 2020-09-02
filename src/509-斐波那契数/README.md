# 斐波那契数

> 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和
> F(0) = 0, F(1) = 1
> F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
> 0 ≤ N ≤ 30

## 思路

- 若 N 小于等于 1，则直接返回 N，否则递归调用 N
- 时间复杂度：O(2^N)。这是计算斐波那契数最慢的方法。因为它需要指数的时间。
- 空间复杂度：O(N)，在堆栈中我们需要与 N 成正比的空间大小。

```js
var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  return fib(N - 1) + fib(N - 2);
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/fibonacci-number/)
