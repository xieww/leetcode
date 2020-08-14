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
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(max);
  }
  return result;
};
