/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //1 ��
  // s.reverse();
  //2 ����
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let tmp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = tmp;
  }
  // console.log(s);
};

let s = ["n", "i", "h", "a", "o"];
console.log(reverseString(s));
