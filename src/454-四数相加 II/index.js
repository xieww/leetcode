/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
// var fourSumCount = function (A, B, C, D) {
//   const sumTwoList = function (x, y) {
//     let len = x.length;
//     let result = new Map();
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len; j++) {
//         let c = x[i] + y[j];
//         result.set(c, result.get(c) + 1 || 1);
//       }
//     }
//     return result;
//   };

//   let sum1 = sumTwoList(A, B);
//   let sum2 = sumTwoList(C, D);
//   let total = 0;

//   sum1.forEach((value, key) => {
//     let offset = 0 - key;
//     if (sum2.has(offset)) {
//       total += sum2.get(offset) * sum1.get(key);
//     }
//   });
//   return total;
// };

var fourSumCount = function (A, B, C, D) {
  const map = new Map();
  for (const num1 of C) {
    for (const num2 of D) {
      const sum = num1 + num2;
      if (!map.has(sum)) {
        map.set(sum, 0);
      }
      map.set(sum, map.get(sum) + 1);
    }
  }

  let total = 0;
  for (const num1 of A) {
    for (const num2 of B) {
      const num = -1 * (num1 + num2);
      if (map.has(num)) {
        total += map.get(num);
      }
    }
  }
  return total;
};

console.log("should be ", fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));