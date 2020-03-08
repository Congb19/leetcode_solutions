/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (coins.length<1) return -1;
    coins.sort((a,b)=>a-b);
    let dp=[...Array(amount+1)].map(()=>-1);
    dp[0]=0;
    for (let i=0;i<coins.length;i++) {
        dp[coins[i]]=1;
    }
    for (let i=1;i<=amount;i++) {
        // console.log(i, dp);
        for (let j = 0; j < coins.length; j++) {
            if (i-coins[j]>=0&&dp[i-coins[j]]!==-1) {
                if (dp[i]!==-1) dp[i]=Math.min(dp[i],dp[i-coins[j]]+1)
                else dp[i]=dp[i-coins[j]]+1;
            }
        }
    }
    // console.log(dp);
    return dp[amount];
};

let coins=[2];
let amount=3;
console.log(coinChange(coins, amount));