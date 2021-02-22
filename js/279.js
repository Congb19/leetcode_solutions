/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = [...Array(n + 1)].map((_) => 0); // ���鳤��Ϊn+1��ֵ��Ϊ0
  // console.log(dp);
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // ����������ÿ��+1
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // ��̬ת�Ʒ���
    }
  }
  return dp[n];
};

let nums = [7, 1, 5, 3, 6, 4],
  k = 12;
let s = "nihao",
  t = "haoni";
console.log(numSquares(k));
