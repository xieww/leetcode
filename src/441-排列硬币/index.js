/**
 * @param {number} n
 * @return {number}
 */
// 方法1
var arrangeCoins = function (n) {
  let stairs = 0;
  while (stairs <= n) {
    n -= stairs;
    stairs++;
  }
  return stairs - 1;
};

// 方法2
var arrangeCoins = function (n) {
  return Math.floor(Math.sqrt(2 * n + 1 / 4) - 1 / 2);
};

// 方法3
var arrangeCoins = function (n) {
  let guess = Math.round(Math.sqrt(2 * n));
  let used_coins = (guess * (guess + 1)) / 2;
  while (used_coins <= n) {
    guess++;
    used_coins = guess * (guess + 1); // 2;
  }
  return guess > 0 ? guess - 1 : 0;
};
console.log("should be 2", arrangeCoins(5));
