/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  function depthSearch(x, y) {
    if (grid[x][y] === "1") {
      grid[x][y] = "0";
    } else {
      return;
    }

    if (x < grid.length - 1) {
      depthSearch(x + 1, y);
    }

    if (y < grid[x].length - 1) {
      depthSearch(x, y + 1);
    }

    if (x > 0 && x < grid.length) {
      depthSearch(x - 1, y);
    }

    if (y > 0 && y < grid[x].length) {
      depthSearch(x, y - 1);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        depthSearch(i, j);
      }
    }
  }

  return count;
};

var numIslands = function (grid) {
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === "0"
    ) {
      return;
    }
    grid[i][j] = "0";
    dfs(i - 1, j); // up
    dfs(i + 1, j); // down
    dfs(i, j - 1); // left
    dfs(i, j + 1); // right
  };

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log("should be 1", numIslands(grid1));
console.log("should be 3", numIslands(grid2));
