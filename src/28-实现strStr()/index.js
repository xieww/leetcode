/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   if (!needle) {
//     return 0;
//   }
//   return haystack.indexOf(needle);
// };

var strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) return i;
    }
  }

  return -1;
};

console.log("should be 2 ,result is ", strStr("hello", "ll"));
console.log("should be -1 ,result is ", strStr("aaaaa", "bba"));
