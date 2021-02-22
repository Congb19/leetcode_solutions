/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let res = 0;
  let n = s.length;
  let p = 1;
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[n - 1 - i] = s[i];
  }
  // console.log(arr);
  for (let i = 0; i < n; i++) {
    res += (arr[i].charCodeAt() - "A".charCodeAt() + 1) * p;
    p *= 26;
  }
  return res;
};
let m = 7,
  n = 3;
let s = "ABC";
console.log(titleToNumber(s));
