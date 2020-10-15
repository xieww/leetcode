/**
 * @param {string[]} A
 * @return {string[]}
 */
// 方法1
// var commonChars = function (A) {
//   let result = A[0].split("");
//   for (let i = 1; i < A.length; i++) {
//     result = findCommon(result, A[i].split(""));
//   }
//   return result;
// };

// var findCommon = function (a, b) {
//   return a.filter((v) => {
//     let i = b.indexOf(v);
//     if (i !== -1) {
//       b.splice(i, 1);
//       return true;
//     }
//     return false;
//   });
// };

// 方法2
var commonChars = function (A) {
  let result = [...A[0]];
  for (let i = 0; i < A.length; i++) {
    result = result.filter((item) => {
      const len = A[i].length;
      A[i] = A[i].replace(item, "");
      return len > A[i].length;
    });
  }
  return result;
};

// 方法3
// var commonChars = function (A) {
//   return A.reduce(findCommon, A[0].split(""));
// };

// const findCommon = (prev, curr) => {
//   curr = curr.split("");
//   return prev.filter((p) => {
//     const i = curr.indexOf(p);
//     if (i !== -1) {
//       curr.splice(i, 1);
//       return true;
//     }
//     return false;
//   });
// };

// 方法4
// var commonChars = function (A) {
//   if (A.length == 0) return [];
//   return A[0]
//     .split("")
//     .map((m) => {
//       for (var i = 1; i < A.length; i++) {
//         var index = A[i].indexOf(m);
//         if (index == -1) {
//           return null;
//         } else {
//           A[i] = A[i].replace(m, "");
//         }
//       }
//       return m;
//     })
//     .filter((m) => m != null);
// };

// 方法5
// var commonChars = function (A) {
//   let result = [];
//   const word = A[0];
//   for (let s of word) {
//     if (A.every((m) => m.includes(s))) {
//       A = A.map((m) => m.replace(s, ""));
//       result.push(s);
//     }
//   }
//   return result;
// };

console.log(
  'should be ["e","l","l"]',
  commonChars(["bella", "label", "roller"])
);
