/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let n=s.length;
    if (s.length===0||s[0]==='0') return 0;
    let dp=new Array(n);
    dp[0]=1;
    if (s[1]==='0') {
        if (s[0]==='1'||s[0]==='2'){
            dp[1]=1;
        }
        else dp[1]=0;
    }
    else {
        if (s[0]==='1'||(s[0]==='2'&&s[1]<='6')) {
            dp[1]=2;
        }
        else dp[1]=1;
    }

    for (let i=2;i<n;i++) {
        if (s[i]==='0') {
            if (s[i-1]==='1'||s[i-1]==='2') {
                if (dp[i-1]>dp[i-2]) {
                    dp[i]=dp[i-2];
                }
                else {
                    dp[i]=dp[i-1];
                }
            }
            else {
                return 0;
            }
        }
        else {
            if (s[i-1]==='1'||(s[i-1]==='2'&&s[i]<='6')) {
                dp[i]=dp[i-1]+dp[i-2];
            }
            else {
                dp[i]=dp[i-1];
            }
        }
    }
    // console.log(dp);
    return dp[n-1];
};
let m=7, n=3;
let a="12120";
console.log(numDecodings(a));