/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) {
    return 0;
  }
  let dp = new Array(obstacleGrid.length)
    .fill()
    .map((row) => new Array(obstacleGrid[0].length).fill(0));
  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      let up = i - 1 >= 0 && obstacleGrid[i - 1][j] !== 1 ? dp[i - 1][j] : 0;
      let left = j - 1 >= 0 && obstacleGrid[i][j - 1] !== 1 ? dp[i][j - 1] : 0;
      dp[i][j] += +up + left;
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
