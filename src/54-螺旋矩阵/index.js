/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {
//   if (!matrix || matrix.length === 0) {
//     return [];
//   }
//   const result = [];
//   while (matrix.length) {
//     const first = matrix.shift();// 每次循环删除当前数组第一个元素，并加入到结果集中
//     result.push(...first);
//     for (const m of matrix) {
//       let val = m.pop(); // 删除数组最后一个元素
//       if (val) {
//         result.push(val);
//       }
//       m.reverse();// 反转数组元素顺序
//     }
//     matrix.reverse();// 反转数组元素顺序
//   }
//   return result;
// };

var spiralOrder = function (matrix) {
  let result = [];
  while (matrix.length > 0) {
    // cut the top->right->bottom->left sides until matrix is empty
    let top = matrix.shift();
    let bottom = (matrix.pop() || []).reverse();
    let left = [];
    let right = [];
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) {
        right.push(matrix[i].pop());
      }
      if (matrix[i].length > 0) {
        left.unshift(matrix[i].shift());
      }
    }
    result.push(...top, ...right, ...bottom, ...left);
  }
  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ])
// );
