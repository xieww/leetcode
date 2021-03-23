/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
};

// var threeSum = function (nums) {
//   const results = [];

//   if (nums.length < 3) return results;
//   nums = nums.sort((a, b) => a - b);
//   let target = 0;

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] > target) break;
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let j = i + 1;

//     let k = nums.length - 1;

//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k];

//       if (sum === target) {
//         // store the valid threesum
//         results.push([nums[i], nums[j], nums[k]]);
//         while (nums[j] === nums[j + 1]) j++;
//         while (nums[k] === nums[k - 1]) k--;
//         j++;
//         k--;
//       } else if (sum < target) {
//         j++;
//       } else {
//         // (sum > target)
//         k--;
//       }
//     }
//   }

//   return results;
// };

// var threeSum = function (nums) {
//   var result = [];
//   if (nums.length < 3 || nums === null) return [];
//   nums = nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     const target = 0 - nums[i];
//     let j = i + 1;
//     let k = nums.length - 1;
//     while (j < k) {
//       if (nums[j] + nums[k] === target) {
//         result.push([nums[i], nums[j], nums[k]]);
//         while (j < k && nums[j] === nums[j + 1]) j++;
//         while (j < k && nums[k] === nums[k - 1]) k--;
//         j++;
//         k--;
//       } else if (nums[j] + nums[k] < target) {
//         j++;
//       } else {
//         k--;
//       }
//     }
//   }
//   return result;
// };

// var threeSum = function (nums) {
//   let set = new Set(); // 使用 Set() 即可满足需求, 相对节省内存
//   let result = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     while (nums[i] === nums[i - 1]) {
//       i++;
//     } // 去重
//     // 第一个数
//     let first = nums[i];
//     let j = i + 1;
//     while (j < nums.length) {
//       // 第三个数
//       let second = 0 - nums[j] - first;
//       let third = nums[j];

//       if (set.has(second)) {
//         result.push([first, second, third]);

//         set.add(third);
//         j++;

//         while (nums[j] === nums[j - 1]) {
//           j++;
//         } // 去重
//       } else {
//         set.add(third);
//         j++;
//       }
//     }
//     set = new Set();
//   }
//   return result;
// };

console.log("should be ", threeSum([-1, 0, 1, 2, -1, -4]));
