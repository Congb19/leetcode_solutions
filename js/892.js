/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
	//思路 计算每个立方体贡献的表面积
	let r = grid.length;
	if (r === 0) return 0;
	let c = grid[0].length;
	let res = 0;
	let zero = 0;
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (grid[i][j] !== 0) {
				zero++;
			}
			for (let k = 1; k <= grid[i][j]; k++) {
				if (i - 1 >= 0) {
					if (grid[i - 1][j] < k) {
						res++;
					}
				} else res++;
				if (j - 1 >= 0) {
					if (grid[i][j - 1] < k) {
						res++;
					}
				} else res++;
				if (i + 1 < r) {
					if (grid[i + 1][j] < k) {
						res++;
					}
				} else res++;
				if (j + 1 < c) {
					if (grid[i][j + 1] < k) {
						res++;
					}
				} else res++;
			}
			// console.log(res);
		}
	}
	res += zero * 2;
	return res;
};
console.log(
	surfaceArea([
		[1, 2],
		[3, 4]
	])
);
