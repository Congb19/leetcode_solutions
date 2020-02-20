/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //思路1 暴力
    // for(let i=0; i<nums.length; i++) {
    //     if (nums[i]===target) return i;
    // }
    // return -1;
    //思路2 二分接二分
    //我吐了 二分还没暴力快
    let res=-1;
    if (nums.length===1) {
        if (nums[0]===target) return 0;
        return res;
    }
    if (nums.length===2) {
        if (nums[0]===target) return 0;
        if (nums[1]===target) return 1;
        return res;
    }

    let l=0, r=nums.length-1, m=Math.floor((l+r)/2);
    while (l!=m&&nums[m]>nums[m-1]) {
        if(nums[m]>nums[r]) {
            l=m+1;
        }
        else {
            r=m;
        }
        m=Math.floor((l+r)/2);
        // console.log(l, m, r);
    }
    if(nums[m]>nums[m+1]) m++;
    // console.log("m=", m);

    l=0; r=nums.length-1;
    if (m===0) {
        l=0; r=nums.length-1;
        m=Math.floor((l+r)/2);
    }
    else {
        if (target<=nums[r]) {
            l=m;
            r=nums.length-1;
            m=Math.floor((l+r)/2);
        }
        else if(target>=nums[l]){
            l=0;
            r=m-1;
            m=Math.floor((l+r)/2);
        }
        else return -1;
    }

    // console.log(l, m, r);
    if(nums[l]===target)  return l;
    if(nums[r]===target)  return r;
    if(nums[m]===target)  return m;
    while (l!=m) {
        if(nums[l]===target)  return l;
        if(nums[r]===target)  return r;
        if(nums[m]===target)  return m;
        if(nums[m]<target) {
            l=m+1;
        }
        else {
            r=m;
        }
        m=Math.floor((l+r)/2);
        // console.log(l, m, r);
    }
    if(nums[l]===target)  return l;
    if(nums[r]===target)  return r;
    if(nums[m]===target)  return m;
    return res;
};
let nums = [2,3,4,5,6,7,8,9,1], target = 9;
console.log(search(nums, target));