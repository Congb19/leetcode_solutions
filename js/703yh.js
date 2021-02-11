/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
	this.t1 = [];
	this.t2 = [];
	this.k = k;
	for (let i = 0; i < nums.length; i++) {
		this.add(nums[i]);
	}
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
	while (this.t1.length > 0 && val < this.t1[this.t1.length - 1]) {
		this.t2.push(this.t1.pop());
	}
	this.t1.push(val);
	while (this.t2.length > 0) {
		this.t1.push(this.t2.pop());
	}
	return this.t1[this.t1.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// var obj = new KthLargest(k, nums)
// var param_1 = obj.add(val)
