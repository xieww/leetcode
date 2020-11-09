/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  const helper = ([a, b]) => a * a + b * b;
  return points.sort((a, b) => helper(a) - helper(b)).slice(0, K);
};

// var kClosest = function (points, K) {
//   return points
//     .sort(
//       (a, b) =>
//         Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) -
//         Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2))
//     )
//     .slice(0, K);
// };

var kClosest = (points, K) =>
  points
    .sort(
      (
        a,
        b,
        c = Math.sqrt(a[0] ** 2 + a[1] ** 2),
        d = Math.sqrt(b[0] ** 2 + b[1] ** 2)
      ) => c - d
    )
    .splice(0, K);

console.log(
  "should be ",
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
