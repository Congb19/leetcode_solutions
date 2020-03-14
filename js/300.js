/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res=0;
    let n=nums.length;
    if (n===0) return 0;
    if (n===1) return 1;
    let dp=[...Array(n)].map(()=>0);
    dp[0]=1;
    for (let i = 1; i < n; i++) {
        let max=0;
        for (let j = 0; j < i; j++) {
            if (dp[j]>max && nums[j]<nums[i]) max=dp[j];
        }
        dp[i]=max+1;
    }
    // console.log(dp);
    for (let i = 1; i < n; i++) {
        if (dp[i]>res) res=dp[i];
    }
    return res;
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));