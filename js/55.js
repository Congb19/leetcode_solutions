/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //Ë¼Â·1 Ä£Äâ
    let can=new Array();
    for (let i=0;i<nums.length;i++) {
        can[i]=false;
    }
    can[0]=true;
    for (let i=0;i<nums.length-1;i++) {
        if (can[i]) {
            for (let j=i;j<=i+nums[i];j++) {
                can[j]=true;
            }
        }
    }
    return can[nums.length-1];
};
let matrix =
    [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
let nums=[2,3,1,1,4];
console.log(canJump(nums));