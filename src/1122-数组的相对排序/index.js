/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// var relativeSortArray = function (arr1, arr2) {
//   const map = new Map();
//   arr2.forEach((item, index) => {
//     map.set(item, index);
//   });

//   return arr1.sort((a, b) => {
//     a = map.has(a) ? map.get(a) : a;
//     b = map.has(b) ? map.get(b) : b;
//     return a - b;
//   });
// };

var relativeSortArray = function (arr1, arr2) {
  return arr1.sort(
    (a, b, i = arr2.indexOf(a), j = arr2.indexOf(b)) =>
      (i === -1 ? 1000 + a : i) - (j === -1 ? 1000 + b : j)
  );
};

console.log(
  "should be ",
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
