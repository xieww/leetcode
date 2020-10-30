/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法1，迭代法
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var current = head;
  var prev = null;
  while (current) {
    // 保存下一个节点值
    let next = current.next;
    current.next = prev; // 反转current的后继指针
    prev = current; // 交换prev、current
    current = next; // current指向下一个节点
  }
  return prev;
};

// 方法2，ES6新特性（解构赋值）
var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};

// 方法3，尾递归
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var reverse = function (prev, current) {
    if (!current) {
      return prev;
    }
    // 保存下一个节点值
    var next = current.next;
    current.next = prev;
    return reverse(current, next);
  };
  return reverse(null, head);
};

// 方法4，递归，时间复杂度O(n)、空间复杂度O(n)
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var next = head.next;
  var reverseHead = reverseList(next);
  // 变更指针
  next.next = head;
  head.next = null;
  return reverseHead;
};
