/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let result = 0;
  if (!nums || nums.length < 2) {
    return result;
  }
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    result = Math.max(result, nums[i] - nums[i - 1]);
  }
  return result;
};

console.log("should be 3", maximumGap([3, 6, 9, 1]));
console.log("should be 0", maximumGap([10]));
