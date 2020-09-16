/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法1
// var maxSubArray = function (nums) {
//   // let prev = nums.shift();
//   // let max = prev;
//   let prev = 0;
//   let max = -Number.MAX_VALUE;
//   for (let i = 0; i < nums.length; i++) {
//     prev = Math.max(prev + nums[i], nums[i]);
//     max = Math.max(max, prev);
//   }
//   return max;
// };

// 方法2
// var maxSubArray = function (nums) {
//   let max = nums[0];
//   let current = Math.max(max, 0);

//   for (let i = 1; i < nums.length; i++) {
//     current += nums[i];
//     max = Math.max(max, current);
//     current = Math.max(current, 0);
//   }

//   return max;
// };

// 方法3
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

console.log("should be 6 ", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
