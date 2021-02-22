/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.body = [...Array()];
    this.mins = [...Array()];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.mins.length == 0 || x <= this.mins[this.mins.length - 1])
      this.mins.push(x);
    this.body.push(x);
    console.log("pushed", x, this.body, this.mins);
  }
  /**
   * @return {void}
   */
  pop() {
    let t = this.body.pop();
    if (this.mins[this.mins.length - 1] == t) this.mins.pop();
    console.log("poped", t, this.body, this.mins);
  }
  /**
   * @return {number}
   */
  top() {
    console.log(this.body, this.mins);
    return this.body[this.body.length - 1];
  }
  /**
   * @return {number}
   */
  min() {
    console.log(this.body, this.mins);
    return this.mins[this.mins.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
