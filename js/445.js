function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  //思路1 数字
  // let n1 = 0,
  // 	n2 = 0;
  // while (l1 !== null) {
  // 	n1 *= 10;
  // 	n1 += l1.val;
  // 	l1 = l1.next;
  // }
  // while (l2 !== null) {
  // 	n2 *= 10;
  // 	n2 += l2.val;
  // 	l2 = l2.next;
  // }
  // let n3 = n1 + n2;
  // let arr = [...Array()];
  // let res = new ListNode(0);
  // let p = res;
  // while (n3 > 0) {
  // 	arr.push(n3 % 10);
  // 	n3 = Math.floor(n3 / 10);
  // }
  // if (arr.length === 0) return new ListNode(0);
  // arr.reverse();
  // arr.forEach((element) => {
  // 	p.next = new ListNode(element);
  // 	p = p.next;
  // });
  // return res.next;
  //思路2 数组
  let arr1 = [...Array()],
    arr2 = [...Array()];
  while (l1 !== null) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  arr1.reverse();
  arr2.reverse();
  // console.log(arr1, arr2);
  let arr3 = [...Array(Math.max(arr1.length, arr2.length) + 1)].map((x) => 0);
  let jw = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (i < arr1.length && i < arr2.length) {
      if (arr1[i] + arr2[i] + jw > 9) {
        // console.log("jw", arr3[i]);
        arr3[i] = arr1[i] + arr2[i] + jw - 10;
        jw = 1;
      } else {
        // console.log("no jw", arr3[i]);
        arr3[i] = arr1[i] + arr2[i] + jw;
        jw = 0;
      }
    } else if (i < arr1.length) {
      if (arr1[i] + jw > 9) {
        arr3[i] = arr1[i] + jw - 10;
        jw = 1;
      } else {
        arr3[i] = arr1[i] + jw;
        jw = 0;
      }
    } else if (i < arr2.length) {
      if (arr2[i] + jw > 9) {
        arr3[i] = arr2[i] + jw - 10;
        jw = 1;
      } else {
        arr3[i] = arr2[i] + jw;
        jw = 0;
      }
    } else {
      if (jw === 1) arr3[i] = 1;
    }
  }
  arr3.reverse();
  if (arr3[0] === 0) arr3.splice(0, 1);
  // console.log(arr3);
  let res = new ListNode(0);
  let p = res;
  arr3.forEach((element) => {
    p.next = new ListNode(element);
    p = p.next;
  });
  return res.next;
};
let p1 = new ListNode(7);
p1.next = new ListNode(2);
p1.next.next = new ListNode(4);
let p2 = new ListNode(6);
p2.next = new ListNode(7);
console.log(addTwoNumbers(p1, p2));
