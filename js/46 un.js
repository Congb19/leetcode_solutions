/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function jc(num) {
    if (num<=1) return 1;
    else return jc(num-1)*num;
}
// function swap(a, b) {
//     let tmp=a;
//     a=b;
//     b=tmp;
// }
function backtrack(o) {
    if (o.first===0) {
        o.res[i]=o.nums;
        i++;
    }
    for (let i=0; i<o.nums.length; i++) {
        // swap(nums[first], nums[i]);
        let tmp=o.nums[o.first];
        o.nums[o.first]=o.nums[i];
        o.nums[i]=tmp;
        let n={
            first: o.first+1,
            nums: o.nums,
            res: o.res
        }
        backtrack(n);
        tmp=o.nums[o.first];
        o.nums[o.first]=o.nums[i];
        o.nums[i]=tmp;
        // swap(nums[first], nums[i]);
    }
}
let i=0;
var permute = function(nums) {
    let res=new Array();
    // res[0]=new Array();
    // res[0]=nums;
    let num=jc(nums.length);
    console.log(num);
    let o = {
        first:0,
        nums: nums,
        res: res
    }
    backtrack(o);
    i=0;
    return res;
};
let nums = [2,3,4], target = 9;

console.log(permute(nums));