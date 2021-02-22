/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let l = 0,
    r = 0;
  let c = 0;
  let res = [...Array()];
  let rec = 0;
  // if (nums[0] % 2 === 1) c = 1;
  while (l < nums.length && r < nums.length) {
    //朴素的滑动窗口，一个个移动
    // let tmp = nums.slice(l, r + 1);
    // if (c < k) {
    // 	r++;
    // 	if (nums[r] % 2 === 1) c++;
    // } else if (c > k) {
    // 	if (nums[l] % 2 === 1) c--;
    // 	l++;
    // } else {
    // 	// console.log(tmp);
    // 	// res.push(tmp);
    // 	rec++;
    // 	let minr = r;
    // 	while (r + 1 < nums.length && nums[r + 1] % 2 === 0) {
    // 		r++;
    // 		tmp = nums.slice(l, r + 1);
    // 		// console.log(tmp);
    // 		// res.push(tmp);
    // 		rec++;
    // 	}
    // 	if (nums[l] % 2 === 1) c--;
    // 	l++;
    // 	r = minr;
    // }
    //2 帅一点的滑动窗口
    if ((nums[r++] & 1) == 1) {
      c++;
    }
    //  若当前滑动窗口 [left, right) 中有 k 个奇数了，进入此分支统计当前滑动窗口中的优美子数组个数。
    if (c === k) {
      // 先将滑动窗口的右边界向右拓展，直到遇到下一个奇数（或出界）
      // rightEvenCnt 即为第 k 个奇数右边的偶数的个数
      let tmp = r;
      while (r < nums.length && nums[r] % 2 == 0) {
        r++;
      }
      let rightEvenCnt = r - tmp;
      // leftEvenCnt 即为第 1 个奇数左边的偶数的个数
      let leftEvenCnt = 0;
      while (nums[l] % 2 == 0) {
        leftEvenCnt++;
        l++;
      }
      // 第 1 个奇数左边的 leftEvenCnt 个偶数都可以作为优美子数组的起点
      // (因为第1个奇数左边可以1个偶数都不取，所以起点的选择有 leftEvenCnt + 1 种）
      // 第 k 个奇数右边的 rightEvenCnt 个偶数都可以作为优美子数组的终点
      // (因为第k个奇数右边可以1个偶数都不取，所以终点的选择有 rightEvenCnt + 1 种）
      // 所以该滑动窗口中，优美子数组左右起点的选择组合数为 (leftEvenCnt + 1) * (rightEvenCnt + 1)
      rec += (leftEvenCnt + 1) * (rightEvenCnt + 1);

      // 此时 left 指向的是第 1 个奇数，因为该区间已经统计完了，因此 left 右移一位，oddCnt--
      l++;
      c--;
    }
  }
  return rec;
};
console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
