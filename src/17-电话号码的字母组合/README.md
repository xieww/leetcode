# 电话号码的字母组合

## 思路

```js
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  const result = [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const generate = (curStr, i) => {
    // curStr是当前字符串，i是扫描的指针
    if (i > digits.length - 1) {
      // 指针越界，递归的出口
      result.push(curStr); // 将解推入result
      return; // 结束当前递归分支，进入另一个递归分支
    }
    const letters = map[digits[i]]; // 当前数字对应有哪些字母
    for (const l of letters) {
      // 不同的字母选择代表不同的递归分支
      generate(curStr + l, i + 1); // 生成新字符串，i指针右移，递归
    }
  };
  generate("", 0); // 递归的入口，初始字符串为''，指针为0
  return result;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
