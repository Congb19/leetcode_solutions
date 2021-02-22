/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0;
  while (n >= 5) {
    res += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return res;
};
let m = 7,
  n = 80;
let s = "ABC";
console.log(trailingZeroes(n));
