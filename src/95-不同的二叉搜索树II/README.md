# 不同的二叉搜索树 II

给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。

示例：

```text
输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

提示：

- 0 <= n <= 8

## 思路

```js
var generateTrees = function (n) {
  const helper = (n, l = 1, r = n, res = []) => {
    for (let i = l; i <= r; i++) {
      for (const left of helper(n, l, i - 1)) {
        for (const right of helper(n, i + 1, r)) {
          res.push({ val: i, left, right });
        }
      }
    }
    return n ? (res.length ? res : [null]) : [];
  };

  return helper(n);
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/unique-binary-search-trees-ii)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
