/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length;
  if (n <= 1) return 0;
  //dp 超时
  // let dp = [...Array(n)].map((value, index, array) => {
  // 	return index;
  // });
  // // console.log(dp);
  // let max = 1;
  // for (let i = 0; i < n; i++) {
  // 	for (let j = max; j <= nums[i]; j++) {
  // 		dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
  // 		// max = i + j;
  // 	}
  // 	console.log(dp);
  // }
  // // console.log(dp);
  // return dp[n - 1];
  //试试倒过来，是贪心的意思
  //从最后一个点开始，向前寻找能一步到达这个点的最远的点，再以那个点为终点，寻找能一步到达的最远的点，直到开头
  let res = 0;
  let min = n - 1;
  n--;
  while (min !== 0) {
    for (let i = 0; i < n; i++) {
      // console.log("test", n - 1 - i);
      if (nums[n - 1 - i] >= i + 1) min = n - 1 - i;
    }
    // console.log(min);
    n = min;
    res++;
  }
  return res;
};
console.log(jump([3, 2, 1]));
