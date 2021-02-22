/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let r = matrix.length;
  if (r == 1) return true;
  let c = matrix[0].length;
  for (let i = 1; i < r; i++) {
    if (
      matrix[i].slice(1, c).toString() ==
      matrix[i - 1].slice(0, c - 1).toString()
    )
      continue;
    else return false;
  }
  return true;
};
console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
console.log([1, 2].toString() == [1, 2].toString());
