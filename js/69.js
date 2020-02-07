/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==1) return 1;
    var res;
    res = x/2;
    res=Math.floor(res);
    while(res*res>x) {
        res=res/2;
        res=Math.floor(res);
    }
    while((res+1)*(res+1)<=x) {
        res++;
    }
    return res;
};

var nums=[-2,1,-3,4,-1,2,1,-5,4];
var num=9;
console.log(mySqrt(num));
