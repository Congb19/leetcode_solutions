/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let r = board.length;
  if (r === 0) return;
  let c = board[0].length;
  let dfs1 = (i, j) => {
    board[i][j] = "W";
    if (j + 1 < c && board[i][j + 1] === "O") dfs1(i, j + 1);
    if (i + 1 < r && board[i + 1][j] === "O") dfs1(i + 1, j);
    if (j - 1 >= 0 && board[i][j - 1] === "O") dfs1(i, j - 1);
    if (i - 1 >= 0 && board[i - 1][j] === "O") dfs1(i - 1, j);
  };
  let dfs2 = (i, j) => {
    board[i][j] = "O";
    if (j + 1 < c && board[i][j + 1] === "W") dfs2(i, j + 1);
    if (i + 1 < r && board[i + 1][j] === "W") dfs2(i + 1, j);
    if (j - 1 >= 0 && board[i][j - 1] === "W") dfs2(i, j - 1);
    if (i - 1 >= 0 && board[i - 1][j] === "W") dfs2(i - 1, j);
  };
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === "O") dfs1(i, j);
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (!(i > 0 && i < r - 1 && j > 0 && j < c - 1) && board[i][j] === "W")
        dfs2(i, j);
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === "W") board[i][j] = "X";
    }
  }
};

let s = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
s = [
  ["O", "O"],
  ["O", "O"],
];
console.log(solve(s));
