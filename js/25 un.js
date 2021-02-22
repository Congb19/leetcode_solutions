/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseKGroup = function (head, k) {
  if (k < 2) return head;
  let p2 = head,
    k2 = k;
  while (k2) {
    p2 = p2.next;
    k2--;
  }
  // console.log(p2.val);
  let res = head;
  let j = head,
    q = head.next,
    r = q;
  while (q !== p2) {
    r = q.next;
    q.next = j;
    j = q;
    q = r;
  }
  head.next = p2;
  head = j;
  return head;
};
let p1 = new ListNode(1);
p1.next = new ListNode(2);
p1.next.next = new ListNode(3);
p1.next.next.next = new ListNode(4);
console.log(reverseKGroup(p1, 3));
