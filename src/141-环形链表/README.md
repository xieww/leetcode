# 环形链表

```js
var hasCycle = function (head) {
  let p1 = head;
  let p2 = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      return true;
    }
  }

  return false;
};
```

[LeetCode 原题](https://leetcode-cn.com/problems/linked-list-cycle/submissions/)