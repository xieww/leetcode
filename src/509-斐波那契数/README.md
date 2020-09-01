# 斐波那契数

> 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和
> F(0) = 0, F(1) = 1
> F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
> 0 ≤ N ≤ 30

## 思路

* 若N小于等于1，则直接返回N，否则递归调用N

```js
var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  return fib(N - 1) + fib(N - 2);
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/fibonacci-number/)
