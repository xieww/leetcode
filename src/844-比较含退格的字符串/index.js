/**
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function (S, T) {
//   return process(S) === process(T);
// };
// var process = (S) => {
//   const res = [];
//   for (x of S.split("")) {
//     x === "#" ? res.pop() : res.push(x);
//   }
//   return res.join("");
// };

// 方法2 时间复杂度O(n)，空间复杂度O(1)
var backspaceCompare = function (S, T) {
  let sLen = S.length;
  let tLen = T.length;
  let sCount = 0;
  let tCount = 0;
  while (sLen >= 0 || tLen >= 0) {
    let sItem = S[sLen];
    let tItem = T[tLen];
    if (sItem === "#") {
      sLen--;
      sCount++;
    } else if (tItem === "#") {
      tLen--;
      tCount++;
    } else if (sCount > 0) {
      sCount--;
      sLen--;
    } else if (tCount > 0) {
      tCount--;
      tLen--;
    } else if (sLen >= 0 && tLen >= 0 && sItem !== tItem) {
      return false;
    } else if (sLen >= 0 !== tLen >= 0) {
      return false;
    } else {
      sLen--;
      tLen--;
    }
  }
  return true;
};

console.log("should be true", backspaceCompare("ab#c", "ad#c"));
console.log("should be true", backspaceCompare("ab##", "c#d#"));
console.log("should be true", backspaceCompare("a##c", "#a#c"));
console.log("should be false", backspaceCompare("a#c", "b"));
