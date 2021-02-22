/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n = s.length;
  let dp = [...Array(n + 1)].map(() => false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      let l = wordDict[j].length;
      let k = i - l;
      if (k >= 0) {
        if (dp[k] && s.substr(k, l) === wordDict[j]) dp[i] = true;
      }
    }
  }
  // console.log(dp);
  return dp[n];
};

let s = "applepenapple",
  wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict));
