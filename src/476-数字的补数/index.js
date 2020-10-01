/**
 * @param {number} num
 * @return {number}
 */
// 方法1
// var findComplement = function (num) {
//   return parseInt(
//     num
//       .toString(2)
//       .split("")
//       .map((d) => +!+d)
//       .join(""),
//     2
//   );
// };

// 方法2
// var findComplement = function (num) {
//   return parseInt(
//     num
//       .toString(2)
//       .split("")
//       .map((char) => (parseInt(char, 10) ? "0" : "1"))
//       .join(""),
//     2
//   );
// };

// 方法3
// var findComplement = function (num) {
//   let mask = 1;
//   while (mask < num) {
//     mask = (mask << 1) | 1;
//   }
//   return num ^ mask;
// };

// 方法4
// var findComplement = function (num) {
//   return parseInt(
//     (~num ^ (1 << 31)).toString(2).substr(-num.toString(2).length),
//     2
//   );
// };

// 方法5
// var findComplement = function (num) {
//   let d = 2;
//   while (d <= num) {
//     d *= 2;
//   }
//   return d - num - 1;
// };

// 方法6
// var findComplement = function (num) {
//   return num ^ parseInt(num.toString(2).replace(/\d/g, "1"), 2);
// };

// 方法7
var findComplement = function (num) {
  return num ^ parseInt("1".repeat(num.toString(2).length), 2);
};

console.log("should be 2", findComplement(5));
console.log("should be 0", findComplement(1));
