/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法1
// var minMoves = function (nums) {
//   if (!nums || nums.length <= 1) {
//     return 0;
//   }
//   let min = nums[0];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     min = Math.min(min, nums[i]);
//   }
//   return sum - min * nums.length;
// };

// 方法2
var minMoves = function (nums) {
  const min = Math.min(...nums);
  let result = 0;
  for (const item of nums) {
    result += item - min;
  }
  return result;
};

console.log("should be 3 ", minMoves([1, 2, 3]));
