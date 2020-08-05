/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
	if (arr.length <= k) return arr;
	//之前写的 排序
	// arr.sort((a, b) => a - b);
	// let res = [...Array(k)];
	// res.forEach((value, index, array) => {
	// 	res[index] = arr[index];
	// });
	// return res;
	//快排思想
};
