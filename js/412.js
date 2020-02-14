/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res=new Array();
    for (let i=0;i<n;i++) {
        if ((i+1)%3===0&&(i+1)%5===0) {
            res[i]="FizzBuzz";
        }
        else if((i+1)%3===0) {
            res[i]="Fizz";
        }
        else if((i+1)%5===0) {
            res[i]="Buzz";
        }
        else {
            res[i]=(i+1).toString();
        }
    }
    return res;
};
let m = 15;
console.log(fizzBuzz(m));
// console.log("test ", -2147483648<=1);
