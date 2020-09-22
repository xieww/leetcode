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


/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var myStack = new MyStack();

myStack.push(1);
myStack.push(2);
console.log("should be [1,2] ", myStack);
console.log("should be 2", myStack.top());
// myStack.pop();
console.log("should be 1", myStack.pop(),myStack);
console.log("should be false", myStack.empty());
