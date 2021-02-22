/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let tmp = s.split("");
  let res = [...Array()];
  // console.log(tmp);
  let n = s.length;
  let dd = (i) => {
    if (i == n - 1) {
      res.push(tmp.join(""));
      return;
    }
    let dic = new Set();
    for (let j = i; j < n; j++) {
      if (dic.has(tmp[j])) continue;
      dic.add(tmp[j]);
      let t = tmp[j];
      tmp[j] = tmp[i];
      tmp[i] = t;
      dd(i + 1);
      t = tmp[j];
      tmp[j] = tmp[i];
      tmp[i] = t;
    }
  };
  dd(0);
  return res;
};
console.log(permutation("abc"));
