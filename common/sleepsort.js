let ress;
let sleepsort = async (nums) => {
	let n = nums.length;
	let res = [];
	let timers = [];
	for (let i = 0; i < n; i++) {
		let tmp = nums[i];
		let timer = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("wait over");
				res.push(tmp);
			}, tmp * 10);
		});
		timers.push(timer);
	}
	await Promise.all(timers).then(() => {
		console.log(res, "ok");
		ress = res;
	});
	return res;
};
console.log(ress);
