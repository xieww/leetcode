/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const result = new Array(n + 1).fill(1);

  for (let i = m - 1; i > 0; i--) {
    for (let j = n - 1; j > 0; j--) {
      result[j] = result[j] + result[j + 1];
    }
  }
  return result[1];
};

// const uniquePaths = (m, n) => {
//   return helper(m, n, 1, 1);
// };

// const helper = (m, n, row, col) => {
//   if(row === m && col === n) return 1;
//   if(row > m || col > n) return 0;
  
//   const pathsRight = helper(m, n, row, col + 1);
//   const pathsDown = helper(m, n, row + 1, col);
  
//   return pathsRight + pathsDown;
// };

console.log("should be 3", uniquePaths(3, 2));
console.log("should be 28", uniquePaths(7, 3));
