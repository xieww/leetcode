/**
 * 时间复杂度O(n+m),n为A的长度，m为B的长度
 * 空间复杂度O(n)
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const average =
    (A.reduce((sum, num) => sum + num) - B.reduce((sum, num) => sum + num)) / 2;
  const set = new Set(A);
  for (const b of B) {
    if (set.has(b + average)) {
      return [b + average, b];
    }
  }
};

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));
console.log(fairCandySwap([1, 2, 5], [2, 4]));
