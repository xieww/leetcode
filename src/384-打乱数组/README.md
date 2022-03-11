# 打乱数组

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

实现 Solution class:

- Solution(int[] nums) 使用整数数组 nums 初始化对象
- int[] reset() 重设数组到它的初始状态并返回
- int[] shuffle() 返回数组随机打乱后的结果

示例：

```js
输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
```

## 解题思路

```js
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
```

提示：

- 1 <= nums.length <= 200
- -106 <= nums[i] <= 106
- nums 中的所有元素都是 唯一的
- 最多可以调用 5 \* 104 次 reset 和 shuffle

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/shuffle-an-array)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
