// 左闭右闭[left,right]
var search = function (nums, target) { // 二分查找
    let left = 0; // 左指针
    let right = nums.length - 1; // 右指针
    while (left <= right) {     // 当左指针小于等于右指针时
      const mid = Math.floor((left + right) / 2);   // 计算中间值
      if (nums[mid] > target) { // 如果中间值大于目标值
        right = mid - 1;  // 右指针向左移动
      } else if (nums[mid] < target) {      // 如果中间值小于目标值
        left = mid + 1;     // 左指针向右移动
      } else {
        return mid;   // 返回中间值
      }
    }
};

// 左闭右开[left,right)
// var search = function (nums, target) { // 二分查找
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] > target) {
//         right = mid;
//       } else if (nums[mid] < target) {
//         left = mid + 1;
//       } else {
//         return mid;
//       }
//     }
// };

console.log(search([1, 2, 2, 3, 5, 6], 2));
console.log(search([-1, 0, 3, 5, 9, 12], 9));