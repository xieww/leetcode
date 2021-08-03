/**
 * 时间复杂度O(n),空间复杂度O(1)
 * @param {number[]} nums
 * @return {number}
 */
// var findUnsortedSubarray = function (nums) {
//   if (!nums || nums.length <= 1) {
//     return 0;
//   }

//   let len = nums.length;
//   let beg = -1;
//   let end = -2;
//   let min = nums[len - 1];
//   let max = nums[0];
//   for (let i = 1; i < len; i++) {
//     max = Math.max(max, nums[i]);
//     min = Math.min(min, nums[len - 1 - i]);
//     if (nums[i] < max) {
//       end = i;
//     }
//     if (nums[len - 1 - i] > min) {
//       beg = len - 1 - i;
//     }
//   }
//   return end - beg + 1;
// };

// var findUnsortedSubarray = function (nums) {
//   let len = nums.length - 1;
//   let left = -1;
//   let right = -1;
//   let max = nums[0];
//   let min = nums[len];
//   for (let i = 1; i <= len; i++) {
//     let a = nums[i];
//     let b = nums[len - i];
//     a < max ? (right = i) : (max = a);
//     b > min ? (left = i) : (min = b);
//   }
//   return Math.max(0, left + right - len + 1);
// };

var findUnsortedSubarray = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let end = -1;
  let start = 0;
  let min = Infinity;
  let max = -Infinity;

  while (right >= 0) {
    nums[left] >= max ? (max = nums[left]) : (end = left);
    nums[right] <= min ? (min = nums[right]) : (start = right);
    left++;
    right--;
  }

  return end - start + 1;
};

// const findUnsortedSubarray = (nums) =>
//   nums
//     .slice()
//     .sort((a, b) => a - b)
//     .reduce((acc, curr, idx) => acc + (curr === nums[idx] ? " " : "x"), "")
//     .trim().length;

// const findUnsortedSubarray = (nums) => {
//   return [...nums]
//     .sort((a, b) => a - b)
//     .reduce((acc, curr, idx) => acc + (curr === nums[idx] ? " " : "x"), "")
//     .trim().length;
// };

console.log("should be 5", findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log("should be 0", findUnsortedSubarray([1, 2, 3, 4]));
console.log("should be 0", findUnsortedSubarray([1]));
