/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	//找规律发现5=2+3，2*3>5以及4=2+2，2*2=4，以此类推，只可能出现2和3。
	//所以一个数必是拆成2和3的组合。同时注意222<33，因此3绝对优先，三个2变两个3。
	let a = [0, 0, 1, 2, 4];
	if (n < 4) return a[n];
	let shang = Math.floor(n / 3);
	let yu = n % 3;
	if (yu == 0) {
		return Math.pow(3, shang);
	} else if (yu == 1) {
		return 2 * 2 * Math.pow(3, shang - 1);
	} else {
		return 2 * Math.pow(3, shang);
	}
};
console.log(cuttingRope(3));
