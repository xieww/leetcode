/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stackItems = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stackItems.push({
    value: x,
    min: this.stackItems.length === 0 ? x : Math.min(x, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stackItems.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stackItems[this.stackItems.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stackItems[this.stackItems.length - 1].min;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("should be -3", minStack.getMin());
minStack.pop();
console.log("should be 0", minStack.top());
minStack.top();
console.log("should be -2", minStack.getMin());