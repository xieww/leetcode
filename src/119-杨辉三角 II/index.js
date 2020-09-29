/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let row = [1];
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (i === j) {
        row[j] = 1;
      } else {
        row[j] = row[j - 1] + row[j];
      }
    }
  }
  return row;
};

console.log("should be [1,3,3,1]", getRow(3));

// i=0, j=0, row=[1],
// i=1, j=1, row=[1,1]
// i=2, j=2, row=[1,1,1]
// i=2, j=1, row=[1,2,1]
// i=3, j=3, row=[1,2,1,1]
// i=3, j=2, row=[1,2,3,1]
// i=3, j=1, row=[1,3,3,1]
// i=4 跳出循环
