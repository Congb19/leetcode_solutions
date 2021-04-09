/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // return Math.min(...nums);
  // 2 2020二分
  // let n = nums.length;
  // let l = 0,
  //   r = n - 1,
  //   m = Math.floor((l + r) / 2),
  //   om = m;
  // while (l < r) {
  //   // console.log(l, m, r);
  //   if (nums[m] > nums[m + 1]) {
  //     return nums[m + 1];
  //   } else {
  //     if (nums[m] > nums[l]) {
  //       l = m;
  //     } else if (nums[m] < nums[l]) {
  //       r = m;
  //     } else {
  //       if (nums[m] > nums[r]) l++;
  //       else r--;
  //     }
  //     // om = m;
  //     m = Math.floor((l + r) / 2);
  //     // if (om == m) break;
  //   }
  // }
  // return nums[0];
  //3 2021二分
  let l = 0, r = nums.length - 1, m = Math.floor((l + r) / 2);
  while (l < r && nums[l] >= nums[r]) {
    console.log(l, m, r);
    l = m + 1;
    m = Math.floor((l + r) / 2);
  }
  while (l > 0 && nums[l] >= nums[l - 1]) l--;
  return nums[l];
};

console.log(findMin([3, 1, 3, 3]));