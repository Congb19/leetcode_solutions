/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  //1 排序后遍历
  // nums.sort((a, b) => a - b);
  // for (let i = 0; i < nums.length - 1; i++) {
  // 	if (nums[i] == nums[i + 1]) return nums[i];
  // }
  // return nums[0];
  //2 模拟hash
  // let a = {};
  // for (let i = 0; i < nums.length; i++) {
  // 	if (a[nums[i]]) return nums[i];
  // 	else a[nums[i]] = 1;
  // }
  // return nums[0];
  //3 真hash
  let a = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (a.has(nums[i])) return nums[i];
    else a.set(nums[i], 1);
  }
  return nums[0];
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
