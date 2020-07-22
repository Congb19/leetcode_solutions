/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
	let n = numbers.length;
	let l = 0,
		r = n - 1,
		m = Math.floor((l + r) / 2),
		om = m;
	while (l < r) {
		// console.log(l, m, r);
		if (numbers[m] > numbers[m + 1]) {
			return numbers[m + 1];
		} else {
			if (numbers[m] > numbers[l]) {
				l = m;
			} else if (numbers[m] < numbers[l]) {
				r = m;
			} else {
				if (numbers[m] > numbers[r]) l++;
				else r--;
			}
			// om = m;
			m = Math.floor((l + r) / 2);
			// if (om == m) break;
		}
	}
	return numbers[0];
};
