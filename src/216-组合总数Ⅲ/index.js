/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 方法1
// var combinationSum3 = function (k, n) {
//   const result = [];
//   var helper = (from, prefix, k, n) => {
//     if (k === 0 && n === 0) return result.push(prefix);
//     if (from > 9) return;
//     prefix.push(from);
//     helper(from + 1, prefix.slice(0), k - 1, n - from);
//     prefix.pop();
//     helper(from + 1, prefix.slice(0), k, n);
//   };
//   helper(1, [], k, n);
//   return result;
// };

// 方法2
var combinationSum3 = function (k, n) {
  let result = [];

  var dfs = (arr, idx, sum = 0) => {
    if (arr.length === k && sum === n) { // 组合数组长度等于k并且组合中元素相加和等于n时结束本次循环
      result.push(arr);
      return;
    }
    for (let i = idx; i < 10; i++) {
      if (sum + i <= n) { // 组合中所有元素和小于n递归调用dfs
        dfs([...arr, i], i + 1, sum + i);
      }
    }
  };

  dfs([], 1, 0);

  return result;
};

console.log("should be", combinationSum3(3, 7));
console.log("should be", combinationSum3(3, 9));
