/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var res=nums[0];
    var dp=new Array();

    dp[0]=nums[0];
    for (var i=1; i<nums.length; i++) {
        if (dp[i-1]<0) dp[i]=nums[i];
        else {
            // if(nums[i]<0){
            dp[i]=dp[i-1]+nums[i];
            // }
            // else dp[i]=Math.max(dp[i-1], dp[i-1]+nums[i]);
        }
    }
    for (var i=0; i<nums.length; i++) {
        // console.log(dp[i]);
        res=Math.max(res, dp[i]);
    }
    return res;
};

var nums=[-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
