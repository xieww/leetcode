var rob = function (nums) {
  let result = 0;
  if (!nums || nums.length === 0) {
    return result;
  }

  const length = nums.length;
  if (length == 1) {
    return nums[0];
  }

  const arr = new Array(length + 1);
  arr[0] = 0;
  arr[1] = nums[0];
  for (let i = 2; i <= length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i - 1]);
  }
  return arr[length];
};

console.log("[1,2,3,1] should be 4", rob([1, 2, 3, 1]));
console.log("[2,7,9,3,1] should be 12", rob([2, 7, 9, 3, 1]));
