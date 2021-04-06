/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  // const compare = (arr1, arr2) => {
  //   if (arr1.length !== arr2.length) return false;
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) return false;
  //   }
  //   return true;
  // }
  // 二维数组去重
  const qc = (matrix) => {
    let obj = {};
    matrix.forEach(item => {
      item.sort();
      !obj[item.toString()] && (obj[item.toString()] = item);
    });
    return Object.values(obj);
  }
  const dd = (arr) => {
    let l = arr.length;
    res.push(arr);
    if (l == 1) {
      // res.push([arr[0]]);
      // return;
    }
    else {
      // res.push([arr[0]]);
      // res.push([arr[l - 1]]);
      for (let i = 0; i < l; i++) {
        let tmp = [...arr];
        tmp.splice(i, 1);
        dd(tmp);
      }
      // dd(arr.slice(0, l - 1));
      // dd(arr.slice(1, l));
    }
  }
  dd(nums);
  res.push([]);
  return qc(res);
};
console.log(subsetsWithDup([4, 4, 4, 1, 4]));