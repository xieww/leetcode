/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 说明:
 *    初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 *    你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums1.push.apply(nums1, nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(
  "should be [ 1, 2, 2, 3, 5, 6 ]",
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);
