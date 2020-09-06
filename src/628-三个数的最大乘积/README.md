# 三个数的最大乘积

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
