// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null) return head;
  if (head.next === null) return head;
  let arr = [...Array()];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => a - b);
  let res = new ListNode();
  let p = res;
  arr.forEach(function (value, index, array) {
    p.next = new ListNode(value);
    p = p.next;
  });
  return res.next;
};
let p1 = new ListNode(6);
p1.next = new ListNode(4);
p1.next.next = new ListNode(5);
let p2 = new ListNode(1);
p2.next = new ListNode(3);
p2.next.next = new ListNode(4);
console.log(sortList(p1));
