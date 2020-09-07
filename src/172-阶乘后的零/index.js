/**
 * @param {number} n
 * @return {number}
 */
// 方法1
// var trailingZeroes = function (n) {
//   let count = 0;
//   for (let i = 5; i <= n; i *= 5) {
//     count += Math.floor(n / i);
//   }
//   return count;
// };

// 方法2
// var trailingZeroes = function (n) {
//   let count = 0;
//   let i = n;
//   while (i > 0) {
//     count += Math.floor(i / 5);
//     i = Math.floor(i / 5);
//   }
//   return count;
// };

// 方法3
// var trailingZeroes = function (n) {
//   if (n === 0) {
//     return 0;
//   }
//   return ~~(n / 5) + trailingZeroes(~~(n / 5));
// };

var trailingZeroes = function (n) {
  var count = 0;
  while (n >= 5) {
    count += (n / 5) | 0;
    n /= 5;
  }
  return count;
};

console.log("should be 0", trailingZeroes(3));
console.log("should be 1", trailingZeroes(5));
console.log("should be 1", trailingZeroes(7));
console.log("should be 7", trailingZeroes(30));
