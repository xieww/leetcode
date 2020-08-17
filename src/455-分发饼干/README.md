# 分发饼干

## 思路

- 先对 g,s 进行升序排序，从最小的饼干 🍪 给予胃口值最小的孩子开始进行判断
- 若当前饼干满足当前孩子的胃口值，则 result、i、j 分别加 1，result 记录当前的结果值，继续寻找下一个饼干和孩子
- 若当前饼干 🍪 不满足当前孩子的胃口值，则只执行 j++，亦即寻找下一个饼干 🍪，直到循环结束

```js
var findContentChildren = function (g, s) {
  let result = 0;
  if (!g || g.length === 0 || !s || s.length === 0) {
    return result;
  }
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    const child = g[i]; // 记录当前孩子
    const cookie = s[j]; // 记录当前饼干

    if (cookie >= child) {
      result++;
      i++;
    }
    j++;
  }

  return result;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/assign-cookies/)
