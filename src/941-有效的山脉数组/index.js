/**
 * 时间复杂度O(N)，空间复杂度O(1)
 * @param {number[]} A
 * @return {boolean}
 */
// var validMountainArray = function (A) {
//   if (A.length < 3) return false;
//   const N = A.length;
//   let i = 0;

//   // 递增扫描
//   while (i + 1 < N && A[i] < A[i + 1]) {
//     i++;
//   }

//   // 最高点不能是数组的第一个位置或最后一个位置
//   if (i === 0 || i === N - 1) {
//     return false;
//   }

//   // 递减扫描
//   while (i + 1 < N && A[i] > A[i + 1]) {
//     i++;
//   }

//   return i === N - 1;
// };

// var validMountainArray = function (A) {
//   if (A.length < 3) return false;
//   var isDecreasing = false;
//   var isIncreasing = false;
//   for (var i = 1, j = 0; i < A.length; i++, j++) {
//     if (A[j] <= A[i] && !isDecreasing) {
//       isIncreasing = true;
//       continue;
//     }
//     isDecreasing = true;
//     if (A[j] <= A[i]) return false;
//   }
//   return isDecreasing && isIncreasing;
// };

var validMountainArray = (A) => {
  const n = A.length;
  if (n < 3) {
    return false;
  }
  let i = 0;
  let j = n - 1;
  while (i + 1 < n && A[i] < A[i + 1]) {
    i++;
  }
  while (j - 1 >= 0 && A[j - 1] > A[j]) {
    j--;
  }
  if (i !== 0 && i === j && j !== n - 1) {
    return true;
  }
  return false;
};

console.log("should be true", validMountainArray([0, 3, 2, 1]));
console.log("should be false", validMountainArray([2, 1]));
console.log("should be false", validMountainArray([3, 5, 5]));
