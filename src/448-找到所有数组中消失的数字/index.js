/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = Array.from(new Array(nums.length + 1).keys()).slice(1);
  nums = [...new Set(nums)];
  return arr.filter((item) => nums.indexOf(item) === -1);
};

console.log(
  "should be [5,6]",
  findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
);
