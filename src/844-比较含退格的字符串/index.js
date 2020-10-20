/**
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function (S, T) {
//   return process(S) === process(T);
// };
// var process = (S) => {
//   const res = [];
//   for (x of S.split("")) {
//     x === "#" ? res.pop() : res.push(x);
//   }
//   return res.join("");
// };

// 方法2 时间复杂度O(n)，空间复杂度O(1)
// var backspaceCompare = function (S, T) {
//   let sLen = S.length;
//   let tLen = T.length;
//   let sCount = 0;
//   let tCount = 0;
//   while (sLen >= 0 || tLen >= 0) {
//     let sItem = S[sLen];
//     let tItem = T[tLen];
//     if (sItem === "#") {
//       sLen--;
//       sCount++;
//     } else if (tItem === "#") {
//       tLen--;
//       tCount++;
//     } else if (sCount > 0) {
//       sCount--;
//       sLen--;
//     } else if (tCount > 0) {
//       tCount--;
//       tLen--;
//     } else if (sLen >= 0 && tLen >= 0 && sItem !== tItem) {
//       return false;
//     } else if (sLen >= 0 !== tLen >= 0) {
//       return false;
//     } else {
//       sLen--;
//       tLen--;
//     }
//   }
//   return true;
// };

//
// 一个字符是否会被删掉，只取决于该字符后面的退格符，而与该字符前面的退格符无关。因此当我们逆序地遍历字符串，就可以立即确定当前字符是否会被删掉。

// 具体地，我们定义 count 表示当前待删除的字符的数量。每次我们遍历到一个字符：

// 若该字符为退格符，则我们需要多删除一个普通字符，我们让 count 加 1；

// 若该字符为普通字符：

// 若 count 为 0，则说明当前字符不需要删去；

// 若 count 不为 0，则说明当前字符需要删去，我们让 count 减 1。

// 这样，我们定义两个指针，分别指向两字符串的末尾。每次我们让两指针逆序地遍历两字符串，直到两字符串能够各自确定一个字符，然后将这两个字符进行比较。重复这一过程直到找到的两个字符不相等，或遍历完字符串为止。

var backspaceCompare = function (S, T) {
  let sLen = S.length - 1;
  let tLen = T.length - 1;
  let sCount = 0;
  let tCount = 0;

  while (sLen >= 0 || tLen >= 0) {
    while (sLen >= 0) {
      if (S.charAt(sLen) == "#") {
        sCount++;
        sLen--;
      } else if (sCount > 0) {
        sCount--;
        sLen--;
      } else {
        break;
      }
    }
    while (tLen >= 0) {
      if (T.charAt(tLen) == "#") {
        tCount++;
        tLen--;
      } else if (tCount > 0) {
        tCount--;
        tLen--;
      } else {
        break;
      }
    }
    if (sLen >= 0 && tLen >= 0) {
      if (S.charAt(sLen) != T.charAt(tLen)) {
        return false;
      }
    } else {
      if (sLen >= 0 || tLen >= 0) {
        return false;
      }
    }
    sLen--;
    tLen--;
  }
  return true;
};

console.log("should be true", backspaceCompare("ab#c", "ad#c"));
console.log("should be true", backspaceCompare("ab##", "c#d#"));
console.log("should be true", backspaceCompare("a##c", "#a#c"));
console.log("should be false", backspaceCompare("a#c", "b"));
