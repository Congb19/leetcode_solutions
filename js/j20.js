/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim();
  if (s.charAt(0) == "e" || s.charAt(s.length - 1) == "e") return false;
  let a = s.split("e");
  // console.log(a);
  let isN = (ss) => {
    if (ss.length == 1 && ss >= "0" && ss <= "9") return true;
    else return false;
  };
  let isInt = (ss) => {
    if (ss.length == 0) return false;
    if (ss.length == 1) {
      if (isN(ss.charAt(0))) return true;
      else return false;
    } else {
      if (ss.charAt(0) == "+" || ss.charAt(0) == "-") {
        if (isPureInt(ss.substring(1, ss.length))) return true;
        else return false;
      } else {
        if (isPureInt(ss.substring(0, ss.length))) return true;
        else return false;
      }
    }
  };
  let isPureInt = (ss) => {
    for (let i = 0; i < ss.length; i++) {
      if (!isN(ss.charAt(i))) return false;
    }
    return true;
  };
  let isFloat = (ss) => {
    if (ss.length <= 1) return false;
    else {
      let a = ss.split(".");
      if (a.length == 2) {
        if (a[0].length == 0) {
          if (isPureInt(a[1])) return true;
        }
        if (a[1].length == 0) {
          if (isInt(a[0])) return true;
        }
        if (
          a[0].length > 0 &&
          a[1].length > 0 &&
          (isInt(a[0]) || a[0] == "-" || a[0] == "+") &&
          isPureInt(a[1])
        )
          return true;
        return false;
      } else {
        return false;
      }
    }
  };
  if (a.length == 2) {
    // 有1个e在中间的情况下，左边是（+/-）整数/小数，右边是（+/-）整数
    if ((isInt(a[0]) || isFloat(a[0])) && isInt(a[1])) return true;
    else return false;
  } else if (a.length == 1) {
    // 无e，必须是（+/-）整数/小数
    if (isInt(a[0]) || isFloat(a[0])) return true;
    else return false;
  } else {
    // e多了
    return false;
  }
};
console.log(isNumber(" -."));
