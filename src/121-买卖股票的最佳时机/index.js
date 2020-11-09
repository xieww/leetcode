/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let current = prices[0];
  for (let i = 1; i < prices.length; i++) {
      const difference = prices[i] - current;
      if (difference < 0) {
          current = prices[i];
          continue;
      }
      result = Math.max(difference, result);
  }
  return result;
};