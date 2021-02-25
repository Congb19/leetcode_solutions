/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	let r = matrix.length;
	let c = matrix[0].length;
	let res = [...Array(c)].map(() => []);
	for (let p = 0; p < c; p++) {
		for (let q = 0; q < r; q++) {
			res[p].push(matrix[q][p]);
		}
	}
	return res;
};
console.log(
	transpose([
		[1, 2, 3],
		[4, 5, 6],
	])
);
