/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// var maxProfit = function (prices, fee) {
//   if (prices.length <= 1) {
//     return 0;
//   }
//   const len = prices.length;
//   const buy = new Array(len).fill(0);
//   const sell = new Array(len).fill(0);
//   buy[0] = -prices[0];
//   for (let i = 1; i < len; i++) {
//     buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);
//     sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee);
//   }
//   return sell[len - 1];
// };

var maxProfit = function (prices, fee) {
  if (prices.length <= 1) {
    return 0;
  }
  let result = 0;
  let profit = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    const temp = prices[i];
    profit = Math.max(profit, result - temp);
    result = Math.max(result, profit + temp - fee);
  }
  return result;
};

console.log("should be ", maxProfit([1, 3, 2, 8, 4, 9], 2));
