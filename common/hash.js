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
            this.map.put(key, value);
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