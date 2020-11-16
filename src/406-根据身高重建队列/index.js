/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// var reconstructQueue = function (people) {
//   const result = [];
//   people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
//   people.forEach((item) => {
//     result.splice(item[1], 0, item);
//   });
//   return result;
// };

var reconstructQueue = function (people) {
  return people
    .sort((a, b) => b[0] - a[0] || a[1] - b[1])
    .reduce((a, p) => a.splice(p[1], 0, p) && a, []);
};

console.log(
  "should be ",
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);
