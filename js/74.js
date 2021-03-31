/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let r = matrix.length;
  let c = matrix[0].length;
  let i = r - 1,
    j = 0;
  if (matrix[i][j] == target) return true;
  while (i >= 0 && matrix[i][j] > target) {
    if (matrix[i][j] == target) return true;
    i--;
  }
  if (i < 0) return false;
  if (matrix[i][j] == target) return true;
  // else return true;
  while (j < c && matrix[i][j] < target) {
    if (matrix[i][j] == target) return true;
    j++;
    if (matrix[i][j] == target) return true;
    if (matrix[i][j] > target) return false;
  }
  return false;
};
console.log(searchMatrix([[1], [3]], 1));
