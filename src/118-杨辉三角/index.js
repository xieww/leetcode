/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1); // 每一层生成一个i+1长度的数组
    if (i > 1) {
      for (let j = 1; j < i; j++) {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    result.push(row);
  }
  return result;
};

console.log(generate(5));
