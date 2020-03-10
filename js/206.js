
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
    let rev = (node) => {
        if (node===null||node.next===null) return node;
        let p = new ListNode(node.next.val);
        p.next=node.next;
        node.next.next=node;
        node.next=null;
        return p;
    }
    return rev(head);
};

let p0=new ListNode(1);
let p1=new ListNode(2);
let p2=new ListNode(3);
let p3=new ListNode(4);
p0.next=p1;
p1.next=p2;
p2.next=p3;
console.log(reverseList(p0));