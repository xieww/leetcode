# 划分字母区间

字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。

示例 1：

输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

提示：

S 的长度在[1, 500]之间。
S 只包含小写字母 'a' 到 'z' 。

## 思路

- 遍历字符串，end 标识字符最后出现的位置，start 为片段分割起始位置
- 当 i=end，说明后面不会再出现 S[i]，即为片段分割点
- 将片段的长度存入 result，重置 start、end
- 时间复杂度 O(n)
- 空间复杂度 O(n)

```js
var partitionLabels = function (S) {
  let start = 0;
  let end = 0;
  let result = [];
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, S.lastIndexOf(S[i]));
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
      end = 0;
    }
  }
  return result;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/partition-labels)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
