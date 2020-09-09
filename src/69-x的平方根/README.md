# x 的平方根

```text
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2

示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
     由于返回类型是整数，小数部分将被舍去。
```

## 思路

- 从 1 开始循环，若 result\*result 大于 x 结束循环，结束时的 result 要比 x 大 1，所以结果要减去 1
- 时间复杂度 O(sqrt(n))

```js
var mySqrt = function (x) {
  let result = 1;
  while (result ** 2 <= x) {
    result++;
  }
  return result - 1;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/sqrtx)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
