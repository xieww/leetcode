/**
 * 时间复杂度O(n),空间复杂度O(1)
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let left = 0;
  let right = 0;
  for (const item of s) {
    if (item === "(") {
      left++;
      right++;
    } else if (item === ")") {
      left--;
      right--;
    } else if (item === "*") {
      left++;
      right--;
    }
    if (left < 0) {
      return false;
    }
    right = Math.max(right, 0);
  }
  return right === 0;
};

// var checkValidString = function (s) {
//   let left = 0;
//   let right = 0;
//   for (const item of s) {
//     if (item === "(") {
//       left++;
//       right++;
//     } else if (item === ")") {
//       if (left > 0) {
//         left--;
//       }
//       right--;
//     } else {
//       if (left > 0) {
//         left--;
//       }
//       right++;
//     }
//     if (right < 0) {
//       return false;
//     }
//   }
//   return left === 0;
// };

console.log("should be true", checkValidString("()"));
console.log("should be true", checkValidString("(*)"));
console.log("should be true", checkValidString("(*))"));
console.log(
  "should be true",
  checkValidString(
    "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
  )
);
