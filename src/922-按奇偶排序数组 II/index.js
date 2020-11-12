/**
 * @param {number[]} A
 * @return {number[]}
 */
/********************时间复杂度O(N)，空间复杂度O(1)*********************/
// var sortArrayByParityII = function (A) {
//   let i = 0;
//   let j = 1;
//   let len = A.length;
//   while (i < len && j < len) {
//     while (A[i] % 2 === 0) {
//       i += 2;
//     }
//     while (A[j] % 2 === 1) {
//       j += 2;
//     }
//     if (i < len && j < len) {
//       [A[j], A[i]] = [A[i], A[j]];
//     }
//   }
//   return A;
// };

// var sortArrayByParityII = function (A) {
//   let i = 0;
//   let j = 1;
//   let len = A.length;
//   while (i < len && j < len) {
//     if (A[i] % 2 === 0) {
//       i += 2;
//     } else if (A[j] % 2 === 1) {
//       j += 2;
//     } else {
//       [A[j], A[i]] = [A[i], A[j]];
//       i += 2;
//       j += 2;
//     }
//   }
//   return A;
// };

var sortArrayByParityII = function (A) {
  const n = A.length;
  let j = 1;
  for (let i = 0; i < n; i += 2) {
    if (A[i] & 1) {
      while (A[j] & 1) {
        j += 2;
      }
      [A[j], A[i]] = [A[i], A[j]];
    }
  }
  return A;
};

/**********************时间复杂度O(N)，空间复杂度O(N)****************/
// var sortArrayByParityII = function (A) {
//   let result = new Array(A.length);

//   for (let i = 0, even = 0, odd = 1; i < A.length; i++) {
//     if (A[i] % 2 === 0) {
//       result[even] = A[i];
//       even += 2;
//     } else {
//       result[odd] = A[i];
//       odd += 2;
//     }
//   }
//   return result;
// };

// var sortArrayByParityII = function (A) {
//   const n = A.length;
//   const ans = new Array(n);
//   let i = 0;
//   for (const x of A) {
//     if (!(x & 1)) {
//       ans[i] = x;
//       i += 2;
//     }
//   }

//   i = 1;
//   for (const x of A) {
//     if (x & 1) {
//       ans[i] = x;
//       i += 2;
//     }
//   }

//   return ans;
// };

console.log("should be ", sortArrayByParityII([4, 2, 5, 7]));
