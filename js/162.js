/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length <= 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
  //1 ����
  // for (let i = 1; i < nums.length-1; i++) {
  //     if (nums[i]>nums[i+1]&&nums[i]>nums[i-1]) return i;
  // }
  // return 0;
  //2 ����
  let search = (l, r) => {
    if (l === r) return l;
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return search(l, mid);
    } else {
      return search(mid + 1, r);
    }
  };
  return search(0, nums.length - 1);
};
let nums = [1, 2, 3, 1];
console.log(findPeakElement(nums));
