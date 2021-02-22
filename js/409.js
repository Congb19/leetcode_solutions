/**
 * @param {string} s
 * @return {number}
 */
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
      this.put(key, value);
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

var longestPalindrome = function (s) {
  let res = 0;
  if (s.length === 0) return 0;
  let n = s.length;

  // hash̰��
  // let hash=new HashMap();
  // for (let i = 0; i < n; i++) {
  //     if (hash.get(s.charAt(i)) !== null) {
  //         // console.log(1);
  //         hash.set(s.charAt(i), hash.get(s.charAt(i))+1);
  //     }
  //     else {
  //         // console.log(2);
  //         hash.set(s.charAt(i), 1);
  //     }
  // }
  // // hash.show();
  // let keys = hash.keySet();
  // let maxj = 0;
  // keys.forEach(function (value, index, array) {
  //     if (hash.get(value)%2===1) maxj=maxj>hash.get(value)?maxj:hash.get(value);
  // });
  // keys.forEach(function (value, index, array) {
  //     if (hash.get(value)%2===0) res+=hash.get(value);
  //     else res+=Math.floor(hash.get(value)/2)*2;
  // });
  // if (maxj>0) res++;

  //����ģ��hash̰��
  let hash = [...Array(130)].map(() => 0);
  for (let i = 0; i < n; i++) {
    hash[s.charCodeAt(i)]++;
  }
  let maxj = 0,
    maxjid = 0;
  hash.forEach(function (value, index, array) {
    if (value % 2 === 1) {
      if (maxj < value) {
        maxj = value;
        maxjid = index;
      }
    }
  });
  if (maxj === 0) {
    hash.forEach(function (value, index, array) {
      res += value;
    });
  } else {
    hash.forEach(function (value, index, array) {
      if (value % 2 === 0) res += value;
      else res += Math.floor(value / 2) * 2;
    });
    res += 1;
  }
  return res;
};
console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
