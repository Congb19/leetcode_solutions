while ((line = readline())) {
	//题意：有点像冒泡，把0都冒到前面去变成10，然后循环
	//摘掉最前面的所有1  然后0都冒上去
	//总结下来 0的个数比较重要 把0变到只剩一个为止
	let T = parseInt(line);
	while (T--) {
		let N = parseInt(readline());
		let str = readline();
		let arr = str.split("");
		//go
		let res = "";
		let zero = 0;
		arr.forEach((element) => {
			if (element === "0") zero++;
		});
		if (zero <= 1) print(str);
		else {
			let t = 0;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] === "0") {
					t = i;
					break;
				}
			}
			for (let i = t; i < t + zero - 1; i++) {
				arr[i] = "1";
			}
			arr[t + zero - 1] = "0";
			for (let i = t + zero; i < arr.length; i++) {
				arr[i] = "1";
			}
			res = arr.join("");
			print(res);
		}
	}
}
