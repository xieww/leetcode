# 回文链表

请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用  O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

## 思路

- 若链表为空直接返回 true
- 用数组暂存遍历到节点值，遍历结束的标志为后继节点为空，
- 若原数组和数组反转之后的值相等即为回文链表，反之则不为回文链表
- 时间复杂度 O(n)
- 空间复杂度 O(n)

```js
var isPalindrome = function (head) {
  if (head === null) {
    return true;
  }
  const arr = [];
  while (head && head.val !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.join("") === arr.reverse().join("");
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/palindrome-linked-list)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
