/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  if (columnTitle.length === 1) {
    return columnTitle.charCodeAt(0) - 65 + 1;
  }
  let len = columnTitle.length - 1;
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result += Math.pow(26, len--) * (columnTitle.charCodeAt(i) - 65 + 1);
  }
  return result;
};

// var titleToNumber = function (s) {
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     const num = s.charCodeAt(i) - 65 + 1;
//     result = result * 26 + num;
//   }
//   return result;
// };

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
