/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let res = 0;
	if (grid.length === 0) {
		return 0;
	}
	let r = grid.length;
	let c = grid[0].length;
	// console.log(typeof grid[0][0]);
	let dfs = (i, j) => {
		grid[i][j] = "0";
		if (i - 1 >= 0 && grid[i - 1][j] === "1") {
			dfs(i - 1, j);
		}
		if (i + 1 <= r - 1 && grid[i + 1][j] === "1") {
			dfs(i + 1, j);
		}
		if (j - 1 >= 0 && grid[i][j - 1] === "1") {
			dfs(i, j - 1);
		}
		if (j + 1 <= c - 1 && grid[i][j + 1] === "1") {
			dfs(i, j + 1);
		}
	};
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (grid[i][j] === "1") {
				res++;
				dfs(i, j);
			}
		}
	}
	return res;
};
let nums = [2, 7, 9, 3, 1],
	k = 2;
let s = "ABC";
let grid = [
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
];
console.log(numIslands(grid));
