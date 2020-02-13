/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let res = new Array();
    let i = 0, j = 0;
    for (let k = 0; k < m + n; k++) {
        if(i==m) {
            res[k] = nums2[j];
            j++;
        }
        else if(j==n) {
            res[k] = nums1[i];
            i++;
        }
        else if (nums1[i] < nums2[j]) {
            res[k] = nums1[i];
            i++;
        }
        else {
            res[k] = nums2[j];
            j++;
        }
    }
    for (let k = 0; k < m + n; k++) {
        nums1[k]=res[k];
    }
    // return res;
}
let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));
// console.log("test ", -2147483648<=1);
