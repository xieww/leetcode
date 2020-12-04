/**
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
// var isPossible = function (nums) {
//   if (nums.length < 3) return false;

//   const freqMap = new Map(),
//     appendfreq = new Map();
//   nums.forEach((card) => {
//     if (!freqMap.has(card)) freqMap.set(card, 0);

//     freqMap.set(card, freqMap.get(card) + 1);
//   });

//   for (let i of nums) {
//     if (freqMap.get(i) == 0) continue;
//     else if ((appendfreq.get(i) || 0) > 0) {
//       appendfreq.set(i, appendfreq.get(i) - 1);
//       appendfreq.set(i + 1, (appendfreq.get(i + 1) || 0) + 1);
//     } else if ((freqMap.get(i + 1) || 0) > 0 && (freqMap.get(i + 2) || 0) > 0) {
//       freqMap.set(i + 1, freqMap.get(i + 1) - 1);
//       freqMap.set(i + 2, freqMap.get(i + 2) - 1);
//       appendfreq.set(i + 3, (appendfreq.get(i + 3) || 0) + 1);
//     } else return false;
//     freqMap.set(i, freqMap.get(i) - 1);
//   }
//   return true;
// };

// 时间复杂度O(n),空间复杂度O(1)
// var isPossible = function (nums) {
//   let pre = Number.MIN_VALUE;
//   let p1 = 0;
//   let p2 = 0;
//   let p3 = 0;

//   let cur = 0;
//   let cnt = 0;
//   let c1 = 0;
//   let c2 = 0;
//   let c3 = 0;

//   for (let i = 0; i < nums.length; pre = cur, p1 = c1, p2 = c2, p3 = c3) {
//     for (cur = nums[i], cnt = 0; i < nums.length && cur == nums[i]; i++) {
//       cnt++;
//     }
//     if (cur != pre + 1) {
//       if (p1 != 0 || p2 != 0) {
//         return false;
//       }

//       c1 = cnt;
//       c2 = 0;
//       c3 = 0;
//     } else {
//       if (cnt < p1 + p2) {
//         return false;
//       }

//       c1 = Math.max(0, cnt - (p1 + p2 + p3));
//       c2 = p1;
//       c3 = p2 + Math.min(p3, cnt - (p1 + p2));
//     }
//   }

//   return p1 == 0 && p2 == 0;
// };

// 时间复杂度O(n),空间复杂度O(n)
// const isPossible = function (nums) {
//   let max = nums[nums.length - 1];
//   // arr：存储原数组中数字每个数字出现的次数
//   // tail：存储以数字num结尾的且符合题意的连续子序列个数
//   let arr = new Array(max + 2).fill(0);
//   let tail = new Array(max + 2).fill(0);
//   for (let num of nums) {
//     arr[num]++;
//   }
//   for (let num of nums) {
//     if (arr[num] === 0) {
//       continue;
//     } else if (tail[num - 1] > 0) {
//       tail[num - 1]--;
//       tail[num]++;
//     } else if (arr[num + 1] > 0 && arr[num + 2] > 0) {
//       arr[num + 1]--;
//       arr[num + 2]--;
//       tail[num + 2]++;
//     } else {
//       return false;
//     }
//     arr[num]--;
//   }
//   return true;
// };

var isPossible = function (nums) {
  if (!nums || nums.length < 3) {
    return false;
  }
  const countMap = new Map(); // 存放子元素出现次数
  const endMap = new Map();
  for (const x of nums) {
    const count = (countMap.get(x) || 0) + 1;
    countMap.set(x, count);
  }
  for (const x of nums) {
    const count = countMap.get(x) || 0;
    if (count > 0) {
      const prevEndCount = endMap.get(x - 1) || 0;
      if (prevEndCount > 0) {
        countMap.set(x, count - 1);
        endMap.set(x - 1, prevEndCount - 1);
        endMap.set(x, (endMap.get(x) || 0) + 1);
      } else {
        const count1 = countMap.get(x + 1, 0);
        const count2 = countMap.get(x + 2, 0);
        if (count1 > 0 && count2 > 0) {
          countMap.set(x, count - 1);
          countMap.set(x + 1, count1 - 1);
          countMap.set(x + 2, count2 - 1);
          endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

// 对于数组中的元素 x，如果存在一个子序列以 x−1 结尾，则可以将 x 加入该子序列中。将 x 加入已有的子序列总是比新建一个只包含 x 的子序列更优，因为前者可以将一个已有的子序列的长度增加 1，而后者新建一个长度为 1 的子序列，而题目要求分割成的子序列的长度都不小于 3，因此应该尽量避免新建短的子序列。

// 基于此，可以通过贪心的方法判断是否可以完成分割。

// 使用两个哈希表，第一个哈希表存储数组中的每个数字的剩余次数，第二个哈希表存储数组中的每个数字作为结尾的子序列的数量。

// 初始时，每个数字的剩余次数即为每个数字在数组中出现的次数，因此遍历数组，初始化第一个哈希表。

// 在初始化第一个哈希表之后，遍历数组，更新两个哈希表。只有当一个数字的剩余次数大于 0 时，才需要考虑这个数字是否属于某个子序列。假设当前元素是 x，进行如下操作。

// 首先判断是否存在以 x-1 结尾的子序列，即根据第二个哈希表判断 x-1 作为结尾的子序列的数量是否大于0，如果大于 0，则将元素 x 加入该子序列中。由于 x 被使用了一次，因此需要在第一个哈希表中将 x 的剩余次数减 1。又由于该子序列的最后一个数字从 x−1 变成了 x，因此需要在第二个哈希表中将 x−1 作为结尾的子序列的数量减 1，以及将 x 作为结尾的子序列的数量加 1。

// 否则，x 为一个子序列的第一个数，为了得到长度至少为 3 的子序列，x+1 和 x+2 必须在子序列中，因此需要判断在第一个哈希表中 x+1 和 x+2 的剩余次数是否都大于 0。

// 当 x+1 和 x+2 的剩余次数都大于 0 时，可以新建一个长度为 3 的子序列 [x,x+1,x+2]。由于这三个数都被使用了一次，因此需要在第一个哈希表中将这三个数的剩余次数分别减 1。又由于该子序列的最后一个数字是 x+2，因此需要在第二个哈希表中将 x+2 作为结尾的子序列的数量加 1。

// 否则，无法得到长度为 3 的子序列 [x,x+1,x+2]，因此无法完成分割，返回 false。

// 如果整个数组遍历结束时，没有遇到无法完成分割的情况，则可以完成分割，返回 true。

console.log("should be true", isPossible([1, 2, 3, 3, 4, 5]));
console.log("should be true", isPossible([1, 2, 3, 3, 4, 4, 5, 5]));
console.log("should be false", isPossible([1, 2, 3, 4, 4, 5]));
