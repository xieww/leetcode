/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  return s.reverse();
};

console.log(
  'should be ["o","l","l","e","h"]',
  reverseString(["h", "e", "l", "l", "o"])
);
