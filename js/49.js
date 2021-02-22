/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let strsort = (x) => {
    let res = [...Array()];
    for (let i = 0; i < x.length; i++) {
      res.push(x.charAt(i));
    }
    res.sort();
    let st = "";
    for (let i = 0; i < x.length; i++) {
      st += res[i];
    }
    return st;
  };
  let arrs = strs.map((x) => strsort(x));
  // console.log(arrs);
  let res = [...Array()];
  let tmp = [...Array()];
  for (let i = 0; i < arrs.length; i++) {
    tmp.push(strs[i]);
    for (let j = i + 1; j < arrs.length; j++) {
      if (arrs[j] === arrs[i]) {
        tmp.push(strs[j]);
        arrs.splice(j, 1);
        strs.splice(j, 1);
        j--;
      }
    }
    arrs.splice(i, 1);
    strs.splice(i, 1);
    i--;
    res.push(tmp);
    tmp = [...Array()];
  }
  return res;
};
let strs = ["ate", "eat", "sss"];
console.log(groupAnagrams(strs));
