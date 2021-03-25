/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let res = 0;
  let temp = "";
  for (let i = 0; i < len; i++) {
    if (temp.indexOf(s[i]) === -1) {
      temp += s[i];
      res = Math.max(res, temp.length);
    } else {
      temp = temp.slice(temp.indexOf(s[i]) + 1);
      temp += s[i];
    }
  }
  return res;
};
