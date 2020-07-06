/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.max = capacity;
	this.minkey = 0; //如果要删，删哪个
	this.map = new Map();
	this.use = new Map(); //删除的优先级
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	// console.log("to get", key);
	if (this.map.has(key)) {
		for (let item of this.use.entries()) {
			this.use.set(item[0], item[1] + 1);
		}
		this.use.set(key, 0);
		this.update();
		// console.log("getted");
		return this.map.get(key);
	} else {
		// console.log("nogetted");
		return -1;
	}
};
//update 更新minkey
LRUCache.prototype.update = function () {
	// console.log("before update", this.minkey);
	for (let item of this.use.entries()) {
		if (!this.use.has(this.minkey) || this.use.get(this.minkey) < item[1]) {
			this.minkey = item[0];
		}
	}
	// console.log("after updated", this.minkey);
};
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	// console.log("to put", key);
	this.update();
	if (this.map.size < this.max) {
	} else if (this.map.has(key)) {
	} else {
		// console.log("delete! ", this.minkey);
		this.map.delete(this.minkey);
		this.use.delete(this.minkey);
	}
	for (let item of this.use.entries()) {
		this.use.set(item[0], item[1] + 1);
	}
	this.use.set(key, 0);
	this.map.set(key, value);
	// console.log("putted");
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回  3
console.log(cache.get(4)); // 返回  4
