# 最大间距

给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

如果数组元素个数小于 2，则返回 0。

示例  1:

```text
输入: [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
```

示例  2:

```text
输入: [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。
```

说明:

你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

## 思路

* 先对数组进行排序，从数组第二个元素进行遍历，找出相邻元素之间最大差值
* 时间复杂度O(N)
* 空间复杂度O(N)

```js
var maximumGap = function (nums) {
  let result = 0;
  if (!nums || nums.length < 2) {
    return result;
  }
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    result = Math.max(result, nums[i] - nums[i - 1]);
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/maximum-gap)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
