/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function (nums) {
//   if (!nums) {
//     return false;
//   }
//   const sum = nums.reduce((sum, item) => sum + item, 0);
//   if (sum % 2 !== 0) {
//     return false;
//   }
//   const len = sum / 2;
//   let arr = new Array(len + 1).fill(false);
//   arr[0] = true;
//   for (const item of nums) {
//     for (let i = len; i >= 0; i--) {
//       const element = i - item;
//       if (!arr[i] && arr[element]) {
//         arr[i] = true;
//       }
//       if (arr[len]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// var canPartition = function (nums) {
//   if (!nums) {
//     return false;
//   }
//   const sum = nums.reduce((sum, item) => sum + item, 0);
//   if (sum % 2 !== 0) {
//     return false;
//   }
//   const len = sum / 2;
//   let arr = new Array(len + 1).fill(false);
//   arr[0] = true;
//   for (const item of nums) {
//     for (let i = sum; i > 0; i--) {
//       if (item <= i) {
//         arr[i] = arr[i] || arr[i - item];
//       }
//     }
//   }
//   return arr[sum];
// };

var canPartition = (nums) => {
  if (!nums) {
    return false;
  }
  const sum = nums.reduce((sum, item) => sum + item, 0);
  if (sum % 2 != 0) return false; // 如果 sum 为奇数，直接返回 false

  const target = sum / 2; // 目标和
  const memo = new Map();

  const helper = (curSum, i) => {
    const state = curSum + "&" + i; // 描述一个问题的key
    if (memo.has(state)) {
      // 如果memo中有对应的缓存值，直接使用
      return memo.get(state);
    }
    if (i > nums.length - 1 || curSum > target) {
      return false;
    }
    if (curSum == target) {
      return true;
    }
    // 选nums[i]，当前和变为curSum+nums[i]，考察的指针移动一位
    // 不选nums[i]，当前和还是curSum，考察的指针移动一位
    const res = helper(curSum + nums[i], i + 1) || helper(curSum, i + 1);
    memo.set(state, res); // 计算的结果存入memo
    return res;
  };

  return helper(0, 0); // 递归的入口，当前和为0，指针为0
};

console.log("should be true", canPartition([1, 5, 11, 5]));
console.log("should be false", canPartition([1, 2, 3, 5]));
