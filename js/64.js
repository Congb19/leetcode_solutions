/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	let r = grid.length;
	if (r == 0) return 0;
	let c = grid[0].length;
	let dp = [...Array(r + 1)].map(() => [...Array(c + 1)].fill(0));
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (i == 0 && j == 0) dp[i][j] = grid[0][0];
			else if (i == 0) dp[i][j] = dp[i][j - 1] + grid[i][j];
			else if (j == 0) dp[i][j] = dp[i - 1][j] + grid[i][j];
			else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
		}
	}
	// console.log(dp);
	return dp[r - 1][c - 1];
};
console.log(
	minPathSum([
		[1, 3, 1],
		[1, 5, 1],
		[4, 2, 1],
	])
);
