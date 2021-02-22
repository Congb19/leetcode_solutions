/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};

let nums = [1, 2, 3, 3, 1];
console.log(singleNumber(nums));
