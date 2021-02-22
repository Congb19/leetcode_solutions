/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0,
    r = 0;
  let res = "";
  if (t.length === 0 || s.length === 0) {
    return res;
  }
  let note = false;
  let min = s.length;
  let len = t.length;
  let test = new Array(s.length);
  for (let i = 0; i < s.length; ++i) {
    test[i] = 0;
  }
  while (r < s.length) {
    // console.log(l ,r);
    let flag = false;
    for (let i = 0; i < t.length; ++i) {
      for (let j = l; j <= r; j++) {
        if (!flag && s[j] === t[i] && test[j] === 0) {
          flag = true;
          test[j] = 1;
          break;
        }
      }
      if (!flag) {
        // console.log("not got!")
        break;
      }
      if (i !== t.length - 1) {
        flag = false;
      }
    }
    for (let i = 0; i < s.length; ++i) {
      test[i] = 0;
    }
    if (flag) {
      len = r - l + 1;
      if (min >= len) {
        min = len;
        res = s.substr(l, len);
        // console.log(l, len, "out1, res=", res)
      }
      // console.log("got");
      flag = false;
      //�����
      while (l <= r - t.length + 1) {
        // console.log("l, r = ", l ,r);
        for (let i = 0; i < t.length; ++i) {
          for (let j = l; j <= r; j++) {
            if (!flag && s[j] === t[i] && test[j] === 0) {
              // console.log("got");
              flag = true;
              test[j] = 1;
            }
          }
          // console.log(flag);
          if (!flag) {
            // console.log("not got!")
            break;
          }
          if (i !== t.length - 1) {
            flag = false;
          }
        }
        for (let i = 0; i < s.length; ++i) {
          test[i] = 0;
        }
        // console.log(flag)
        if (flag) {
          len = r - l + 1;
          if (min >= len) {
            min = len;
            res = s.substr(l, len);
            // console.log(l, len, "out2, res=", res)
          }
          flag = false;
        } else {
          --l;
          break;
        }
        ++l;
      }
    }
    // l=0;
    ++r;
  }
  return res;
};
let m = 7,
  n = 3;
let S = "bbaa",
  T = "aba";
console.log(minWindow(S, T));
