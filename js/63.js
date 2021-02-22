/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let r = obstacleGrid.length;
  if (r == 0) return 0;
  let c = obstacleGrid[0].length;
  if (c == 0) return 0;
  let a = [...Array(r)].map(() => [...Array(c)]);
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i == 0) {
        if (obstacleGrid[i][j] == 1) a[i][j] = 0;
        else a[i][j] = j > 0 ? a[i][j - 1] : 1;
      } else if (j == 0) {
        if (obstacleGrid[i][j] == 1) a[i][j] = 0;
        else a[i][j] = i > 0 ? a[i - 1][j] : 1;
      } else {
        if (obstacleGrid[i][j] == 1) a[i][j] = 0;
        else a[i][j] = a[i - 1][j] + a[i][j - 1];
      }
    }
  }
  // console.log(r, c, a);
  return a[r - 1][c - 1];
};
console.log(uniquePathsWithObstacles([[1, 0]]));
