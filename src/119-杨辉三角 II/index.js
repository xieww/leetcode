/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 方法1
// var getRow = function (rowIndex) {
//   let result = [1];
//   for (let i = 0; i <= rowIndex; i++) {
//     for (let j = i; j > 0; j--) {
//       if (i === j) {
//         result[j] = 1;
//       } else {
//         result[j] = result[j - 1] + result[j];
//       }
//     }
//   }
//   return result;
// };

// i=0, j=0, result=[1],
// i=1, j=1, result=[1,1]
// i=2, j=2, result=[1,1,1]
// i=2, j=1, result=[1,2,1]
// i=3, j=3, result=[1,2,1,1]
// i=3, j=2, result=[1,2,3,1]
// i=3, j=1, result=[1,3,3,1]
// i=4 跳出循环

// 方法2
// var getRow = function (rowIndex) {
//   const result = [];
//   while (result.length <= rowIndex) {
//     result.unshift(1);
//     for (let i = 1; i < result.length - 1; i++) {
//       result[i] += result[i + 1];
//     }
//   }
//   return result;
// };

// 方法3
// var getRow = function (rowIndex) {
//   const result = [1];
//   let numerator = rowIndex;
//   let denominator = 1;
//   while (denominator <= rowIndex) {
//     const num = result[result.length - 1] * (numerator / denominator);
//     result.push(num);
//     denominator++;
//     numerator--;
//   }
//   return result;
// };

// 方法4
// var getRow = function (rowIndex) {
//   var result = [];
//   for (var i = 0; i <= rowIndex; i++) {
//     result[i] = [];
//   }
//   for (i = 0; i <= rowIndex; i++) {
//     result[i][0] = result[i][i] = 1;
//   }
//   for (i = 2; i <= rowIndex; i++) {
//     for (var j = 1; j < i; j++) {
//       result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
//     }
//   }
//   return result[rowIndex];
// };

// 方法5
let getRow = function (rowIndex) {
  let result = [1];
  for (let i = 0; i < rowIndex; i++) {
    result.unshift(0);
    const midIndex = Math.floor((i + 1) / 2);
    for (let j = 0; j < i + 1; j++) {
      if (j > midIndex) {
        result[j] = result[midIndex + ((i + 1) % 2) - (j - midIndex)];
        continue;
      }
      result[j] = result[j] + result[j + 1];
    }
  }
  return result;
};

console.log("should be [1,3,3,1]", getRow(3));
