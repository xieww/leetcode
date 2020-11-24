# 完全二叉树的节点个数

给出一个完全二叉树，求出该树的节点个数。

说明：

完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h  个节点。

示例:

```text
输入:
    1
   / \
  2   3
 / \  /
4  5 6

输出: 6
```

## 思路

* 借助队列分别遍历树的左右子树，若树存在左右子树，则进行入队操作
* 循环队列中的每个子元素，若子元素也存在左子树或右子树则进行入队操作，直到队列为空即为结束条件
* 节点个数为：根节点+左子树节点个数+右子树节点个数

```js
var countNodes = function (root) {
  if (!root) {
    return 0;
  }

  var helper = (nodes) => {
    let count = 0;
    if (nodes) {
      const queue = [nodes];
      while (queue.length) {
        const node = queue.shift();
        count++;
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return count;
  };

  return 1 + helper(root.left) + helper(root.right);
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/count-complete-tree-nodes)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
