/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const start = nums.indexOf(target);
  const last = nums.lastIndexOf(target);
  if (start === -1) {
    return [-1, -1];
  }
  return [start, last || start];
};

// var searchRange = function (nums, target) {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       result.push(i);
//     }
//   }
//   return result.length === 0
//     ? [-1, -1]
//     : [result[0], result[result.length - 1]];
// };

// 时间复杂度O(logN)
var searchRange = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    nums[mid] >= target ? (j = mid) : (i = mid + 1);
  }
  if (nums[i] !== target) return [-1, -1];
  let start = i;
  j = nums.length - 1;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    nums[mid] <= target ? (i = mid + 1) : (j = mid);
  }

  let end = nums[i] === target ? i : i - 1;

  return [start, end];
};

// var searchRange = function (nums, target) {
//   let result = [-1, -1];
//   const binarySearch = (nums, target, lower) => {
//     let left = 0;
//     let right = nums.length - 1;
//     let len = nums.length;
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] > target || (lower && nums[mid] >= target)) {
//         right = mid - 1;
//         len = mid;
//       } else {
//         left = mid + 1;
//       }
//     }
//     return len;
//   };

//   const leftIdx = binarySearch(nums, target, true);
//   const rightIdx = binarySearch(nums, target, false) - 1;
//   if (
//     leftIdx <= rightIdx &&
//     rightIdx < nums.length &&
//     nums[leftIdx] === target &&
//     nums[rightIdx] === target
//   ) {
//     result = [leftIdx, rightIdx];
//   }
//   return result;
// };

// var searchRange = function (nums, target) {
//   if (!nums.length) return [-1, -1];
//   let left = 0;
//   let right = nums.length - 1;
//   let start = 0;
//   let end = 0;
//   while (left <= right) {
//     let mid = (left + (right - left) / 2) | 0;
//     if (nums[mid] === target) {
//       start = mid;
//       end = mid;
//       while (start > left && nums[start] === nums[start - 1]) start--;
//       while (end < right && nums[end] === nums[end + 1]) end++;
//       return [start, end];
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return [-1, -1];
// };

console.log("should be [ 3, 4 ]", searchRange([5, 7, 7, 8, 8, 10], 8));
console.log("should be [ -1, -1 ]", searchRange([5, 7, 7, 8, 8, 10], 6));
console.log("should be [ -1, -1 ]", searchRange([], 0));
