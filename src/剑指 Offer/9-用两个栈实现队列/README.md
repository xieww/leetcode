# 用两个栈实现队列

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 `appendTail` 和 `deleteHead` ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，`deleteHead`  操作返回 -1 )

示例 1：

```text
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```

示例 2：

```text
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

提示：

- 1 <= values <= 10000
- 最多会对  appendTail、deleteHead 进行  10000  次调用

## 思路

* 时间复杂度：appendTail是O(1)，deleteHead是O(n)
* 空间复杂度：O(n)

```js
class CQueue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }
  /**
   * @param {number} value
   * @return {void}
   */
  appendTail(value) {
    this.stackA.push(value);
  }
  /**
   * @return {number}
   */
  deleteHead() {
    if (this.stackB.length) {
      return this.stackB.pop();
    } else {
      while (this.stackA.length) {
        this.stackB.push(this.stackA.pop());
      }
      if (this.stackB.length) {
        return this.stackB.pop();
      } else {
        return -1;
      }
    }
  }
}
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
