/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function (leaves) {
  var len = leaves.length;
  // 初始状态不可能为 2, 3，设置为 Infinity
  var dp = [leaves[0] === "r" ? 0 : 1, Infinity, Infinity];

  for (var i = 1; i < len; i++) {
    var isRed = leaves[i] === "r";
    dp = [
      dp[0] + (isRed ? 0 : 1),
      Math.min(dp[0], dp[1]) + (isRed ? 1 : 0),
      Math.min(dp[1], dp[2]) + (isRed ? 0 : 1),
    ];
  }

  return dp[2];
};

console.log("should be 2", minimumOperations("rrryyyrryyyrr"));
