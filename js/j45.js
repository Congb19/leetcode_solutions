/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  let fn = (a, b) => {
    let sa = a.toString();
    let sb = b.toString();
    //666
    if (sa + sb > sb + sa) return 1;
    else return -1;
    //硬写，卡在218/222
    let i = 0;
    while (i < sa.length && i < sb.length) {
      if (sa.charAt(i) < sb.charAt(i)) return -1;
      else if (sa.charAt(i) > sb.charAt(i)) return 1;
      else i++;
    }
    let j = i;
    while (i < sa.length) {
      if (sa.charAt(i) < sb.charAt(sb.length - 1)) return -1;
      else return 1;
      i++;
    }
    while (j < sb.length) {
      if (sb.charAt(i) < sa.charAt(sa.length - 1)) return 1;
      else return -1;
      j++;
    }
    return 1;
  };
  nums.sort(fn);
  return nums.join("");
};
console.log(minNumber([3, 30, 34, 5, 9]));
