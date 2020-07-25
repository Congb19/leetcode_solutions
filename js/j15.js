/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let p = 2;
	let res = 0;
	while (p <= n) {
		p *= 2;
	}
	p /= 2;
	while (p > 0) {
		if (n >= p) {
			res++;
			n -= p;
		}
		p /= 2;
	}
	return res;
};
console.log(hammingWeight(128));
