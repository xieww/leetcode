var maximalSquare = function (matrix) {
  if (!matrix.length) return 0;
  let dp = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0));
  let max = 0;
  for (let r = 1; r < dp.length; r++) {
    for (let c = 1; c < dp[0].length; c++) {
      if (matrix[r - 1][c - 1] != 0) {
        dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c], dp[r - 1][c - 1]) + 1;
        max = Math.max(dp[r][c], max);
      }
    }
  }
  return max ** 2;
};

var maximalSquare = function (matrix) {
  let max = 0;
  const dp = [...Array(matrix.length)].map((e) => Array(matrix[0].length));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        if (matrix[i][j] === "1") {
          dp[i][j] = 1;
          max = Math.max(max, 1);
        } else {
          dp[i][j] = 0;
        }
      } else {
        if (matrix[i][j] === "1") {
          dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
          max = Math.max(max, dp[i][j]);
        } else {
          dp[i][j] = 0;
        }
      }
    }
  }

  return max ** 2;
};
