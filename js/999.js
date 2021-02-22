/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let r = board.length;
  if (r == 0) return 0;
  let c = board[0].length;
  let x = 0,
    y = 0,
    res = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] == "R") {
        x = i;
        y = j;
      }
    }
  }
  // console.log(r, c, x, y);
  let posx = x,
    posy = y;
  while (posx >= 0) {
    // console.log(1);
    if (board[posx][posy] == "p") {
      res++;
      break;
    } else if (board[posx][posy] == "B") {
      break;
    } else {
      posx--;
    }
  }
  posx = x;
  posy = y;
  while (posy >= 0) {
    // console.log(2);
    if (board[posx][posy] == "p") {
      res++;
      break;
    } else if (board[posx][posy] == "B") {
      break;
    } else {
      posy--;
    }
  }
  posx = x;
  posy = y;
  while (posx < r) {
    // console.log(3);
    if (board[posx][posy] == "p") {
      res++;
      break;
    } else if (board[posx][posy] == "B") {
      break;
    } else {
      posx++;
    }
  }
  posx = x;
  posy = y;
  while (posy < c) {
    // console.log(4);
    if (board[posx][posy] == "p") {
      res++;
      break;
    } else if (board[posx][posy] == "B") {
      break;
    } else {
      posy++;
    }
  }
  return res;
};
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
