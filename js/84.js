/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res=0;
    for (let i = 0; i < heights.length; i++) {
        let l=i,r=i;
        while (l>=0) {
            if (heights[l]<heights[i]) {
                break;
            }
            l--;
        }
        while (r<heights.length) {
            if (heights[r]<heights[i]) {
                break;
            }
            r++;
        }
        l++;
        r--;
        if ((r-l+1)*heights[i]>res) res=(r-l+1)*heights[i];
    }
    return res;
};

let nums=[2,1,5,6,2,3];
console.log(largestRectangleArea(nums));