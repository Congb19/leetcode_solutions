/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [...Array()];
  let n = s.length;
  let res = 0;
  let flag = 1; //1 ���� 0 ����
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) !== " ") {
      if (s.charAt(i) >= "0" && s.charAt(i) <= "9") {
        if (stack.length === 0) {
          // console.log("push", s.charAt(i));
          stack.push(s.charAt(i));
        } else if (flag === 1) {
          stack[stack.length - 1] = stack[stack.length - 1] + s.charAt(i);
        } else {
          // console.log("push", s.charAt(i));
          stack.push(s.charAt(i));
        }
        flag = 1;
      } else {
        // console.log("push", s.charAt(i));
        stack.push(s.charAt(i));
        flag = 0;
      }
    }
  }
  // console.log(stack);
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "*") {
      stack[i - 1] = (
        parseInt(stack[i - 1]) * parseInt(stack[i + 1])
      ).toString();
      stack.splice(i, 2);
      i--;
    } else if (stack[i] === "/") {
      stack[i - 1] = Math.floor(
        parseInt(stack[i - 1]) / parseInt(stack[i + 1])
      ).toString();
      stack.splice(i, 2);
      i--;
    }
  }
  // console.log(stack);
  while (stack.length > 0) {
    if (stack.length === 1 || stack[stack.length - 2] === "+") {
      res += parseInt(stack[stack.length - 1]);
      if (stack.length === 1) {
        stack.pop();
      } else {
        stack.pop();
        stack.pop();
      }
    } else if (stack[stack.length - 2] === "-") {
      res -= parseInt(stack[stack.length - 1]);
      stack.pop();
      stack.pop();
    }
  }
  return res;
};

let s = "111+999/111+999";
console.log(calculate(s));
