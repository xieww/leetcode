/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);
};

console.log("should be 4", arrayPairSum([1, 4, 3, 2]));
//[0,9] [27,33] [111,249]
console.log("should be 138", arrayPairSum([111, 33, 0, 249, 9, 27]));
