/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 时间复杂度为O(n^2)
 * 空间复杂度O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let newHead = new ListNode(0);
  while (head) {
    const t = head;
    head = head.next;
    let cur = newHead;
    while (cur) {
      if (!cur.next || t.val <= cur.next.val) {
        [cur.next, t.next] = [t, cur.next];
        break;
      }
      cur = cur.next;
    }
  }
  return newHead.next;
};

var insertionSortList = function (head) {
  if (head == null) {
    return head;
  }

  let newHead = new ListNode(0); //new starter of the sorted list
  let cur = head; //the node will be inserted
  let pre = newHead; //insert node between pre and pre.next
  let next = null; //the next node will be inserted
  //not the end of input list
  while (cur != null) {
    next = cur.next;
    //find the right place to insert
    while (pre.next != null && pre.next.val < cur.val) {
      pre = pre.next;
    }
    //insert between pre and pre.next
    cur.next = pre.next;
    pre.next = cur;
    pre = newHead;
    cur = next;
  }

  return newHead.next;
};
