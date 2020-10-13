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
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let prev = dummyHead;
  let first = prev.next;
  while (first && first.next) {
    let second = first.next;
    let next = second.next;

    second.next = first;
    first.next = next;
    prev.next = second;

    prev = first;
    first = first.next;
  }
  return dummyHead.next;
};

/**
 * 递归解法
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let first = head; // 第一个节点
  let second = first.next; // 第二个节点
  let third = second.next; // 第三个节点
  second.next = first; // 第一个节点和第二个节点进行交换，交换后第二个节点变成第一个节点，第一个节点变成第二个节点
  first.next = swapPairs(third); // 第二个节点（原第一个节点）后继指针指向第三个节点，并从第三个节点进行ƒ递归
  return second;
};

/**
 * 递归解法
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  // 获得第 2 个节点
  let prev = head.next;
  // next.next = head.next.next
  // 第1个节点指向第 3 个节点，并从第3个节点开始递归
  head.next = swapPairs(prev.next);
  // 第2个节点指向第 1 个节点
  prev.next = head;
  // 或者 [head.next,next.next] = [swapPairs(next.next),head]
  return prev;
};
