/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
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

// var hasCycle = function (head) {
//   if (!head || !head.next) return false;
//   let set = new Set();
//   let cur = head;
//   while (cur) {
//     if (set.has(cur)) return true;
//     set.add(cur);
//     cur = cur.next;
//   }
//   return false;
// };
