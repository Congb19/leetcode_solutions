function isValidSudoku(board) {
  // write code here

  // 简单判断，每行每列+9格内是否已有该数字
  let res = true;
  const contain = (i, j) => {
    let t = board[i][j];
    //横竖
    for (let p = 0; p < 9; p++) {
      if (p !== i && board[p][j] == t) return true;
      if (p !== j && board[i][p] == t) return true;
    }
    let r = Math.floor(i / 3);
    let c = Math.floor(j / 3);
    //九宫格
    for (let p = r * 3; p < r * 3 + 3; p++) {
      for (let q = c * 3; q < c * 3 + 3; q++) {
        if ((p !== i || q !== j) && board[p][q] == t) return true;
      }
    }
    return false
  }
  board.forEach((el1, i) => {
    board[i].forEach((el2, j) => {
      console.log(i, j, contain(i, j))
      if (el2 !== "." && contain(i, j)) {
        res = false;
        return res;
      }
    })
  })
  return res;

  // 第一遍看错题，以为是数组是否可解。。就写了个是否可解的回溯

  // let zeros = [];
  // board.forEach((el1, i) => {
  //   board[i].forEach((el2, j) => {
  //     if (el2 == ".") {
  //       zeros.push([i, j]);
  //     }
  //   })
  // })
  // //contain 在i j处是否已存在填t
  // const contain = (i, j, t) => {
  //   for (let p = 0; p < 9; p++)
  //     if (board[i][p] == t || board[p][j] == t) return true;
  //   let r = Math.floor(i / 3);
  //   let c = Math.floor(j / 3);
  //   //012 345 678
  //   for (let p = r * 3; p < r * 3 + 3; p++) {
  //     for (let q = c * 3; q < c * 3 + 3; q++) {
  //       if (board[p][q] == t) return true;
  //     }
  //   }
  // }
  // //go
  // let flag = false;
  // const dd = (i, j, t) => {
  //   for (let p = 1; p <= 9; p++) {
  //     if (!contain(i, j, p.toString())) {
  //       board[i][j] = p.toString();
  //       //zero全被填满
  //       if (t + 1 == zeros.length) {
  //         flag == true;
  //         return true;
  //       }
  //       //zero还没满就继续dd，出问题=回溯
  //       if (!dd(zeros[t + 1][0], zeros[t + 1][1], t + 1)) {
  //         board[i][j] = ".";
  //       }
  //     }
  //   }
  //   if (!flag) {
  //     return false;
  //   }
  //   return true;
  // }
  // dd(zeros[0][0], zeros[0][1], 0);
  // if (flag) return true;
  // return false;
}
let b = [["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

console.log(isValidSudoku(b));