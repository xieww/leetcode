# 四数相加 II

给定四个包含整数的数组列表  A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得  A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过  231 - 1 。

例如:

```text
输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

输出:
2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
```

## 思路

- 将数组分为两部分，A、B 为一组，C、D 为一组，双层 for 循环遍历 A 和 B，A[i]、B[j]相加的结果存入 map，key 为 A[i]+B[j]的和，value 为 A[i]+B[j]出现的次数
- 双层 for 循环 C 和 D，若 map 中存在 key 为-(C[k]+D[l])的元素，则取出对应的值累加到结果上，遍历结束返回最终结果即可
- 时间复杂度 O(n^2)
- 空间复杂度 O(n^2)

```js
var fourSumCount = function (A, B, C, D) {
  const map = new Map();
  for (const num1 of A) {
    for (const num2 of B) {
      const sum = num1 + num2;
      if (!map.has(sum)) {
        map.set(sum, 0);
      }
      map.set(sum, map.get(sum) + 1);
    }
  }

  let total = 0;
  for (const num1 of C) {
    for (const num2 of D) {
      const num = -1 * (num1 + num2);
      if (map.has(num)) {
        total += map.get(num);
      }
    }
  }
  return total;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/4sum-ii)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
