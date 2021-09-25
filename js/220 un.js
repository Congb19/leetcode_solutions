/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (nums.length <= 1) return false;
  let l = nums.length;
  let cha = [];
  for (let i = 1; i < l; i++) {
    cha.push(nums[i] - nums[i - 1]);
  }
  console.log(cha);

  let left = 0;
  for (let i = left; i <= left + k && i < l; i++) {
    if (Math.abs(nums[i] - nums[left]) <= t) return true;
    if (i == l - 1) return false;
  }

  for (let i = k; i < l; i++) {

  }
  return false;
};
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 5, 6], 3, 1))