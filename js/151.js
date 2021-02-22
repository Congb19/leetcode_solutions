/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ");
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr.splice(i, 1);
      i--;
    }
  }
  // console.log(arr);
  arr.reverse();
  return arr.join(" ");
};
console.log(reverseWords("  hello world!  "));
