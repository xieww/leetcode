# 子数组最大平均数 I

给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

示例：

```text
输入：[1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```

提示：

- 1 <= k <= n <= 30,000。
- 所给数据范围 [-10,000，10,000]。

## 思路

* 时间复杂度O(n)
* 空间复杂度O(1)

```js
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let result = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    result = Math.max(result, sum);
  }
  return result / 1.0 / k;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/maximum-average-subarray-i)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
