/**
 * 时间复杂度O(logn)，空间复杂度O(1)
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let count = 0;

  for (let i = 1; i < n; i *= 10) {
    const k = Math.floor(n / i);
    const m = n % i;
    count += Math.floor((k + 8) / 10) * i + (k % 10 === 1 ? m + 1 : 0);
  }

  return count;
};

console.log(countDigitOne(13));
console.log(countDigitOne(0));
