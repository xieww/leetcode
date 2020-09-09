/**
 * @param {number} n
 * @return {boolean}
 */
// 方法1 时间复杂度O(1),空间复杂度O(1)
// var canWinNim = function (n) {
//   return n % 4 !== 0;
// };

const memo = { 0: false, 1: true, 2: true, 3: true, 4: false };

// 方法2 时间复杂度O(n),空间复杂度O(n)
var canWinNim = function (n) {
  if (memo[n] === undefined) {
    memo[n] = !canWinNim(n - 3) || !canWinNim(n - 2) || !canWinNim(n - 1);
  }
  return memo[n];
};

// 方法3 时间复杂度O(1),空间复杂度O(1)
// var canWinNim = function (n) {
//   n %= 4;
//   if (memo[n] === undefined) {
//     memo[n] = !canWinNim(n - 3) || !canWinNim(n - 2) || !canWinNim(n - 1);
//   }
//   return memo[n];
// };

console.log("should be false", canWinNim(4));
console.log("should be true", canWinNim(5));
