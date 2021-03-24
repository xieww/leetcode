class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var getKthFromEnd = function (head, k) {
//   let p = head;
//   let q = head;

//   let i = 0;
//   while (p) {
//     if (i >= k) {
//       q = q.next;
//     }
//     p = p.next;
//     i++;
//   }
//   return i < k ? null : q;
// };

var getKthFromEnd = function (head, k) {
  //栈方法
  var stack = [];
  var result = [];
  //所有节点入栈
  while (head) {
    stack.push(head);
    head = head.next;
  }
  //出栈第k个节点
  while (k > 0) {
    result = stack.pop();
    k--;
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const tree = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(getKthFromEnd(tree, 2));
