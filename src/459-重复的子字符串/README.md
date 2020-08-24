# 重复的子字符串

```js
var repeatedSubstringPattern = function (s) {
  return /^(\w+)\1+$/.test(s);
};
```

```js
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, -1).includes(s);
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/repeated-substring-pattern/)
