/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[...Array()];
    res.push([]);
    for (let i = 0; i < nums.length; i++) {
        let n=res.length;
        for (let j = 0; j < n; j++) {
            // console.log(i,j)
            let tmp=[...res[j]];
            tmp.push(nums[i]);
            res.push(tmp);
        }
    }
    return res;
};
let nums=[5,2,6];
console.log(subsets(nums));