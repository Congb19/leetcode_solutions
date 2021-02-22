/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // console.log(matrix.length);
  let res = new Array();
  if (matrix.length === 0) return res;
  let n1 = matrix.length,
    n2 = matrix[0].length;
  let n = n1 * n2;
  let test = new Array();
  for (let i = 0; i < matrix.length; i++) {
    test[i] = new Array();
    for (let j = 0; j < matrix[0].length; j++) {
      test[i][j] = "x";
    }
  }
  let flag = 0;
  if (matrix[0].length === 1) flag = 1;
  let i = 0,
    j = 0;
  let p = 0;
  while (p < n) {
    //store
    if (test[i][j] === "x") {
      // console.log(p, "got");
      res[p] = matrix[i][j];
      p++;
      test[i][j] = "y";
    }
    //turn
    if (flag % 4 === 0) {
      if (j + 1 >= matrix[0].length - 1 || test[i][j + 2] === "y") flag++;
      j++;
    } else if (flag % 4 === 1) {
      if (i + 1 >= matrix.length - 1 || test[i + 2][j] === "y") flag++;
      i++;
    } else if (flag % 4 === 2) {
      if (j - 1 <= 0 || test[i][j - 2] === "y") flag++;
      j--;
    } else {
      if (i - 1 <= 0 || test[i - 2][j] === "y") flag++;
      i--;
    }
  }
  // console.log(res);
  return res;
};
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));
