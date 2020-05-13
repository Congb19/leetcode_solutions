/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	let res = [...Array()];
	let board = [...Array(n)].map((x) => [...Array(n)].map((x) => "."));
	let test = () => {
		for (let i = 0; i < n; i++) {
			let q1 = 0,
				q2 = 0;
			for (let j = 0; j < n; j++) {
				if (board[i][j] == "Q") q1++;
				if (board[j][i] == "Q") q2++;
			}
			if (q1 > 1 || q2 > 1) {
				return false;
			}
		}
		for (let ij = 0; ij < 2 * n - 1; ij++) {
			let q1 = 0;
			let q2 = 0;
			for (let i = 0; i < n; i++) {
				for (let j = 0; j < n; j++) {
					if (i + j == ij && board[i][j] == "Q") {
						q1++;
					}
					if (j - i == ij - n + 1 && board[i][j] == "Q") {
						q2++;
					}
				}
			}
			if (q1 > 1 || q2 > 1) {
				return false;
			}
		}
		return true;
	};
	let dd = (d) => {
		if (d == n) {
			// console.log("go,", board);
			let tmp = [...Array()];
			for (let i = 0; i < n; i++) {
				tmp.push(board[i].join(""));
			}
			res.push(tmp);
			return true;
		} else {
			for (let i = 0; i < n; i++) {
				board[d][i] = "Q";
				let end = false;
				if (test()) {
					end = dd(d + 1);
				} else {
					board[d][i] = ".";
				}
				board[d][i] = ".";
			}
			return false;
		}
	};
	dd(0);
	return res;
};
console.log(solveNQueens(4));
