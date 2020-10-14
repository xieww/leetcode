/**
 * @param {string[]} A
 * @return {string[]}
 */
// var commonChars = function (A) {
//   let result = A[0].split("");
//   for (let i = 1; i < A.length; i++) {
//     result = findCommon(result, A[i].split(""));
//   }
//   return result;
// };

var findCommon = function (a, b) {
  return a.filter((v) => {
    let i = b.indexOf(v);
    if (i !== -1) {
      b.splice(i, 1);
      return true;
    }
    return false;
  });
};

var commonChars = function (A) {
  let result = [...A[0]];
  for (let i = 0; i < A.length; i++) {
    result = result.filter((item) => {
      const len = A[i].length;
      A[i] = A[i].replace(item, "");
      return len > A[i].length;
    });
  }
  return result;
};

console.log(
  'should be ["e","l","l"]',
  commonChars(["bella", "label", "roller"])
);
