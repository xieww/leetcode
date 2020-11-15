# 移掉 K 位数字

给定一个以字符串表示的非负整数  num，移除这个数中的 k 位数字，使得剩下的数字最小。

注意:

- num 的长度小于 10002 且  ≥ k。
- num 不会包含任何前导零。

示例 1 :

```text
输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
```

示例 2 :

```text
输入: num = "10200", k = 1
输出: "200"
解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
```

示例 3 :

```text
输入: num = "10", k = 2
输出: "0"
解释: 从原数字移除所有的数字，剩余为空就是 0。
```

## 思路

- 时间复杂度 O(n)
- 空间复杂度 O(n)

```js
const stack = [];
let removed = 0;
for (let n of num) {
  while (stack.length && n < stack[stack.length - 1] && removed < k) {
    stack.pop();
    removed += 1;
  }
  stack.push(n);
}

// remove all remaining large numbers
while (removed < k) {
  stack.pop();
  removed += 1;
}

// remove all beginning zeroes
while (stack.length && stack[0] === "0") {
  stack.shift();
}

return stack.length ? stack.join("") : "0";
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/remove-k-digits)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
