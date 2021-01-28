/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  const result = [];
  const n = A.length;
  for (let i = n - 1; i >= 0 || K > 0; --i, K = Math.floor(K / 10)) {
    if (i >= 0) {
      K += A[i];
    }
    result.push(K % 10);
  }
  result.reverse();
  return result;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
