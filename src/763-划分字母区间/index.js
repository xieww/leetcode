/**
 * @param {string} S
 * @return {number[]}
 */
// var partitionLabels = function (S) {
//   const last = new Array(26).fill(-1);
//   const result = [];
//   let anchor = 0;
//   let end = 0;
//   for (let i = 0; i < S.length; i++) {
//     last[S.charCodeAt(i) - "a".charCodeAt(0)] = i;
//   }
//   for (let i = 0; i < S.length; i++) {
//     end = Math.max(end, last[S.charCodeAt(i) - "a".charCodeAt(0)]);
//     if (i === end) {
//       result.push(i - anchor + 1);
//       anchor = i + 1;
//     }
//   }
//   return result;
// };

var partitionLabels = function (S) {
  let start = 0; // 片段起始位置
  let end = 0; // 片段结束位置
  let result = [];
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, S.lastIndexOf(S[i]));
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
      end = 0;
    }
  }
  return result;
};

var partitionLabels = function (S) {
  let res = [];
  let map = new Map();
  let start = 0;
  let end = 0;
  for (let i = 0; i < S.length; i++) {
    map[S[i]] = i;
  }
  for (let j = 0; j < S.length; j++) {
    end = Math.max(end, map[S[j]]);
    if (j === end) {
      res.push(end - start + 1);
      start = j + 1;
    }
  }
  return res;
};

console.log("should be [9,7,8]", partitionLabels("ababcbacadefegdehijhklij"));
