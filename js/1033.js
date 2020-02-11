/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let res=new Array();
    let nums=new Array();
    nums[0]=a;
    nums[1]=b;
    nums[2]=c;
    nums.sort((a,b)=>{return a-b});
    //console.log(nums);
    if(nums[2]-nums[0]<=2) {
        res[0]=0;
        res[1]=0;
    }
    else if(nums[2]-nums[0]===3){
        res[0]=1;
        res[1]=1;
    }
    else {
        if(nums[1]-nums[0]<=2||nums[2]-nums[1]<=2) res[0]=1;
        else res[0]=2;
        res[1]=nums[2]-nums[0]-2;
    }
    return res;
};

let a=1, b=2, c=3;
console.log(numMovesStones(a,b,c));
// console.log("test ", -2147483648<=1);
