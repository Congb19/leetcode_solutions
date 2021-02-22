/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let res = 0;
  let n = nums.length;
  let l = 0,
    r = n - 1,
    m = Math.floor((l + r) / 2);
  if (nums[l] >= target) return l;
  if (nums[r] == target) return r;
  if (nums[r] < target) return n;
  while (l < r) {
    if (nums[m] == target) {
      return m;
    } else if (nums[m] > target) {
      if (m == l + 1) {
        return l + 1;
      } else {
        r = m;
        m = Math.floor((l + r) / 2);
      }
    } else {
      if (m + 1 == r) {
        return m + 1;
      } else {
        l = m;
        m = Math.floor((l + r) / 2);
      }
    }
  }
  return res;
};
console.log(searchInsert([1, 3, 5, 6], 7));
