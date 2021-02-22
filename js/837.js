/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  if (K === 0) return 1;
  let dp = [...Array(K + W)];
  for (let i = 0; i < K + W; i++) {
    if (i >= K && i <= N && i < K + W) dp[i] = 1;
    else dp[i] = 0;
  }
  // console.log(dp);
  // for (let i = K - 1; i >= 0; i--) {
  // 	for (let j = 1; j <= W; j++) {
  // 		dp[i] += dp[i + j] / W;
  // 	}
  // }
  dp[K - 1] = (1.0 * Math.min(N - K + 1, W)) / W;
  for (let i = K - 2; i >= 0; i--) {
    dp[i] = dp[i + 1] - (dp[i + W + 1] - dp[i + 1]) / W;
  }
  // console.log(dp);
  return dp[0];
};
console.log(new21Game(21, 17, 10));
