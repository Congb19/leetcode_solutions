/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  let l = A.length;
  let B;
  for (let i = 0; i < l; i++) {
    A[i].reverse();
    A[i].forEach((value, index) => {
      if (value == 1) A[i][index] = 0;
      else A[i][index] = 1;
    })
  }
  return A;
};
console.log(
	flipAndInvertImage([
		[1, 1, 0],
		[1, 0, 1],
		[0, 0, 0],
	])
);