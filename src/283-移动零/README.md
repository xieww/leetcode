# 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

## 思路

- 遍历数组
- 若 nums[i]为 0，则删除当前元素，并在数组末尾追加 0
- 时间复杂度 O(N)
- 空间复杂度 O(1)

```js
var moveZeroes = function (nums) {
  let i = nums.length;
  while (i) {
    i--;
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};
```

来源：力扣（LeetCode）  
链接：[LeetCode 原题](https://leetcode-cn.com/problems/move-zeroes)
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
