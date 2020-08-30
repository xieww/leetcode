/**
 * @param {string} s
 * @return {string}
 */
// 方法1
// var reverseWords = function (s) {
//   const arr = s.split(" ");

//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i].split("").reverse().join("");
//     arr[i] = current;
//   }
//   return arr.join(" ");
// };

// 方法2
// var reverseWords = function (s) {
//   return s
//     .split(" ")
//     .map((v) => [...v].reverse().join("")) // Array.from(v).reverse().join("")
//     .join(" ");
// };

// 方法3
var reverseWords = function (s) {
  return [...s].reverse().join("").split(" ").reverse().join(" ");
};

console.log(
  "should be 's'teL ekat edoCteeL tsetnoc' ",
  reverseWords("Let's take LeetCode contest")
);
