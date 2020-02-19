/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount===0) return 0;
    let res=-1;
    let dp=[];
    for (let i=0; i<=amount; i++) {
        dp[i]=-1;
    }
    for (let i=0; i<=coins.length; i++) {
        dp[coins[i]]=1;
    }
    for (let i=1; i<=amount; i++) {
        // console.log("now i=", i);
        if(dp[i]===-1) {
            let min=amount;
            let flag=false;
            for (let j=0; j<=coins.length; j++) {
                if(i>coins[j]) {
                    if(dp[i-coins[j]]>=0&&dp[i-coins[j]]<=min) {
                        flag=true;
                        min=dp[i-coins[j]];
                        // console.log("find");
                    }
                }
            }
            if(flag) {
                dp[i]=min+1;
                flag=false;
            }
        }
    }
    // console.log(dp);
    res=dp[amount];
    return res;
};
let coins = [1,2,5], amount = 100;
console.log(coinChange(coins, amount));