// Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let rev = (node) => {
		if (node === null || node.next === null) return node;
		let p = rev(node.next);
		node.next.next = node;
		node.next = null;
		return p;
	};
	return rev(head);
};
//刷剑指offer的时候重写的  写成循环式的了

var reverseList = function (head) {
	let rev = (node) => {
		if (node === null || node.next === null) return node;
		let f = true;
		let p1 = node.next,
			p2 = p1.next;
		if (p2 == null) {
			p1.next = node;
			node.next = null;
			return p1;
		}
		while (p1 !== null && p2 !== null) {
			p1.next = node;
			node = p1;
			p1 = p2;
			if (p2 !== null) p2 = p2.next;
			if (f) {
				node.next.next = null;
				f = false;
			}
		}
		p1.next = node;
		return p1;
	};
	return rev(head);
};

let p0 = new ListNode(1);
let p1 = new ListNode(2);
let p2 = new ListNode(3);
let p3 = new ListNode(4);
p0.next = p1;
p1.next = p2;
p2.next = p3;
console.log(reverseList(p0));
