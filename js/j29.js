/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	//同54题 不看之前的代码重写了一遍 一对比 果然帅了很多
	let r = matrix.length;
	if (r == 0) return [...Array()];
	let c = matrix[0].length;
	let res = [...Array()];
	let bb = [...Array(r)].map(() => [...Array(c)].fill(true));
	let dirs = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	let dir = 0,
		i = 0,
		j = 0;
	while (res.length < r * c) {
		res.push(matrix[i][j]);
		bb[i][j] = false;
		if (
			i + dirs[dir][0] < r &&
			i + dirs[dir][0] >= 0 &&
			j + dirs[dir][1] < c &&
			j + dirs[dir][1] >= 0 &&
			bb[i + dirs[dir][0]][j + dirs[dir][1]]
		) {
			//
		} else {
			dir++;
			dir = dir % 4;
		}
		i += dirs[dir][0];
		j += dirs[dir][1];
	}
	return res;
};
console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	])
);
