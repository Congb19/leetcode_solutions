/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  let res = 0;
  if (n === 0) return 0;
  else if (n <= 3) return 1;
  res = Math.floor(Math.sqrt(n));
  return res;
};

let a = 3;
console.log(bulbSwitch(a));
// console.log("test ", -2147483648<=1);
