/**
 * @param {string} S
 * @return {string}
 */
var makeLargestSpecial = function (S) {
	let res = "";
	let zero = 0;
	let left = 0;
	let ss = [...Array()];
	for (let i = 0; i < S.length; i++) {
		if (S.charAt(i) === "1") zero++;
		else zero--;
		if (zero === 0) {
			let tmp = S.substring(left + 1, i);
			ss.push("1" + makeLargestSpecial(tmp) + "0");
			left = i + 1;
		}
	}
	ss.sort();
	// console.log(ss);
	for (let i = 0; i < ss.length; i++) {
		res += ss[ss.length - 1 - i];
	}
	return res;
};

console.log(makeLargestSpecial("11011000"));
