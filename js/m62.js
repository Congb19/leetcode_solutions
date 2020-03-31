/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
	if (n === 0) return 0;
	//循环链表模拟，超时了
	// function a(val) {
	// 	this.val = val;
	// 	this.next = null;
	// }
	// let head = new a(0);
	// let p = head;
	// for (let i = 0; i < n; i++) {
	// 	p.next = new a(i);
	// 	p = p.next;
	// }
	// p.next = head.next;
	// // p = head.next;
	// let count = 1;
	// while (p.next !== p) {
	// 	if (count === m) {
	// 		// console.log("delete", p.next.val);
	// 		count = 0;
	// 		p.next = p.next.next;
	// 	} else {
	// 		p = p.next;
	// 	}
	// 	count++;
	// }
	// return p.val;
	//思路2 递归
	// let dd = (n, m) => {
	// 	if (n === 1) return 0;
	// 	let x = dd(n - 1, m);
	// 	return (m + x) % n;
	// };
	// return dd(n, m);
	//思路3 迭代（官方题解）
	let f = 0;
	for (let i = 2; i != n + 1; ++i) {
		f = (m + f) % i;
	}
	return f;
};
console.log(lastRemaining(10, 17));
