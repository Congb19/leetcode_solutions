/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = [...Array(n+1)].map(_=> 0); // 数组长度为n+1，值均为0
    // console.log(dp);
    for (let i = 1; i <= n; i++) {
        dp[i] = i; // 最坏的情况就是每次+1
        for (let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
        }
    }
    return dp[n];
};

let nums = [7,1,5,3,6,4], k=12;
let s= "nihao", t="haoni";
console.log(numSquares(k));