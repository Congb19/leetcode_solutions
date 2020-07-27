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
var mergeTwoLists = function (l1, l2) {
	let p1 = l1,
		p2 = l2;
	let res = new ListNode(1);
	let p = res;
	while (p1 !== null || p2 !== null) {
		if (p1 == null) {
			p.next = new ListNode(p2.val);
			p2 = p2.next;
		} else if (p2 == null) {
			p.next = new ListNode(p1.val);
			p1 = p1.next;
		} else {
			if (p1.val < p2.val) {
				p.next = new ListNode(p1.val);
				p1 = p1.next;
			} else {
				p.next = new ListNode(p2.val);
				p2 = p2.next;
			}
		}
		p = p.next;
	}
	return res.next;
};
