/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function (s) {
//   return s.reverse();
// };

// var reverseString = function (s) {
//   if (s === undefined || s.length <= 1) {
//     return s;
//   }
//   const length = s.length;
//   for (let left = 0, right = length - 1; left < right; left++, right--) {
//     [s[left], s[right]] = [s[right], s[left]];
//   }
//   return s;
// };

var reverseString = function (s) {
  if (s === undefined || s.length <= 1) {
    return s;
  }
  const length = s.length;
  let left = 0;
  let right = length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

console.log(
  'should be ["o","l","l","e","h"]',
  reverseString(["h", "e", "l", "l", "o"])
);
