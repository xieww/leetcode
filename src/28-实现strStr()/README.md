# 实现 strStr()

## 方法 1

### 思路

- 关键点：利用字符串 indexOf 方法（返回某个指定的字符串值在字符串中首次出现的位置）
- 若 needle 为空返回 0
- 若 needle 存在于 haystack 中，则返回 needle 首次出现的位置，若不存在返回-1

```js
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }
  return haystack.indexOf(needle);
};
```

## 方法 2

### 思路

- 若 needle 直接返回 0
- 单层 for 循环，若 haystack 某个位置的字符和 needle 首字符匹配，则利用 substring 方法在 haystack 截取指定长度的字符串和 needle 进行对比，若二者相等，则返回对应的下标，否则返回-1
- 时间复杂度 O(n)，n 为 haystack 的长度

```js
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) return i;
    }
  }

  return -1;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/implement-strstr/)
