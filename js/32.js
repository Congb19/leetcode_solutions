/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	let res = 0,
		tmp = 0,
		val = 0;
	let n = s.length;
	for (let i = 0; i < n; i++) {
		if (res > n - i) break;
		if (s.charAt(i) == "(") {
			// console.log(i, "start, now res=", res);
			for (let j = i; j < n; j++) {
				if (s.charAt(j) == "(") val++;
				else val--;
				// console.log("j=", j, "val=", val);
				//如果保持大于0就一直下一步，等于0则记录
				//如果小于0则记录答案，重置
				if (val >= 0) {
					tmp++;
					if (val == 0) {
						res = tmp > res ? tmp : res;
					}
				} else {
					res = tmp > res ? tmp : res;
					break;
				}
			}
			tmp = 0;
			val = 0;
		}
	}
	return res;
};
console.log(longestValidParentheses(")(((((()())()()))()(()))("));
