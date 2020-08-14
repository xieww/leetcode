# 有效的括号

## 思路

* 括号都是成对出现，也就是括号组成的字符串长度应为偶数
* 对字符串长度进行取余，若不是偶数则返回false
* 若字符串长度为偶数则遍历字符串，每次取出单个字符,若字符为左括号则存入数组arr，遇到右括号则从数组尾部取出一个元素，判断取出的元素是否为letter对应的左括号，若不是则直接返回false

```js
var isValid = function (s) {
  let arr = [];
  let len = s.length;
  if (len % 2) return false;
  for (let i = 0; i < len; i++) {
    let letter = s[i];
    switch (letter) {
      case "(": {
        arr.push(letter);
        break;
      }
      case "[": {
        arr.push(letter);
        break;
      }
      case "{": {
        arr.push(letter);
        break;
      }
      case ")": {
        if (arr.pop() !== "(") return false;
        break;
      }
      case "]": {
        if (arr.pop() !== "[") return false;
        break;
      }
      case "}": {
        if (arr.pop() !== "{") return false;
        break;
      }
    }
  }
  return !arr.length;
};
```

[有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
