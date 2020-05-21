/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let res = "";
	let n = s.length;
	//cpp写过中心扩散了，js写一下dp
	//辣鸡dp
	// let dp = [...Array()];
	// dp[0] = 1;
	// for (let i = 1; i < n; i++) {
	// 	if (dp[i - 1] == 1) {
	// 		if (i > 1 && s.charAt(i) == s.charAt(i - 2)) dp[i] = 3;
	// 		else if (s.charAt(i) == s.charAt(i - 1)) dp[i] = 2;
	// 		else dp[i] = 1;
	// 	} else if (dp[i - 1] == 2) {
	// 		if (i > 2 && s.charAt(i) == s.charAt(i - 3)) dp[i] = 4;
	// 		else if (s.charAt(i) == s.charAt(i - 1)) dp[i] = 2;
	// 		else dp[i] = 1;
	// 	} else {
	// 		if (i > dp[i - 1] && s.charAt(i) == s.charAt(i - dp[i - 1] - 1))
	// 			dp[i] = dp[i - 1] + 2;
	// 		else if (s.charAt(i) == s.charAt(i - 1)) dp[i] = 2;
	// 		else dp[i] = 1;
	// 	}
	// }
	//二维的 dp[i][j]表示i到j最长的回文 dp[i][j]
	let dp = [...Array(n)].map((x) => [...Array(n)].map((x) => 0));
	for (let k = 0; k < n; k++) {
		for (let i = 0; i + k < n; i++) {
			let j = i + k;
			if (k == 0) dp[i][j] = 1;
			else if (k == 1 && s.charAt(i) == s.charAt(j)) dp[i][j] = 2;
			else if (dp[i + 1][j - 1] > 0 && s.charAt(i) == s.charAt(j))
				dp[i][j] = dp[i + 1][j - 1] + 2;
			// else dp[i][j] = 1;
			if (dp[i][j] > res.length) res = s.substr(i, dp[i][j]);
		}
	}
	// console.log(dp);
	return res;
};
console.log(longestPalindrome("cbbbbd"));
