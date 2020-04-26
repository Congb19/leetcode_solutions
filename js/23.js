/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
var mergeKLists = function (lists) {
	if (lists.length === 0) return null;
	let res = new ListNode();
	let p = res;
	let n = lists.length;
	//1 数组
	// let arr = [...Array()];
	// for (let i=0; i<lists.length; i++) {
	//     while (lists[i]!==null) {
	//         arr.push(lists[i].val);
	//         lists[i]=lists[i].next;
	//     }
	// }
	// arr.sort((a,b)=>a-b);
	// // console.log(arr);
	// arr.forEach(function (value, index, array) {
	//     p.next=new ListNode(value);
	//     p=p.next;
	// })
	// return res.next;
	//2 直接操作
	let pts = lists.map((el) => el);
	for (let i = 0; i < n; i++) {
		if (pts[i] === null) {
			pts.splice(i, 1);
			i--;
			n--;
		}
	}
	if (n === 0) return null;
	// console.log(pts);
	let min = 999999,
		minid = 0;
	let flag = true;
	while (flag) {
		for (let i = 0; i < n; i++) {
			if (pts[i] && pts[i].val < min) {
				min = pts[i].val;
				minid = i;
			}
		}
		console.log(minid, min);
		p.next = new ListNode(min);
		p = p.next;
		// console.log(res.next);
		pts[minid] = pts[minid].next;
		min = 999999;
		flag = pts.some((el) => el !== null);
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
let p4 = null;
let nums = [p1, p4, p2, p3];
console.log(mergeKLists([p4]));
