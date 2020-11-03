/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter((item) => nums2.includes(item)))];
};

var intersection = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let res = new Set();
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      res.add(nums1[i]);
      i++;
      j++;
    }
  }
  return [...res];
};

var intersection = function (nums1, nums2) {
  let tmp = {};
  return nums1.filter((item) => {
    if (!tmp[item] && nums2.includes(item)) {
      tmp[item] = true;
      return nums2.includes(item);
    }
  });
};

var intersection = function (nums1, nums2) {
  let result = [];
  nums1.forEach((item) => {
    if (nums2.includes(item)) {
      result.push(item);
    }
  });
  return [...new Set(result)];
};

var intersection = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }
  return [...new Set(result)];
};

var intersection = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }
  return result;
};

console.log("should be [ 2 ]", intersection([1, 2, 2, 1], [2, 2]));
console.log("should be [ 4, 9 ]", intersection([4, 9, 5], [9, 4, 9, 8, 4]));
