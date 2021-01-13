function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// function constructMaximumBinaryTree(nums) {
//   if (!nums || nums.length === 0) {
//     return null;
//   }

//   let maxValue = Number.MIN_SAFE_INTEGER;
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > maxValue) {
//       maxValue = nums[i];
//       index = i;
//     }
//   }

//   const root = new TreeNode(nums[index]);
//   root.left = constructMaximumBinaryTree(nums.slice(0, index));
//   root.right = constructMaximumBinaryTree(nums.slice(index + 1));
//   return root;
// }

function constructMaximumBinaryTree(nums) {
  if (nums.length == 0) {
    return null;
  }
  var maxValue = Math.max(...nums);
  var root = new TreeNode(maxValue);
  root.left = constructMaximumBinaryTree(nums.slice(0, nums.indexOf(maxValue)));
  root.right = constructMaximumBinaryTree(
    nums.slice(nums.indexOf(maxValue) + 1)
  );
  return root;
}

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
