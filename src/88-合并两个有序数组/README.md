# 合并两个有序数组

## 思路

```js
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums1.push.apply(nums1, nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
  return nums1;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/merge-sorted-array/)
