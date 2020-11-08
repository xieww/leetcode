/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }
  return result;
};

var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    const num = prices[i + 1] - prices[i];
    if (num > 0) {
      result += num;
    }
  }
  return result;
};
