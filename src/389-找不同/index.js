/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// 方法1
// var findTheDifference = function (s, t) {
//   for (let i = 0; i < s.length; i++) {
//     t = t.replace(s[i], "");
//   }
//   return t;
// };

// 方法2
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

// 方法3
// var findTheDifference = function (s, t) {
//   let sum1 = 0;
//   for (const c of s) {
//     sum1 += c.charCodeAt();
//   }

//   let sum2 = 0;
//   for (const c of t) {
//     sum2 += c.charCodeAt();
//   }

//   return String.fromCharCode(sum2 - sum1);
// };

// 方法4
/**
 * 关键点：按位异或 XOR
 *      x ^ x = 0
 *      x ^ 0 = x
 * @param {*} s
 * @param {*} t
 */
// var findTheDifference = function (s, t) {
//   var sum = 0; // initialize the accumulator

//   for (var i = 0; i < s.length; i++) {
//     sum ^= t[i].charCodeAt() ^ s[i].charCodeAt();
//   }
//   sum ^= t[i].charCodeAt(); // add the remaining letter of t
//   return String.fromCharCode(sum); // return the converted to Character total
// };

// 方法5
// var findTheDifference = function (s, t) {
//   return [...t].sort().find((char, i) => char !== [...s].sort()[i]);
// };

// 方法6
// var findTheDifference = function (s, t) {
//   let m = new Map();
//   s.split("").forEach((x) => {
//     if (!m.has(x)) {
//       m.set(x, 1);
//     } else {
//       m.set(x, m.get(x) + 1);
//     }
//   });
//   for (let y of t) {
//     if (!m.has(y)) {
//       return y;
//     } else {
//       // if added letter is not part of s
//       m.set(y, m.get(y) - 1);
//     }

//     if (m.get(y) < 0) return y; // if added letter is part of s
//   }
// };

// 方法7
// var findTheDifference = function(s, t) {
//   const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
//   const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
//   return String.fromCharCode(sum2 - sum1);
// };

var findTheDifference = function (s, t) {
  const sArr = [...s].sort();
  const tArr = [...t].sort();
  for (let i = 0; i < tArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return tArr[i];
    }
  }
};

console.log("should be e", findTheDifference("abcd", "abcde"));
console.log("should be a", findTheDifference("a", "aa"));
