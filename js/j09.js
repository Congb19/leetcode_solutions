var CQueue = function () {
  this.length = 0;
  this.body = [...Array()];
  this.stack = [...Array()];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.body.push(value);
  this.length++;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  //1 队列方法
  // if (this.length > 0) {
  // 	this.length--;
  // 	return this.body.shift();
  // } else {
  // 	return -1;
  // }
  //2 栈方法，也就是不用shift
  if (this.length > 0) {
    this.length--;
    while (this.body.length) {
      this.stack.push(this.body.pop());
    }
    let res = this.stack.pop();
    while (this.stack.length) {
      this.body.push(this.stack.pop());
    }
    return res;
  } else {
    return -1;
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
