/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}
var mergeTwoLists = function (l1, l2) {
	let res = new ListNode();
	let p = res;
	//1. 存取
	// let arr = [...Array()];
	// while (l1 !== null) {
	// 	arr.push(l1.val);
	// 	l1 = l1.next;
	// }
	// while (l2 !== null) {
	// 	arr.push(l2.val);
	// 	l2 = l2.next;
	// }
	// arr.sort((a, b) => a - b);
	// // console.log(arr);
	// arr.forEach(function (value, index, array) {
	// 	p.next = new ListNode(value);
	// 	p = p.next;
	// });
	// 2.直接操作
	while (l1 !== null && l2 !== null) {
		if (l1.val < l2.val) {
			p.next = new ListNode(l1.val);
			l1 = l1.next;
			p = p.next;
		} else {
			p.next = new ListNode(l2.val);
			l2 = l2.next;
			p = p.next;
		}
	}
	while (l1 !== null) {
		p.next = new ListNode(l1.val);
		l1 = l1.next;
		p = p.next;
	}
	while (l2 !== null) {
		p.next = new ListNode(l2.val);
		l2 = l2.next;
		p = p.next;
	}
	return res.next;
};
let p1 = new ListNode(1);
p1.next = new ListNode(4);
p1.next.next = new ListNode(5);
let p2 = new ListNode(1);
p2.next = new ListNode(3);
p2.next.next = new ListNode(4);
let p3 = new ListNode(2);
p3.next = new ListNode(6);
console.log(mergeTwoLists(p1, p2));
