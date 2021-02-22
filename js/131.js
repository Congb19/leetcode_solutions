/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let n = s.length;
  let dp = [...Array(n)].map(() => [...Array(n)].map(() => false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if ((i - j <= 1 || dp[i - 1][j + 1]) && s[i] === s[j]) dp[i][j] = true;
    }
  }
  console.log(dp);

  let res = [...Array()];
  let tmp = [...Array()];

  let dfs = (i, n) => {
    if (i >= n) {
      // console.log("Chong", tmp)
      res.push([...tmp]);
    }
    for (let j = i; j < n; j++) {
      // console.log(i,j , dp[j][i])
      if (dp[j][i]) {
        tmp.push(s.substr(i, j - i + 1));
        dfs(j + 1, n);
        tmp.pop();
        // while (tmp.length) tmp.pop();
      }
    }
  };
  dfs(0, n);

  return res;
};

let s = "abbab";
console.log(partition(s));
// class Solution {
//     public List<List<String>> partition(String s) {
//         List<List<String>> res = new ArrayList<>();
//         int n = s.length();
//         boolean[][] dp = new boolean[n][n];
//         for (int i = 0; i < n; i++) {
//             for (int j = 0; j <= i; j++) {
//                 if (s.charAt(i) == s.charAt(j) && (i - j < 2 || dp[j + 1][i - 1])) dp[j][i] = true;
//             }
//         }
//         System.out.println(Arrays.deepToString(dp));
//         dfs(res, dp, 0, n, s, new ArrayList<String>());
//         return res;
//
//     }
//
//     private void dfs(List<List<String>> res, boolean[][] dp, int i, int n, String s, ArrayList<String> tmp) {
//         if (i == n) res.add(new ArrayList<>(tmp));
//         for (int j = i; j < n; j++) {
//             if (dp[i][j]) {
//                 tmp.add(s.substring(i, j + 1));
//                 dfs(res, dp, j + 1, n, s, tmp);
//                 tmp.remove(tmp.size() - 1);
//             }
//         }
//     }
// }
