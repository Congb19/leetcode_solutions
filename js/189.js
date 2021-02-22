/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //������ת��
  let n = nums.length;
  while (k > n) {
    k -= n;
  }
  if (n !== 1) {
    for (let i = 0; i < n / 2; i++) {
      let temp = nums[i];
      nums[i] = nums[n - 1 - i];
      nums[n - 1 - i] = temp;
    }
    // console.log(nums)
    for (let i = 0; i < k / 2; i++) {
      let temp = nums[i];
      nums[i] = nums[k - 1 - i];
      nums[k - 1 - i] = temp;
    }
    // console.log(nums)
    for (let i = k; i < Math.floor(k + (n - k) / 2); i++) {
      let temp = nums[i];
      nums[i] = nums[n - 1 - i + k];
      nums[n - 1 - i + k] = temp;
    }
  }
};
let nums = [0],
  k = 2;
let s = "ABC";
console.log(rotate(nums, k));
