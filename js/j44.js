/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
	//1-9  1*9
	//10-99 2*90
	//100-999 3*900
	//1000-……
	//找规律
	let p = 0;
	let sum = 0;
	while (sum < n) {
		sum += (p + 1) * 9 * Math.pow(10, p);
		p++;
		// console.log(sum, p);
	}
	sum -= p * 9 * Math.pow(10, p - 1);
	n -= sum + 1;
	let s = Math.floor(n / p);
	let y = n % p;
	let w = Math.pow(10, p - 1) + s;
	let ss = w.toString();
	console.log(n, p, s, y, w, ss);
	// if (y - 1 < 0) y += p;
	return parseInt(ss.charAt(y));
};
console.log(findNthDigit(13));
