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

// var lastRemaining = function (n, m) {
//   const arr = new Array(n).fill().map((_, index) => index);
//   let count = 0;
//   let i = 0;
//   while (arr.length > 1) {
//     count++;
//     i += m - 1;
//     i = i % arr.length;
//     arr.splice(i, 1);
//   }
//   return arr[0];
// };

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));
