/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // let res=false;
    if(n%4==0) return false;
    else return true;
    // return res;
};

var nums = [5,5,5,10,20];
var num=4;
console.log(canWinNim(num));
// console.log("test ", -2147483648<=1);
