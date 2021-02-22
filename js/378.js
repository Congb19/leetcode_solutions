function HashMap() {
  this.map = {};
}
HashMap.prototype = {
  put: function (key, value) {
    // ��Map������Ԫ�أ�key, value)
    this.map[key] = value;
  },
  get: function (key) {
    //��ȡָ��Key��Ԫ��ֵValue��ʧ�ܷ���Null
    if (this.map.hasOwnProperty(key)) {
      return this.map[key];
    }
    return null;
  },
  set: function (key, value) {
    if (this.map.hasOwnProperty(key)) {
      this.map[key] = value;
    } else {
      this.map.put(key, value);
    }
  },
  remove: function (key) {
    // ɾ��ָ��Key��Ԫ�أ��ɹ�����True��ʧ�ܷ���False
    if (this.map.hasOwnProperty(key)) {
      return delete this.map[key];
    }
    return false;
  },
  removeAll: function () {
    //���HashMap����Ԫ��
    this.map = {};
  },
  keySet: function () {
    //��ȡMap������KEY�����飨Array��
    var _keys = [];
    for (var i in this.map) {
      _keys.push(i);
    }
    return _keys;
  },
  show: function () {
    console.log(this.map);
  },
};
HashMap.prototype.constructor = HashMap;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  let res = [...Array()];
  if (nums.length === 0) return res;

  //����ģ��hash
  // let max = nums[0], min = nums[0];
  // nums.forEach(function (value, index, array) {
  //     if (value>max) max=value;
  //     if (value<min) min=value;
  // })
  // let arr = [...Array(max-min+1)].map(()=>0);
  // nums.forEach(function (value, index, array) {
  //     arr[value-min]++;
  // })
  // // console.log(arr);
  // while (k) {
  //     let max=arr[0];
  //     let maxid=0;
  //     for (let i = arr.length-1; i >= 0; i--) {
  //         if (arr[i]>max) {
  //             maxid=i;
  //             max=arr[i];
  //         }
  //     }
  //     res.push(maxid+min);
  //     arr[maxid]=0;
  //     maxid=0;
  //     max=arr[0];
  //     k--;
  // }

  //��hash
  let hash = new HashMap();
  nums.forEach(function (value, index, array) {
    if (hash.get(value) == null) {
      hash.put(value, 1);
    } else {
      hash.set(value, hash.get(value) + 1);
    }
  });
  // hash.show();
  while (k) {
    let maxkey = nums[0];
    let maxval = 0;
    for (let i = 0; i < nums.length; i++) {
      if (hash.get(nums[i]) && hash.get(nums[i]) > maxval) {
        maxval = hash.get(nums[i]);
        maxkey = nums[i];
      }
    }
    // nums.forEach(function (value, index, array) {
    //     if (hash.get(value)&&hash.get(value)>maxval) {
    //         maxval = hash.get(value);
    //         maxkey = value;
    //     }
    // })
    res.push(maxkey);
    hash.remove(maxkey);
    maxkey = nums[0];
    maxval = 0;
    k--;
  }
  return res;
};
console.log(
  topKFrequent(
    [
      3,
      2,
      3,
      1,
      2,
      4,
      5,
      5,
      6,
      7,
      7,
      8,
      2,
      3,
      1,
      1,
      1,
      10,
      11,
      5,
      6,
      2,
      4,
      7,
      8,
      5,
      6,
    ],
    10
  )
);
