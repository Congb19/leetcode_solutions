/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
	let n1 = s1.length,
		n2 = s2.length,
		n3 = s3.length;
	if (n1 + n2 !== n3) return false;
	let res = false;
	let dd = (p1, p2, p3) => {
		if (p3 == n3) {
			res = true;
		}
		// console.log(p1, p2, p3, res);
		if (p3 < n3 && !res) {
			// let flag = true;
			if (p1 < n1 && s3.charAt(p3) == s1.charAt(p1)) {
				// flag = false;
				dd(p1 + 1, p2, p3 + 1);
			}
			if (p2 < n2 && s3.charAt(p3) == s2.charAt(p2)) {
				// flag = false;
				dd(p1, p2 + 1, p3 + 1);
			}
			// if (flag) res = false;
		}
	};
	dd(0, 0, 0);
	return res;
};
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
