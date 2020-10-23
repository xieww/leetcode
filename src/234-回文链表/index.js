/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法一 时间复杂度O(n)，空间复杂度O(n)
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
  return arr.join("") === arr.reverse().join("");
};

// 方法二，递归，时间复杂度O(n)，空间复杂度O(n)
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

// 方法三 时间复杂度O(n)，空间复杂度O(n)
var isPalindrome = function (head) {
  const arr = [];
  while (head && head.val !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.every((item, i) => item === arr[arr.length - i - 1]);
};

var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;
  var slow = head;
  var fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  var reverseList = function (head) {
    var pre = null;
    var next = null;
    while (head != null) {
      next = head.next;
      head.next = pre;
      pre = head;
      head = next;
    }
    return pre;
  };
  slow.next = reverseList(slow.next);
  slow = slow.next;
  while (slow != null) {
    if (head.val != slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

// 时间复杂度O(n)，空间复杂度O(1)
var isPalindrome = function (head) {
  if (!head) return true;
  let prev = head;
  let first = head;
  while (first.next !== null) {
    first = first.next;
    first.prev = prev;
    prev = prev.next;
  }
  let second = head;
  while (head.next !== null && first.prev !== null) {
    if (second.val !== first.val) {
      return false;
    }
    second = second.next;
    first = first.prev;
  }
  return true;
};
