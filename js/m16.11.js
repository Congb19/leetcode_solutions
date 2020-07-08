/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
	if (k == 0) return [];
	let res = [...Array()];
	if (shorter == longer) {
		return [k * shorter];
	}
	//1 递归 超时
	// else if (k == 1) {
	// 	return [shorter, longer];
	// } else {
	// 	let dd = (d, tmp) => {
	// 		if (d == 0) {
	// 			res.push(tmp);
	// 			return;
	// 		}
	// 		dd(d - 1, tmp + shorter);
	// 		dd(d - 1, tmp + longer);
	// 	};
	// 	dd(k, 0);
	// }
	// res.sort((a, b) => a - b);
	// for (let i = 0; i < res.length - 1; i++) {
	// 	if (res[i] == res[i + 1]) {
	// 		res.splice(i, 1);
	// 		i--;
	// 	}
	// }
	//2 帅气数学
	let cha = longer - shorter;
	let tmp = k * shorter;
	for (let i = 0; i < k + 1; i++) {
		res.push(tmp);
		tmp += cha;
	}
	return res;
};
console.log(divingBoard(1, 2, 3));
