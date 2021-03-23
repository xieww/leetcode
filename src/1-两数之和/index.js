/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   var temp = [];
//   for (var i = 0; i < nums.length; i++) {
//     var dif = target - nums[i];
//     if (temp[dif] !== undefined) {
//       return [temp[dif], i];
//     }
//     temp[nums[i]] = i;
//   }
// };

// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const dif = target - nums[i];
//     if (map.has(dif)) {
//       return [map.get(dif), i];
//     }
//     map.set(nums[i], i);
//   }
// };

var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const dif = target - nums[i];
    if (obj[dif] !== undefined) {
      return [obj[dif], i];
    }
    obj[nums[i]] = i;
  }
};

console.log("should be [0, 1]", twoSum([2, 7, 11, 15], 9));
