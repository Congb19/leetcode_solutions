/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }
  if (n === 3) {
    return nums[0] + nums[2] > nums[1] ? nums[0] + nums[2] : nums[1];
  }
  let dp = new Array();
  dp[0] = nums[0];
  dp[1] = nums[1];
  dp[2] = nums[0] + nums[2];
  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 2] > dp[i - 3] ? dp[i - 2] : dp[i - 3];
    dp[i] += nums[i];
  }
  return dp[n - 1] > dp[n - 2] ? dp[n - 1] : dp[n - 2];
};
let nums = [2, 7, 9, 3, 1],
  k = 2;
let s = "ABC";
console.log(rob(nums));
