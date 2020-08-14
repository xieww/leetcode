# 在每个树行中找最大值

## 思路

### BFS

* 若树节点为空则直接返回[]
* 将树以一个queue队列进行存储，然后进行遍历
* 层级最大值max初始值设为-Infinity，依次从队列中读取节点和当前max进行比较，重置max
* 若存在左右子树则将其分别存进queue队列

```js
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
```

[LeetCode 原题](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row)
