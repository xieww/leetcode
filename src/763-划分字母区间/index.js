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
  let start = 0;
  let end = 0;
  let result = [];
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, S.lastIndexOf(S[i]));
    if (i == end) {
      result.push(end - start + 1);
      start = end + 1;
      end = 0;
    }
  }
  return result;
};

console.log("should be [9,7,8]", partitionLabels("ababcbacadefegdehijhklij"));
