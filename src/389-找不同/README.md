# 找不同

# 思路

* 遍历字符串s，用s中对应的字符将t中的字符替换为空字符，将每次替换后的新字符串重新赋值给t
* 最终未被替换的就是不同之处
* 时间复杂度O(n)，n为s的长度
* 空间复杂度O(i)

```js
var findTheDifference = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], "");
  }
  return t;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/find-the-difference)
