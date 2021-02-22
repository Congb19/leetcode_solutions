/**
 * @param {number[]} nums
 * @return {string}
 */
let comp = (a, b) => {
  return parseInt(b + a) - parseInt(a + b);
};
var largestNumber = function (nums) {
  if (nums.length === 1) return nums[0].toString();
  let res = "";
  let flag0 = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      // console.log("not 0!")
      flag0 = false;
    }
  }
  if (flag0) return nums[0].toString();
  // console.log(nums);
  let ss = new Array();
  for (let i = 0; i < nums.length; i++) {
    ss[i] = nums[i].toString();
  }
  // console.log(ss);
  ss.sort(comp);
  // console.log(ss);
  for (let i = 0; i < nums.length; i++) {
    res += ss[i];
  }
  return res;
};
let nums = [0, 0];
let s = "ABC";
console.log(largestNumber(nums));
