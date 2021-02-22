/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  //˼·1 ����
  nums.sort((a, b) => a - b);
  let arr1 = [...Array()];
  let arr2 = [...Array()];
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length / 2) arr1.push(nums[i]);
    else arr2.push(nums[i]);
  }
  // console.log(arr1,arr2);
  let p = 0;
  for (let i = 0; i < arr1.length; i++) {
    nums[p] = arr1[arr1.length - 1 - i];
    p += 2;
  }
  p = 1;
  for (let i = 0; i < arr2.length; i++) {
    nums[p] = arr2[arr2.length - 1 - i];
    p += 2;
  }
  // console.log(nums)
  //˼·2
};

let nums = [4, 5, 5, 6];
console.log(wiggleSort(nums));
