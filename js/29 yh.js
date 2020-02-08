/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var res=0;
    if(dividend==0) return 0;
    if(divisor==1) res=dividend;
    else if(divisor==-1) res=-dividend;
    else {
        //暴力 超时了
        if(dividend*divisor>0) {
            while (dividend*divisor>=0) {
                res++;
                dividend-=divisor;
            }
            res--;
        }
        else {
            if(dividend<0) {
                dividend=-dividend;
            }
            else {
                divisor=-divisor;
            }
            while (dividend*divisor>=0) {
                res++;
                dividend-=divisor;
            }
            res--;
            res=-res;
        }
        //思路2

    }
    if (res>2147483647) res=2147483647;
    else if (res<-2147483648) res=-2147483648;
    return res;
};

var nums=[2,5,9,6,9,3,8,9,7,1];
var dividend = -7, divisor = 3;
console.log(divide(dividend, divisor));
// console.log("test ", -2147483648<=1);
