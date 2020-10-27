/**
 * 方法1，双层for循环
 * @param {number[]} nums
 * @return {number[]}
 */
// var smallerNumbersThanCurrent = function (nums) {
//   const result = new Array(nums.length).fill(0);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         result[i] += 1;
//       }
//     }
//   }
//   return result;
// };

// 方法2
// var smallerNumbersThanCurrent = function (nums) {
//   const arr = [...nums].sort((a, b) => a - b);
//   return nums.map((item) => arr.indexOf(item));
// };

// 方法3
// var smallerNumbersThanCurrent = function (nums) {
//   const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
//   const map = new Map(
//     sorted.map((num, index) => [num, nums.length - index - 1])
//   );
//   return nums.map((num) => map.get(num));
// };

// 方法4
// var smallerNumbersThanCurrent = (nums) =>
//   ((map) => nums.map((n) => map.get(n)))(
//     new Map(
//       [...nums]
//         .sort((a, b) => a - b)
//         .map((val, idx) => [val, idx])
//         .reverse()
//     )
//   );

// 方法5
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((n) => nums.reduce((a, b) => a + (n > b ? 1 : 0), 0));
};

console.log("should be ", smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log("should be ", smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log("should be ", smallerNumbersThanCurrent([7, 7, 7, 7]));
