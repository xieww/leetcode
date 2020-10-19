/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let hare = head,
    curr = head;
  while (n--) {
    hare = hare.next;
  }
  while (hare && hare.next) {
    curr = curr.next;
    hare = hare.next;
  }
  if (!hare) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null;
  }
  return head;
};

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
