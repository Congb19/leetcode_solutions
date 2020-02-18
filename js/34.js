/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res=new Array();
    res[0]=-1;
    res[1]=-1;

    if(nums.length===0) return res;
    else if(nums.length===1) {
        if(nums[0]!=target) return res;
        else return [0,0];
    }
    else if(nums.length===2) {
        if(nums[0]===target) res[0]=0;
        if(nums[1]===target) res[1]=1;
        if(res[0]<0&&res[1]>=0) res[0]=res[1];
        if(res[1]<0&&res[0]>=0) res[1]=res[0];
        return res;
    }

    let flag = false;
    let l=0, r=nums.length-1, m1=Math.floor(r/2), m2=Math.ceil(r/2);
    // console.log(l, m1, m2, r);

    if(nums[l]===target){
        res[0]=l;
    }
    else {
        if (nums[m1]===target) flag=true;
        while (!(nums[m1]===target&&nums[m1-1]!=target)&&l!=r-1) {
            if(nums[m1]<target) {
                l=m1;
                m1=Math.floor((l+r)/2);
            }
            else{
                r=m1;
                m1=Math.floor((l+r)/2);
            }
            // console.log("left, ", l, m1, r);
            if (nums[m1]===target) flag=true;
        }
        if(flag) res[0]=m1;
    }

    l=0, r=nums.length-1;
    // console.log("qwe, ", l, m2, r);
    flag = false;
    if(nums[r]===target){
        res[1]=r;
    }
    else {
        if (nums[m2]===target) flag=true;
        while (!(nums[m2]===target&&nums[m2+1]!=target)&&l!=r-1) {
            if(nums[m2]<=target) {
                l=m2;
                m2=Math.ceil((l+r)/2);
            }
            else{
                r=m2;
                m2=Math.ceil((l+r)/2);
            }
            if (nums[m2]===target) flag=true;
            // console.log("right, ", l, m2, r);
        }
        if(flag) res[1]=m2;
    }
    if(res[0]<0&&res[1]>=0) res[0]=res[1];
    if(res[1]<0&&res[0]>=0) res[1]=res[0];
    return res;
};
let nums = [1,2,3], target = 2;
console.log(searchRange(nums, target));