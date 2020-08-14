// BFS
var largestValues = function (root) {
  let result = [];
  if (!root) return result;
  let queue = [root];
  while (queue.length) {
    const length = queue.length;
    let max = -Infinity;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(max);
  }
  return result;
};

// DFS
var largestValues = function (root) {
  const result = [];
  const dfs = (node, level) => {
    if (!node) return;
    // 判断result[level]是否存在
    if (result[level] === void 0) {
      result[level] = -Infinity
    };
    result[level] = Math.max(result[level], node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return result;
};
