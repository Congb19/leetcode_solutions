/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let res = 0;
  let n = A.length;
  if (n < 1) return 0;
  let map = new Map();
  map.set(0, 1);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += A[i];
    let m = ((sum % K) + K) % K;
    // console.log(sum, K, m);
    if (map.get(m) > 0) {
      res += map.get(m);
      map.set(m, map.get(m) + 1);
    } else map.set(m, 1);
  }
  // console.log(map);
  return res;
};
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
