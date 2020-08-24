/**
 * @param {string} s
 * @return {boolean}
 */
// 方法1
var repeatedSubstringPattern = function (s) {
  const length = s.length;
  for (let i = 1; i * 2 <= length; i++) {
    let matched = true;
    for (let j = i; j < length; j++) {
      if (s.charAt(j) !== s.charAt(j - i)) {
        matched = false;
        break;
      }
    }
    if (matched) {
      return true;
    }
  }
  return false;
};

// 方法2
// var repeatedSubstringPattern = function (s) {
//   return /^(\w+)\1+$/.test(s);
// };

// 方法3
// var repeatedSubstringPattern = function (s) {
//   return (s + s).slice(1, -1).includes(s);
// };

console.log("should be true", repeatedSubstringPattern("abab"));
console.log("should be false", repeatedSubstringPattern("aba"));
console.log("should be true", repeatedSubstringPattern("abcabcabcabc"));
console.log("should be false", repeatedSubstringPattern(""));
