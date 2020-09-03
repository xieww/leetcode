/**
 * @param {number[]} candies
 * @return {number}
 */
// 方法1
// var distributeCandies = function (candies) {
//   return Math.min(new Set(candies).size, candies.length / 2);
// };

// 方法2
// var distributeCandies = function (candies) {
//   let store = {};
//   let kind = 0;
//   for (var i = 0; i < candies.length; i++) {
//     if (!store[candies[i]]) {
//       store[candies[i]] = 1;
//       kind++;
//     }
//   }

//   return Math.min(candies.length / 2, kind);
// };

// 方法3
var distributeCandies = function (candies) {
  let set = new Set();
  let kind = 0;
  for (const item of candies) {
    if (!set.has(item)) {
      set.add(item);
      kind++;
    }
  }
  return Math.min(candies.length / 2, kind);
};

console.log("should be 3", distributeCandies([1, 1, 2, 2, 3, 3]));
console.log("should be 2", distributeCandies([1, 1, 2, 3]));
