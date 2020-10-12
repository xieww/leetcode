# 分割等和子集

给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意:

每个数组中的元素不会超过 100
数组的大小不会超过 200
示例 1:

输入: [1, 5, 11, 5]

输出: true

解释: 数组可以分割成 [1, 5, 5] 和 [11].

示例  2:

输入: [1, 2, 3, 5]

输出: false

解释: 数组不能分割成两个元素和相等的子集.

## 思路

- DFS 递归回溯
- 递归终止条件为：
  - 数组下标越界，遍历所有元素之后未找到满足条件返回 false
  - curSum > target，当前累加值大于子序列的和，返回 false
  - curSum === target，正好满足条件，终止递归，返回 true

```js
var canPartition = (nums) => {
  if (!nums) {
    return false;
  }
  const sum = nums.reduce((sum, item) => sum + item, 0);
  if (sum % 2 != 0) return false; // 如果 sum 为奇数，直接返回 false

  const target = sum / 2; // 目标和
  const memo = new Map();

  const helper = (curSum, i) => {
    const state = curSum + "&" + i; // 描述一个问题的key
    if (memo.has(state)) {
      // 如果memo中有对应的缓存值，直接使用
      return memo.get(state);
    }
    if (i > nums.length - 1 || curSum > target) {
      return false;
    }
    if (curSum == target) {
      return true;
    }
    // 选nums[i]，当前和变为curSum+nums[i]，考察的指针移动一位
    // 不选nums[i]，当前和还是curSum，考察的指针移动一位
    const res = helper(curSum + nums[i], i + 1) || helper(curSum, i + 1);
    memo.set(state, res); // 计算的结果存入memo
    return res;
  };

  return helper(0, 0); // 递归的入口，当前和为0，指针为0
};
```

来源：力扣（LeetCode）
链接：[LeetCode 原题](https://leetcode-cn.com/problems/partition-equal-subset-sum)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
