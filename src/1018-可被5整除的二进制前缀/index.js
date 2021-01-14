/**
 * 时间复杂度O(n),空间复杂度O(1)
 * @param {number[]} A
 * @return {boolean[]}
 */
// var prefixesDivBy5 = function (A) {
//   const answer = [];
//   let num = 0;
//   for (let i = 0; i < A.length; i++) {
//     num = (num * 2 + A[i]) % 5;
//     answer.push(num === 0);
//   }
//   return answer;
// };

// var prefixesDivBy5 = (A) => {
//   let num = 0;
//   return A.map((item) => !(num = (num * 2 + item) % 5));
// };

var prefixesDivBy5 = (A) => {
  let num = 0;
  const answer = [];
  for (const a of A) {
    num = ((num << 1) | a) % 5;
    answer.push(num === 0);
  }
  return answer;
};

console.log(prefixesDivBy5([0, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1]));
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1, 0, 1]));
