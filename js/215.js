/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>{return a-b});
    return nums[num.length-k];
};
let nums = [1,2,3,1], k=2;
console.log(findKthLargest(nums, k));