/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], "");
  }
  return t;
};

// var findTheDifference = function(s, t) {
//   const map = new Map();
//   for(let i = 0; i < s.length; i++) {
//       const val = map.get(s[i]);
//       map.set(s[i], val === undefined ? 1 : val + 1);
//   }
//   for(let i = 0; i < t.length; i++) {
//       const val = map.get(t[i]);
//       if(val === 0 || val === undefined) {
//           return t[i];
//       } else {
//           map.set(t[i], val - 1);
//       }
//   }
// };

console.log("should be e", findTheDifference("abcd", "abcde"));
console.log("should be e", findTheDifference("a", "aa"));

