/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
	let res = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			res++;
			if (
				i > 0 &&
				i < nums.length - 2 &&
				nums[i + 2] < nums[i] &&
				nums[i + 1] < nums[i - 1]
			)
				res++;
		}
	}
	return res < 2;
};
console.log(checkPossibility([5, 7, 1, 8]));
