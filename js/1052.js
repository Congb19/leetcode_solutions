/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
	let l = customers.length;
	//直接假设前X分钟不生气，然后滑动“不生气”窗口
	let left = 0,
		right = X - 1;
	let now = 0,
		res = 0;
	for (let i = 0; i < l; i++) {
		if (i < X || grumpy[i] == 0) now += customers[i];
	}
	// console.log(left, right, now);
	res = now;
	while (right + 1 < l) {
		if (grumpy[left] == 1) now -= customers[left];
		if (grumpy[right + 1] == 1) now += customers[right + 1];
		left++;
		right++;
		if (now > res) res = now;
		// console.log(left, right, now);
	}
	return res;
};
console.log(
	maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
);
