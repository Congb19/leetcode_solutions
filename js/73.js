/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (matrix.length===0) return ;
    let min=matrix[0][0];
    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length;j++) {
            if (min>matrix[i][j]) {
                min=matrix[i][j];
            }
        }
    }
    min--;
    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length;j++) {
            if (matrix[i][j]===0) {
                for (let p=0; p<matrix.length;p++){
                    if (matrix[p][j]!==0) {
                        matrix[p][j]=min;
                    }
                }
                for (let p=0; p<matrix[0].length;p++){
                    if (matrix[i][p]!==0) {
                        matrix[i][p]=min;
                    }
                }
            }
        }
    }
    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length;j++) {
            if (matrix[i][j]===min) {
                matrix[i][j]=0;
            }
        }
    }
    // console.log(matrix);
};
let matrix =
    [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));