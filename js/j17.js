/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let res = [...Array()];
  let i = 1;
  while (i < Math.pow(10, n)) {
    res.push(i);
    i++;
  }
  return res;
};
