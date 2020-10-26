# 数组中的最长山脉

我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：

B.length >= 3
存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
（注意：B 可以是 A 的任意子数组，包括整个数组 A。）

给出一个整数数组 A，返回最长 “山脉”  的长度。

如果不含有 “山脉”  则返回 0。

示例 1：

输入：[2,1,4,7,3,2,5]
输出：5
解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
示例 2：

输入：[2,2,2]
输出：0
解释：不含 “山脉”。

提示：

0 <= A.length <= 10000
0 <= A[i] <= 10000

## 思路

- 若数组长度小于 3，则不存在符合条件的山脉
- L、R 分别记为左右指针，从第二个元素开始遍历数组
- 当 A[L]小于 A[i]，A[R]小于 A[i]时，
  - 若 A[L - 1] < A[L] && L > 0，左指针前移减一，
  - 若 A[R + 1] < A[R] && R < A.length，右指针后移加一
  - 每次循环保留最大值即为最终结果

```js
var longestMountain = function (A) {
  if (A.length < 3) return 0;
  let L;
  let R;
  let result = 0;
  for (let i = 1; i < A.length - 1; i++) {
    L = i - 1;
    R = i + 1;
    if (A[L] < A[i] && A[R] < A[i]) {
      while (A[L - 1] < A[L] && L > 0) L--;
      while (A[R + 1] < A[R] && R < A.length) R++;
      result = Math.max(result, R - L + 1);
    }
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/longest-mountain-in-array)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
