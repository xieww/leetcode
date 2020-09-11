/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
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

// var combinationSum2 = function (candidates, target) {
//   let results = [];
//   candidates.sort((a, b) => a - b);

//   const helper = (start, target, combinations = []) => {
//     if (target === 0) {
//       results.push([...combinations]);
//       return;
//     }

//     for (
//       let i = start;
//       i < candidates.length && target - candidates[i] >= 0;
//       i++
//     ) {
//       if (i > start && candidates[i] === candidates[i - 1]) continue;

//       helper(i + 1, target - candidates[i], [...combinations, candidates[i]]);
//     }
//   };

//   helper(0, target);
//   return results;
// };

console.log("should be", combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log("should be", combinationSum2([2, 5, 2, 1, 2], 5));
