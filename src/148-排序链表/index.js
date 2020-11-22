/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(fast));
};

var merge = function (h1, h2) {
  const dummy = {};
  let cur = dummy;
  while (h1 && h2) {
    if (h1.val < h2.val) {
      cur.next = h1;
      h1 = h1.next;
    } else {
      cur.next = h2;
      h2 = h2.next;
    }
    cur = cur.next;
  }
  cur.next = h1 || h2;
  return dummy.next;
};
