/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let arr = [...Array(26)].map(() => 0);
  // console.log(arr);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  let res = "";
  while (res.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (arr[i] > 0) {
        arr[i]--;
        res += String.fromCharCode("a".charCodeAt() + i);
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (arr[i] > 0) {
        arr[i]--;
        res += String.fromCharCode("a".charCodeAt() + i);
      }
    }
  }
  return res;
};

let s = "aabbcc";
console.log(sortString(s));
