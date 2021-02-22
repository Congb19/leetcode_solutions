/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let res = [...Array()];
  if (n < 2) return res;
  let zz = (a, b) => {
    return b == 0 ? a : zz(b, a % b);
  };
  // console.log(zz(27, 18));
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      //如果ij最大公因数为1
      if (zz(i, j) == 1) {
        res.push(j.toString() + "/" + i.toString());
      }
    }
  }
  return res;
};
console.log(simplifiedFractions(4));
