# 重构字符串

给定一个字符串 S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例  1:

```text
输入: S = "aab"
输出: "aba"
```

示例 2:

```text
输入: S = "aaab"
输出: ""
```

注意:

S 只包含小写字母并且长度在[1, 500]区间内。

## 思路

```js
var reorganizeString = function (S) {
  let hash = {};
  for (let c of S) {
    hash[c] = hash[c] + 1 || 1;
  }

  let sort = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  let result = [];
  let index = 0;

  for (let i = 0; i < sort.length; i++) {
    let occur = hash[sort[i]];
    if (occur > parseInt((S.length + 1) / 2)) {
      return "";
    }
    for (let j = 0; j < occur; j++) {
      if (index >= S.length) {
        index = 1;
      }
      result[index] = sort[i];
      index += 2;
    }
  }
  return result.join("");
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/reorganize-string)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
