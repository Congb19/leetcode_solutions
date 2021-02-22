/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let valley = prices[0];
  let peak = prices[0];
  for (let i = 0; i < prices.length - 1; ) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];
    res += peak - valley;
  }
  return res;
};
let nums = [7, 1, 5, 3, 6, 4],
  k = 2;
console.log(maxProfit(nums));
