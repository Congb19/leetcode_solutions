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
var getKthFromEnd = function (head, k) {
  //2 快慢指针
  let t = k;
  let p = head;
  while (t) {
    t--;
    p = p.next;
  }
  while (p !== null) {
    p = p.next;
    head = head.next;
  }
  return head;
};
