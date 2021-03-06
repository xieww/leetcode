/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function (n) {
//   const arr = new Array(n).fill(false);
//   let count = 0;
//   for (let i = 2; i < n; i++) {
//     if (!arr[i]) {
//       count++;
//       for (let j = 2; i * j < n; j++) {
//         arr[i * j] = true;
//       }
//     }
//   }
//   return count;
// };

var countPrimes = function (num) {
  let count = 0;
  var isPrime = function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

console.log("should be 4 ", countPrimes(10));
console.log("should be 0 ", countPrimes(0));
console.log("should be 0 ", countPrimes(1));
console.log("should be 1 ", countPrimes(3));
