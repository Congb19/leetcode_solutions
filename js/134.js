/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // ���Aվ���ܵ�Bվ����ôA��B֮�䵽�κ�һ��վ�����ܵ�Bվ�����Դ�Bվ������ʼ�ͺ���
  let n = gas.length;
  let rest = [...Array(n)].map(() => 0);
  for (let i = 0; i < n; i++) {
    rest[i] = gas[i] - cost[i];
  }
  // console.log(rest);
  let g = 0;
  for (let i = 0; i < n; i++) {
    let flag = true;
    if (rest[i] >= 0) {
      let p = 0;
      for (let j = i; j < i + n; j++) {
        g += rest[j % n];
        if (g < 0) {
          flag = false;
          p = j;
          break;
        }
      }
      if (flag) return i;
      else {
        i = p;
        g = 0;
      }
    }
  }
  return -1;
};

let gas = [1, 2, 3, 4, 5, 5, 70],
  cost = [2, 3, 4, 3, 9, 6, 2];
console.log(canCompleteCircuit(gas, cost));
