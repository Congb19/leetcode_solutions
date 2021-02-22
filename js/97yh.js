/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let n1 = s1.length,
    n2 = s2.length,
    n3 = s3.length;
  if (n1 + n2 !== n3) return false;
  // 1 dfs 差点超时   增加了dic记忆以后时间正常
  let res = false;
  let dic = [...Array(n1 + 1)].map(() => [...Array(n2 + 1)].fill(0));
  //0=none 1=false 2=true
  let dd = (p1, p2, p3) => {
    if (p3 == n3) {
      res = true;
    }
    // console.log(p1, p2, p3, res);
    if (p1 <= n1 && p2 <= n2 && !res) {
      // console.log("in0");
      if (p1 < n1 && s3.charAt(p3) == s1.charAt(p1) && dic[p1 + 1][p2] !== 2) {
        // console.log("in1");
        dic[p1 + 1][p2] = 2;
        dd(p1 + 1, p2, p3 + 1);
      }
      if (p2 < n2 && s3.charAt(p3) == s2.charAt(p2) && dic[p1][p2 + 1] !== 2) {
        // console.log("in2");
        dic[p1][p2 + 1] = 2;
        dd(p1, p2 + 1, p3 + 1);
      }
    }
  };
  dd(0, 0, 0);
  return res;
};
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
