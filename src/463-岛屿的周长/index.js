/**
 * @param {number[][]} grid
 * @return {number}
 */
// 时间复杂度O(nm),空间复杂度O(1)
// var islandPerimeter = function (grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   let perimeter = 0;

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (!grid[row][col]) continue;
//       perimeter += 4;
//       if (row > 0 && grid[row - 1][col]) perimeter--;
//       if (col > 0 && grid[row][col - 1]) perimeter--;
//       if (row < rows - 1 && grid[row + 1][col]) perimeter--;
//       if (col < cols - 1 && grid[row][col + 1]) perimeter--;
//     }
//   }

//   return perimeter;
// };

// 时间复杂度O(nm),空间复杂度O(1)
var islandPerimeter = (grid) => {
  let land = 0; // 土地个数
  let border = 0; // 接壤边界的条数

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        land++;
        // 确定当前土地下边是否为土地
        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          border++;
        }
        // 确定当前土地右边是否为土地
        if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
          border++;
        }
      }
    }
  }
  return 4 * land - 2 * border;
};

// 迭代 时间复杂度O(nm)，空间复杂度(1)
// var islandPerimeter = function (grid) {
//   const dx = [0, 1, 0, -1];
//   const dy = [1, 0, -1, 0];
//   const n = grid.length;
//   const m = grid[0].length;
//   let perimeter = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (grid[i][j]) {
//         let cnt = 0;
//         for (let k = 0; k < 4; k++) {
//           let tx = i + dx[k];
//           let ty = j + dy[k];
//           if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
//             cnt += 1;
//           }
//         }
//         perimeter += cnt;
//       }
//     }
//   }
//   return perimeter;
// };

// 深度优先遍历，时间复杂度O(nm)，空间复杂度(nm)
// var islandPerimeter = function (grid) {
//   const dx = [0, 1, 0, -1];
//   const dy = [1, 0, -1, 0];
//   const n = grid.length;
//   const m = grid[0].length;

//   const dfs = (x, y) => {
//     if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
//       return 1;
//     }
//     if (grid[x][y] === 2) {
//       return 0;
//     }
//     grid[x][y] = 2;
//     let res = 0;
//     for (let i = 0; i < 4; ++i) {
//       const tx = x + dx[i];
//       const ty = y + dy[i];
//       res += dfs(tx, ty);
//     }
//     return res;
//   };

//   let ans = 0;
//   for (let i = 0; i < n; ++i) {
//     for (let j = 0; j < m; ++j) {
//       if (grid[i][j] === 1) {
//         ans += dfs(i, j);
//       }
//     }
//   }
//   return ans;
// };

console.log(
  "should be 16",
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
