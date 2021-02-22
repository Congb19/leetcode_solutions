/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let r = dungeon.length;
  if (r === 0) return 1;
  let c = dungeon[0].length;
  if (c === 0) return 1;
  let dp = [...Array(r + 1)].map(() => [...Array(c + 1)].fill(999999));
  //正向dp  考虑不齐 37/45
  // let hp = [...Array(r)].map(() => [...Array(c)]);
  // dp[0][0] = Math.max(1, -dungeon[0][0] + 1);
  // hp[0][0] = Math.max(1, 1 + dungeon[0][0]);
  // for (let i = 0; i < r; i++) {
  // 	for (let j = 0; j < c; j++) {
  // 		if (i == 0 && j == 0) continue;
  // 		if (i == 0) {
  // 			if (hp[i][j - 1] + dungeon[i][j] > 0) {
  // 				dp[i][j] = dp[i][j - 1];
  // 				hp[i][j] = hp[i][j - 1] + dungeon[i][j];
  // 			} else {
  // 				dp[i][j] =
  // 					dp[i][j - 1] - (dungeon[i][j] + (hp[i][j - 1] - 1));
  // 				hp[i][j] = 1;
  // 			}
  // 		} else if (j == 0) {
  // 			if (hp[i - 1][j] + dungeon[i][j] > 0) {
  // 				dp[i][j] = dp[i - 1][j];
  // 				hp[i][j] = hp[i - 1][j] + dungeon[i][j];
  // 			} else {
  // 				dp[i][j] =
  // 					dp[i - 1][j] - (dungeon[i][j] + (hp[i - 1][j] - 1));
  // 				hp[i][j] = 1;
  // 			}
  // 		} else {
  // 			let dpz, dps, hpz, hps;
  // 			if (hp[i][j - 1] + dungeon[i][j] > 0) {
  // 				dpz = dp[i][j - 1];
  // 				hpz = hp[i][j - 1] + dungeon[i][j];
  // 			} else {
  // 				dpz = dp[i][j - 1] - (dungeon[i][j] + (hp[i][j - 1] - 1));
  // 				hpz = 1;
  // 			}
  // 			if (hp[i - 1][j] + dungeon[i][j] > 0) {
  // 				dps = dp[i - 1][j];
  // 				hps = hp[i - 1][j] + dungeon[i][j];
  // 			} else {
  // 				dps = dp[i - 1][j] - (dungeon[i][j] + (hp[i - 1][j] - 1));
  // 				hps = 1;
  // 			}
  // 			if (i == r - 1 && j == c - 1) {
  // 				if (dps < dpz) {
  // 					dp[i][j] = dps;
  // 					hp[i][j] = hps;
  // 				} else {
  // 					dp[i][j] = dpz;
  // 					hp[i][j] = hpz;
  // 				}
  // 			} else {
  // 			}
  // 		}
  // 	}
  // }
  // console.log(dp, hp);
  // return dp[r - 1][c - 1];
  //反向dp
  dp[r][c - 1] = dp[r - 1][c] = 1;
  for (let i = r - 1; i >= 0; --i) {
    for (let j = c - 1; j >= 0; --j) {
      let minn = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(minn - dungeon[i][j], 1);
    }
  }
  // console.log(dp);
  return dp[0][0];
};
console.log(
  calculateMinimumHP([
    [1, -3, 3],
    [0, -2, 0],
    [-3, -3, -3],
  ])
);
