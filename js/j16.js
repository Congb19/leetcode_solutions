/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	//暴力
	if (x === 1) return 1;
	if (x === -1) {
		if (n % 2 === 1) return -1;
		else return 1;
	}
	if (n === 0) return 1;
	if (n < 0) {
		n = -n;
		x = 1.0 / x;
	}
	let res = x;
	let k = n;
	while (n > 1) {
		n--;
		res = res * x;
		if (k % 2 === 1 && n < 0 && (res > 2147483647 || res < -2147483648)) {
			return -2147483648;
		} else if (res > 2147483647 || res < -2147483648) {
			return 2147483647;
		}
		if (Math.abs(res) < 0.000000001) return 0;
	}
	return res;
};
