/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  const n = ring.length;
  const m = key.length;
  const dp = new Array(m + 1).fill(0);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n).fill(0);
  }

  for (let j = m - 1; j >= 0; j--) {
    for (let k = 0; k < n; k++) {
      dp[j][k] = Number.MAX_SAFE_INTEGER;
      for (let l = 0; l < n; l++) {
        if (ring.charAt(l) === key.charAt(j)) {
          let diff = Math.abs(k - l);
          let step = Math.min(diff, n - diff);
          dp[j][k] = Math.min(dp[j][k], step + dp[j + 1][l]);
        }
      }
    }
  }

  return dp[0][0] + m;
};

// const getIdx = (str, v) => str.codePointAt(v) - "a".codePointAt(0);
// var findRotateSteps = function (ring, key) {
//   const n = ring.length;
//   const m = key.length;
//   const pos = new Array(26).fill(0).map((v) => []);
//   for (let i = 0; i < n; ++i) {
//     pos[getIdx(ring, i)].push(i);
//   }
//   const dp = new Array(m)
//     .fill(0)
//     .map((v) => new Array(n).fill(Number.MAX_SAFE_INTEGER));
//   for (const i of pos[getIdx(key, 0)]) {
//     dp[0][i] = Math.min(i, n - i) + 1;
//   }
//   for (let i = 1; i < m; ++i) {
//     for (const j of pos[getIdx(key, i)]) {
//       for (const k of pos[getIdx(key, i - 1)]) {
//         dp[i][j] = Math.min(
//           dp[i][j],
//           dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1
//         );
//       }
//     }
//   }
//   return dp[m - 1].reduce(
//     (pre, cur) => Math.min(pre, cur),
//     Number.MAX_SAFE_INTEGER
//   );
// };

console.log("should be 4", findRotateSteps("godding", "gd"));
