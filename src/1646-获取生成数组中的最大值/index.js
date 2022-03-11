/**
 * @param {number} n
 * @return {number}
 */
//  var getMaximumGenerated = function (n) {
//     const nums = [...Array(n + 1)].reduce((acc, curr, index) => {
//         let num = 0;

//         if (index <= 1) num = index;
//         else {
//             const division = Math.floor(index / 2);
//             const isOdd = index % 2;
//             num = isOdd ? acc[division] + acc[division + 1] : acc[division];
//         }
//         return (acc.push(num), acc);
//     }, []);

//     return Math.max(...nums);
//  };

var getMaximumGenerated = function (n) {
  if (n <= 1) {
    return n;
  }

  const nums = new Array(n + 1);
  nums[1] = 1;
  let max = 0;
  for (let i = 1; i < (n + 1) / 2; i++) {
    if (2 * i <= n) {
      nums[2 * i] = nums[i];
      max = Math.max(max, nums[2 * i]);
    }
    if (2 * i + 1 <= n) {
      nums[2 * i + 1] = nums[i] + nums[i + 1];
      max = Math.max(max, nums[2 * i + 1]);
    }
  }

  return max;
};

console.log("should be 3", getMaximumGenerated(7));
console.log("should be 1", getMaximumGenerated(2));
console.log("should be 2", getMaximumGenerated(3));
