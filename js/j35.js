/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
	let p = head;
	let hash = new Map();
	while (p !== null) {
		hash.set(p, new Node(p.val, null, null));
		p = p.next;
	}
	p = head;
	while (p !== null) {
		if (p.next == null) hash.get(p).next = null;
		else hash.get(p).next = hash.get(p.next);
		if (p.random == null) hash.get(p).random = null;
		else hash.get(p).random = hash.get(p.random);
		p = p.next;
	}
	return hash.get(head);
};
