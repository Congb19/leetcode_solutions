/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length === 1) {
    if (nums[0] === 1) return 0;
    else return 1;
  }
  nums.sort((a, b) => {
    return a - b;
  });
  // console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i != nums[i]) return i;
  }
  return nums.length;
};
let nums = [3, 0, 1];
console.log(missingNumber(nums));
