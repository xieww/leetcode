/**
 * 时间复杂度O(n^2), 空间复杂度O(1)
 * @param {number[]} nums
 * @return {number}
 */
// var triangleNumber = function (nums) {
//   let count = 0;
//   if (nums.length < 3) {
//     return count;
//   }
//   nums.sort((a, b) => a - b);
//   let len = nums.length;
//   for (let i = len - 1; i >= 2; i--) {
//     let l = 0;
//     let r = i - 1;
//     while (l < r) {
//       if (nums[l] + nums[r] > nums[i]) {
//         count += r - l;
//         r--;
//       } else {
//         l++;
//       }
//     }
//   }
//   return count;
// };

// var triangleNumber = function (nums) {
//   let count = 0;
//   if (nums.length < 3) {
//     return count;
//   }
//   nums.sort((a, b) => a - b);

//   for (let k = nums.length - 1; k > 1; k--) {
//     for (let i = 0, j = k - 1; i < j; ) {
//       if (nums[i] + nums[j] > nums[k]) {
//         count += j - i;
//         j--;
//       } else {
//         i++;
//       }
//     }
//   }

//   return count;
// };

var triangleNumber = function (nums) {
  let count = 0;
  if (nums.length < 3) {
    return count;
  }
  nums.sort((a, b) => a - b);

  for (let i = 2; i < nums.length; i++) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return count;
};

console.log(triangleNumber([2, 2, 3, 4]));
