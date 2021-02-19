/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
	let l = A.length;
	let left = 0,
		right = -1,
		exist = 0,
		res = 0;
	for (let i = 0; i < l; i++) {
		if (exist < K) {
			if (A[i] == 0) {
				exist++;
			}
			right++;
		} else {
			if (A[i] == 1) right++;
			else break;
		}
	}
	res = right + 1;
	// console.log(left, right, 'exist: ', exist, 'res: ', res);
	while (left <= right + 1 && right <= l - 1) {
		if (A[left] == 0) {
			left++;
			exist--;
			while (right + 1 < l && exist < K) {
				if (A[right + 1] == 0) {
					exist++;
				}
				right++;
			}
			while (right + 1 < l && A[right + 1] == 1) {
				right++;
			}
		} else {
			left++;
			while (right + 1 < l && A[right + 1] == 1) {
				right++;
			}
		}
		if (right - left + 1 > res) res = right - left + 1;
		// console.log(left, right, 'exist: ', exist, 'res: ', res);
	}
	return res;
};
[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
3;
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 0));
