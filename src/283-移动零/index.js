/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = nums.length;
  while (i) {
    i--;
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap elements
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
  return nums;
};

// var moveZeroes = function (nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       if (i !== j) {
//         nums[i] = 0;
//       }
//       j++;
//     }
//   }
//   return nums;
// };

// var moveZeroes = function (nums) {
//   let index = 0;
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] !== 0) {
//       if (index < i) {
//         nums[index] = nums[i];
//         nums[i] = 0;
//       }
//       index++;
//     }
//     i++;
//   }
//   return nums;
// };

// var moveZeroes = function (nums) {
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       if (index < i) {
//         nums[index] = nums[i];
//         nums[i] = 0;
//       }
//       index++;
//     }
//   }
//   return nums;
// };

console.log("should be", moveZeroes([0, 1, 0, 3, 12]));
