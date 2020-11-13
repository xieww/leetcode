# 按奇偶排序数组 II

给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当  A[i] 为奇数时，i  也是奇数；当  A[i]  为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

```text
示例：

输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
```

提示：

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

## 思路

* 双指针解法
* 时间复杂度O(N)，N为A的长度
* 空间复杂度O(1)

```js
var sortArrayByParityII = function (A) {
  let i = 0;
  let j = 1;
  let len = A.length;
  while (i < len && j < len) {
    if (A[i] % 2 === 0) {
      i += 2;
    } else if (A[j] % 2 === 1) {
      j += 2;
    } else {
      [A[j], A[i]] = [A[i], A[j]];
      i += 2;
      j += 2;
    }
  }
  return A;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/sort-array-by-parity-ii)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
