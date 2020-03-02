/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let r=board.length;
    let c=board[0].length;
    let tmp = new Array(r);
    for (let i=0;i<r;i++) {
        tmp[i]=new Array(c);
        tmp[i].fill(0);
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            // console.log(i, j);
            let lives=0;
            if (j-1>=0) {
                lives+=board[i][j-1];
            }
            if (j+1<=c-1) {
                lives+=board[i][j+1];
            }
            if (i-1>=0) {
                lives+=board[i-1][j];
                if (j-1>=0) {
                    lives+=board[i-1][j-1];
                }
                if (j+1<=c-1) {
                    lives+=board[i-1][j+1];
                }
            }
            if (i+1<=r-1) {
                lives+=board[i+1][j];
                if (j-1>=0) {
                    lives+=board[i+1][j-1];
                }
                if (j+1<=c-1) {
                    lives+=board[i+1][j+1];
                }
            }
            if (board[i][j]===1) {
                if (lives<2||lives>3) tmp[i][j]=0;
                else tmp[i][j]=1;
            }
            else {
                if (lives===3) tmp[i][j]=1;
                else tmp[i][j]=0;
            }
            // console.log("lives: ", lives);
        }
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            board[i][j]=tmp[i][j];
        }
    }
    // console.log(board);
};
let nums = [1,2,3,1], k=2;
let board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
];
console.log(gameOfLife(board));