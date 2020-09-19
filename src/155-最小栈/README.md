# 最小栈

```text
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
 

示例:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 

提示：

pop、top 和 getMin 操作总是在 非空栈 上调用。
```

# 思路

- 核心思想利用数组现有方法
- 初始化最小栈，用空数组作为初始栈
- 用数组的 push 方法作为栈的 push 方法，每次存入 x 以及当前栈中最小的元素
- 数组的 pop 方法作为删除栈顶元素方法
- 数组的最后一个元素即为栈顶元素
- 因每次 push 时都存入当前栈中最小元素，故栈顶元素中的最小值即为当前栈中最小元素

```js
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
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/min-stack)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
