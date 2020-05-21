/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	let n = s.length;
	if (n < 2) return true;
	let i = 0,
		j = n - 1;
	let isValid = (ss) => {
		// console.log(ss);
		let a = 0;
		let b = ss.length - 1;
		while (a < b) {
			if (ss.charAt(a) != ss.charAt(b)) {
				return false;
			}
			a++;
			b--;
		}
		return true;
	};
	let res = true;
	let dels = 1;
	while (i < j) {
		if (s.charAt(i) != s.charAt(j)) {
			if (dels) {
				dels--;
				res = isValid(s.slice(i, j)) || isValid(s.slice(i + 1, j + 1));
				// console.log(s.slice(i, j), s.slice(i + 1, j + 1), res);
			}
			if (res) return res;
		}
		i++;
		j--;
	}
	return res;
};
console.log(validPalindrome("deeee"));
