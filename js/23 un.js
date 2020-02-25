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
    let min=lists[0].val, minid=0;
    //找到总长度
    let sum=0;
    let test=lists;

    console.log(lists);
    console.log(test);
    for (let i=0;i<test.length;i++) {
        while (test[i]!=null) {
            sum++;
            test[i]=test[i].next;
        }
    }
    console.log(sum);
    //go
    for (let k=0;k<sum;k++) {
        for (let i=0;i<lists.length;i++) {
            if (lists[i]!==null) {
                if (min>=lists[i].val) {
                    min=lists[i].val;
                    minid=i;
                }
            }
            p.next=new ListNode(lists[minid]);
            p=p.next;
            console.log("p =", p.val)
            lists[minid]=lists[minid].next;
        }
    }


    return p;
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