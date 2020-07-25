/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	//找规律发现5=2+3，2*3>5以及4=2+2，2*2=4，以此类推，只可能出现2和3。
	//所以一个数必是拆成2和3的组合。同时注意222<33，因此3绝对优先，三个2变两个3。
	//在此基础上大数取余  性质： (xy)⊙p=[(x⊙p)(y⊙p)]⊙p
	let a = [0, 0, 1, 2, 4];
	if (n < 4) return a[n];
	let shang = Math.floor(n / 3);
	let yu = n % 3;
	let qy = (x, a, p) => {
		let res = 1;
		for (let i = 0; i < a; i++) {
			res = (res * x) % p;
		}
		return res;
	};
	if (yu == 0) {
		return qy(3, shang, 1000000007);
	} else if (yu == 1) {
		return (4 * qy(3, shang - 1, 1000000007)) % 1000000007;
	} else {
		return (2 * qy(3, shang, 1000000007)) % 1000000007;
	}
};
console.log(cuttingRope(3));
