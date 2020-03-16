function HashMap() {
    this.map = {};
}
HashMap.prototype = {
    put: function (key, value) {// ��Map������Ԫ�أ�key, value) 
        this.map[key] = value;
    },
    get: function (key) { //��ȡָ��Key��Ԫ��ֵValue��ʧ�ܷ���Null 
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
    remove: function (key) { // ɾ��ָ��Key��Ԫ�أ��ɹ�����True��ʧ�ܷ���False
        if (this.map.hasOwnProperty(key)) {
            return delete this.map[key];
        }
        return false;
    },
    removeAll: function () {  //���HashMap����Ԫ��
        this.map = {};
    },
    keySet: function () { //��ȡMap������KEY�����飨Array�� 
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