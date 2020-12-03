# 计数质数

统计所有小于非负整数 n 的质数的数量。

示例 1：

```text
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

示例 2：

```text
输入：n = 0
输出：0
```

示例 3：

```text
输入：n = 1
输出：0
```

提示：

0 <= n <= 5 \* 106

## 思路

```js
var countPrimes = function (n) {
  if (n < 3) {
    return 0;
  }
  const arr = new Array(n).fill(false);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!arr[i]) {
      count++;
      for (let j = 2; i * j < n; j++) {
        arr[i * j] = true;
      }
    }
  }
  return count;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/count-primes)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
