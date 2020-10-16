/**
 * 时间复杂度O(nlogn)
 * @param {number[]} A
 * @return {number[]}
 */
// 方法1
// var sortedSquares = function (A) {
//   return A.map((item) => item * item).sort((a, b) => a - b);
// };

// 方法2
// var sortedSquares = function (A) {
//   let result = [];
//   for (let i = 0; i < A.length; i++) {
//     result.push(A[i] ** 2);
//   }
//   result.sort((a, b) => a - b);
//   return result;
// };

//方法3 时间复杂度O(n)，空间复杂度O(n)
var sortedSquares = function (A) {
  let result = [];
  let l = 0;
  let r = A.length - 1;
  let p = r;
  while (l <= r) {
    if (A[l] ** 2 > A[r] ** 2) {
      result[p--] = A[l++] ** 2;
    } else {
      result[p--] = A[r--] ** 2;
    }
  }
  return result;
};

console.log("should be [0,1,9,16,100]", sortedSquares([-4, -1, 0, 3, 10]));
console.log("should be [4,9,9,49,121]", sortedSquares([-7, -3, 2, 3, 11]));
