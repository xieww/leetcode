# 三个数的最大乘积

## 思路

* 先对数组进行升序排序
* 排序后的数组最大值肯定是数组最后一位，另外两个数只能是数组第一、第二位或者数组倒数第二、第三位

```js
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/maximum-product-of-three-numbers/)
