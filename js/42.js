/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res=0;
    let sum1=0,sum2=0;
    let max=0,maxid=0;
    for (let i=0;i<height.length;i++) {
        if (max<height[i]) {
            max=height[i];
            maxid=i;
        }
        sum1+=height[i];
    }
    for (let i=0;i<maxid;i++) {
        if (height[i+1]<height[i]) {
            height[i+1]=height[i];
        }
    }
    for (let i=height.length-1;i>maxid;i--) {
        if (height[i-1]<height[i]) {
            height[i-1]=height[i];
        }
    }
    for (let i=0;i<height.length;i++) {
        sum2+=height[i];
    }
    res=sum2-sum1;
    return res;
};
let nums=[4,2,3];
console.log(trap(nums));