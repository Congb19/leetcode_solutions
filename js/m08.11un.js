/**
 * @param {number} n
 * @return {number}
 */
//1 5 10 25
var waysToChange = function (n) {
  let dp = [...Array()];
  dp.push(1);
  dp.push(1);
  let coins = [25, 10, 5, 1];
  for (let i = 2; i <= n; i++) {
    let c = 0;
    if (i % 25 === 0) c++;
    if (i % 10 === 0) c++;
    if (i % 5 === 0) c++;
    dp[i] = dp[i - 1] + c;
  }
  // console.log(dp);
  return dp[n] % 1000000007;
};
console.log(waysToChange(25));
