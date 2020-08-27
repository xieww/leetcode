# 字符串相加

## 思路

```js
var addStrings = (num1, num2) => {
  while (num1.length > num2.length) num2 = "0" + num2;
  while (num1.length < num2.length) num1 = "0" + num1; // 先补0对齐
  let result = ""; // 结果字符串
  let carry = 0; // 进位
  for (let i = num1.length - 1; i >= 0; i--) {
    // 加法 从右往左做
    const sum = +num1[i] + +num2[i] + carry; // +号将字符转数字
    result = (sum % 10) + result; // 模10的结果 + result字符串
    carry = sum > 9 ? 1 : 0;
  }
  return carry === 1 ? "1" + result : result;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/add-strings/)
