/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // console.log(bills);
    let res=true;
    let bag = new Array(3);
    bag[0]=0; bag[1]=0; bag[2]=0;
    for (let i=0; i<bills.length; i++) {
        if(bills[i]==5) {
            bag[0]++;
        }
        else if(bills[i]==10) {
            if(bag[0]==0) return false;
            else {
                bag[0]--;
                bag[1]++;
            }
        }
        else if(bills[i]==20) {
            if(bag[1]>0&&bag[0]>0) {
                bag[0]--;
                bag[1]--;
                bag[2]++;
            }
            else if(bag[0]>2) {
                bag[0]-=3;
                bag[2]++;
            }
            else return false;
        }
    }
    return res;
};

var nums = [5,5,5,10,20];
console.log(lemonadeChange(nums));
// console.log("test ", -2147483648<=1);
