/**
 * @param {number[]} nums
 */
class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}
   */
  reset() {
    return this.nums;
  }

  /**
   * Returns a random shuffling of the array.
   * @return {number[]}
   */
  shuffle() {
    if (this.nums === null) {
      return null;
    }
    const arr = [...this.nums];
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      const index = Math.floor(Math.random() * len);
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
    return arr;
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  shufflePro() {
    if (this.nums === null) {
      return null;
    }
    let arr = [...this.nums];
    const random = Math.random;
    arr = arr
      .map((item) => ({ val: item, key: random() }))
      .sort((a, b) => b.key - a.key)
      .map((item) => item.val);
    return arr;
  }

  /**
   * @description Fisher–Yates shuffle 洗牌算法
   * @author xieww
   * @date 2021-05-20
   * @memberof Solution
   */
  shuffleProMax() {
    if (this.nums === null) {
      return null;
    }
    let arr = [...this.nums];
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const obj = new Solution(arr);
const param_1 = obj.shuffleProMax();
const param_2 = obj.reset();
const param_3 = obj.shuffleProMax();
console.log("param_1", param_1);
console.log("param_2", param_2);
console.log("param_3", param_3);