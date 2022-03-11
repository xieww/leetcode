/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
// var isCovered = function (ranges, left, right) {
//   const map = new Map();
//   for (let i = left; i <= right; i++) {
//     map.set(i, 0);
//   }
//   for (let range of ranges) {
//     for (let i = range[0]; i <= range[1]; i++) {
//       map.set(i, 1);
//     }
//   }
//   for (let key of map.keys()) {
//     if (map.get(key) === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// var isCovered = function (ranges, left, right) {
//   const set = new Set();
//   for (let i = left; i <= right; i++) {
//     set.add(i);
//   }
//   for (const range of ranges) {
//     for (let i = range[0]; i <= range[1]; i++) {
//       set.delete(i);
//     }
//   }
//   return set.size === 0;
// };

// 时间复杂度O(nlogn) 空间O(1)
var isCovered = function (ranges, left, right) {
  ranges.sort((a, b) => a[0] - b[0]);
  for (const range of ranges) {
    // if (left >= range[0] && left <= range[1]) {
    //   left = range[1] + 1;
    // }

    // 或者
    if (range[0] > left) {
      return false;
    }
    left = Math.max(left, range[1] + 1);
  }
  return left > right;
};

console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5
  )
);
console.log(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21
  )
);
