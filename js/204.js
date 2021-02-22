/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let dp = [0, 0, 1, 2];
  if (n === 0) return 0;
  else if (n <= 3) return dp[n - 1];
  //˼·1 ����
  // let iszs = (n) => {
  //     let flag=true;
  //     for (let i=2;i<=Math.sqrt(n);i++) {
  //         if (n%i===0) {
  //             return false;
  //         }
  //     }
  //     return flag;
  // }
  // for (let i=4;i<n;i++) {
  //     dp[i]=dp[i-1]+(iszs(i)?1:0);
  // }
  // console.log(dp);
  // return dp[n-1];
  //˼·2 �ų���
  let iszs = new Array(n);
  let res = 0;
  iszs.fill(true, 0, n);
  // console.log(iszs);
  for (let i = 2; i < n; i++) {
    if (iszs[i]) {
      for (let j = i * 2; j < n; j += i) {
        iszs[j] = false;
      }
    }
  }
  // console.log(iszs);
  for (let i = 2; i < n; i++) {
    if (iszs[i]) res++;
  }
  return res;
};

// class Solution:
// def isHappy(self, n: int) -> bool:
//     seen = {1}
// while n not in seen:
// seen.add(n)
// n = sum(int(i) ** 2 for i in str(n))
// return n == 1

let nums = [2, 7, 9, 3, 1],
  k = 19;
let s = "ABC";
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
];
console.log(countPrimes(k));
