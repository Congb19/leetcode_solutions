/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = new Map();
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    //数字 [左 出现次数 右]
    if (map.has(nums[i]))
      map.set(nums[i], [map.get(nums[i])[0], map.get(nums[i])[1] + 1, i]);
    else map.set(nums[i], [i, 1, i]);
  }
  // console.log(map);
  //数字 出现次数 右减左
  let res = [nums[0], 0, 0];
  for (let item of map) {
    if (item[1][1] > res[1]) {
      res = [item[0], item[1][1], item[1][2] - item[1][0]];
    } else if (item[1][1] == res[1] && item[1][2] - item[1][0] < res[2]) {
      res = [item[0], item[1][1], item[1][2] - item[1][0]];
    }
    // console.log(res);
  }
  return res[2] + 1;
};
console.log(findShortestSubArray([1, 2, 2, 3, 1]));
