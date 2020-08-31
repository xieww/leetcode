/**
 * @param {string} s
 * @return {number}
 */

// 方法1（超长字符串可能会超时）
// var firstUniqChar = function (s) {
//   let result = -1;
//   for (let i = 0; i < s.length; i++) {
//     const regex = new RegExp(s[i], "g");
//     if (s.match(regex) !== null && s.match(regex).length === 1) {
//       result = i;
//       break;
//     }
//   }
//   return result;
// };

// 方法2
// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     const regex = new RegExp(s[i], "g");
//     const str = s.replace(regex, "");
//     if (s.length - str.length === 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// 方法3
// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     const arr = s.split(s[i]);
//     if (arr && arr.length === 2) {
//       return i;
//     }
//   }
//   return -1;
// };

// 方法4
// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//       return i;
//     }
//   }
//   return -1;
// };

// 方法5
// var firstUniqChar = function (s) {
//   let map = {};

//   for (ch of s) map[ch] = ++map[ch] || 1;
//   for (i in s) if (map[s[i]] == 1) return i;

//   return -1;
// };

// 方法6
var firstUniqChar = function (s) {
  let map = {};

  for (ch of s) map[ch] = (map[ch] || 0) + 1;
  for (ch in map) if (map[ch] == 1) return s.indexOf(ch);

  return -1;
};

console.log("should be 0", firstUniqChar("leetcode"));
console.log("should be 2", firstUniqChar("loveleetcode"));
console.log("should be -1", firstUniqChar("leetcodeleetcode"));
