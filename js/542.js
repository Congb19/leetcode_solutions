/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
	let r = matrix.length;
	if (r === 0) return [];
	let c = matrix[0].length;
	let res = [...Array(r)].map((x) => [...Array(c)].map((x) => 0));
	let zeros = [...Array()];
	// let tip = [...Array(r)].map((x) => [...Array(c)].map((x) => true));
	// console.log(r, c, res);
	// let dd = (i, j) => {
	// 	tip[i][j] = false;
	// 	if (matrix[i][j] === 0) {
	// 		return 0;
	// 	} else {
	// 		let min = r + c;
	// 		if (i - 1 >= 0 && tip[i - 1][j]) {
	// 			if (dd(i - 1, j) < min) min = dd(i - 1, j);
	// 		}
	// 		if (j - 1 >= 0 && tip[i][j - 1]) {
	// 			if (dd(i, j - 1) < min) min = dd(i, j - 1);
	// 		}
	// 		if (i + 1 < r && tip[i + 1][j]) {
	// 			if (dd(i + 1, j) < min) min = dd(i + 1, j);
	// 		}
	// 		if (j + 1 < c && tip[i][j + 1]) {
	// 			if (dd(i, j + 1) < min) min = dd(i, j + 1);
	// 		}
	// 		return min + 1;
	// 		// if (min === 0) return 1;
	// 		// else {
	// 		// 	return min + 1;
	// 		// }
	// 	}
	// };
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (matrix[i][j] === 0) zeros.push([i, j]);
			else matrix[i][j] = r + c;
			// res[i][j] = dd(i, j);
			// tip.map((x) => [...Array(c)].map((x) => true));
		}
	}
	// zeros.forEach((element) => {
	// 	bb(element, 0);
	// });
	let dx = [-1, 1, 0, 0];
	let dy = [0, 0, -1, 1];
	while (zeros.length > 0) {
		let pos = zeros.shift();
		// console.log(pos);
		for (let i = 0; i < 4; i++) {
			let newX = pos[0] + dx[i];
			let newY = pos[1] + dy[i];
			if (newX >= 0 && newX < r && newY >= 0 && newY < c) {
				if (matrix[newX][newY] === r + c) {
					matrix[newX][newY] = matrix[pos[0]][pos[1]] + 1;
					zeros.push([newX, newY]);
				}
			}
		}
		// console.log(zeros);
	}
	return matrix;
};
console.log(
	updateMatrix([
		[0, 0, 0],
		[0, 1, 0],
		[1, 1, 1],
	])
);
