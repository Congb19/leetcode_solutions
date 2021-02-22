/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //˼·1 �뵽ð��
  // for (let i=0;i<nums.length;i++) {
  //     for (let j=0;j<nums.length-i-1; j++) {
  //         if (nums[j]===0) {
  //             let tmp=nums[j];
  //             nums[j]=nums[j+1];
  //             nums[j+1]=tmp;
  //         }
  //     }
  // }
  //˼·2 ����һ���ռ����㣬����ٵ�����
  let tmp = new Array();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      tmp.push(nums[i]);
    }
  }
  // console.log(tmp);
  for (let i = 0; i < nums.length; i++) {
    if (i < tmp.length) {
      nums[i] = tmp[i];
    } else nums[i] = 0;
  }
  // console.log(nums);
};
let nums = [0, 1, 0, 3, 12],
  k = 2;
console.log(moveZeroes(nums));
