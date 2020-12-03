/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 3) {
    return 0;
  }
  const arr = new Array(n).fill(false);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!arr[i]) {
      count++;
      for (let j = 2; i * j < n; j++) {
        arr[i * j] = true;
      }
    }
  }
  return count;
};

console.log("should be ", countPrimes(10));
console.log("should be ", countPrimes(0));
console.log("should be ", countPrimes(1));
