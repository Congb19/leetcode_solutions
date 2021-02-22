/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let p1 = head,
    p2 = head;
  p1 = p1.next;
  p2 = p2.next.next;
  if (p1 === p2) return true;
  while (p1 !== p2) {
    if (p1 === null || p2 === null) return false;
    p1 = p1.next;
    p2 = p2.next;
    if (p2 === null) return false;
    p2 = p2.next;
  }
  return true;
};
