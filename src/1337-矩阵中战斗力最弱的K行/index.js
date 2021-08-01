/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const arr = [];
  for (let i = 0; i < mat.length; i++) {
    const item = mat[i];
    arr.push([item.reduce((sum, num) => sum + num), i]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  return arr.splice(0, k).map((item) => item[1]);
};

var kWeakestRows = function (mat, k) {
  return mat
    .map((e, i) => [i, e.reduce((sum, num) => sum + num, 0)])
    .sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]))
    .map((x) => x[0])
    .slice(0, k);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
