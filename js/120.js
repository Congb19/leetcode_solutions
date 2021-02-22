/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let r = triangle.length;
  if (r == 1) return triangle[0][0];
  //1 递归
  // let res = 999999;
  // let dd = (d, c, tmp) => {
  // 	if (d == r) {
  // 		if (tmp < res) res = tmp;
  // 		return;
  // 	}
  // 	dd(d + 1, c, tmp + triangle[d][c]);
  // 	dd(d + 1, c + 1, tmp + triangle[d][c + 1]);
  // };
  // dd(0, 0, 0);
  // return res;
  //2 dp
  // dp[i][j] 表示从点 (i, j) 到底边的最小路径和。
  let dp = [...Array(r + 1)].map(() => [...Array(r + 1)].fill(0));
  // 从三角形的最后一行开始递推。
  for (let i = r - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }
  return dp[0][0];
};
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
