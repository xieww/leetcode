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
// 方法1
var reverseList = function (head) {
  var current = head;
  var prev = null;
  while (current) {
    current.next = prev;
    prev = current;
    current = current.next;
  }
  return prev;
};

// 方法2，ES6新特性（解构赋值）
// var reverseList = function (head) {
//   let [prev, current] = [null, head];
//   while (current) {
//     [current.next, prev, current] = [prev, current, current.next];
//   }
//   return prev;
// };
