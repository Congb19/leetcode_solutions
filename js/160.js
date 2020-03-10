/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA===null||headB===null) return null;
    let sA=headA;
    let sB=headB;
    let eA=1;
    let eB=1;
    while (headA!==headB) {
        if (headA.next===null) {
            headA=sB;
            eA++;
        }
        else headA=headA.next;
        if (headB.next===null) {
            headB=sA;
            eB++;
        }
        else headB=headB.next;
        if (eA>2) return null;
    }
    return headA;
};
