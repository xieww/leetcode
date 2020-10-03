# 最小移动次数使数组元素相等

```text
给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。

示例:

输入:
[1,2,3]

输出:
3

解释:
只需要3次移动（注意每次移动会增加两个元素的值）：

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

## 思路

- 先找出数组中最小值，n-1 个元素都+1，等价于只将一个元素-1，等价于所有的数与最小值的差值的和
- 时间复杂度 O(n)

```js
var minMoves = function (nums) {
  const min = Math.min(...nums);
  let result = 0;
  for (const item of nums) {
    result += item - min;
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
