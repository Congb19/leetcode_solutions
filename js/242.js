/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  //˼·1 ����
  // let a=new Array();
  // let b=new Array();
  // for (let i=0;i<s.length;i++) {
  //     a.push(s[i]);
  // }
  // for (let i=0;i<t.length;i++) {
  //     b.push(t[i]);
  // }
  // a.sort();
  // b.sort();
  // for (let i=0;i<s.length;i++) {
  //     if (a[i]!==b[i]) return false;
  // }
  // // console.log(a, b);
  // return true;
  // ˼·2 ��ϣ��
  let a = new Array(26);
  let b = new Array(26);
  a.fill(0);
  b.fill(0);
  for (let i = 0; i < s.length; i++) {
    a[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < t.length; i++) {
    b[t[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

let nums = [7, 1, 5, 3, 6, 4],
  k = 2;
let s = "nihao",
  t = "haoni";
console.log(isAnagram(s, t));
