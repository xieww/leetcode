/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// 方法1
// var numJewelsInStones = function (J, S) {
//   let result = 0;
//   for (const item of S) {
//     const regex = new RegExp(item, "g");
//     if (J.match(regex)) {
//       result += 1;
//     }
//   }
//   return result;
// };

// 方法2
// var numJewelsInStones = function (J, S) {
//   const set = new Set(J);
//   return S.split("").reduce((res, s) => res + set.has(s), 0);
// };

// 方法3
var numJewelsInStones = function (J, S) {
  return [...S].filter((char) => J.indexOf(char) !== -1).length;
};

console.log("should be 3", numJewelsInStones("aA", "aAAbbbb"));
console.log("should be 0", numJewelsInStones("z", "ZZ"));
