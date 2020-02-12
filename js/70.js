/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //思路1
    if (n<=3) return n;
    let res=new Array(n);
    res[0]=1; res[1]=2; res[2]=3;
    for (let i=3;i<n;i++) {
        res[i]=res[i-1]+res[i-2];
    }
    return res[n-1];
    //思路2 超时
    // if (n<=3) return n;
    // return (climbStairs(n-1)+climbStairs(n-2));
};
let a=2;
console.log(climbStairs(a));
// console.log("test ", -2147483648<=1);
