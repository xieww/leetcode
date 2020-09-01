/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const helper = (l, r) => {
    // l r是两端的索引
    if (l == r) {
      // 递归的出口，当l===r时，只有一个选择，并且没有剩余可选
      return nums[l];
    }
    const pickL = nums[l] - helper(l + 1, r); // 选择左端
    const pickR = nums[r] - helper(l, r - 1); // 选择右端
    return Math.max(pickL, pickR);
  };
  return helper(0, nums.length - 1) >= 0;
};

console.log("should be false", PredictTheWinner([1, 5, 2]));
console.log("should be true", PredictTheWinner([1, 5, 233, 7]));
