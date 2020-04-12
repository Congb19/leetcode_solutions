// A+B1
while ((line = readline())) {
	//思路：DP，超时了
	//原来只能用一张券，那直接排序后遍历就能过了。。。
	let linex = line.split(" ");
	let n = parseInt(linex[0]),
		m = parseInt(linex[1]);
	let line1 = readline(),
		line2 = readline();
	let yhqs = line1.split(" ");
	let prices = line2.split(" ");
	let dp = [...Array()];
	let res = 0;
	for (let i = 0; i < n; i++) {
		yhqs[i] = parseInt(yhqs[i]);
	}
	for (let i = 0; i < m; i++) {
		prices[i] = parseInt(prices[i]);
	}
	yhqs.sort((a, b) => a - b);
	prices.sort((a, b) => a - b);
	// dp.push(0);
	// for (let i = 1; i < prices[m - 1] + 1; i++) {
	// 	let flag = false;
	// 	for (let j = 0; j < n; j++) {
	// 		if (yhqs[j] === i) flag = true;
	// 	}
	// 	// if (!flag) {
	// 	// 	for (let j = 1; j < i / 2; j++) {
	// 	// 		if (tmp > dp[j] + dp[i - j]) {
	// 	// 			tmp = dp[j] + dp[i - j];
	// 	// 		}
	// 	// 	}
	// 	// 	dp[i] = tmp;
	// 	// } else {
	// 	// 	dp[i] = 0;
	// 	// }
	// 	if (flag) dp[i] = 0;
	// 	else dp[i] = dp[i - 1] + 1;
	// }
	// for (let i = 0; i < prices.length; i++) {
	// 	res += dp[parseInt(prices[i])];
	// 	// print(dp[parseInt(prices[i])]);
	// }
	let tmp = 0;
	let tmpj = 0;
	for (let i = 0; i < m; i++) {
		tmp = 0;
		for (let j = tmpj; j < n; j++) {
			if (yhqs[j] <= prices[i]) {
				tmp = yhqs[j];
				tmpj = j;
			} else break;
		}
		res += prices[i] - tmp;
	}
	print(res);
}
