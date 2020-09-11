/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const dfs = function (id, n, current) {
    if (n === 0) {
      result.push(current);
      return true;
    }
    for (let i = id; i < candidates.length; i++) {
      if (candidates[i] <= n) {
        dfs(i, n - candidates[i], [...current, candidates[i]]);
      }
    }
    return false;
  };
  dfs(0, target, []);
  return result;
};

console.log("should be", combinationSum([2, 3, 6, 7], 7));
console.log("should be", combinationSum([2, 3, 5], 8));
