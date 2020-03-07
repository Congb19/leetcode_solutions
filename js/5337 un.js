/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    // let arr=[...Array(5)].map(()=>[]);
    // console.log(arr);
    // for (let i=0;i<s.length;i++) {
    //     if (s[i]==='a') arr[0].push(i);
    //     if (s[i]==='e') arr[1].push(i);
    //     if (s[i]==='i') arr[2].push(i);
    //     if (s[i]==='o') arr[3].push(i);
    //     if (s[i]==='u') arr[4].push(i);
    // }
    //思路1 暴力 暴力不得行，果然超时
    // let c=[...Array(5)];
    // let res=0;
    // for (let i=0;i<s.length;i++) {
    //     for (let j=i;j<s.length;j++) {
    //         if (j-i+1<=res) continue;
    //         // console.log(i,j);
    //         c=c.map(()=>0);
    //         for (let k=i;k<=j;k++) {
    //             if (s[k]==='a') c[0]++;
    //             if (s[k]==='e') c[1]++;
    //             if (s[k]==='i') c[2]++;
    //             if (s[k]==='o') c[3]++;
    //             if (s[k]==='u') c[4]++;
    //         }
    //         if (c[0]%2===1||c[1]%2===1||c[2]%2===1||c[3]%2===1||c[4]%2===1) continue;
    //         else {
    //             // console.log("ok");
    //             if (j-i+1>res) res=j-i+1;
    //         }
    //     }
    // }
    // return res;
    //思路2 二维的dp试试
    //搞半天还是差不多的思路，不过可以在此上优化
    let n=s.length;
    if (n===0) return 0;
    let dp=[...Array(n)].map(()=>[...Array(n)].map(()=>[...Array(5)].map(()=>0)));
    dp[0][0]=[0,0,0,0,0];
    if (s[0]==='a') dp[0][0][0]++;
    if (s[0]==='e') dp[0][0][1]++;
    if (s[0]==='i') dp[0][0][2]++;
    if (s[0]==='o') dp[0][0][3]++;
    if (s[0]==='u') dp[0][0][4]++;
    for (let i=0;i<n;i++) {
        for (let j=i;j<n;j++) {
            if (j===0) continue;
            dp[i][j]=[...dp[i][j-1]];
            if (s[j]==='a') dp[i][j][0]++;
            if (s[j]==='e') dp[i][j][1]++;
            if (s[j]==='i') dp[i][j][2]++;
            if (s[j]==='o') dp[i][j][3]++;
            if (s[j]==='u') dp[i][j][4]++;
        }
    }
    // console.log(dp);
    let res=0;
    for (let i=0;i<n;i++) {
        for (let j=i;j<n;j++) {
            if (j-i+1<=res) continue;
            let flag=true;
            for (let k=0;k<5;k++) {
                if (dp[i][j][k]%2===1) flag=false;
            }
            if (flag) {
                res=j-i+1;
            }
        }
    }
    return res;
    //思路3 滑动窗口



};


let s="eea";
console.log(findTheLongestSubstring(s));