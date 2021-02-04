# 替换后的最长重复字符

给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。

注意：字符串长度 和 k 不会超过 104。

示例 1：

```text
输入：s = "ABAB", k = 2
输出：4
解释：用两个'A'替换为两个'B',反之亦然。
```

示例 2：

```text
输入：s = "AABABBA", k = 1
输出：4
解释：
将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
子串 "BBBB" 有最长重复字母, 答案为 4。
```

## 思路

```js
var characterReplacement = function (s, k) {
  const len = s.length;
  const arr = new Array(26).fill(0);
  let result = 0;
  let start = 0;
  let maxCount = 0;
  for (let i = 0; i < len; i++) {
    maxCount = Math.max(maxCount, ++arr[s[i].charCodeAt() - "A".charCodeAt()]);
    while (i - start + 1 - maxCount > k) {
      arr[s[start].charCodeAt() - "A".charCodeAt()]--;
      start++;
    }
    result = Math.max(result, i - start + 1);
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/longest-repeating-character-replacement)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
