/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //思路1 模拟
  let can = new Array();
  if (nums.length <= 1) return true;
  for (let i = 0; i < nums.length; i++) {
    can[i] = false;
  }
  can[0] = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (can[i]) {
      for (let j = i; j <= i + nums[i]; j++) {
        can[j] = true;
        if (j >= nums.length - 1) {
          return true;
        }
      }
    }
  }
  return false;
};
let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));
