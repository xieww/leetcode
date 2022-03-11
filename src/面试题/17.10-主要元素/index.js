/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let num = null;
  let count = 0;
  for (const item of nums) {
    if (count === 0) {
      num = item;
      count = 1;
    } else if (num === item) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  for (const item of nums) {
    if (num === item) {
      count++;
    }
  }
  return count > nums.length / 2 ? num : -1;
};
console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]));
console.log(majorityElement([3, 2]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
