/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let distance = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= s) {
      distance = Math.min(distance, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }

  return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};

var minSubArrayLen = function (s, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let result = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= s) {
      let len = right - left + 1;
      if (result === 0 || len < result) result = len;
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return result;
};

var minSubArrayLen = function (s, nums) {
  if (nums.length == 0) return 0;
  let left = 0,
    right = 0,
    sum = 0,
    min = Infinity;
  while (right != nums.length) {
    sum += nums[right];

    while (sum >= s) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }

    right++;
  }
  if (min == Infinity) return 0;
  return min;
};

console.log("should be [4,3]", minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
