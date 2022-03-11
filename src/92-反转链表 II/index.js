/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  // base case
  if (m == 1) {
    return reverseN(head, n);
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
};

let successor = null;
var reverseN = function (head, n) {
  if (n == 1) {
    // 记录第 n + 1 个节点
    successor = head.next;
    return head;
  }
  // 以 head.next 为起点，需要反转前 n - 1 个节点
  let last = reverseN(head.next, n - 1);

  head.next.next = head;
  // 让反转之后的 head 节点和后面的节点连起来
  head.next = successor;
  return last;
};
