/**
 * @param {number[]} height
 * @return {number}
 */

// 方法1，O(n^2)
// var maxArea = function (height) {
//   let max = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const area = (j - i) * Math.min(height[i], height[j]);
//       max = Math.max(max, area);
//     }
//   }
//   return max;
// };

// 方法2 时间复杂度O(n)在，左右边界i，j，同时向中间收敛
var maxArea = function (height) {
  let max = 0;
  let j = height.length - 1;
  for (let i = 0; i < j; ) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--];
    const area = (j - i + 1) * minHeight;
    max = Math.max(max, area);
  }
  return max;
};

console.log("should be 49", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
