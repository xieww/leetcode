/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   const len = s.length;
//   if (len === 0) {
//     return 0;
//   }

//   let max = 0; // 存放最长子串
//   let left = 0; // 滑动窗口坐下标
//   let map = new Map();

//   // i相当于滑动窗口右下标
//   for (let i = 0; i < len; i++) {
//     if (map.has(s.charAt(i))) { // 判断map中是否存在指定下标元素
//       left = Math.max(left, map.get(s.charAt(i)) + 1);  //map.get():返回字符所对应的索引，当发现重复元素时，窗口左指针右移
//     }  //map.get('a')=0,因为map中只有第一个a的下标，然后更新left指针到原来left的的下一位
//     map.set(s.charAt(i), i); // 将指定下标的元素添加进map
//     max = Math.max(max, i - left + 1); // 比较两个参数的大小
//   }

//   return max;
// };

var lengthOfLongestSubstring = function (s) {
  const map = {};
  let left = 0;
  return s.split("").reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};

// var lengthOfLongestSubstring = function (s) {
//   const seen = new Map();
//   let start = 0;
//   let maxLen = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (seen.has(s[i])) {
//       start = Math.max(seen.get(s[i]) + 1, start);
//     }
//     seen.set(s[i], i);
//     maxLen = Math.max(i - start + 1, maxLen);
//   }
//   return maxLen;
// };

// var lengthOfLongestSubstring = function (s) {
//   var max = 0;
//   var theSub = "";
//   for (var i = 0; i < s.length; i++) {
//     const idx = theSub.indexOf(s[i]);
//     theSub += s[i];
//     if (idx >= 0) {
//       theSub = theSub.substring(idx + 1);
//     }
//     max = Math.max(max,theSub.length)
//   }
//   return max;
// };

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
