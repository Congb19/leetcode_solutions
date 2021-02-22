/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  //官方题解
  let dep = 0;
  return seq.split("").map((value, index) => {
    if (value === "(") {
      ++dep;
      return dep % 2;
    } else {
      let ans = dep % 2;
      --dep;
      return ans;
    }
  });
};
console.log(maxDepthAfterSplit("(()()))"));
