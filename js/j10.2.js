/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  //1 递归 超时
  // let res = fib(n - 1) + fib(n - 2);
  // if (res > 1000000007) res -= 1000000007;
  // return res;
  //2 存数组
  let a = [...Array(n + 1)];
  a[0] = 1;
  a[1] = 1;
  a[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    a[i] = a[i - 1] + a[i - 2];
    if (a[i] > 1000000007) a[i] -= 1000000007;
  }
  // console.log(a);
  return a[n];
};
console.log(numWays(2));
