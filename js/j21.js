/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  //简单双指针
  let n = nums.length;
  if (n < 2) return nums;
  let l = 0,
    r = n - 1;
  while (l < r) {
    while (l < r && nums[l] % 2 == 1) {
      l++;
    }
    while (l < r && nums[r] % 2 == 0) {
      r--;
    }
    if (l < r) {
      let t = nums[l];
      nums[l] = nums[r];
      nums[r] = t;
    }
  }
  return nums;
};
