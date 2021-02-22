var MaxQueue = function () {
  this.q = new Array();
  this.m = new Array();
  // this.mvalue=Number.MIN_VALUE;
  // this.mid=-1;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.m.length === 0) return -1;
  // return this.mvalue;
  return this.m[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.q.push(value);
  // if (value>this.mvalue||this.q.length===1) {
  //     this.mid=this.q.length-1;
  //     this.mvalue=value;
  // }
  while (this.m.length !== 0 && this.m[this.m.length - 1] < value) {
    this.m.pop();
  }
  this.m.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.q.length === 0) return -1;
  // else if (this.q.length===1) {
  //     let tmp=this.q[0];
  //     this.q.shift();
  //     this.mvalue=Number.MIN_VALUE;
  //     this.mid=-1;
  //     return tmp;
  // }
  // else if (this.mid===0) {
  //     let tmp=this.q[0];
  //     this.q.shift();
  //     this.mid=0;
  //     this.mvalue=this.q[0];
  //     for (let i=1;i<this.q.length;i++) {
  //         if ( this.q[i]>this.mvalue) {
  //             this.mvalue=this.q[i];
  //             this.mid=i;
  //         }
  //     }
  //     return tmp;
  // }
  // else {
  //     let tmp=this.q[0];
  //     this.q.shift();
  //     return tmp;
  // }
  let tmp = this.q[0];
  this.q.shift();
  if (tmp === this.m[0]) {
    this.m.shift();
  }
  return tmp;
};

// Your MaxQueue object will be instantiated and called as such:
var obj = new MaxQueue();
obj.push_back(4);
obj.push_back(3);
obj.push_back(2);
var param_3 = obj.pop_front();
var param_1 = obj.max_value();
console.log(obj.q, param_1);
// obj.push_back(3)

// let nums=[2,1,5,6,2,3];
// console.log(largestRectangleArea(nums));
