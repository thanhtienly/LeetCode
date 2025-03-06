/*
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      /* Buy at i and sell at i + 1 */
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};
