/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// var allCellsDistOrder = function (R, C, r0, c0) {
//   const buckets = [];
//   const result = [];
//   for (let i = 0; i < R; ++i) {
//     for (let j = 0; j < C; ++j) {
//       const item = Math.abs(i - r0) + Math.abs(j - c0);
//       if (buckets[item] === undefined) {
//         buckets[item] = [];
//       }
//       buckets[item].push([i, j]);
//     }
//   }
//   for (const bucket of buckets) {
//     result.push(...bucket);
//   }
//   return result;
// };

// BFS
// var allCellsDistOrder = function (R, C, r0, c0) {
//   const visited = new Set();
//   const ret = [];
//   const queue = [[r0, c0]];
//   while (queue.length) {
//     const [x, y] = queue.shift();
//     if (x > R - 1 || x < 0 || y > C - 1 || y < 0 || visited.has(x * 100 + y))
//       continue;
//     ret.push([x, y]);
//     visited.add(x * 100 + y);
//     [
//       [0, -1],
//       [0, 1],
//       [1, 0],
//       [-1, 0],
//     ].forEach((move) => {
//       queue.push([x + move[0], y + move[1]]);
//     });
//   }
//   return ret;
// };

var allCellsDistOrder = function (R, C, r0, c0) {
  const result = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      result.push([i, j]);
    }
  }
  result.sort(
    (a, b) =>
      Math.abs(a[0] - r0) +
      Math.abs(a[1] - c0) -
      (Math.abs(b[0] - r0) + Math.abs(b[1] - c0))
  );
  return result;
};

console.log("should be ", allCellsDistOrder(1, 2, 0, 0));
console.log("should be ", allCellsDistOrder(2, 2, 0, 1));
console.log("should be ", allCellsDistOrder(2, 3, 1, 2));
