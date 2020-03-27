/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
	if (deck.length < 2) return false;
	let res = true;
	let map = new Map();
	deck.forEach(element => {
		// console.log(element, typeof element);
		if (map.get(element)) {
			map.set(element, map.get(element) + 1);
		} else {
			map.set(element, 1);
		}
	});
	let gcd = (a, b) => {
		let temp = 0;
		if (a < b) {
			//用a来存大数
			temp = a;
			a = b;
			b = temp;
		}
		while (b != 0) {
			temp = a % b;
			a = b;
			b = temp;
		}
		return a;
	};
	let values = [...Array()];
	//求出value的最大公因数，大于等于2则true
	for (let value of map.values()) {
		values.push(value);
	}
	let t = values[0];
	for (let i = 0; i < values.length; i++) {
		t = gcd(t, values[i]);
	}
	if (t >= 2) {
		res = true;
	} else {
		res = false;
	}
	return res;
};
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
