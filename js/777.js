/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  let l1 = new Array(),
    l2 = new Array();
  let r1 = new Array(),
    r2 = new Array();
  let l1index = 0,
    r1index = 0,
    l2index = 0,
    r2index = 0;
  for (let i = 0; i < start.length; i++) {
    if (start[i] === "R") {
      r1[r1index] = i;
      r1index++;
    }
    if (start[i] === "L") {
      l1[l1index] = i;
      l1index++;
    }
    if (end[i] === "R") {
      r2[r2index] = i;
      r2index++;
    }
    if (end[i] === "L") {
      l2[l2index] = i;
      l2index++;
    }
  }
  // console.log(l1);
  // console.log(r1);
  // console.log(l2);
  // console.log(r2);
  if (l1.length != l2.length || r1.length != r2.length) {
    // console.log("boom1");
    return false;
  } else {
    for (let j = 0; j < l1.length; j++) {
      if (l2[j] > l1[j]) {
        // console.log("boom2");
        return false;
      }
    }
    for (let j = 0; j < r1.length; j++) {
      if (r2[j] < r1[j]) {
        // console.log("boom3");
        return false;
      }
    }
    for (let j = 0; j < l1.length; j++) {
      let r1s = 0,
        r2s = 0;
      for (let k = 0; k < r1.length; k++) {
        if (r1[k] < l1[j]) r1s++;
        if (r2[k] < l2[j]) r2s++;
      }
      if (r1s != r2s) return false;
    }
  }
  return true;
};
let a = 3;
let start = "LR",
  end = "RL";
console.log(canTransform(start, end));
// console.log("test ", -2147483648<=1);
