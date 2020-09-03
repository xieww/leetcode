/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法1
// var findDisappearedNumbers = function (nums) {
//   const arr = Array.from(new Array(nums.length + 1).keys()).slice(1);
//   nums = [...new Set(nums)];
//   return arr.filter((item) => nums.indexOf(item) === -1);
// };

// 方法2
var findDisappearedNumbers = function (nums) {
  const length = nums.length;
  if (!length) {
    return [];
  }

  nums.forEach((item) => {
    // 将下标为 abs(num) - 1 的元素变成负数
    const absNum = Math.abs(item);
    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] *= -1;
    }
  });

  const result = [];
  nums.forEach((item, index) => {
    if (item > 0) {
      result.push(index + 1);
    }
  });

  return result;
};

// 方法3
// var findDisappearedNumbers = function (nums) {
//   const length = nums.length;
//   if (!length) {
//     return [];
//   }

//   nums.forEach((num) => {
//     // 将下标为 abs(num) - 1 的元素变成负数
//     const absNum = Math.abs(num);
//     if (nums[absNum - 1] > 0) {
//       nums[absNum - 1] *= -1;
//     }
//   });

//   const result = [];
//   // 针对“数组下标”进行遍历
//   for (let i = 1; i <= length; ++i) {
//     // 如果下标 i-1 的元素是正数，说明整数 i 没出现过（要不然前面循环就变成负数了）
//     if (nums[i - 1] > 0) {
//       result.push(i);
//     }
//   }

//   return result;
// };

console.log(
  "should be [5,6]",
  findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
);
