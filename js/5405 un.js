/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
	let res = 0;
	let n = arr.length;
	if (n < 3) return 0;
	//两个区间内 出现偶数次的数字的个数同为偶数即为一组答案
	let i = 0,
		j = 1,
		k = 2;
	for (let i = 0; i < n; i++) {
		j = i + 1;
		k = n - 1;
		while (j <= k) {
			//i到j-1，j到k
			let a = arr[i],
				b = arr[k];
			for (let p = i + 1; p <= j - 1; p++) {
				a = a ^ arr[p];
			}
			for (let p = j; p <= k - 1; p++) {
				b = b ^ arr[p];
			}
		}
	}
	return res;
};
console.log(countTriplets([2, 3, 1, 6, 7]));
