/**
 * 时间复杂度O(MN)，空间复杂度O(1)
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  const len = A.length;
  const itemLen = A[0].length;
  let result = (1 << (itemLen - 1)) * len;
  for (let i = 1; i < itemLen; i++) {
    let current = 0;
    for (let j = 0; j < len; j++) {
      current += A[j][i] === A[j][0] ? 1 : 0;
    }
    result += Math.max(current, len - current) * (1 << (itemLen - i - 1));
  }
  return result;
};

console.log(
  "should be 39 ",
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);
