# 重复的子字符串

## 方法 1

```js
var repeatedSubstringPattern = function (s) {
  const length = s.length;
  for (let i = 1; i * 2 <= length; i++) {
    let matched = true;
    for (let j = i; j < length; j++) {
      if (s.charAt(j) !== s.charAt(j - i)) {
        matched = false;
        break;
      }
    }
    if (matched) {
      return true;
    }
  }
  return false;
};
```

## 方法 2

```js
var repeatedSubstringPattern = function (s) {
  return /^(\w+)\1+$/.test(s);
};
```

## 方法 3

```js
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, -1).includes(s);
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/repeated-substring-pattern/)
