/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const arr = new Array(nums.length + 1).fill(0);
  arr[0] = 1;
  let result = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    if (sum >= goal) {
      result += arr[sum - goal];
    }
    arr[sum]++;
  }
  return result;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
