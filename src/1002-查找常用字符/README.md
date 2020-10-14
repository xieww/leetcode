# 查找常用字符

给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。

示例 1：

输入：["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：["cool","lock","cook"]
输出：["c","o"]

提示：

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] 是小写字母

## 思路

- 以 A[0]为为起始标志
- 用 A[0]的每一个字符遍历 A 的每一个子元素，过滤出每一个子元素都存在的字符

```js
var commonChars = function (A) {
  let result = [...A[0]];
  for (let i = 0; i < A.length; i++) {
    result = result.filter((item) => {
      const len = A[i].length;
      A[i] = A[i].replace(item, "");
      return len > A[i].length;
    });
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/find-common-characters)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
