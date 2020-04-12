while ((line = readline())) {
	//思路：答案一定是反向单调递减的，反过来折断只需要一遍即可，正着有可能要N遍
	let linex = readline();
	let arr = linex.split(" ");
	let new_arr = [...Array()];
	let c = 0;
	for (let i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	}
	let arr2 = arr.reverse();
	// print(arr2);
	for (let i = 0; i < arr2.length - 1; i++) {
		if (arr2[i] < arr2[i + 1]) {
			//判断arr[i+1]有多大，要折多少次才能融入
			let tmp = Math.floor((arr[i + 1] - 1) / arr[i]);
			// print(tmp);
			c += tmp;
			arr2[i + 1] = Math.floor(arr2[i + 1] / tmp);

			//由于只能是整数，一次一次来吧
			// while (arr[i + 1] > arr[i] * 2) {
			// 	c++;
			// 	arr[i + 1] -= arr[i];
			// }
			// c++;
			// arr[i + 1] = Math.floor(arr[i + 1] / 2);
		}
	}
	print(c);
}
