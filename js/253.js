/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n == 2 || n == 3 || n == 5) return true;
  while (n > 1) {
    if (n % 2 == 0) {
      n /= 2;
      continue;
    }
    else if (n % 3 == 0) {
      n /= 3;
      continue;
    }
    else if (n % 5 == 0) {
      n /= 5;
      continue;
    }
    else return false;
  }
  if (n == 1) return true;
  return false;
};
console.log(isUgly(14));