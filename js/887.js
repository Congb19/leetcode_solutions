/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  let dp = Array(K + 1)
    .fill(0)
    .map(() => new Array(N + 1).fill(0));
  // console.log(dp)

  for (let j = 1; j <= N; j++) {
    for (let i = 1; i <= K; i++) {
      /**
       *二分法   碎了  i-1 j-1 ->下面的     没碎 i j -1  -> 上面的
       * i-1个鸡蛋j-1次测的楼层 +  i个鸡蛋j-1次测的楼层  + 1
       */
      dp[i][j] = 1 + dp[i - 1][j - 1] + dp[i][j - 1];

      if (dp[i][j] >= N) {
        // console.log(dp[i][j], i , j)
        return j;
      }
    }
  }
  return N;
};
