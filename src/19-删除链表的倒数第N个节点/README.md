# 删除链表的倒数第 N 个节点

给定一个链表，删除链表的倒数第  n  个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n  保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？

## 思路

```js
var removeNthFromEnd = function (head, n) {
  var nullHead = new ListNode(null);
  nullHead.next = head;
  var p1 = nullHead;
  var p2 = nullHead;

  for (var i = 0; i < n + 1; i++) p1 = p1.next;
  while (p1 !== null) {
    p2 = p2.next;
    p1 = p1.next;
  }
  p2.next = p2.next.next;
  return nullHead.next;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
