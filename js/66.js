/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //˼·1 ����ת��+1
  // var res="";
  // for (var i=0; i<digits.length; i++) {
  //     res+=digits[i];
  // }
  // var intres = parseInt(res)+1;
  //
  // console.log(intres);
  // var length = intres.toString().length;
  // var arr1 = new Array();
  // for (var i=0; i<length; i++) {
  //     arr1[i]=intres%10;
  //     intres/=10;
  //     intres=Math.floor(intres);
  // }
  // console.log(arr1);
  // var arr2 = new Array();
  // for (var i=0; i<length; i++) {
  //     arr2[i]=arr1[length-1-i];
  // }
  // return arr2;
  //˼·2 ����ֱ�Ӳ��� �ų�һ��ȫ9�����
  var length = digits.length;
  var flag = true;
  for (var i = 0; i < length; i++) {
    if (digits[i] != 9) {
      flag = false;
    }
  }
  if (flag) {
    var res = new Array();
    res[0] = 1;
    for (var i = 0; i < length; i++) {
      res[i + 1] = 0;
    }
    return res;
  } else {
    digits[length - 1]++;
    for (var i = 0; i < length; i++) {
      if (digits[length - 1 - i] == 10) {
        digits[length - 1 - i] = 0;
        digits[length - 2 - i]++;
      }
    }
    return digits;
  }
};

var nums = [9, 9, 9];
console.log(plusOne(nums));
// console.log("test ", -2147483648<=1);
