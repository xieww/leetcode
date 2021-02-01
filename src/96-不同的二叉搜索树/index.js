/**
 * 递归
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const arr = new Array(n + 1).fill(0);
  const memo = arr.map(() => new Array(n + 1).fill(0));
  const helper = (lo, hi) => {
    if (lo > hi) {
      return 1;
    }
    if (memo[lo][hi] != 0) {
      return memo[lo][hi];
    }
    let result = 0;
    for (let i = lo; i <= hi; i++) {
      const left = helper(lo, i - 1);
      const right = helper(i + 1, hi);
      result += left * right;
    }
    memo[lo][hi] = result;
    return result;
  };
  return helper(1, n);
};

//动态规划 时间复杂度O(n^2)，空间复杂度O(1)
var numTrees = function (n) {
  const result = new Array(n + 1).fill(0);
  result[0] = 1;
  result[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      result[i] += result[j - 1] * result[i - j];
    }
  }
  return result[n];
};

// 时间复杂度O(n)，空间复杂度O(1)
var numTrees = function (n) {
  let result = 1;
  for (let i = 0; i < n; ++i) {
    result = (result * 2 * (2 * i + 1)) / (i + 2);
  }
  return result;
};

console.log(numTrees(5));
