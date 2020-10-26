/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
  if (A.length < 3) return 0;
  let L;
  let R;
  let result = 0;
  for (let i = 1; i < A.length - 1; i++) {
    L = i - 1;
    R = i + 1;
    if (A[L] < A[i] && A[R] < A[i]) {
      while (A[L - 1] < A[L] && L > 0) L--;
      while (A[R + 1] < A[R] && R < A.length) R++;
      result = Math.max(result, R - L + 1);
    }
  }
  return result;
};

console.log("should be 5", longestMountain([2, 1, 4, 7, 3, 2, 5]));
console.log("should be 0", longestMountain([2, 2, 2]));
