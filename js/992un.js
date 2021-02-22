/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
  let window = [],
    exist = new Map();
  let l = A.length;
  for (let i = 0; i < l; i++) {
    window.push(A[i]);
    if (!exist.has(A[i])) exist.set(A[i], 1);
    if (exist.size == K) break;
  }
  if (exist.size < K) return 0;
  console.log(window, exist);
  let left = 0,
    right = window.length - 1;
  let res = 1;
  //一开始就要看看左边能不能删
  let originwindow = [...window];
  let tmp = window.shift();
  while (window.includes(tmp)) {
    console.log(1, window, exist);
    tmp = window.shift();
    res++;
  }
  window = originwindow;
  while (right + 1 < l && exist.size == K) {
    if (exist.has(A[right + 1])) {
      //如果下一项已经存在，直接加进来
      res++;
      right++;
      window.push(A[right]);
      console.log(0, window, exist);
      //这里也要检测一下左边如果去掉的话行不行
      let originwindow = [...window];
      let tmp = window.shift();
      while (window.includes(tmp)) {
        console.log(1, window, exist);
        tmp = window.shift();
        res++;
      }
      window = originwindow;
    } else {
      //如果下一项没见过，删最左直到删少一个数字
      let tmp = window.shift();
      while (window.includes(tmp)) {
        tmp = window.shift();
      }
      exist.delete(tmp);
      exist.set(A[right + 1], 1);
      window.push(A[right + 1]);
      right++;
      res++;
      console.log(3, window, exist);
    }
  }
  return res;
};
console.log(
  subarraysWithKDistinct(
    [
      27,
      27,
      43,
      28,
      11,
      20,
      1,
      4,
      49,
      18,
      37,
      31,
      31,
      7,
      3,
      31,
      50,
      6,
      50,
      46,
      4,
      13,
      31,
      49,
      15,
      52,
      25,
      31,
      35,
      4,
      11,
      50,
      40,
      1,
      49,
      14,
      46,
      16,
      11,
      16,
      39,
      26,
      13,
      4,
      37,
      39,
      46,
      27,
      49,
      39,
      49,
      50,
      37,
      9,
      30,
      45,
      51,
      47,
      18,
      49,
      24,
      24,
      46,
      47,
      18,
      46,
      52,
      47,
      50,
      4,
      39,
      22,
      50,
      40,
      3,
      52,
      24,
      50,
      38,
      30,
      14,
      12,
      1,
      5,
      52,
      44,
      3,
      49,
      45,
      37,
      40,
      35,
      50,
      50,
      23,
      32,
      1,
      2,
    ],
    20
  )
);
