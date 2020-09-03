# 找到所有数组中消失的数字

## 思路

* 生成一个nums长度一致的数组
* 对数组nums去重
* 过滤掉nums在arr中已经存在的元素，也就是找arr和nums的交集

```js
var findDisappearedNumbers = function (nums) {
  const arr = Array.from(new Array(nums.length + 1).keys()).slice(1);
  nums = [...new Set(nums)];
  return arr.filter((item) => nums.indexOf(item) === -1);
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array)
