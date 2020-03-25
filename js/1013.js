/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum=0;
    A.forEach(function (item, index, array) {
        sum+=item;
    });
    if (sum%3!==0) return false;
    else {
        let k=sum/3;
        let sum2=0, times=0;
        // console.log(k);
        for (let i=0; i<A.length; i++) {
             sum2+=A[i];
             if (sum2===k) {
                 // console.log(i, "ok");
                 times++;
                 sum2=0;
             }
        }
        if (times>=3) return true;
        return false;
    }
};
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]))