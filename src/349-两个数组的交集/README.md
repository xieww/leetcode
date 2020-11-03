# 两个数组的交集

给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

## 思路

* 利用filter和includes过滤出存在于nums1中的共同元素
* Set去重结果即为两个数组的交集
* 时间复杂度O(n)

```js
var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter((item) => nums2.includes(item)))];
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/intersection-of-two-arrays)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
