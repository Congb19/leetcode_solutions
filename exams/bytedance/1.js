// A+B1
while ((line = readline())) {
	//思路：直接判断
	let T = parseInt(line);
	while (T--) {
		let n = parseInt(readline());
		let line1 = readline();
		let line2 = readline();
		let arr1 = line1.split(" ");
		let arr2 = line2.split(" ");
		let arr3 = [...Array()];
		let res = true;
		let c = 0;
		for (let i = 0; i < n; i++) {
			arr1[i] = parseInt(arr1[i]);
			arr2[i] = parseInt(arr2[i]);
			arr3[i] = arr2[i] - arr1[i];
			if (arr1[i] < arr2[i]) {
				if (c !== 0 && arr2[i] - arr1[i] !== c) {
					res = false;
				}
				c = arr2[i] - arr1[i];
			}
			// print(arr3);
		}
		if (res) {
			let tmp = 0;
			for (let i = 0; i < arr3.length - 1; i++) {
				if (arr3[i] != arr3[i + 1]) {
					tmp++;
				}
			}
			// print(tmp);
			if (arr3[0] !== 0 && arr3[arr3.length - 1] !== 0) {
				if (tmp >= 2) res = false;
			} else if (arr3[0] === 0 && arr3[arr3.length - 1] !== 0) {
				if (tmp >= 3) res = false;
			} else if (arr3[0] !== 0 && arr3[arr3.length - 1] === 0) {
				if (tmp >= 3) res = false;
			} else {
				if (tmp >= 4) res = false;
			}
		}
		if (res) {
			print("YES");
		} else {
			print("NO");
		}
		res = true;
		c = 0;
	}
}
