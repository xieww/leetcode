/**
 * @param {number[]} nums
 * @return {number}
 */
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

var maxSubArray = function (nums) {
  let max = nums[0];
  let current = Math.max(max, 0);

  for (let i = 1; i < nums.length; i += 1) {
    current += nums[i];
    max = Math.max(max, current);
    current = Math.max(current, 0);
  }

  return max;
};

console.log("should be 6 ", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
