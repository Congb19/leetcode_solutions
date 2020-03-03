/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let arr = new Array();
    arr[0]=1;
    while (arr[arr.length-1]<n) {
        arr.push(3*arr[arr.length-1]);
    }
    // console.log(arr);
    if (arr[arr.length-1]!==n) return false;
    return true;
};
let nums = [0,1,0,3,12], k=2;
console.log(isPowerOfThree(3));