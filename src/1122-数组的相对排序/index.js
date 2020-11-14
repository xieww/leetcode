/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = new Map();
  const len = arr2.length;
  arr2.forEach((item, index) => {
    map.set(item, index);
  });

  return arr1.sort((a, b) => {
    a = map.has(a) ? map.get(a) : a + len;
    b = map.has(b) ? map.get(b) : b + len;
    return a - b;
  });
};

console.log(
  "should be ",
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
