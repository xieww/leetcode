# 字符串中的第一个唯一字符

## 思路

- 循环遍历字符串中每一个字符，判断字符在字符串中首次出现的位置和最后出现的位置是否一致，若相等，则返回当前位置，否则返回-1
- 时间复杂度为 O(n)，n 为字符串的长度

```js
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/first-unique-character-in-a-string)
