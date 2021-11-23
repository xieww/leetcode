/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 方法1
// var searchInsert = function (nums, target) {
//   nums.push(target);
//   return nums.sort((a, b) => a - b).indexOf(target);
// };

// 方法2
// var searchInsert = function (nums, target) {
//   nums.push(target);
//   return nums.sort((a, b) => a - b).findIndex((item) => item === target);
// };

// 方法3
// var searchInsert = function (nums, target) {
//   return nums.filter((n) => n < target).length;
// };

// 方法4
// var searchInsert = function (nums, target) {
//   return nums.includes(target)
//     ? nums.indexOf(target)
//     : nums.filter((elem) => elem < target).length;
// };

// 方法5
// function searchInsert(nums, target) {
//   return binarySearch(nums, target, 0, nums.length - 1);
// }

// function binarySearch(array, target, start, end) {
//   // If the target is less then the very last item then insert it at that item index
//   // because anything index less then that has already been confirmed to be less then the target.
//   // Otherwise insert it at that item index + 1
//   // because any index grater then that has already been confirmed to be greater then the target
//   if (start > end) return start;

//   const midPoint = Math.floor((start + end) / 2);

//   // found target
//   if (array[midPoint] === target) return midPoint;

//   // search the left side
//   if (array[midPoint] > target)
//     return binarySearch(array, target, start, midPoint - 1);
//   // search the right side
//   if (array[midPoint] < target)
//     return binarySearch(array, target, midPoint + 1, end);
// }

// 方法6
var searchInsert = function (nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let result = len;
  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};

// var searchInsert = function (nums, target) { // 插入查找
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] > target) {
//           right = mid - 1;
//       } else if (nums[mid] < target) {
//           left = mid + 1;
//       } else {
//           return mid;
//       }
//   }
//   return left;
// };

// var searchInsert = function (nums, target) { // 插入查找
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] >= target) {
//           return i;
//       } 
//   }
//   return nums.length;
// };

console.log("should be 2", searchInsert([1, 3, 5, 6], 5));
console.log("should be 1", searchInsert([1, 3, 5, 6], 2));
console.log("should be 4", searchInsert([1, 3, 5, 6], 7));
console.log("should be 0", searchInsert([1, 3, 5, 6], 0));
