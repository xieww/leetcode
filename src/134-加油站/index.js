/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function (gas, cost) {
//   let curTank = 0;// 油箱已存在的油量
//   let totalTank = 0;
//   let pos = 0;
//   for (let i = 0; i < gas.length; i++) {
//     curTank += gas[i] - cost[i];
//     totalTank += gas[i] - cost[i];
//     if (curTank < 0) {
//       curTank = 0;
//       pos = i + 1;
//     }
//   }
//   return totalTank < 0 ? -1 : pos;
// };

var canCompleteCircuit = function (gas, cost) {
  const acquisition = gas.reduce((sum, num) => sum + num, 0);
  const depletion = cost.reduce((sum, num) => sum + num, 0);
  if (acquisition < depletion) {
    return -1;
  }
  const len = gas.length;
  let currentOil = 0;
  let index = 0;
  for (let i = 0; i < len; i++) {
    currentOil += gas[i] - cost[i];
    if (currentOil < 0) {
      currentOil = 0;
      index = i + 1;
    }
  }
  return index;
};

console.log(
  "should be 3",
  canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])
);
console.log("should be -1", canCompleteCircuit([2, 3, 4], [3, 4, 3]));
