/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
	if (sentence.length == 0) return 0;
	let dp = new Array(sentence.length).fill(0);
	for (let i = 1; i <= sentence.length; i++) {
		dp[i] = dp[i - 1] + 1;
		// 上面表示，如果没有匹配那么dp[i]相比于dp[i-1]直接多1
		// 接着讨论如果新加一个字符，组成了一个词的情况
		for (let j = 0; j < dictionary.length; j++) {
			let word = dictionary[j].length;
			if (dictionary[j] == sentence.substring(i - word, i) && word <= i) {
				dp[i] = Math.min(dp[i], dp[i - word]);
			}
		}
	}
	return dp[sentence.length];
};
