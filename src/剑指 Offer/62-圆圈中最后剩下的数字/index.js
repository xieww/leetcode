/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 时间复杂度O(n)，空间复杂度(n)
// var lastRemaining = function (n, m) {
//   const helper = function (n, m) {
//     if (n === 1) {
//       return 0;
//     }
//     const x = helper(n - 1, m);
//     return (m + x) % n;
//   };
//   return helper(n, m);
// };

// 时间复杂度O(n)，空间复杂度O(1)
var lastRemaining = function (n, m) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (result + m) % i;
  }
  return result;
};

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));
