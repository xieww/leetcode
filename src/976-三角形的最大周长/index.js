/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => a - b);
  for (let i = A.length - 1; i >= 2; i--) {
    if (A[i - 2] + A[i - 1] > A[i]) {
      return A[i - 2] + A[i - 1] + A[i];
    }
  }
  return 0;
};

console.log("should be ", largestPerimeter([2, 1, 2]));
console.log("should be ", largestPerimeter([1, 2, 1]));
console.log("should be ", largestPerimeter([3, 2, 3, 4]));
console.log("should be ", largestPerimeter([3, 6, 2, 3]));
