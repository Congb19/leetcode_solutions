/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (head === null || head.next === null) return head;
  let p1 = head;
  let p2 = head.next;
  while (p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  if (p2 !== null) p1 = p1.next;
  return p1;
};
