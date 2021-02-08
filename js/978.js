/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
	let l = arr.length;
	if (l <= 1) return l;
	let dp = [];
	//dp[i]=前i项(包括第i项) 最长的湍流
	dp[0] = 1;
	for (let i = 1; i < l; i++) {
		if (arr[i] == arr[i - 1]) dp[i] = 1;
		else {
			if (
				(dp[i - 1] == 1) ||
				(arr[i] - arr[i - 1]) * (arr[i - 1] - arr[i - 2]) < 0
			)
				dp[i] = dp[i - 1] + 1;
			else dp[i] = 2;
		}
	}
	console.log(dp);
	let res = 1;
	for (let i = 0; i < l; i++) {
		if (res < dp[i]) res = dp[i];
	}
	return res;
};
console.log(maxTurbulenceSize([0, 8, 45, 88, 48, 68, 28, 55, 17, 24]));
