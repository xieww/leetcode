# 重排链表

给定一个单链表  L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例  1:

> 给定链表 1->2->3->4, 重新排列为 1->4->2->3.

示例 2:

> 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

## 思路

```js
var reorderList = function (head) {
  let stack = [];
  let node = head;
  if (!node) return;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let len = stack.length;
  node = head;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      node.next = stack.shift();
    } else {
      node.next = stack.pop();
    }
    node = node.next;
  }
  node.next = null;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/reorder-list)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
