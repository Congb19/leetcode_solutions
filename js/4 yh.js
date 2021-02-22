/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  //暴力排序
  // let aa = nums1.concat(nums2);
  // aa.sort((a, b) => a - b);
  // return aa.length % 2 == 1
  //     ? aa[Math.floor(aa.length / 2)]
  //     : (aa[Math.floor(aa.length / 2)] + aa[Math.floor(aa.length / 2) - 1]) /
  //     2;
  //插入排序
  // let cs = (a1, a2) => {
  // 	let res = [...Array()];
  // 	res = [...a1];
  // 	let p = 0;
  // 	for (let i = 0; i < a2.length; i++) {
  // 		for (let j = p; j < res.length; j++) {
  // 			// console.log(j, res);
  // 			if (
  // 				j + 1 < res.length &&
  // 				res[j] <= a2[i] &&
  // 				res[j + 1] >= a2[i]
  // 			) {
  // 				res.splice(j + 1, 0, a2[i]);
  // 				p = j;
  // 				break;
  // 			} else if (a2[i] < res[j]) {
  // 				res.splice(j, 0, a2[i]);
  // 				p = j;
  // 				break;
  // 			} else if (j == res.length - 1) {
  // 				res.splice(j + 1, 0, a2[i]);
  // 				p = j;
  // 				break;
  // 			}
  // 		}
  // 	}
  // 	return res;
  // };
  // let aa;
  // if (n1 > n2) aa = cs(nums1, nums2);
  // else aa = cs(nums2, nums1);
  // // console.log(aa);
  // return aa.length % 2 == 1
  // 	? aa[Math.floor(aa.length / 2)]
  // 	: (aa[Math.floor(aa.length / 2)] + aa[Math.floor(aa.length / 2) - 1]) /
  // 			2;
};
console.log(findMedianSortedArrays([1, 3], [2]));
