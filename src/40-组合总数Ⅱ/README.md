# 组合总数 II

```text
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
```

## 思路

```js
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const dfs = function (id, n, current) {
    if (n === 0) {
      result.push(current);
      return;
    }
    for (let i = id; i < candidates.length; i++) {
      if (candidates[i] <= n) {
        dfs(i + 1, n - candidates[i], [...current, candidates[i]]);
      }
      while (candidates[i + 1] === candidates[i]) {
        i++;
      }
    }
    return result;
  };
  dfs(0, target, []);
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/combination-sum-ii)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
