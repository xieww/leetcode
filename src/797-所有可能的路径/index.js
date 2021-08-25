/**
 * BFS
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let target = graph.length - 1;
  let ans = [];
  let nodeQ = [0];
  let pathQ = [[0]];
  while (nodeQ.length !== 0) {
    let node = nodeQ.shift();
    let path = pathQ.shift();
    graph[node].forEach((ele) => {
      if (ele === target) {
        ans.push([...path, ele]);
      } else {
        nodeQ.push(ele);
        pathQ.push([...path, ele]);
      }
    });
  }
  return ans;
};

// DFS
// var allPathsSourceTarget = function (graph) {
//   const paths = [];
//   const dfs = (index, path) => {
//     if (path[path.length - 1] == graph.length - 1) {
//       paths.push(path);
//       return;
//     }
//     for (let i = 0; i < graph[index].length; i++) {
//       dfs(graph[index][i], [...path, graph[index][i]]);
//     }
//   };
//   dfs(0, [0]);
//   return paths;
// };

// DFS
// var allPathsSourceTarget = function (graph) {
//   const target = graph.length - 1;
//   const res = [];
//   const dfs = (node, path) => {
//     path.push(node);
//     if (node === target) {
//       res.push(path);
//       return;
//     }
//     for (let edge of graph[node]) {
//       dfs(edge, [...path]);
//     }
//   };
//   dfs(0, []);
//   return res;
// };

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
