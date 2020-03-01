
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let ori=head;
    let tmp=head.next;
    while (tmp.next!=null) {
        let ttmp=tmp;
        tmp=tmp.next;
        head.next.next=head;
        if (head===ori) head.next=null;
        head=ttmp;
        // console.log(head.val);
    }
    tmp.next=head;
    head=tmp;
    return head;
};

let p0=new ListNode(1);
let p1=new ListNode(2);
let p2=new ListNode(3);
let p3=new ListNode(4);
p0.next=p1;
p1.next=p2;
p2.next=p3;
console.log(reverseList(p0));