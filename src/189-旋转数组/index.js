/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法1
// var rotate = function (nums, k) {
//   if (!nums || nums.length <= 1) {
//     return nums;
//   }
//   const arr = nums.splice(nums.length - k);
//   nums.splice(0, 0, ...arr);
//   return nums;
// };

// 方法2
// var rotate = function (nums, k) {
//   if (!nums || nums.length <= 1) {
//     return nums;
//   }
//   const arr = nums.splice(nums.length - k);
//   nums.unshift(...arr);
//   return nums;
// };

// 方法3
// var rotate = function (nums, k) {
//   if (!nums || nums.length <= 1) {
//     return nums;
//   }
//   const arr = nums.splice(0, nums.length - k);
//   nums.push(...arr);
//   return nums;
// };

// 方法4
// var rotate = function (nums, k) {
//   if (!nums || nums.length <= 1) {
//     return nums;
//   }
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// };

// 方法5
// var rotate = function (nums, k) {
//   if (!nums || nums.length <= 1) {
//     return nums;
//   }
//   for (let i = 0; i < nums.length - k; i++) {
//     nums.push(nums.shift());
//   }
//   return nums;
// };

// 方法6
var rotate = function (nums, k) {
  if (!nums || nums.length <= 1) {
    return nums;
  }
  for (let i = 0; i < k; i++) {
    let prev = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      let temp = nums[j];
      nums[j] = prev;
      prev = temp;
    }
  }
  return nums;
};

console.log("[5,6,7,1,2,3,4]", rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log("[3,99,-1,-100]", rotate([-1, -100, 3, 99], 2));
