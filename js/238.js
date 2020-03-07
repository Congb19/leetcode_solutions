/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // ˼·���˻� = ��ǰ����ߵĳ˻� * ��ǰ���ұߵĳ˻�
    let n=nums.length;
    let res=[...Array(nums.length)];
    let k=1;
    for (let i=0;i<nums.length;i++) {
        res[i]=k;
        k*=nums[i];
    }
    k=1;
    for (let i=nums.length-1;i>=0;i--) {
        res[i]*=k;
        k*=nums[i];
    }
    return res;
};



let nums=[2,1,5,6,2,3];
console.log(productExceptSelf(nums));