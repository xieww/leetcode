/**
 * 方法1 时间复杂度O(n)，空间复杂度O(n)
 * @param {number[]} arr
 * @return {boolean}
 */
// var uniqueOccurrences = function (arr) {
//   let map = new Map();
//   for (let num of arr) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1);
//     }
//   }
//   let set = new Set();
//   for (const val of map.values()) {
//     if (set.has(val)) return false;
//     set.add(val);
//   }
//   return true;
// };

// 方法2
var uniqueOccurrences = function (arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  const temp = Object.values(obj);
  const array = [...new Set(temp)];
  return temp.length === array.length;
};

// 方法3
// var uniqueOccurrences = function (arr) {
//   const obj = {};
//   arr.forEach((val) => (obj[val] = (obj[val] || 0) + 1));
//   const val = Object.values(obj).sort((a, b) => a - b);
//   for (let i = 0; i < val.length - 1; i++) {
//     if (val[i] === val[i + 1]) return false;
//   }
//   return true;
// };

console.log("should be true", uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log("should be false", uniqueOccurrences([1, 2]));
console.log(
  "should be true",
  uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])
);
