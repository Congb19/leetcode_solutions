/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
	let N = target.length;
	let res = [...Array()];
	let i = 0,
		j = 1;
	while (i < N && j <= n) {
		if (target[i] === j) {
			res.push("Push");
			i++;
			j++;
		} else {
			res.push("Push");
			res.push("Pop");
			j++;
		}
	}
	return res;
};
let target = [1, 3],
	n = 3;
console.log(buildArray(target, n));
