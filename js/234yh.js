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
var isPalindrome = function (head) {
  //1 暴力 过
  // let a = [...Array()];
  // let p = head;
  // while (p != null) {
  // 	a.push(p.val);
  // 	p = p.next;
  // }
  // for (let i = 0; i < a.length / 2; i++) {
  // 	if (a[i] !== a[a.length - i - 1]) return false;
  // }
  // return true;

  //2 时间O(n)空间O(1)
  // 将链表的后半部分反转（修改链表结构），然后将前半部分和后半部分进行比较
  let [p1, p2] = [head, head];
  //eg  1 2 3 2 1 null

  // 弹幕大神有思路吗 emm

  // while (p2 !== null&&p2.next!==null) {
  //     p1=
  // }

  return true;
};
