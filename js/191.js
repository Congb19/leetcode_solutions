/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res=0;
    for (let i=0;i<32;i++) {
        if (n & 1 !== 0) {
            res++;
        }
        n=n>>1;
    }
    return res;
};
let n=322122;
console.log(hammingWeight(n));