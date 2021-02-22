/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  let B = [...A];
  if (A.length <= 1) return 0;
  A.sort((a, b) => a - b);
  let res = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) continue;
    else {
      res++;
      A[i]++;
      i--;
    }
  }
  return res;
};
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
