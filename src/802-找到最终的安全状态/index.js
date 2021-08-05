/**
 * @param {number[][]} graph
 * @return {number[]}
 */
// var eventualSafeNodes = function (graph) {
//   let results = [];
//   let visited = {};
//   for (let i = 0; i < graph.length; i++) {
//     if (isNodeSafe(graph, i, visited)) {
//       results.push(i);
//     }
//   }
//   return results.sort((a, b) => a - b);
// };

// function isNodeSafe(graph, node, visited) {
//   if (visited[node] === true) {
//     return false;
//   }
//   if (visited[node] === "safe") {
//     return true;
//   }

//   visited[node] = true;
//   for (let i = 0; i < graph[node].length; i++) {
//     if (!isNodeSafe(graph, graph[node][i], visited)) {
//       return false;
//     }
//   }
//   visited[node] = "safe";
//   return true;
// }

// 时间复杂度O(n+m) n为图的节点数，m为图的边数；空间复杂度O(n)
// 深度优先+染色法 
// 白色（用 0 表示）：该节点尚未被访问；
// 灰色（用 1 表示）：该节点位于递归栈中，或者在某个环上；
// 黑色（用 2 表示）：该节点搜索完毕，是一个安全节点
var eventualSafeNodes = function (graph) {
  const len = graph.length;
  const color = new Array(len).fill(0);
  const result = [];
  for (let i = 0; i < len; ++i) {
    if (dfs(graph, color, i)) {
      result.push(i);
    }
  }

  return result;
};

const dfs = function (graph, color, i) {
  if (color[i] > 0) {
    return color[i] === 2;
  }

  color[i] = 1;
  for (const item of graph[i]) {
    if (!dfs(graph, color, item)) {
      return false;
    }
  }
  color[i] = 2;
  return true;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
console.log(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]));
