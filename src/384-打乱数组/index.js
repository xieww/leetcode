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
    for (let i = 1; i < arr.length; i++) {
      const index = this.getRndInteger(0, i + 1);
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
    return arr;
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const obj = new Solution(arr);
const param_1 = obj.shuffle();
const param_2 = obj.reset();
const param_3 = obj.shuffle();
console.log("param_1", param_1);
console.log("param_2", param_2);
console.log("param_3", param_3);
