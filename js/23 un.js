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
var mergeKLists = function(lists) {
    let res=new ListNode();
    let p=res;
    let arr = [...Array()];
    for (let i=0; i<lists.length; i++) {
        while (lists[i]!==null) {
            arr.push(lists[i].val);
            lists[i]=lists[i].next;
        }
    }
    arr.sort((a,b)=>a-b);
    // console.log(arr);
    arr.forEach(function (value, index, array) {
        p.next=new ListNode(value);
        p=p.next;
    })
    return res.next;
};
let p1=new ListNode(1);
p1.next=new ListNode(4);
p1.next.next=new ListNode(5);
let p2=new ListNode(1);
p2.next=new ListNode(3);
p2.next.next=new ListNode(4);
let p3=new ListNode(2);
p3.next=new ListNode(6);
let nums=[p1,p2,p3];
console.log(mergeKLists(nums));