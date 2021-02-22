/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
  //���Ա���
  // var n=nums.length-1;
  // var max=1,min=n;
  // for(var i=0; i<=n; i++) {
  //     if(nums[i]>max) max=nums[i];
  //     if(nums[i]<min) min=nums[i];
  // }
  // for(var i=0; i<=n; i++) {
  //     for(var j=i+1; j<=n; j++) {
  //         if (nums[i]==nums[j]) {
  //             return nums[i];
  //         }
  //     }
  // }

  //˧һ��� �ڹ�������
  var p = 0,
    q = 0;
  var rk = 0;
  while (1) {
    // console.log("p, q=", p, q);
    // console.log("nums[p], nums[q]=", nums[p], nums[q]);
    q = nums[q];
    q = nums[q];
    p = nums[p];
    if (nums[p] == nums[q]) {
      rk = p;
      // console.log("find rk, ",p);
      if (p != q) return nums[rk];
      break;
    }
  }
  p = 0;
  q = rk;
  while (1) {
    if (nums[p] == nums[q]) return nums[q];
    p = nums[p];
    q = nums[q];
    // console.log("p, q=", p, q);
    // console.log("nums[p], nums[q]=", nums[p], nums[q]);
  }
  // console.log("p, q=", p, q);
  // console.log("nums[p], nums[q]=", nums[p], nums[q]);
  return nums[p];
};

var nums = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
console.log(findDuplicate(nums));
// console.log("test ", -2147483648<=1);
