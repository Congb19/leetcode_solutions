/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
	let res = [...Array()];
	if (head == null) return res;
	//1 递归
	// let dd = (p) => {
	// 	if (p.next !== null) dd(p.next);
	// 	res.push(p.val);
	// };
	// dd(head);
	// return res;
	//2 直接输出来翻转
	let p = head;
	while (p) {
		res.push(p.val);
		p = p.next;
	}
	res.reverse();
	return res;
};
