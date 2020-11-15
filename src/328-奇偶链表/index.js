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
var oddEvenList = function (head) {
  if (head !== null) {
    let odd = head; // 奇数节点
    let even = head.next; // 偶数节点
    let evenHead = even;
    while (even !== null && even.next !== null) {
      odd.next = odd.next.next;// 奇数节点的后继指向其后继节点的后继
      even.next = even.next.next; // 偶数节点的后继指向其后继节点的后继
      odd = odd.next;
      even = even.next;
    }
    odd.next = evenHead; // 将最终的奇数节点后继指向偶数节点
  }
  return head;
};

var oddEvenList = function (head) {
  if (head !== null) {
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even !== null && even.next !== null) {
      odd.next = even.next; // 奇数节点的后继指向偶数节点的后继
      odd = odd.next;
      even.next = odd.next; // 偶数节点的后继指向奇数节点的后继
      even = even.next;
    }
    odd.next = evenHead;
  }
  return head;
};
