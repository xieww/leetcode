# 单词接龙

给定两个单词（beginWord  和 endWord）和一个字典，找到从  beginWord 到  endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。

```text
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
返回它的长度 5。
```

```text
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: 0

解释: endWord "cog" 不在字典中，所以无法进行转换。
```

## 思路

```js
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) {
    return 0;
  }

  const set = new Set(wordList);
  let step = 1;
  let q = [beginWord];
  while (q.length) {
    const next = [];
    for (let w of q) {
      if (w === endWord) {
        return step;
      }
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < 26; j++) {
          const w2 =
            w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1); // 97 -> 'a'
          if (set.has(w2)) {
            next.push(w2);
            set.delete(w2);
          }
        }
      }
    }
    q = next;
    step++;
  }

  return 0;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/word-ladder)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
