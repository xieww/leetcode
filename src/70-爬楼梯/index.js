/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   const dp = [];
//   dp[0] = 1;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };

// var climbStairs = function (n) {
//   let a = (b = 1);
//   while (n--) {
//     a = (b += a) - a;
//   }
//   return a;
// };

var climbStairs = function (n) {
  if (n <= 2) return n;
  let n1 = 1;
  let n2 = 2;
  let nn = 0;
  for (let i = 3; i <= n; i++) {
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
  }
  return nn;
};

console.log("should be 2", climbStairs(2));
console.log("should be 3", climbStairs(3));
