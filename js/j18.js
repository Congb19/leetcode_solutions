/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
	let res = head;
	if (head == null || head.next == null) return null;
	if (head.val == val) return head.next;
	while (head !== null && head.next !== null) {
		if (head.next.val == val) {
			head.next = head.next.next;
		}
		head = head.next;
	}
	return res;
};
