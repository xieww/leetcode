# 四数之和

```text
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## 思路

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    const result = []

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1

            while (low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]])
                    while (nums[low] === nums[low + 1]) low++;
                    while (nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (sum < target) {
                    low++
                } else {
                    high--
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return result
};
```

来源：力扣（LeetCode）    
链接：[LeetCode 原题](https://leetcode-cn.com/problems/4sum)    
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。