/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //思路1 集合解法
    let seen = new Array();
    seen[0]=1;
    let flag=true;
    while (flag) {
        seen[seen.length]=n;
        //go
        let sum=0;
        while (n>0) {
            sum+=(n%10)*(n%10);
            n=Math.floor(n/10);
        }
        n=sum;
        //test
        for (let i=0; i<seen.length; i++) {
            if (seen[i]===n) {
                flag=false;
            }
        }
    }
    return n===1;
    //思路2 快慢指针


};

// class Solution:
// def isHappy(self, n: int) -> bool:
//     seen = {1}
// while n not in seen:
// seen.add(n)
// n = sum(int(i) ** 2 for i in str(n))
// return n == 1

let nums= [2,7,9,3,1], k=19;
let s="ABC";
let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"]];
console.log(isHappy(k));