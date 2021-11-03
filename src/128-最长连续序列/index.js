/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;
//   let count = 1;
//   let maxCount = 1;
//   nums = [...new Set(nums)].sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] - nums[i] === 1) {
//       count++;
//     } else {
//       if (count > maxCount) {
//         maxCount = count;
//       }
//       count = 1;
//     }
//   }
//   return Math.max(count, maxCount);
// };

var longestConsecutive = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }

  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
