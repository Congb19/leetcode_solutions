/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
	let res = [...Array()];
	let map = new Map();
	nums.forEach((element) => {
		if (map.has(element)) map.set(element, 2);
		else map.set(element, 1);
	});
	let keys = map.keys();
	for (let key of keys) {
		// console.log(key);
		if (map.get(key) == 1) res.push(key);
	}
	return res;
};
console.log(singleNumbers([4, 1, 4, 6]));
