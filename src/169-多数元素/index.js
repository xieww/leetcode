/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   const length = nums.length;
//   let result = 0;
//   const obj = {};
//   nums.forEach((item) => {
//     obj[item] = obj[item] ? obj[item] + 1 : 1;
//     if (obj[item] > length / 2) {
//       result = item;
//     }
//   });
//   return result;
// };

// var majorityElement = function (nums) {
//   const length = nums.length;
//   let result = 0;
//   const obj = {};
//   let i = 0;
//   while (i < length) {
//     const item = nums[i];
//     obj[item] = obj[item] ? obj[item] + 1 : 1;
//     if (obj[item] > length / 2) {
//       result = item;
//     }
//     i++;
//   }
//   return result;
// };

var majorityElement = function (nums) {
  const length = nums.length;
  let result = 0;
  const obj = {};
  for (const item of nums) {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
    if (obj[item] > length / 2) {
      result = item;
    }
  }
  return result;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
