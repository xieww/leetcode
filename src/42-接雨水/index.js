/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   let left = 0;
//   let right = height.length - 1;
//   let leftMax = 0;
//   let rightMax = 0;
//   let water = 0;
//   while (left < right) {
//     if (height[left] < height[right]) {
//       if (height[left] >= leftMax) {
//         leftMax = height[left];
//       } else {
//         water += leftMax - height[left];
//       }
//       left++;
//     } else {
//       if (height[right] >= rightMax) {
//         rightMax = height[right];
//       } else {
//         water += rightMax - height[right];
//       }
//       right--;
//     }
//   }
//   return water;
// };

// var trap = function (height) {
//   const stack = [];
//   let water = 0;
//   for (let i = 0; i < height.length; i++) {
//     while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
//       const top = stack.pop();
//       if (stack.length === 0) {
//         break;
//       }
//       const distance = i - stack[stack.length - 1] - 1;
//       const boundedHeight =
//         Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
//       water += distance * boundedHeight;
//     }
//     stack.push(i);
//   }
//   return water;
// };

var trap = function (height) {
  if (height === null || height.length === 0) {
    return 0;
  }

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax < rightMax) {
      water += leftMax - height[left];
      left++;
    } else {
      water += rightMax - height[right];
      right--;
    }
  }
  return water;
};

// var trap = function(height) {
//   if (height == null || height.length === 0) return 0;

//   let l = 0;
//   let r = height.length - 1;

//   let lMax = 0;
//   let rMax = 0;

//   let res = 0;

//   while (l < r) {
//     lMax = Math.max(lMax, height[l]);
//     if (height[l] < lMax) {
//       res += lMax - height[l];
//     }

//     rMax = Math.max(rMax, height[r]);
//     if (height[r] < rMax) {
//       res += rMax - height[r];
//     }

//     height[l] < height[r] ? l++ : r--;
//   }

//   return res;
// }

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 3]));
console.log(trap([4, 2, 0, 3, 2, 5]));
