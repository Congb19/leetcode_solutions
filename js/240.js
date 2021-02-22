/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  //1 暴力+小优化
  // for (let i=0;i<matrix.length;i++) {
  //     if (matrix[i][0]>target) return false;
  //     for (let j=0;j<matrix[0].length;j++) {
  //         if (target===matrix[i][j]) return true;
  //         if (target<matrix[i][j]) break;
  //     }
  // }
  // return false;
  //2 题解方法四
  let i = matrix.length - 1,
    j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] === target) return true;
    else if (matrix[i][j] > target) i--;
    else if (matrix[i][j] < target) j++;
  }
  return false;
};
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5;
console.log(searchMatrix(matrix, target));
