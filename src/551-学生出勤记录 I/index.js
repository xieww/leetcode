/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 2] && s[i] === s[i + 1] && s[i] === "L") {
      return false;
    }
    if (s[i] === "A") {
      count++;
    }
  }
  return count < 2;
};

var checkRecord = function (s) {
  return !s.match(/.*(A.*A|LLL).*/);
};

console.log("should be true", checkRecord("PPALLP"));
console.log("should be false", checkRecord("PPALLL"));
