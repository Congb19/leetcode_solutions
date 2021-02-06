/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
	let l = s.length;
	let c = [...Array(l)];
	for (let i = 0; i < l; i++) {
		c[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
	}
	// console.log(c);
	let left = 0,
		right = -1,
		res = 0,
		tmp = 0,
		i = 0;
	for (i = 0; i < l; i++) {
		left = i;
		if (c[i] <= maxCost) break;
	}
	right = left - 1;
	while (right + 1 < l && tmp + c[right + 1] <= maxCost) {
		tmp += c[right + 1];
		right++;
	}
	res = res > right - left + 1 ? res : right - left + 1;
	// console.log(left, right, res);
	while (right < l) {
		if ((right == l - 1)) break;
		tmp -= c[left];
		left++;
		while (right + 1 < l && tmp + c[right + 1] <= maxCost) {
			tmp += c[right + 1];
			right++;
		}
		res = res > right - left + 1 ? res : right - left + 1;
		// console.log(left, right, res);
	}
	return res;
};
('krpgjbjjznpzdfy');
('nxargkbydxmsgby');
14;
console.log(equalSubstring('krpgjbjjznpzdfy', 'nxargkbydxmsgby', 14));
