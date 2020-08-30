# 反转字符串中的单词 III

## 思路

```js
var reverseWords = function (s) {
  const arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].split("").reverse().join("");
    arr[i] = current;
  }
  return arr.join(" ");
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)
