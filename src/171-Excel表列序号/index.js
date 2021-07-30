/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let len = columnTitle.length - 1;
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result += Math.pow(26, len--) * (columnTitle.charCodeAt(i) - 65 + 1);
  }
  return result;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
