/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};

console.log("should be 6", maximumProduct([1, 2, 3]));
console.log("should be 24", maximumProduct([1, 2, 3, 4]));
console.log("should be 720", maximumProduct([-4, -3, -2, -1, 60]));
