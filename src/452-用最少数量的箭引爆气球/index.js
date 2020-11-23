/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) {
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);
  let result = 1;
  let pos = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > pos) {
      result++;
      pos = points[i][1];
    }
  }
  return result;
};

// var findMinArrowShots = function (points) {
//   if (points.length === 0) {
//     return 0;
//   }
//   points.sort((a, b) => a[0] - b[0]);
//   let result = 0;
//   let prev;
//   points.sort((a, b) => a[0] - b[0]);
//   for (let [start, end] of points) {
//     if (prev == null || prev < start) {
//       result++;
//       prev = end;
//     } else {
//       prev = Math.min(prev, end);
//     }
//   }

//   return result;
// };

console.log(
  "should be 2",
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
console.log(
  "should be 4",
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
console.log(
  "should be 2",
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
);
console.log("should be 1", findMinArrowShots([[1, 2]]));
console.log(
  "should be 1",
  findMinArrowShots([
    [2, 3],
    [2, 3],
  ])
);
console.log(
  "should be 2",
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
);
