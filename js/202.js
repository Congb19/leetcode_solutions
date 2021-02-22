/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  //˼·1 ���Ͻⷨ
  // let seen = new Array();
  // seen[0] = 1;
  // let flag = true;
  // while (flag) {
  // 	seen[seen.length] = n;
  // 	//go
  // 	let sum = 0;
  // 	while (n > 0) {
  // 		sum += (n % 10) * (n % 10);
  // 		n = Math.floor(n / 10);
  // 	}
  // 	n = sum;
  // 	//test
  // 	for (let i = 0; i < seen.length; i++) {
  // 		if (seen[i] === n) {
  // 			flag = false;
  // 		}
  // 	}
  // }
  // return n === 1;
  //˼·2 ����ָ��
  let p1 = n,
    p2 = n;
  while (p1 !== 1 && p2 !== 1) {
    let sum = 0;
    let n1 = p1,
      n2 = p2;
    while (n1 > 0) {
      sum += (n1 % 10) * (n1 % 10);
      n1 = Math.floor(n1 / 10);
    }
    p1 = sum;
    sum = 0;
    while (n2 > 0) {
      sum += (n2 % 10) * (n2 % 10);
      n2 = Math.floor(n2 / 10);
    }
    p2 = sum;
    n2 = p2;
    sum = 0;
    while (n2 > 0) {
      sum += (n2 % 10) * (n2 % 10);
      n2 = Math.floor(n2 / 10);
    }
    p2 = sum;
    // console.log(p1, p2);
    if (p1 === p2) break;
  }
  if (p1 === 1 || p2 === 1) return true;
  else return false;
};

// class Solution:
// def isHappy(self, n: int) -> bool:
//     seen = {1}
// while n not in seen:
// seen.add(n)
// n = sum(int(i) ** 2 for i in str(n))
// return n == 1

let k = 19;

console.log(isHappy(k));
