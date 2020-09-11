# 组合总数 III

```text
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: k = 3, n = 7
输出: [[1,2,4]]
示例 2:

输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
```

## 思路

```js
var combinationSum3 = function (k, n) {
  let result = [];

  var dfs = (arr, idx, sum = 0) => {
    if (arr.length === k && sum === n) {
      result.push([...arr]);
      return;
    }
    for (let i = idx; i < 10; i++) {
      if (sum + i <= n) {
        dfs([...arr, i], i + 1, sum + i);
      }
    }
  };

  dfs([], 1, 0);

  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/combination-sum-iii)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
