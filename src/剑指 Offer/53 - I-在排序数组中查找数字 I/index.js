/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   let counter = 0;
//   for (const item of nums) {
//     if (item === target) {
//       counter++;
//     }
//   }
//   return counter;
// };

// var search = function (nums, target) {
//   return nums.filter((item) => item === target)?.length || 0;
// };

// 双指针
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (nums[left] < target) {
//     left++;
//   }
//   while (nums[right] > target) {
//     right--;
//   }
//   return right - 1 >= 0 ? right - left + 1 : 0;
// };

// 二分查找
var search = function (nums, target) {
  const length = nums.length;
  let start = -1;
  let end = -1;

  let left = 0;
  let right = length - 1;
  // 找到左边界：找到第一次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1; // important
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  left = 0;
  right = length - 1;
  // 找到右边界：找到第2次出现
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1; // important
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return start <= end && start !== -1 ? end - start + 1 : 0;
};

const arr = [5, 7, 7, 8, 8, 10];
console.log(search(arr, 8));
console.log(search(arr, 6));
