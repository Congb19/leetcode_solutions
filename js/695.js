/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let res = 0;
  let tmp = 0;
  let r = grid.length;
  if (r === 0) return 0;
  let c = grid[0].length;
  let dd = (i, j) => {
    tmp++;
    grid[i][j] = 0;
    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
      dd(i - 1, j);
    }
    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
      dd(i, j - 1);
    }
    if (i + 1 < r && grid[i + 1][j] === 1) {
      dd(i + 1, j);
    }
    if (j + 1 < c && grid[i][j + 1] === 1) {
      dd(i, j + 1);
    }
  };
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) {
        dd(i, j);
        if (tmp > res) res = tmp;
        tmp = 0;
      }
    }
  }
  return res;
};
console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
