/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let a = s.split(" ");
	a.forEach((value, index) => {
		let tmp = value.split("");
		a[index] = tmp.reverse().join("");
	});
	return a.join(" ");
};
console.log(reverseWords("Let's take LeetCode contest"));
