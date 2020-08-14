var rob = function (nums) {
  let result = 0;
  if (!nums || nums.length === 0) { // 数组为空或长度为0直接返回0
    return result;
  }

  const length = nums.length;
  if (length == 1) { // 数组长度为1直接返回nums[0]
    return nums[0];
  }

  // 生成一个和原数组长度一样的新数组待用
  const arr = new Array(length).fill(0);
  arr[0] = 0;
  arr[1] = nums[0];
  for (let i = 2; i <= length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i - 1]);
  }
  return arr[length];
};

console.log("[1,2,3,1] should be 4", rob([1, 2, 3, 1]));
console.log("[2,7,9,3,1] should be 12", rob([2, 7, 9, 3, 1]));
