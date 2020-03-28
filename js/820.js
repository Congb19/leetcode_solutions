/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
	let res = 0;
	let n = words.length;
	let new_words = [...Array(n)].map(() => "");
	new_words.forEach((value, index, array) => {
		new_words[index] = words[index]
			.split("")
			.reverse()
			.join("");
	});
	new_words.sort();
	for (let i = 0; i < new_words.length - 1; i++) {
		let t = new_words[i].length;
		if (new_words[i] === new_words[i + 1].substring(0, t)) {
			new_words[i] = "";
			new_words.splice(i, 1);
			i--;
		}
	}
	// console.log(new_words);
	new_words.forEach(element => {
		res += element.length + 1;
	});
	return res;
};
console.log(minimumLengthEncoding(["time", "me", "bell"]));
