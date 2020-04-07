function findNumber(nums, target) {
	// write code here
	let res = [...Array()];
	let n = nums.length;
	nums.sort((a, b) => a - b);
	console.log(nums);
	//思路1 暴力 估计会超时直接pass
	// for (let i = 0; i < array.length; i++) {
	//     const element = array[i];

	// }
	//思路2 类似简单的双指针，plus版，或许可以
	//cd夹心,先b，再a
	// a,b,c,d
	let a = 0,
		b = 1,
		c = 2,
		d = n - 1;
	for (a = 0; a < n - 3; a++) {
		//此处还可以优化
		for (b = a + 1; b < n - 2; b++) {
			c = b + 1;
			d = n - 1;
			//此处还可以优化
			while (c < d) {
				if (nums[a] + nums[b] + nums[c] + nums[d] < target) {
					c++;
				} else if (nums[a] + nums[b] + nums[c] + nums[d] > target) {
					d--;
				} else {
					// console.log("add1!");
					//取到答案
					res.push([nums[a], nums[b], nums[c], nums[d]]);
					while (c < d && nums[c + 1] === nums[c]) {
						c++;
					}
					while (c < d && nums[d - 1] === nums[c]) {
						d--;
					}
					c++;
					d--;
				}
			}
		}
	}
	return res;
}
console.log(findNumber([5, 0, -6, 0, 6, -5], 0));
