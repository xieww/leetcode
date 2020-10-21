/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 第一种
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let stack = [];
  let node = head;
  if (!node) return;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let len = stack.length;
  node = head;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      node.next = stack.shift();
    } else {
      node.next = stack.pop();
    }
    node = node.next;
  }
  node.next = null;
};

// 第二种
var reorderList = function (head) {
  dfs(head);
};

function dfs(node) {
  if (!node || !node.next || !node.next.next) return;
  var end = node;
  var next = node.next;
  var prev;
  while (end.next) {
    prev = end;
    end = end.next;
  }
  node.next = end;
  end.next = next;
  prev.next = null;
  dfs(next);
}
