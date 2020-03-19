/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let res=0;
    let n=nums.length;
    if (n<3) return 0;
    let dp=[...Array(n)].map(()=>0);
    dp[0]=1;
    for (let i = 1; i < n; i++) {
        let max=0;
        for (let j = 0; j < i; j++) {
            if (dp[j]>max && nums[j]<nums[i]) max=dp[j];
        }
        dp[i]=max+1;
        if (dp[i]>=3) return true;
    }
    return false;
};
