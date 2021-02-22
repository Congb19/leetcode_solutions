/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  let map = new Array();
  for (let i = 0; i < m; i++) {
    map[i] = new Array();
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        map[i][j] = 1;
      } else {
        map[i][j] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      map[i][j] = map[i][j - 1] + map[i - 1][j];
    }
  }
  // console.log(map);
  return map[m - 1][n - 1];
};
let m = 7,
  n = 3;
console.log(uniquePaths(m, n));
