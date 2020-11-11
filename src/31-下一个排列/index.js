/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] < nums[i + 1]) {
//       const large = nextLarge(i);
//       swap(i, large);
//       reverse(i + 1);
//       return nums;
//     }
//   }

//   // If there is no next permutation reverse the arr
//   nums.reverse();

//   function swap(i, j) {
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//   }

//   function reverse(idx) {
//     let start = idx,
//       end = nums.length - 1;

//     while (start < end) {
//       swap(start, end);
//       start++;
//       end--;
//     }
//   }

//   function nextLarge(idx) {
//     for (let i = nums.length - 1; i > idx; i--) {
//       if (nums[i] > nums[idx]) return i;
//     }
//   }
// };

var nextPermutation = function (nums) {
  let i = nums.length - 2; // 从倒数第二个，向左遍历
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // 寻找第一个小于右邻居的数
    i--;
  }
  if (i >= 0) {
    // 这个数在数组中存在
    let j = nums.length - 1; // 从最后一项，向左遍历
    while (j >= 0 && nums[j] <= nums[i]) {
      // 寻找第一个小于 nums[i] 的数
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
  }
  // 如果i=-1，说明是递减排列，如 321，则直接翻转为最小排列：123
  let l = i + 1; // i 右边的数进行翻转，使得变大的幅度小一些
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
  return nums;
};

// 时间复杂度O(N)，空间复杂度O(1)
// var nextPermutation = function (nums) {
//   let i = nums.length - 2;

//   var swap = (i, j) => {
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//   };

//   var reverse = (index) => {
//     let left = index;
//     let right = nums.length - 1;
//     while (left < right) {
//       swap(left, right);
//       left++;
//       right--;
//     }
//   };

//   while (i >= 0 && nums[i] >= nums[i + 1]) {
//     i--;
//   }
//   if (i >= 0) {
//     let j = nums.length - 1;
//     while (j >= 0 && nums[i] >= nums[j]) {
//       j--;
//     }
//     swap(i, j);
//   }
//   reverse(i + 1);
//   return nums;
// };

console.log("should be ", nextPermutation([1, 2, 3]));
console.log("should be ", nextPermutation([3, 2, 1]));
console.log("should be ", nextPermutation([1, 1, 5]));
console.log("should be ", nextPermutation([1, 1, 5, 4, 3]));
