/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let res = true;
  // let num=new Array();
  let count = new Array();
  for (let i = 0; i < 10; i++) {
    count[i] = 0;
  }
  // for (let i=0;i<9;i++) {
  //     num[i]=new Array();
  //     for (let j=0;j<9;j++) {
  //         // console.log(board[i][j]);
  //         if (board[i][j]!==".") {
  //             num[i][j]=parseFloat(board[i][j]);
  //         }
  //         else{
  //             num[i][j]=0;
  //         }
  //     }
  // }

  // hang
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      count[parseInt(board[i][j])]++;
    }

    for (let j = 0; j < 10; j++) {
      if (count[j] > 1) return false;
    }
    for (let i = 0; i < 10; i++) {
      count[i] = 0;
    }
  }
  // lie
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      count[parseInt(board[j][i])]++;
    }

    for (let j = 0; j < 10; j++) {
      if (count[j] > 1) return false;
    }
    for (let i = 0; i < 10; i++) {
      count[i] = 0;
    }
  }
  // gezi
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      for (let p = i; p < i + 3; p++) {
        for (let q = j; q < j + 3; q++) {
          count[parseInt(board[p][q])]++;
        }
      }
      for (let t = 0; t < 10; t++) {
        if (count[t] > 1) return false;
      }
      for (let t = 0; t < 10; t++) {
        count[t] = 0;
      }
    }
  }
  // console.log(num)

  return res;
};
let nums = [2, 3, 4, 5, 6, 7, 8, 9, 1],
  target = 9;
let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
