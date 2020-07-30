/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let map = new Map();
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
		else map.set(nums[i], 1);
		if (map.get(nums[i]) > n / 2) return nums[i];
	}
	return nums[0];
};
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
