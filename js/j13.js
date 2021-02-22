/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = 0;
  let map = [...Array(m)].map((x) => [...Array(n)].map((x) => k + 1));
  map[0][0] = 0;
  for (let i = 0; i < m; i++) {
    let t = 0;
    if (i % 10 <= 9 && i % 10 >= 1) {
      t = map[i - 1][0] + 1;
    } else if (i > 0) {
      t = map[i - 1][0] - 8;
    }
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        map[i][j] = t;
        // if (t > k) break;
      } else {
        if (j % 10 <= 9 && j % 10 >= 1) {
          map[i][j] = map[i][j - 1] + 1;
        } else {
          map[i][j] = map[i][j - 1] - 8;
        }
      }
    }
  }
  let dd = (i, j) => {
    if (i < m && j < n && i >= 0 && j >= 0 && map[i][j] <= k) {
      res++;
      map[i][j] = k + 1;
      dd(i + 1, j);
      dd(i - 1, j);
      dd(i, j + 1);
      dd(i, j - 1);
    } else return;
  };
  dd(0, 0);
  return res;
};
console.log(movingCount(2, 3, 1));
