/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法一
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null) {
    return true;
  }
  const arr = [];
  while (head && head.val !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.join('') === arr.reverse().join('');
};

// 方法二，递归
var isPalindrome = function (head) {
  let current = head;
  const traverse = (node) => {
    if (node === null) {
      return true;
    }
    const prevIsSame = traverse(node.next);
    const currIsSame = current.val === node.val;
    current = current.next;
    return prevIsSame && currIsSame;
  };
  return traverse(head);
};

// 方法三
var isPalindrome = function (head) {
  const arr = [];
  while (head && head.val !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.every((item, i) => item === arr[arr.length - i - 1]);
};