/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n = nums.length;
  if (n == 1) return nums[0];
  //dp
  //dp[i]=以i结尾的乘积最大子数组的值
  let dpmax = [...Array()],
    dpmin = [...Array()];
  dpmax[0] = dpmin[0] = nums[0];
  for (let i = 1; i < n; i++) {
    dpmax[i] = Math.max(
      dpmax[i - 1] * nums[i],
      nums[i],
      dpmin[i - 1] * nums[i]
    );
    dpmin[i] = Math.min(
      dpmax[i - 1] * nums[i],
      nums[i],
      dpmin[i - 1] * nums[i]
    );
  }
  // console.log(dpmax, dpmin);
  let res = nums[0];
  dpmax.forEach((element) => {
    if (element > res) res = element;
  });
  dpmin.forEach((element) => {
    if (element > res) res = element;
  });
  if (res == -0) res = 0;
  return res;
  //2 gogo 有点暴力 超时了
  // let dp2 = [...Array()];
  // dp2[0] = nums[0];
  // for (let i = 0; i < n; i++) {
  // 	let tmp = [...Array()];
  // 	let x = 1;
  // 	let max = nums[i];
  // 	for (let j = i; j >= 0; j--) {
  // 		tmp.push(x * nums[j]);
  // 		x *= nums[j];
  // 	}
  // 	tmp.forEach((element) => {
  // 		if (element > max) max = element;
  // 	});
  // 	dp2[i] = max;
  // }
  // console.log(dp2);
  // let res = nums[0];
  // dp2.forEach((element) => {
  // 	if (element > res) res = element;
  // });
  // if (res == -0) res = 0;
  // return res;
};
console.log(maxProduct([-2, 3, -4]));
