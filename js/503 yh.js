/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length;
  let res = [...Array()];
  for (let i = 0; i < n; i++) {
    let flag = -1;
    for (let j = i + 1; j < i + n; j++) {
      if (nums[j % n] > nums[i]) {
        // console.log(nums[j % n], nums[i]);
        flag = nums[j % n];
        break;
      }
    }
    res.push(flag);
  }
  return res;
};
console.log(nextGreaterElements([1, 2, 1]));
