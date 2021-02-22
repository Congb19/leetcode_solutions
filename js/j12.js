/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  //经典dfs
  let r = board.length;
  if (r == 0) return false;
  let c = board[0].length;
  let bb = [...Array(r)].map(() => [...Array(c)].fill(true));
  let res = false;
  let dd = (i, j, l) => {
    if (res) return;
    if (board[i][j] == word[l]) {
      // console.log(i, j, l);
      bb[i][j] = false;
      if (l == word.length - 1) {
        res = true;
        return;
      }
      if (i + 1 < r && bb[i + 1][j]) dd(i + 1, j, l + 1);
      if (j + 1 < c && bb[i][j + 1]) dd(i, j + 1, l + 1);
      if (i - 1 >= 0 && bb[i - 1][j]) dd(i - 1, j, l + 1);
      if (j - 1 >= 0 && bb[i][j - 1]) dd(i, j - 1, l + 1);
      bb[i][j] = true;
    } else return;
  };
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (res == false) {
        dd(i, j, 0);
        bb = [...Array(r)].map(() => [...Array(c)].fill(true));
      }
    }
  }
  return res;
};
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCESEEEFS"
  )
);
