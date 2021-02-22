/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let sum = 0;
  while (a !== 0) {
    if (a > 0) {
      a--;
      sum++;
    } else {
      a++;
      sum--;
    }
  }
  while (b !== 0) {
    if (b > 0) {
      b--;
      sum++;
    } else {
      b++;
      sum--;
    }
  }
  return sum;
};
let nums = [1, 2, 3, 1],
  k = 2;
console.log(getSum(2, 3));
