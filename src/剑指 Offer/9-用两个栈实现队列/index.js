class CQueue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  /** 队尾入队操作
   * @description
   * @author xieww
   * @date 2021-03-25
   * @param {*} value
   * @return {void}
   * @memberof CQueue
   */
  appendTail(value) {
    this.stackA.push(value);
  }

  /**
   * @description 队头出队
   * @author xieww
   * @date 2021-03-25
   * @returns {number}
   * @memberof CQueue
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

const queue = new CQueue();
queue.appendTail(3);
console.log(queue.deleteHead());
console.log(queue.deleteHead());
