/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针
 * 时间复杂度O(n)，空间复杂度O(1)
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

// 时间复杂度O(n)，空间复杂度O(n)
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

const linkList = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

console.log(hasCycle(linkList));
