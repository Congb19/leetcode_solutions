/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true;
  let res = true;
  let gg = new Array();
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      !(
        (s[i] >= "a" && s[i] <= "z") ||
        (s[i] >= "A" && s[i] <= "Z") ||
        (s[i] >= "0" && s[i] <= "9")
      )
    ) {
      continue;
    } else if (s[i] >= "a" && s[i] <= "z") {
      gg[j] = s[i].toUpperCase();
      j++;
    } else if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "0" && s[i] <= "9")) {
      gg[j] = s[i];
      j++;
    }
  }
  // console.log(gg);
  for (let i = 0; i < gg.length / 2; i++) {
    if (gg[i] !== gg[gg.length - i - 1]) return false;
  }
  return res;
};

let num = 5;
let s = "0P";
console.log(isPalindrome(s));
