/**
 * 时间复杂度O(N),空间复杂度O(1)
 * @param {number[]} arr
 * @return {number}
 */
// var peakIndexInMountainArray = function (arr) {
//   if (!arr || arr.length < 3) {
//     return -1;
//   }
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return i;
//     }
//   }
//   return -1;
// };

// 时间复杂度O(logN),空间复杂度O(1)
var peakIndexInMountainArray = function (arr) {
  if (!arr || arr.length < 3) {
    return -1;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < arr[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
};

// var peakIndexInMountainArray = function (arr) {
//   return arr.indexOf(Math.max(...arr));
// };

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([3, 4, 5, 1]));
console.log(
  peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
);
