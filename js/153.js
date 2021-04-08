/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  //1 直接On
  // return Math.min(...nums);
  //2 旋转 二分找到骤降点
  // l~m, m+1~r
  let l = 0, r = nums.length - 1, m = Math.floor((l + r) / 2);
  while (l < r && nums[l] > nums[r]) {
    console.log(l, m, r);
    l = m + 1;
    m = Math.floor((l + r) / 2);
  }
  while (l > 0 && nums[l] > nums[l - 1]) l--;
  return nums[l];
};
console.log(findMin([4, 5, 6, 7, 0]));