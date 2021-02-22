/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0,
    p2 = nums.length - 1,
    curr = 0;
  while (curr <= p2) {
    if (nums[curr] === 2) {
      let tmp = nums[curr];
      nums[curr] = nums[p2];
      nums[p2] = tmp;
      p2--;
    } else if (nums[curr] === 1) {
      curr++;
    } else {
      let tmp = nums[curr];
      nums[curr] = nums[p0];
      nums[p0] = tmp;
      p0++;
      curr++;
    }
  }
  console.log(nums);
};
let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
