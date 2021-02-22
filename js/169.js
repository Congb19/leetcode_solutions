/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = nums.length;
  nums.sort();
  // console.log(nums);
  let m = Math.floor(n / 2);
  if (n & (2 === 1)) return nums[m];
  else {
    if (nums[0] === nums[m]) return nums[m];
    else return nums[m + 1];
  }
};
let m = 7,
  n = 3;
let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
