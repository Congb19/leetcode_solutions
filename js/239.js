/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return [];
  if (k === 1) {
    return nums;
  }
  let n = nums.length;
  let res = [...Array(n - k + 1)];
  //˼·1 �������Ż���17/18������
  // let max=nums[0];
  // let maxin=0;
  // for (let i=0;i<k;i++) {
  //     if (nums[i]>max) max=nums[i];
  // }
  // for (let i=0;i<k;i++) {
  //     if (nums[i]===max) maxin++;
  // }
  // // console.log(max, maxin);
  // res.push(max);
  // for (let i=1;i<nums.length-k+1;i++) {
  //     let l=nums[i-1];
  //     let r=nums[i-1+k];
  //     // console.log(max, maxin, l, r)
  //     if (l===max) {
  //         maxin--;
  //         if (maxin===0) {
  //             max=nums[i];
  //             for (let j=i;j<i+k;j++) {
  //                 if (nums[j]>max) max=nums[j];
  //             }
  //             maxin=1;
  //         }
  //     }
  //     if (r>max) {
  //         max=r;
  //         maxin=1;
  //     }
  //     else if (r===max) {
  //         maxin++;
  //     }
  //     res.push(max);
  // }
  //˼·2 ˫����в�
  let maxid = 0;
  let deq = [...Array()];
  for (let i = 0; i < k; i++) {
    if (deq.length !== 0 && deq[0] === i - k) {
      deq.shift();
    }
    while (deq.length !== 0 && nums[i] > nums[deq[deq.length - 1]]) {
      deq.pop();
    }
    deq.push(i);
    if (nums[i] > nums[maxid]) maxid = i;
  }
  res[0] = nums[maxid];
  for (let i = k; i < n; i++) {
    if (deq.length !== 0 && deq[0] === i - k) {
      deq.shift();
    }
    while (deq.length !== 0 && nums[i] > nums[deq[deq.length - 1]]) {
      deq.pop();
    }
    deq.push(i);
    res[i - k + 1] = nums[deq[0]];
  }
  return res;
};

let nums = [9, 10, 9, -7, -4, -8, 2, -6];
console.log(maxSlidingWindow(nums, 5));
