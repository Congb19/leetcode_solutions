/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  //1 线性查找 左下角开始   暴力太蠢了就不写了
  let r = matrix.length;
  if (r == 0) return false;
  let c = matrix[0].length;
  let i = r - 1,
    j = 0;
  while (i >= 0 && j < c) {
    if (matrix[i][j] == target) return true;
    else if (matrix[i][j] < target) j++;
    else i--;
  }
  return false;
};
console.log(
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    12
  )
);
