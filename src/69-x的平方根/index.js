/**
 * @param {number} x
 * @return {number}
 */
// 方法1
// var mySqrt = function (x) {
//   let left = 1;
//   let right = Math.floor(x / 2) + 1;
//   let mid;
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (mid * mid > x) {
//       right = mid - 1;
//     } else if (mid * mid < x) {
//       left = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return right;
// };

// 方法2
var mySqrt = function (x) {
  let result = 1;
  // result ** 2等同于result*result
  while (result ** 2 <= x) {
    result++;
  }
  return result - 1;
};

// 方法3
// var mySqrt = function (x) {
//   let left = 0;
//   let right = x;
//   while (left <= right) {
//     const mid = parseInt((left + right) / 2);
//     if (mid * mid === x) {
//       return mid;
//     }
//     if (x < mid * mid) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return right;
// };

console.log("should be 0", mySqrt(0));
console.log("should be 2", mySqrt(4));
console.log("should be 2", mySqrt(7));
console.log("should be 2", mySqrt(8));
console.log("should be 3", mySqrt(9));
