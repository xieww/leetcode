/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一
// var exchange = function (nums) {
//   const arr1 = [];
//   const arr2 = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       arr1.push(nums[i]);
//     } else {
//       arr2.push(nums[i]);
//     }
//   }
//   return [...arr2, ...arr1];
// };

// 方法二
// var exchange = function (nums) {
//   const result = [];
//   while (nums.length) {
//     const item = nums.shift();
//     if (item % 2 === 0) {
//       result.push(item); // 若为偶数加入尾部
//     } else {
//       result.unshift(item);// 若为奇数加入头部
//     }
//   }
//   return result;
// };

// 方法三
// var exchange = function (nums) {
//   return nums.sort((a, b) => (b % 2) - (a % 2));
// };

// 方法四
var exchange = function (nums) {
  if (!nums.length) {
    return nums;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] & 1) {
      // 奇数则不操作
      left++;
    } else {
      // 偶数则与右指针交换元素
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }
  return nums;
};

console.log(exchange([1, 2, 3, 4]));
