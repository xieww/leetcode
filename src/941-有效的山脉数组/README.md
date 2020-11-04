# 有效的山脉数组

给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

A.length >= 3
在  0 < i < A.length - 1  条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

![图例](./hint_valid_mountain_array.png)

示例 1：

输入：[2,1]
输出：false
示例 2：

输入：[3,5,5]
输出：false
示例 3：

输入：[0,3,2,1]
输出：true

提示：

0 <= A.length <= 10000
0 <= A[i] <= 10000

## 思路

- 双指针，左指针能爬高向右移，右指针能爬高向左移，当两个指针相遇即为山顶
- 山顶不能是数组的两端，即 0 < 山顶 > A.length
- 时间复杂度 O(N)
- 空间复杂度 O(1)

```js
var validMountainArray = (A) => {
  const n = A.length;
  if (n < 3) {
    return false;
  }
  let i = 0;
  let j = n - 1;
  while (i + 1 < n && A[i] < A[i + 1]) {
    i++;
  }
  while (j - 1 >= 0 && A[j - 1] > A[j]) {
    j--;
  }
  if (i !== 0 && i === j && j !== n - 1) {
    return true;
  }
  return false;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/valid-mountain-array)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
