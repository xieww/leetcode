# 找不同

给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

示例 1：

```text
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
```

示例 2：

```text
输入：s = "", t = "y"
输出："y"
```

示例 3：

```text
输入：s = "a", t = "aa"
输出："a"
```

示例 4：

```text
输入：s = "ae", t = "aea"
输出："a"
```

提示：

1. 0 <= s.length <= 1000
2. t.length == s.length + 1
3. s 和 t 只包含小写字母

# 思路

- 遍历字符串 s，用 s 中对应的字符将 t 中的字符替换为空字符，将每次替换后的新字符串重新赋值给 t
- 最终未被替换的就是不同之处
- 时间复杂度 O(n)，n 为 s 的长度
- 空间复杂度 O(i)

```js
var findTheDifference = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], "");
  }
  return t;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/find-the-difference) 
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
