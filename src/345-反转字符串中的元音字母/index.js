/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function (s) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const arr = s.split("");
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     if (vowels.indexOf(arr[i]) !== -1 && vowels.indexOf(arr[j]) !== -1) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j--;
//     } else if (vowels.indexOf(arr[i]) !== -1) {
//       j--;
//     } else {
//       i++;
//     }
//   }
//   return arr.join("");
// };

var reverseVowels = function (s) {
  const vowels = s.split("").filter((a) => /[aeiou]/i.test(a));
  return s
    .split(/[aeiou]/i)
    .reduce((res, a) => res + a + (vowels.pop() ?? ""), "");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
