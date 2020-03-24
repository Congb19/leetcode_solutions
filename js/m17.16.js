/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);
    let dp = [...Array(n)].map(()=>0);
    dp[0] = nums[0];
    dp[1] = nums[1];
    for (let i = 2; i < n; i++) {
        if (i >= 3) dp[i]=nums[i]+Math.max(dp[i-2], dp[i-3]);
        else dp[i]=nums[i]+dp[i-2];
    }
    return Math.max(dp[n-2], dp[n-1]);
};
console.log(massage([2,1,4,5,3,1,1,3]));