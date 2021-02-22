/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1;
  if (nums.length === 1 && nums[0] <= 0) return 1;
  let res = 1;
  let arr = new Array();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      arr[nums[i]] = "x";
    }
  }
  // console.log(arr);
  if (arr.length === 0) return 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== "x") {
      return i;
    }
    res = i;
  }
  res++;
  return res;
};
let nums = [-1, -2];
let num = 5;
let s = "0P";
console.log(firstMissingPositive(nums));
