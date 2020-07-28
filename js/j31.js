/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	let n1 = pushed.length;
	let n2 = popped.length;
	if (n1 !== n2) return false;
	let t = [...Array()];
	let c = 0;
	for (let i = 0; i < n1; i++) {
		// console.log("pushed", pushed[i]);
		t.push(pushed[i]);
		// console.log(t, t[t.length - 1]);
		while (t[t.length - 1] == popped[c] && c < n2) {
			// console.log("poped", t[t.length - 1]);
			t.pop();
			c++;
			// console.log(c);
		}
	}
	if (c == n2) return true;
	return false;
};
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
