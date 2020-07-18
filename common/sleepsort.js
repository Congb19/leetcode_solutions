let sleepsort = (nums) => {
	let n = nums.length;
	let res = [];
	let sum = 0;
	for (let i = 0; i < n; i++) {
		let tmp = nums[i];
		sum += tmp;
		setTimeout(() => {
			console.log("now i want to push", tmp);
			res.push(tmp);
			console.log("pushed", tmp, res);
		}, tmp * 10);
	}
	let starttime = new Date(),
		nowtime = new Date();
	while (nowtime.getTime() - starttime.getTime() < sum * 100 + 100) {
		nowtime = new Date();
	}
	return res;
};
console.log(sleepsort([2, 4, 3, 5, 1]));
