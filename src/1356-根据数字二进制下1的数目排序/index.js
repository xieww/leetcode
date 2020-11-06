/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var sortByBits = function (arr) {
//   var bitCount = (num) => {
//     let sum = 0;
//     while (num) {
//       sum += num & 1;
//       num = num >> 1;
//     }
//     return sum;
//   };
//   return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
// };

var sortByBits = function (arr) {
  return arr.sort(
    (a, b) =>
      a.toString(2).replace(/0/g, "").length -
        b.toString(2).replace(/0/g, "").length || a - b
  );
};

var sortByBits = function (arr) {
  var helper = (x) => (x ? 1 + helper(x & (x - 1)) : 0);
  return arr.sort((a, b) => helper(a) - helper(b) || a - b);
};

console.log("should be ", sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(
  "should be ",
  sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])
);
console.log("should be ", sortByBits([10000, 10000]));
console.log("should be ", sortByBits([2, 3, 5, 7, 11, 13, 17, 19]));
console.log("should be ", sortByBits([10, 100, 1000, 10000]));
