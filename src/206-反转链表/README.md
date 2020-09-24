# 反转链表

```text
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

单链表结构：
1. Data 数据 + Next 指针，组成一个单链表的内存结构
2. 第一个内存结构称为 链头，最后一个内存结构称为 链尾；
3. 链尾的 Next 指针设置为 NULL [指向空]；
```

## 思路

### 方法 1，迭代法

- 将单链表中每个节点的后继指针指向它的前驱节点即可
- 时间复杂度 O(n)
- 空间复杂度 O(1)

```js
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var current = head;
  var prev = null; // 链尾设置为null
  while (current) {
    current.next = prev;
    prev = current;
    current = current.next;
  }
  return prev;
};
```

### 方法 2，尾递归法

- 从头节点开始，递归反转它的每一个节点，直到 null
- 时间复杂度 O(n)
- 空间复杂度 O(n)

```js
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var reverse = function (prev, current) {
    if (!current) {
      return prev;
    }
    var next = current.next;
    current.next = prev;
    return reverse(current, next);
  };
  return reverse(null, head);
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/reverse-linked-list)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
