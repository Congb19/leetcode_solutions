/**
 * @param {string} s
 * @return {number}
 */
function HashMap() {
    this.map = {};
}
HashMap.prototype = {
    put: function (key, value) {// 向Map中增加元素（key, value)
        this.map[key] = value;
    },
    get: function (key) { //获取指定Key的元素值Value，失败返回Null
        if (this.map.hasOwnProperty(key)) {
            return this.map[key];
        }
        return null;
    },
    set: function (key, value) {
        if (this.map.hasOwnProperty(key)) {
            this.map[key]=value;
        }
        else {
            this.put(key, value);
        }
    },
    remove: function (key) { // 删除指定Key的元素，成功返回True，失败返回False
        if (this.map.hasOwnProperty(key)) {
            return delete this.map[key];
        }
        return false;
    },
    removeAll: function () {  //清空HashMap所有元素
        this.map = {};
    },
    keySet: function () { //获取Map中所有KEY的数组（Array）
        var _keys = [];
        for (var i in this.map) {
            _keys.push(i);
        }
        return _keys;
    },
    show: function () {
        console.log(this.map);
    }
};
HashMap.prototype.constructor = HashMap;

var longestPalindrome = function(s) {
    let res=0;
    if (s.length===0) return 0;
    let n=s.length;

    // hash贪心
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

    //数组模拟hash贪心
    let hash = [...Array(130)].map(()=>0);
    for (let i = 0; i < n; i++) {
        hash[s.charCodeAt(i)]++;
    }
    let maxj=0, maxjid=0;
    hash.forEach(function (value, index, array) {
        if (value%2===1) {
            if (maxj < value) {
                maxj=value;
                maxjid=index;
            }
        }
    });
    if (maxj===0) {
        hash.forEach(function (value, index, array) {
            res+=value;
        });
    }
    else {
        hash.forEach(function (value, index, array) {
            if (value % 2 === 0) res+=value;
            else res+=Math.floor(value/2)*2;
        });
        res+=1;
    }
    return res;
};
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));