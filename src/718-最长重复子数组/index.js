/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// var findLength = function (A, B) {
//   if (!A || !B) {
//     return 0;
//   }
//   let m = A.length;
//   let n = B.length;
//   let max = 0;
//   const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++) {
//       if (i === 0 || j === 0) {
//         dp[i][j] = 0;
//       } else {
//         if (A[i - 1] === B[j - 1]) {
//           dp[i][j] = 1 + dp[i - 1][j - 1];
//           max = Math.max(max, dp[i][j]);
//         }
//       }
//     }
//   }
//   return max;
// };

var findLength = function (A, B) {
  if (!A || !B) {
    return 0;
  }
  let m = A.length;
  let n = B.length;
  let max = 0;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max;
};

console.log("should be 3", findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
