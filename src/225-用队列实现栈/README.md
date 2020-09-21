# 用队列实现栈

```text
使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
```

## 思路

```js
/**
 * Initialize your data structure here.
 */
class MyStack {
  constructor() {
    this.queue = [];
    this.tmpQueue = [];
  }
  /**
   * Push element x onto stack.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.queue.push(x);
  }
  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop() {
    while (this.queue.length > 1) {
      this.tmpQueue.push(this.queue.shift());
    }
    var tmp = this.queue.shift();
    this.queue = this.tmpQueue;
    this.tmpQueue = [];
    return tmp;
  }
  /**
   * Get the top element.
   * @return {number}
   */
  top() {
    while (this.queue.length > 1) {
      this.tmpQueue.push(this.queue.shift());
    }
    var tmp = this.queue.shift();
    this.tmpQueue.push(tmp);
    this.queue = this.tmpQueue;
    this.tmpQueue = [];
    return tmp;
  }
  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return !this.queue.length;
  }
}
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/implement-stack-using-queues)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
