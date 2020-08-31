# 反转字符串中的单词 III

## 思路

* 先将字符串s根据空格分隔成数组，翻转数组中每个元素，然后按照空格将数组拼接成字符串
* 时间复杂度为O(n),n为数组arr的长度

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
