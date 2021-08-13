/**
 * @param {number} n
 * @return {number}
 */
// var countDigitOne = function (n) {
//   let count = 0;
//   for (let k = 1; k <= n; k *= 10) {
//     let r = Math.floor(n / k);
//     let m = n % k;
//     count += Math.floor((r + 8) / 10) * k + (r % 10 == 1 ? m + 1 : 0);
//   }
//   return count;
// };

var countDigitOne = function (n) {
  let count = 0;

  for (let m = 1; m <= n; m *= 10) {
    const k = Math.floor(n / m);
    count += Math.floor((k + 8) / 10) * m + (k % 10 == 1 ? (n % m) + 1 : 0);
  }
  return count;
};

console.log(countDigitOne(13));
console.log(countDigitOne(0));
