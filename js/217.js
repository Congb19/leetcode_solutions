/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
