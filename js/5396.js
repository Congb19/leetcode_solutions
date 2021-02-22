/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let res = 0,
    num = 0;
  let last = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == last) {
      num++;
    } else num = 1;
    res = res > num ? res : num;
    last = s.charAt(i);
  }
  return res;
};
console.log(maxPower("hooraaaaaaaaaaay"));
