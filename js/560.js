/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	const mp = new Map();
	mp.set(0, 1);
	let res = 0,
		pre = 0;
	for (const x of nums) {
		pre += x;
		if (mp.has(pre - k)) res += mp.get(pre - k);
		if (mp.has(pre)) mp.set(pre, mp.get(pre) + 1);
		else mp.set(pre, 1);
	}
	return res;
};
console.log(subarraySum([1, 1, 1], 2));
