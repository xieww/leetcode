# 上升下降字符串

给你一个字符串 s ，请你根据下面的算法重新构造字符串：

1. 从 s 中选出最小的字符，将它接在结果字符串的后面。
2. 从 s 剩余字符中选出最小的字符，且该字符比上一个添加的字符大，将它接在结果字符串后面。
3. 重复步骤 2 ，直到你没法从 s 中选择字符。
4. 从 s 中选出最大的字符，将它接在结果字符串的后面。
5. 从 s  剩余字符中选出最大的字符，且该字符比上一个添加的字符小，将它接在结果字符串后面。
6. 重复步骤 5 ，直到你没法从 s 中选择字符。
7. 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。

在任何一步中，如果最小或者最大字符不止一个，你可以选择其中任意一个，并将其添加到结果字符串。

请你返回将 s  中字符重新排序后的 结果字符串 。

示例 1：

```text
输入：s = "aaaabbbbcccc"
输出："abccbaabccba"
解释：第一轮的步骤 1，2，3 后，结果字符串为 result = "abc"
第一轮的步骤 4，5，6 后，结果字符串为 result = "abccba"
第一轮结束，现在 s = "aabbcc" ，我们再次回到步骤 1
第二轮的步骤 1，2，3 后，结果字符串为 result = "abccbaabc"
第二轮的步骤 4，5，6 后，结果字符串为 result = "abccbaabccba"
```

示例 2：

```text
输入：s = "rat"
输出："art"
解释：单词 "rat" 在上述算法重排序以后变成 "art"
```

示例 3：

```text
输入：s = "leetcode"
输出："cdelotee"
```

示例 4：

```text
输入：s = "ggggggg"
输出："ggggggg"
```

示例 5：

```text
输入：s = "spo"
输出："ops"
```

提示：

1. 1 <= s.length <= 500
2. s 只包含小写英文字母。

## 思路

```js
var sortString = function (s) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97;
    arr[index]++;
  }
  const res = new Array(Math.max(...arr)).fill("");
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < arr[i]; j++) {
      if (j % 2 === 0) {
        res[j] += String.fromCharCode(i + 97);
      } else {
        res[j] = String.fromCharCode(i + 97) + res[j];
      }
    }
  }

  return res.join("");
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/increasing-decreasing-string)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
