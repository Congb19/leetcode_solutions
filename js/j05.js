/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  //1 库函数
  // return s.split(" ").join("%20");
  //2 硬写
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == " ") res += "%20";
    else res += s.charAt(i);
  }
  return res;
};
console.log(replaceSpace("we are happy"));
