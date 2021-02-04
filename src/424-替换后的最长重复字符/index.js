/**
 * 时间复杂度O(n),空间复杂度O(∣Σ∣)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const len = s.length;
  const arr = new Array(26).fill(0);
  let result = 0;
  let start = 0;
  let maxCount = 0;
  for (let i = 0; i < len; i++) {
    maxCount = Math.max(maxCount, ++arr[s[i].charCodeAt() - "A".charCodeAt()]);
    while (i - start + 1 - maxCount > k) {
      arr[s[start].charCodeAt() - "A".charCodeAt()]--;
      start++;
    }
    result = Math.max(result, i - start + 1);
  }
  return result;
};

// var characterReplacement = function(s, k) {
//   const num = new Array(26).fill(0);
//   const n = s.length;
//   let max = 0;
//   let left = 0;
//   let right = 0;
//   while (right < n) {
//       num[s[right].charCodeAt() - 'A'.charCodeAt()]++;
//       max = Math.max(max, num[s[right].charCodeAt() - 'A'.charCodeAt()])
//       if (right - left + 1 - max > k) {
//           num[s[left].charCodeAt() - 'A'.charCodeAt()]--;
//           left++;
//       }
//       right++;
//   }
//   return right - left;
// };

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
