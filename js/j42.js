/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let n = nums.length;
	let dp = [...Array()];
	dp[0] = nums[0];
	let res = dp[0];
	for (let i = 1; i < n; i++) {
		// if (nums[i] >= 0)
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
		res = Math.max(res, dp[i]);
		// else dp[i] = nums[i];
	}
	// console.log(dp);
	return res;
};
