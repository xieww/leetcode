/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法1
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);
};

// 方法2
// var arrayPairSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!(i % 2)) {
//       sum += nums[i];
//     }
//   }
//   return sum;
// };

// 方法3
// var arrayPairSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i < nums.length; i = i + 2) {
//     sum += nums[i];
//   }
//   return sum;
// };

// 方法4
// var arrayPairSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   let sum = 0;
//   for (const i in nums) {
//     if (!(i % 2)) {
//       sum += nums[i];
//     }
//   }
//   return sum;
// };

// 方法5
// var arrayPairSum = function (nums) {
//   return nums
//     .sort((a, b) => a - b)
//     .filter((x, index) => index % 2 === 0)
//     .reduce((a, b) => a + b);
// };

console.log("should be 4", arrayPairSum([1, 4, 3, 2]));
//[0,9] [27,33] [111,249]
console.log("should be 138", arrayPairSum([111, 33, 0, 249, 9, 27]));
console.log("should be 33", arrayPairSum([111, 33]));
console.log("should be 302", arrayPairSum([111, 33, 269]));